
import React, { useMemo } from 'react';
import { Quote, Client, QuoteStatus, InstallationProgressStatus, Product, AppView, QuoteListChartFilter, ManualTransaction } from '../types';
import Button from './common/Button'; // Import Button for Automações Rápidas

// Define icons for Automações Rápidas (Heroicons examples)
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>;
// const ListBulletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>; // Nova Tarefa Rápida button removed
const DocumentPlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9.75h.008v.008h-.008v-.008zm0 0H12m0 0h.008v.008h-.008V12m0 0v2.25m0-2.25H9.75m-4.875 0A2.25 2.25 0 015.25 9.75h13.5A2.25 2.25 0 0121 12m-15.75 0+2.25A2.25 2.25 0 005.25 9.75h13.5A2.25 2.25 0 0018.75 12m0-4.5v6.375m0-6.375a2.25 2.25 0 012.25 2.25v6.375a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5z" /></svg>;
const ClipboardDocumentListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>;
const CalculatorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalendarDaysIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" /></svg>;


interface MainDashboardViewProps {
  quotes: Quote[];
  clients: Client[];
  products: Product[];
  manualTransactions: ManualTransaction[]; // Added for payables schedule
  userPoints: number;
  onNavigateWithFilter: (view: AppView, filter?: QuoteListChartFilter) => void;
  onStartFloatingPomodoro: () => void;
  onCreateNewQuote: () => void;
  onOpenCalculator: () => void; // Added for calculator
}

const KPICard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; colorClass: string; footerText?: string; onClick?: () => void }> =
({ title, value, icon, colorClass, footerText, onClick }) => (
  <div
    className={`p-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 ${colorClass} text-white ${onClick ? 'cursor-pointer' : ''}`}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
    aria-label={`${title}: ${value}`}
  >
    <div className="flex justify-between items-center mb-2">
      <div className="text-3xl opacity-80">{icon}</div>
      <div className="text-right">
        <p className="text-4xl font-bold">{value}</p>
        <p className="text-sm uppercase tracking-wide opacity-90">{title}</p>
      </div>
    </div>
    {footerText && <p className="text-xs opacity-70 mt-3">{footerText}</p>}
  </div>
);


