// ui
import { ScrollArea } from "@/components/ui/scroll-area"
// chat components
import ChatHeader from "./chat-components/chat-header"
import ChatBody from "./chat-components/chat-body"
import ChatFooter from "./chat-components/chat-footer"
// react
import { useState } from "react";


type Message = {
  id: string;
  from: "bot" | "user";
  text: string;        // texte actuel (partiel pendant la saisie)
  fullText?: string;   // texte complet (utilisé pour savoir quand terminer)
  typing?: boolean;    // si en cours de saisie
};

export default function Chat() {

  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  // helper : simulate "typing" du bot caractère-par-caractère
  const typeBotMessage = async (fullText: string) => {
    const id = Date.now().toString();
    // ajouter message vide en mode typing
    setMessages(prev => [...prev, { id, from: "bot", text: "", fullText, typing: true }]);

    // boucle asynchrone qui ajoute un caractère à la fois
    let i = 0;
    while (i < fullText.length) {
      // ajouter prochain caractère
      i += 1;
      const nextSlice = fullText.slice(0, i);
      setMessages(prev => prev.map(m => (m.id === id ? { ...m, text: nextSlice } : m)));

      // delay adaptatif : petit pause après les points/virgules/etc.
      const ch = fullText[i - 1];
      let delay = 20; // base ms par caractère
      if (ch === "." || ch === "!" || ch === "?") delay = 200;
      else if (ch === "," || ch === ";") delay = 80;
      else if (ch === " ") delay = 8; // espace rapide
      // await
      // eslint-disable-next-line no-await-in-loop
      await new Promise(res => setTimeout(res, delay));
    }

    // fin de la saisie : enlever flag typing
    setMessages(prev => prev.map(m => (m.id === id ? { ...m, typing: false } : m)));
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // ajouter message user immédiatement
    setMessages(prev => [...prev, { id: Date.now().toString(), from: "user", text }]);
    setInput(""); // reset du champ
    setIsThinking(true);

    try {
      const response = await fetch(
        "https://n8n-latest-7wg9.onrender.com/webhook/104ac525-8849-4694-96d3-89bfba1d2401",
        
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text })
        }
      );

      const data = await response.json();
      const botText = (data && data.response) ? data.response : "No response";

      // on arrête l'indicateur "thinking" à partir du moment où on commence à taper la réponse
      setIsThinking(false);

      // lancer animation de typing (attend jusqu'à ce que ce soit fini)
      await typeBotMessage(botText);

    } catch (err) {
      // si erreur, ajouter message d'erreur (pas d'animation)
      setIsThinking(false);
      setMessages(prev => [...prev, { id: Date.now().toString(), from: "bot", text: "Oops! Something went wrong." }]);
    }  
  };


  return (
  <div className="flex flex-col h-full min-h-0">
    {/* Header */}
    <div className="w-full max-w-4xl mx-auto px-4 py-3 flex-shrink-0">
      <ChatHeader />
    </div>

    {/* Body scrollable (full width for proper scrollbar) */}
    <ScrollArea className="flex-1 min-h-0 w-full">
      <div className="w-full max-w-4xl mx-auto px-4">
        <ChatBody messages={messages} isThinking={isThinking} />
      </div>
    </ScrollArea>

    {/* Footer */}
    <div className="w-full max-w-4xl mx-auto px-4 py-3 flex-shrink-0">
      <ChatFooter message={input} setMessage={setInput} onSend={handleSend} />
    </div>
  </div>
)
}
