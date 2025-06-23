import React from 'react';

// --- Icon Components ---
const IconPaperPlane: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.999 12zm0 0h7.5" />
  </svg>
);

const IconRocket: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-7.38 5.84m0 0a6 6 0 01-5.84-7.38m5.84 7.38v-4.82m0 0a6 6 0 005.84-7.38m-5.84 7.38l-7.38-5.84m7.38 5.84l5.84-7.38z" />
  </svg>
);

const IconShare: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.195.04.396.074.599.096m0 0c.324.053.655.086.993.109m2.195-2.302a2.25 2.25 0 100 2.186m0-2.186c-.195.04-.396.074-.599.096m0 0c-.324.053-.655.086-.993.109m-2.195 2.302a2.25 2.25 0 100-2.186m0-2.186c.195.04.396.074.599.096m0 0c.324.053.655.086.993.109M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconBuilding: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6m-6 3.75h6m-6 3.75h6m-6 3.75h6M4.5 21v-3.375c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const IconMegaphone: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94a.75.75 0 01.437.662l.144 2.886a.75.75 0 001.434 0l.144-2.886a.75.75 0 01.437-.662M19.5 21a2.25 2.25 0 002.25-2.25v-3.839a2.25 2.25 0 00-.755-1.705a3 3 0 00-4.08-1.55M4.5 21L3 21M4.5 21a2.25 2.25 0 01-2.25-2.25v-3.839a2.25 2.25 0 01.755-1.705a3 3 0 014.08-1.55m0 0c-.39.33-.824.62-1.28.868M10.8 13.5c-.39.33-.824.62-1.28.868m0 0c.408.262.847.485 1.32.659m1.283-4.665a3.75 3.75 0 015.429 0M12.75 16.551a3.75 3.75 0 00-5.429 0" />
  </svg>
);

const IconScales: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.286-1.047a2.25 2.25 0 00-2.023-4.062l-2.286 1.047m0 0a48.412 48.412 0 00-3-3.142M9 4.125M9 4.125a48.412 48.412 0 00-3 3.142m0 0l-2.286 1.047a2.25 2.25 0 00-2.023 4.062l2.286-1.047M15 15.75l-.653-.553A2.25 2.25 0 0012.75 14.5H11.25a2.25 2.25 0 00-1.598.697L9 15.75M15 15.75l2.25 2.25M9 15.75l-2.25 2.25M15 15.75l2.25 2.25M9 15.75l-2.25 2.25M15 15.75l2.25 2.25M9 15.75l-2.25 2.25" />
  </svg>
);

const IconChatBubble: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const IconLock: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const IconCheckCircle: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Automation Data ---
interface Automation {
  id: string;
  tag: string;
  name: string;
  icon: React.ReactNode;
  unlocked: boolean;
  isFeatured: boolean;
  isMainProduct?: boolean;
}

const automations: Automation[] = [
  { id: "robo01", tag: "ROBÔ 01", name: "Estrategista de Email Marketing", icon: <IconPaperPlane />, unlocked: true, isFeatured: true, isMainProduct: true },
  { id: "robo02", tag: "ROBÔ 02", name: "Caçador de Leads Qualificados", icon: <IconRocket />, unlocked: false, isFeatured: true },
  { id: "robo04", tag: "ROBÔ 04", name: "Guru de Mídias Sociais", icon: <IconShare />, unlocked: false, isFeatured: true },
  { id: "robo05", tag: "ROBÔ 05", name: "Assistente de Hotelaria Inteligente", icon: <IconBuilding />, unlocked: false, isFeatured: true },
  { id: "robo06", tag: "ROBÔ 06", name: "Aliado do Corretor Moderno", icon: <IconMegaphone />, unlocked: false, isFeatured: true },
  { id: "robo07", tag: "ROBÔ 07", name: "Jurista Digital Automatizado", icon: <IconScales />, unlocked: false, isFeatured: true },
  { id: "robo03", tag: "ROBÔ 03", name: "Mestre da Comunicação WhatsApp", icon: <IconChatBubble />, unlocked: false, isFeatured: false },
];

// --- Automation Card Component ---
const AutomationCard: React.FC<{ automation: Automation }> = ({ automation }) => {
  let cardClasses = "bg-secondary-800 rounded-lg p-6 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative flex flex-col items-center justify-between min-h-[280px]";
  if (automation.isMainProduct) {
    cardClasses += " border-2 border-green-500 ring-2 ring-green-500 ring-offset-2 ring-offset-secondary-900";
  }

  return (
    <div className={cardClasses}>
      <div className="absolute top-4 left-4 px-2.5 py-1 text-xs font-bold bg-blue-600 text-white rounded-full shadow-md">
        {automation.tag}
      </div>
      <div className="absolute top-4 right-4">
        {automation.unlocked ? (
          <IconCheckCircle className="w-6 h-6 text-green-400" />
        ) : (
          <IconLock className="w-6 h-6 text-yellow-400" />
        )}
      </div>
      <div className="flex-grow flex flex-col justify-center items-center pt-12 pb-4">
        <div className="text-secondary-400 mb-4">{automation.icon}</div>
        <h3 className="text-center font-semibold text-secondary-100 text-base leading-tight">
          {automation.name}
        </h3>
      </div>
      {/* Placeholder for a button or more info if needed in the future */}
      {/* <Button variant="primary" size="sm" className="w-full mt-auto">Acessar</Button> */}
    </div>
  );
};


// --- Main View Component ---
const SmartAutomationsView: React.FC = () => {
  const featuredAutomations = automations.filter(a => a.isFeatured);
  const otherAutomations = automations.filter(a => !a.isFeatured);

  return (
    <div className="bg-secondary-900 text-secondary-100 min-h-full p-4 md:p-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 pb-2 border-b-2 border-blue-500/30 inline-block">
          Em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredAutomations.map(automation => (
            <AutomationCard key={automation.id} automation={automation} />
          ))}
        </div>
      </section>

      {otherAutomations.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-blue-400 mb-6 pb-2 border-b-2 border-blue-500/30 inline-block">
            Nossos Robôs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {otherAutomations.map(automation => (
              <AutomationCard key={automation.id} automation={automation} />
            ))}
          </div>
        </section>
      )}
       <div className="mt-12 text-center text-secondary-500 text-sm">
          <p>Explore nossas automações inteligentes e transforme sua produtividade.</p>
          <p>Novos robôs e funcionalidades são adicionados regularmente.</p>
      </div>
    </div>
  );
};

export default SmartAutomationsView;