const MainDashboardView: React.FC<MainDashboardViewProps> = ({
  quotes,
  clients,
  products,
  manualTransactions,
  userPoints,
  onNavigateWithFilter,
  onStartFloatingPomodoro,
  onCreateNewQuote,
  onOpenCalculator,
}) => {

  const openQuotesCount = useMemo(() =>
    quotes.filter(q => q.status === QuoteStatus.PENDING || q.status === QuoteStatus.DRAFT).length
  , [quotes]);

  const approvedQuotesCount = useMemo(() =>
    quotes.filter(q => q.status === QuoteStatus.APPROVED).length
  , [quotes]);

  const completedInstallationsCount = useMemo(() =>
    quotes.filter(q => q.installationProgress === InstallationProgressStatus.COMPLETED).length
  , [quotes]);

  const totalRelevantQuotes = useMemo(() =>
    quotes.filter(q => q.status !== QuoteStatus.DRAFT && q.status !== QuoteStatus.CANCELED).length
  , [quotes]);

  const overallProgress = useMemo(() => {
    if (totalRelevantQuotes === 0) return 0;
    const uniqueRelevantQuotes = new Set<string>();
    quotes.forEach(q => {
        if (q.status === QuoteStatus.APPROVED) uniqueRelevantQuotes.add(q.id);
        if (q.installationProgress === InstallationProgressStatus.COMPLETED) uniqueRelevantQuotes.add(q.id);
    });
    const actuallyCompletedOrApprovedRelevant = quotes.filter(q =>
        uniqueRelevantQuotes.has(q.id) && q.status !== QuoteStatus.DRAFT && q.status !== QuoteStatus.CANCELED
    ).length;
    return (actuallyCompletedOrApprovedRelevant / totalRelevantQuotes) * 100;
  }, [quotes, totalRelevantQuotes]);

  const displayProgress = Math.round(Math.max(0, Math.min(100, overallProgress)));

  const topSellingProducts = useMemo(() => {
    const productRevenueMap = new Map<string, { name: string; revenue: number; quantity: number }>();
    quotes.forEach(quote => {
      if (quote.status === QuoteStatus.APPROVED) {
        quote.items.forEach(item => {
          const productInfo = products.find(p => p.id === item.productId);
          const productName = productInfo?.name || 'Produto Desconhecido';
          const current = productRevenueMap.get(item.productId) || { name: productName, revenue: 0, quantity: 0 };
          current.revenue += item.totalPrice;
          current.quantity += item.quantity;
          productRevenueMap.set(item.productId, current);
        });
      }
    });
    return Array.from(productRevenueMap.values())
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);
  }, [quotes, products]);

  const topQuotesByValue = useMemo(() => {
    return quotes
      .filter(q => q.status === QuoteStatus.APPROVED)
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, 5);
  }, [quotes]);

  const upcomingPayables = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to the start of the day

    return manualTransactions
      .filter(t => t.type === 'expense')
      .map(t => ({ ...t, dueDate: new Date(t.date + "T00:00:00") })) // Add T00:00:00 to ensure local date
      .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()) // Sort by due date ascending
      .filter(t => t.dueDate >= today || (t.dueDate < today && (today.getTime() - t.dueDate.getTime()) <= 7 * 24 * 60 * 60 * 1000) ) // Upcoming or past due within last 7 days
      .slice(0, 3); // Take top 3
  }, [manualTransactions]);

  const formatPayableDate = (date: Date): string => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  };


  return (
    <div className="space-y-6 md:space-y-8">
      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <KPICard 
          title="Orçamentos em Aberto" 
          value={openQuotesCount} 
          icon={<span>📝</span>} 
          colorClass="bg-yellow-500" 
          onClick={() => onNavigateWithFilter('list', { status: QuoteStatus.PENDING })}
        />
        <KPICard 
          title="Orçamentos Aprovados" 
          value={approvedQuotesCount} 
          icon={<span>✅</span>} 
          colorClass="bg-green-500"
          onClick={() => onNavigateWithFilter('list', { status: QuoteStatus.APPROVED })}
        />
        <KPICard 
          title="Instalações Concluídas" 
          value={completedInstallationsCount} 
          icon={<span>🛠️</span>} 
          colorClass="bg-orange-500"
          onClick={() => onNavigateWithFilter('serviceOrderDashboard')}
        />
        <KPICard 
          title="Seus Pontos (XP)" 
          value={userPoints} 
          icon={<span>⭐</span>} 
          colorClass="bg-indigo-500"
          // onClick={() => onNavigateWithFilter('focus')} // Removed navigation to focus view
        />
      </div>

      {/* Progresso Geral de Demandas */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-secondary-700 mb-3">Progresso Geral de Demandas</h3>
        <div className="w-full bg-secondary-200 rounded-full h-6">
          <div
            className="bg-primary-500 h-6 rounded-full text-xs font-medium text-blue-100 text-center p-1 leading-none transition-all duration-500 ease-out"
            style={{ width: `${displayProgress}%` }}
            role="progressbar"
            aria-valuenow={displayProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
           {displayProgress}%
          </div>
        </div>
         <p className="text-xs text-secondary-500 mt-2">Baseado em orçamentos aprovados ou com instalação concluída sobre o total de orçamentos (excluindo rascunhos e cancelados).</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Automações Rápidas & Mini Agenda */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-secondary-700 mb-1 text-center">🚀 Automações Rápidas</h3>
                <p className="text-sm text-secondary-500 mb-4 text-center">Acelere seu dia a dia!</p>
                <div className="space-y-3">
                    <Button 
                        onClick={onStartFloatingPomodoro} 
                        variant="primary" 
                        className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                        leftIcon={<PlayIcon />}
                    >
                        Foco Total! (Pomodoro)
                    </Button>
                    <Button 
                        onClick={onOpenCalculator}
                        variant="secondary" 
                        className="w-full"
                        leftIcon={<CalculatorIcon />}
                    >
                        Calculadora Rápida
                    </Button>
                    {/* <Button 
                        onClick={() => onNavigateWithFilter('focus')}
                        variant="secondary" 
                        className="w-full"
                        leftIcon={<ListBulletIcon />}
                    >
                        Adicionar Tarefa Rápida
                    </Button> */} {/* Removed "Nova Tarefa Rápida" button */}
                    <Button 
                        onClick={onCreateNewQuote}
                        variant="secondary" 
                        className="w-full"
                        leftIcon={<DocumentPlusIcon />}
                    >
                        Criar Novo Orçamento
                    </Button>
                    <Button 
                        onClick={() => onNavigateWithFilter('serviceOrderDashboard')}
                        variant="secondary" 
                        className="w-full"
                        leftIcon={<ClipboardDocumentListIcon />}
                    >
                        Ver Ordens de Serviço
                    </Button>
                </div>
            </div>
            
            <div className="border-t border-secondary-200 pt-6">
                <h3 className="text-lg font-semibold text-secondary-700 mb-1 text-center flex items-center justify-center">
                    <CalendarDaysIcon /> Mini Agenda: Contas a Pagar
                </h3>
                <p className="text-sm text-secondary-500 mb-4 text-center">Próximas despesas e vencidas recentemente.</p>
                {upcomingPayables.length > 0 ? (
                <ul className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {upcomingPayables.map(payable => {
                    const isOverdue = payable.dueDate < new Date() && payable.dueDate.toDateString() !== new Date().toDateString();
                    return (
                        <li key={payable.id} className={`p-2.5 rounded-md border text-xs ${isOverdue ? 'bg-red-50 border-red-200' : 'bg-secondary-50 border-secondary-200'}`}>
                        <div className="flex justify-between items-start">
                            <span className={`font-medium ${isOverdue ? 'text-red-700' : 'text-secondary-700'} truncate mr-2`} title={payable.description}>{payable.description}</span>
                            <span className={`font-semibold ${isOverdue ? 'text-red-600' : 'text-primary-600'}`}>R$ {payable.amount.toFixed(2)}</span>
                        </div>
                        <p className={`text-xxs ${isOverdue ? 'text-red-500' : 'text-secondary-500'}`}>
                            Vencimento: {formatPayableDate(payable.dueDate)} {isOverdue && '(Vencido)'}
                        </p>
                        </li>
                    );
                    })}
                </ul>
                ) : (
                <p className="text-xs text-secondary-500 text-center py-3">Nenhuma conta a pagar próxima ou recentemente vencida.</p>
                )}
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-3 text-primary-600 hover:text-primary-700 text-xs"
                    onClick={() => onNavigateWithFilter('financial')}
                >
                    Ver Todas as Finanças
                </Button>
            </div>
        </div>
        
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Produtos Mais Vendidos (Top 5 por Receita)</h3>
                {topSellingProducts.length > 0 ? (
                    <ul className="space-y-2">
                        {topSellingProducts.map((product, index) => (
                        <li key={product.name} className="flex justify-between items-center p-2 bg-secondary-50 rounded-md text-sm">
                            <span className="font-medium text-secondary-700">{index + 1}. {product.name}</span>
                            <span className="font-semibold text-primary-600">R$ {product.revenue.toFixed(2)}</span>
                        </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-secondary-500">Nenhum produto vendido em orçamentos aprovados ainda.</p>
                )}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Top Orçamentos por Valor (Top 5 Aprovados)</h3>
                 {topQuotesByValue.length > 0 ? (
                    <ul className="space-y-2">
                        {topQuotesByValue.map((quote, index) => (
                        <li key={quote.id} className="flex justify-between items-center p-2 bg-secondary-50 rounded-md text-sm">
                            <div className="flex items-center">
                                <span className="text-secondary-700 mr-2">{index + 1}.</span>
                                <div>
                                    <span className="font-medium text-secondary-700">ID: {quote.id}</span>
                                    <span className="block text-xs text-secondary-500">Cliente: {quote.clientName}</span>
                                </div>
                            </div>
                            <span className="font-semibold text-primary-600">R$ {quote.totalAmount.toFixed(2)}</span>
                        </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-secondary-500">Nenhum orçamento aprovado para exibir.</p>
                )}
            </div>
        </div>
      </div>

    </div>
  );
};

export default MainDashboardView;
