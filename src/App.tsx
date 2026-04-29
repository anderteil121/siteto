import { useState } from 'react';
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  ChevronRight,
  Phone,
  Mail,
  Zap,
  ShieldCheck,
  Globe2,
  Cpu,
  Settings,
  BatteryCharging,
  ArrowRight,
  MapPin,
  Clock,
  Trash2,
  Filter,
  CheckCircle2,
  Home
} from 'lucide-react';
import { motion } from 'motion/react';

type ViewName = 'home' | 'catalog' | 'cart' | 'profile' | 'about' | 'contacts' | 'register' | 'login';

// Sample Data
const CATEGORIES = [
  { id: 1, name: 'Трансформаторы', icon: BatteryCharging, count: 124 },
  { id: 2, name: 'КРУ и Распредустройства', icon: Settings, count: 56 },
  { id: 3, name: 'Промышленные электродвигатели', icon: Zap, count: 312 },
  { id: 4, name: 'ПЛК и Автоматизация', icon: Cpu, count: 89 },
];

const PRODUCTS = [
  {
    id: 'TR-500KVA',
    name: 'Масляный трансформатор ТМГ-500/10/0.4',
    category: 'Трансформаторы',
    power: '500 кВА',
    voltage: '10 / 0.4 кВ',
    price: '345 000 ₽',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Substation_transfomer.jpg/800px-Substation_transfomer.jpg',
    inStock: true,
  },
  {
    id: 'MOT-30KW',
    name: 'Асинхронный двигатель АИР 180 M4',
    category: 'Электродвигатели',
    power: '30 кВт',
    voltage: '380 В',
    price: '42 500 ₽',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/VEM_motor_Wernigerode.png/800px-VEM_motor_Wernigerode.png',
    inStock: true,
  },
  {
    id: 'PLC-S7-1500',
    name: 'Контроллер SIMATIC S7-1500, CPU 1511-1 PN',
    category: 'ПЛК и Автоматизация',
    power: '24 В DC',
    voltage: '24 В',
    price: '185 000 ₽',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg/800px-Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg',
    inStock: false,
  },
  {
    id: 'TR-1000KVA',
    name: 'Сухой трансформатор ТСЗ-1000/10/0.4',
    category: 'Трансформаторы',
    power: '1000 кВА',
    voltage: '10 / 0.4 кВ',
    price: '920 000 ₽',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Small_toroidal_transformer.jpg/800px-Small_toroidal_transformer.jpg',
    inStock: true,
  },
  {
    id: 'INV-45KW',
    name: 'Частотный преобразователь Danfoss VLT',
    category: 'ПЛК и Автоматизация',
    power: '45 кВт',
    voltage: '380 В',
    price: '215 000 ₽',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/20040905_jpower_sakuma_02.jpg',
    inStock: true,
  },
  {
    id: 'SWG-10KV',
    name: 'Ячейка КСО-298',
    category: 'КРУ',
    power: '-',
    voltage: '10 кВ',
    price: '280 000 ₽',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/High-voltage_switchgear_01.jpg/800px-High-voltage_switchgear_01.jpg',
    inStock: false,
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<ViewName>('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setView={setCurrentView} />;
      case 'catalog':
        return <CatalogView />;
      case 'cart':
        return <CartView setView={setCurrentView} />;
      case 'profile':
        return <ProfileView />;
      case 'login':
        return <LoginView setView={setCurrentView} />;
      case 'register':
        return <RegisterView setView={setCurrentView} />;
      case 'about':
        return <AboutView />;
      case 'contacts':
        return <ContactsView />;
      default:
        return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-industrial-50 font-sans selection:bg-primary-500 selection:text-white">
      {/* Top Warning/Info bar */}
      <div className="bg-industrial-900 text-industrial-200 py-2 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} /> +7 (495) 123-45-67
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer hidden sm:flex">
              <Mail size={14} /> sales@energoprom.ru
            </span>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-industrial-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
            >
              <div className="w-10 h-10 bg-industrial-900 flex items-center justify-center rounded group-hover:bg-primary-600 transition-colors">
                <Zap className="text-primary-500 group-hover:text-white transition-colors" size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="font-bold text-xl leading-none text-industrial-900 tracking-tight">ЭНЕРГО<span className="text-primary-500">ПРОМ</span></h1>
                <span className="text-[10px] uppercase tracking-widest text-industrial-500 font-semibold">Оборудование</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Поиск по артикулу или названию..."
                  className="w-full bg-industrial-50 border border-industrial-300 text-industrial-900 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 block pl-4 pr-12 py-2.5 text-sm transition-all outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-industrial-500 hover:text-industrial-900 bg-industrial-100 border-l border-industrial-300 rounded-r transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 text-industrial-600">
              <button 
                onClick={() => setCurrentView('login')}
                className={`flex flex-col items-center gap-1 hover:text-industrial-900 transition-colors ${currentView === 'login' || currentView === 'register' ? 'text-primary-600' : ''}`}
              >
                <User size={22} />
                <span className="text-[10px] font-medium uppercase tracking-wide">Войти</span>
              </button>
              <button 
                onClick={() => setCurrentView('profile')}
                className={`flex flex-col items-center gap-1 hover:text-industrial-900 transition-colors ${currentView === 'profile' ? 'text-primary-600' : ''}`}
              >
                <Home size={22} />
                <span className="text-[10px] font-medium uppercase tracking-wide">Личный кабинет</span>
              </button>
              <button 
                onClick={() => setCurrentView('cart')}
                className={`flex flex-col items-center gap-1 hover:text-primary-600 transition-colors relative ${currentView === 'cart' ? 'text-primary-600' : ''}`}
              >
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-2 bg-primary-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  1
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wide">Корзина</span>
              </button>
              <button className="md:hidden">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Nav / Categories */}
      <div className="bg-white border-b border-industrial-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-8">
            <li 
              onClick={() => setCurrentView('catalog')}
              className={`py-3 items-center flex gap-2 font-medium text-sm transition-colors cursor-pointer px-4 ${currentView === 'catalog' ? 'bg-primary-600 text-white' : 'bg-industrial-900 text-white'}`}
            >
              <Menu size={18} /> Каталог товаров
            </li>
            <li onClick={() => setCurrentView('about')} className="py-3 flex items-center font-medium text-sm text-industrial-700 hover:text-primary-600 cursor-pointer transition-colors">О компании</li>
            <li onClick={() => setCurrentView('contacts')} className="py-3 flex items-center font-medium text-sm text-industrial-700 hover:text-primary-600 cursor-pointer transition-colors">Контакты</li>
          </ul>
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <footer className="bg-industrial-950 text-industrial-400 py-12 lg:py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setCurrentView('home')}>
                <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                  <Zap className="text-industrial-950" size={20} strokeWidth={3} />
                </div>
                <h2 className="font-bold text-xl text-white tracking-tight">ЭНЕРГО<span className="text-primary-500">ПРОМ</span></h2>
              </div>
              <p className="text-sm mb-6 leading-relaxed">Оптовые поставки промышленного электрооборудования для предприятий энергетики, нефтегазовой отрасли и строительства.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={16} /> <span className="text-industrial-200">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={16} /> <span className="text-industrial-200">sales@energoprom.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Каталог</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setCurrentView('catalog')} className="hover:text-white transition-colors">Трансформаторы силовые</button></li>
                <li><button onClick={() => setCurrentView('catalog')} className="hover:text-white transition-colors">Комплектные подстанции (КТП)</button></li>
                <li><button onClick={() => setCurrentView('catalog')} className="hover:text-white transition-colors">Высоковольтное оборудование</button></li>
                <li><button onClick={() => setCurrentView('catalog')} className="hover:text-white transition-colors">Низковольтное оборудование</button></li>
                <li><button onClick={() => setCurrentView('catalog')} className="hover:text-white transition-colors">Электродвигатели и ЗИП</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Информация</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">Условия доставки</button></li>
                <li><button onClick={() => setCurrentView('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Подписка на рассылку</h4>
              <p className="text-sm mb-4">Получайте уведомления о новых поступлениях и акциях на почту.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш E-mail" 
                  className="bg-industrial-900 border border-industrial-800 text-white px-4 py-2 w-full rounded-l focus:outline-none focus:border-primary-500 text-sm outline-none"
                />
                <button className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-r transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-industrial-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} ЭнергоПром Оборудование. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------
// HOME VIEW
// ----------------------------------------------------
function HomeView({ setView }: { setView: (v: ViewName) => void }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-industrial-900 overflow-hidden shrink-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-900 via-industrial-900/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-800 border border-industrial-700 rounded-full text-xs font-semibold text-primary-500 mb-6 uppercase tracking-wider">
                <ShieldCheck size={14} /> ГОСТ Р ИСО 9001-2015
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Надежные <span className="text-primary-500">энергорешения</span> для вашего производства
              </h2>
              <p className="text-lg text-industrial-300 mb-10 max-w-xl leading-relaxed">
                Прямые поставки промышленного электрооборудования. Оптовые цены, проектные скидки и техническая поддержка инженеров 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setView('catalog')}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Перейти в каталог <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => setView('contacts')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded font-semibold transition-colors flex items-center justify-center"
                >
                  Оставить заявку
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 shrink-0">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold text-industrial-900">Популярные категории</h3>
            <p className="text-industrial-500 mt-2">Более 10,000 позиций на складе</p>
          </div>
          <button onClick={() => setView('catalog')} className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1">
            Все категории <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -4 }}
              onClick={() => setView('catalog')}
              className="bg-white border border-industrial-200 rounded p-6 cursor-pointer hover:shadow-lg transition-all hover:border-primary-500 group"
            >
              <div className="w-12 h-12 bg-industrial-50 rounded flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors">
                <category.icon className="text-industrial-700 group-hover:text-primary-600" size={24} />
              </div>
              <h4 className="font-bold text-industrial-900 mb-1">{category.name}</h4>
              <p className="text-sm text-industrial-500 font-medium">{category.count} товаров</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-industrial-100 border-y border-industrial-200 py-16 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-industrial-900 mb-8">Рекомендуемые товары</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits/Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded flex-shrink-0 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h5 className="font-bold text-industrial-900 mb-2">Оригинальная продукция</h5>
              <p className="text-sm text-industrial-600 leading-relaxed">Всё оборудование имеет сертификаты качества и официальную гарантию производителя от 1 до 5 лет.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded flex-shrink-0 flex items-center justify-center">
              <Globe2 size={24} />
            </div>
            <div>
              <h5 className="font-bold text-industrial-900 mb-2">Логистика по СНГ</h5>
              <p className="text-sm text-industrial-600 leading-relaxed">Доставка крупногабаритных грузов собственным и наемным транспортом с соблюдением всех норм.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded flex-shrink-0 flex items-center justify-center">
              <Settings size={24} />
            </div>
            <div>
              <h5 className="font-bold text-industrial-900 mb-2">Инжиниринг</h5>
              <p className="text-sm text-industrial-600 leading-relaxed">Наши инженеры помогут подобрать аналоги, произведут расчеты и подготовят проектную документацию.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ----------------------------------------------------
// SHARED PRODUCT CARD
// ----------------------------------------------------
function ProductCard({ product }: { product: any; key?: any }) {
  return (
    <div className="bg-white border border-industrial-200 rounded overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] bg-industrial-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
        />
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-industrial-800 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            Под заказ
          </div>
        )}
        {product.inStock && (
          <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            В наличии
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-mono text-industrial-500 mb-2">Арт: {product.id}</div>
        <h4 className="font-bold text-industrial-900 mb-4 line-clamp-2 title-font hover:text-primary-600 cursor-pointer">
          {product.name}
        </h4>
        
        <div className="mt-auto space-y-2 mb-6">
          <div className="flex justify-between text-sm py-1 border-b border-industrial-100">
            <span className="text-industrial-500">Бренд</span>
            <span className="font-medium text-industrial-900">Energoprom</span>
          </div>
          <div className="flex justify-between text-sm py-1 border-b border-industrial-100">
            <span className="text-industrial-500">Мощность</span>
            <span className="font-medium text-industrial-900">{product.power}</span>
          </div>
          <div className="flex justify-between text-sm py-1 border-b border-industrial-100">
            <span className="text-industrial-500">Напряжение</span>
            <span className="font-medium text-industrial-900">{product.voltage}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-industrial-900 hover:bg-industrial-800 text-white font-medium py-2.5 rounded transition-colors text-sm">
            В корзину - {product.price}
          </button>
          <button className="p-2.5 border border-industrial-300 hover:border-primary-500 hover:text-primary-600 text-industrial-600 rounded transition-colors bg-industrial-50">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ----------------------------------------------------
// CATALOG VIEW
// ----------------------------------------------------
function CatalogView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-8 w-full"
    >
      {/* Sidebar Filters */}
      <aside className="w-64 hidden lg:block shrink-0">
        <div className="bg-white border border-industrial-200 rounded p-5 sticky top-24">
          <div className="flex items-center gap-2 mb-6 text-industrial-900 font-bold border-b border-industrial-200 pb-4">
            <Filter size={20} /> Фильтры
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-industrial-900 mb-3 text-sm">Категория оборудования</h5>
              <div className="space-y-2">
                {CATEGORIES.map(c => (
                  <label key={c.id} className="flex items-center gap-2 text-sm text-industrial-700 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500" />
                    {c.name}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-industrial-900 mb-3 text-sm">Бренд</h5>
              <div className="space-y-2">
                {['Energoprom', 'Siemens', 'ABB', 'Schneider Electric', 'Danfoss'].map((brand, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-industrial-700 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500" />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-industrial-900 mb-3 text-sm">Наличие на складе</h5>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-industrial-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500" defaultChecked />
                  Только в наличии
                </label>
              </div>
            </div>

            <button className="w-full bg-industrial-100 hover:bg-industrial-200 text-industrial-900 py-2 rounded text-sm font-medium transition-colors">
              Сбросить фильтры
            </button>
          </div>
        </div>
      </aside>

      {/* Main Catalog Area */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-industrial-900">Промышленное оборудование</h2>
          <div className="flex items-center gap-4 text-sm text-industrial-600">
            Сортировать по:
            <select className="bg-transparent border border-industrial-300 rounded py-1 px-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
              <option>Популярности</option>
              <option>Сначала дешевые</option>
              <option>Сначала дорогие</option>
              <option>Новинки</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-white border border-industrial-300 hover:border-industrial-400 text-industrial-900 font-medium py-2 px-6 rounded transition-colors text-sm">
            Загрузить еще
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// CART VIEW
// ----------------------------------------------------
function CartView({ setView }: { setView: (v: ViewName) => void }) {
  // Demo items
  const cartItems = [PRODUCTS[0]];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1"
    >
      <h2 className="text-3xl font-bold text-industrial-900 mb-8">Оформление заказа</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="bg-white border border-industrial-200 rounded p-6">
            <h3 className="text-lg font-bold text-industrial-900 mb-4 border-b border-industrial-100 pb-4">1. Товары в корзине</h3>
            {cartItems.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-industrial-50 last:border-0 last:pb-0">
                <div className="w-24 h-24 bg-industrial-50 rounded shrink-0 aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-industrial-900 leading-tight mb-1">{item.name}</h4>
                    <span className="text-xs text-industrial-500 font-mono">Арт: {item.id}</span>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-industrial-300 rounded overflow-hidden">
                      <button className="px-3 py-1 bg-industrial-50 text-industrial-600 hover:bg-industrial-100 transition-colors">-</button>
                      <input type="text" className="w-12 text-center text-sm font-medium text-industrial-900 border-x border-industrial-300 py-1" value="1" readOnly />
                      <button className="px-3 py-1 bg-industrial-50 text-industrial-600 hover:bg-industrial-100 transition-colors">+</button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-industrial-900">{item.price}</p>
                    </div>
                  </div>
                </div>
                <button className="text-industrial-400 hover:text-red-500 transition-colors h-fit p-1">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white border border-industrial-200 rounded p-6">
            <h3 className="text-lg font-bold text-industrial-900 mb-4 border-b border-industrial-100 pb-4">2. Данные покупателя</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-industrial-600 mb-1">ИНН Компании</label>
                <input type="text" placeholder="Введите ИНН (для юр. лиц)" className="w-full border border-industrial-300 rounded py-2 px-3 text-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-industrial-600 mb-1">ФИО Контактного лица</label>
                <input type="text" placeholder="Иванов Иван" className="w-full border border-industrial-300 rounded py-2 px-3 text-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-industrial-600 mb-1">Телефон</label>
                <input type="tel" placeholder="+7" className="w-full border border-industrial-300 rounded py-2 px-3 text-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-industrial-600 mb-1">E-mail</label>
                <input type="email" placeholder="example@company.com" className="w-full border border-industrial-300 rounded py-2 px-3 text-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-industrial-900 text-white rounded p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-4 border-b border-industrial-700 pb-4">Ваш заказ</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-industrial-300">Товары (1)</span>
                <span>345 000 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-industrial-300">Скидка партнера</span>
                <span className="text-green-400">0 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-industrial-300">Доставка</span>
                <span>По тарифам ТК</span>
              </div>
            </div>
            <div className="border-t border-industrial-700 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Итого:</span>
                <span className="text-primary-500">345 000 ₽</span>
              </div>
              <p className="text-xs text-industrial-400 mt-1">Без учета доставки. Включает НДС 20%</p>
            </div>
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded transition-colors mb-3">
              Отправить заявку
            </button>
            <p className="text-[10px] text-industrial-500 text-center leading-tight">
              Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// PROFILE VIEW
// ----------------------------------------------------
function ProfileView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1"
    >
      <h2 className="text-3xl font-bold text-industrial-900 mb-8">Личный кабинет</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white border border-industrial-200 rounded overflow-hidden">
            <div className="p-4 bg-industrial-50 border-b border-industrial-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-industrial-900 text-white rounded-full flex items-center justify-center shrink-0">
                И
              </div>
              <div>
                <div className="font-semibold text-sm text-industrial-900">Иванов Иван</div>
                <div className="text-xs text-industrial-500">ООО "ПромМонтаж"</div>
              </div>
            </div>
            <ul className="text-sm">
              <li className="p-4 border-b border-industrial-100 font-medium text-primary-600 bg-primary-50/50 flex justify-between items-center cursor-pointer">
                Текущие заказы <span className="bg-primary-100 text-primary-700 py-0.5 px-2 rounded-full text-xs">2</span>
              </li>
              <li className="p-4 border-b border-industrial-100 font-medium text-industrial-700 hover:bg-industrial-50 transition-colors cursor-pointer">
                История заказов
              </li>
              <li className="p-4 border-b border-industrial-100 font-medium text-industrial-700 hover:bg-industrial-50 transition-colors cursor-pointer">
                Реквизиты компании
              </li>
              <li className="p-4 font-medium text-industrial-700 hover:bg-industrial-50 transition-colors cursor-pointer">
                Договоры и акты
              </li>
            </ul>
          </div>
        </aside>
        
        <div className="flex-1 space-y-6">
          <div className="bg-white border border-industrial-200 rounded p-6">
            <h3 className="text-lg font-bold text-industrial-900 mb-6">Заказ № 8410-ПР от 12.05.2023</h3>
            
            <div className="flex flex-wrap gap-6 text-sm mb-6 pb-6 border-b border-industrial-100">
              <div>
                <span className="block text-industrial-500 mb-1">Статус</span>
                <span className="inline-flex items-center gap-1.5 text-primary-600 font-semibold bg-primary-50 px-2 py-1 rounded">
                  <Clock size={14} /> Подтвержден, ожидает оплаты
                </span>
              </div>
              <div>
                <span className="block text-industrial-500 mb-1">Сумма</span>
                <span className="font-bold text-industrial-900 border border-transparent py-1 leading-tight inline-block">1 245 000 ₽</span>
              </div>
              <div>
                <span className="block text-industrial-500 mb-1">Ожидаемая отгрузка</span>
                <span className="font-medium text-industrial-900 border border-transparent py-1 leading-tight inline-block">24.05.2023</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm bg-industrial-50 p-3 rounded">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1 shrink-0 mt-1">
                  <BatteryCharging size={24} className="text-industrial-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-industrial-900 line-clamp-1">Трансформатор силовой ТМГ-1000/10/0.4</p>
                  <p className="text-industrial-500">1 шт × 920 000 ₽</p>
                </div>
                <div className="font-bold text-industrial-900 text-right pr-2">920 000 ₽</div>
              </div>
              <div className="flex items-center gap-4 text-sm bg-industrial-50 p-3 rounded">
                 <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1 shrink-0 mt-1">
                  <Settings size={24} className="text-industrial-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-industrial-900 line-clamp-1">Ячейка КСО-298</p>
                  <p className="text-industrial-500">2 шт × 162 500 ₽</p>
                </div>
                <div className="font-bold text-industrial-900 text-right pr-2">325 000 ₽</div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-3">
              <button className="px-4 py-2 bg-industrial-100 hover:bg-industrial-200 text-industrial-900 font-medium text-sm rounded transition-colors">
                Скачать счет (PDF)
              </button>
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded transition-colors">
                Повторить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// ABOUT VIEW
// ----------------------------------------------------
function AboutView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex-1"
    >
      <div className="bg-industrial-900 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">О компании ЭНЕРГОПРОМ</h2>
        <p className="text-lg text-industrial-300 max-w-2xl mx-auto">Ведущий поставщик промышленного электрооборудования в России и СНГ</p>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-industrial-900 mb-4">Надежность, проверенная временем</h3>
            <p className="text-industrial-600 mb-4 leading-relaxed">
              Мы специализируемся на комплексных поставках электротехнического оборудования для предприятий промышленного, нефтегазового сектора, а также объектов генерации и распределения электроэнергии.
            </p>
            <p className="text-industrial-600 leading-relaxed">
              Более 15 лет наша команда инженеров и логистов обеспечивает бесперебойную работу сотен производств, предлагая только сертифицированное оборудование и профессиональный инжиниринг.
            </p>
          </div>
          <div className="aspect-[4/3] bg-industrial-200 rounded overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" alt="Factory" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-industrial-200 pt-16 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-sm font-medium text-industrial-600 uppercase tracking-wide">Лет на рынке</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">10k</div>
            <div className="text-sm font-medium text-industrial-600 uppercase tracking-wide">Позиций на складе</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
            <div className="text-sm font-medium text-industrial-600 uppercase tracking-wide">Крупных проектов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">24/7</div>
            <div className="text-sm font-medium text-industrial-600 uppercase tracking-wide">Поддержка инженеров</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// CONTACTS VIEW
// ----------------------------------------------------
function ContactsView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1"
    >
      <h2 className="text-3xl font-bold text-industrial-900 mb-8">Связаться с нами</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-industrial-900 mb-4">Центральный офис</h3>
            <div className="space-y-4 text-industrial-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={20} />
                <p>620000, г. Екатеринбург,<br/>Промзона "Южная", ул. Энергетиков, д. 15, стр. 2<br/>БЦ "Технопарк"</p>
              </div>
              <div className="flex items-center gap-3 border-t border-industrial-100 pt-4">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <p className="font-bold text-lg text-industrial-900">+7 (495) 123-45-67</p>
              </div>
              <div className="flex items-center gap-3 border-t border-industrial-100 pt-4">
                <Mail className="text-primary-500 shrink-0" size={20} />
                <p>sales@energoprom.ru - <span className="text-industrial-500">По заказам</span><br/>info@energoprom.ru - <span className="text-industrial-500">Общие вопросы</span></p>
              </div>
              <div className="flex items-center gap-3 border-t border-industrial-100 pt-4">
                <Clock className="text-primary-500 shrink-0" size={20} />
                <p>Пн-Пт: 09:00 - 18:00 (МСК)<br/><span className="text-industrial-500">Сб-Вс: Выходной (дежурный инженер)</span></p>
              </div>
            </div>
          </div>
          
          <div className="bg-industrial-100 p-6 rounded border border-industrial-200">
            <h4 className="font-bold text-industrial-900 mb-2">Реквизиты компании</h4>
            <ul className="text-sm text-industrial-700 space-y-1">
              <li>ООО "ЭНЕРГОПРОМ ОБОРУДОВАНИЕ"</li>
              <li>ИНН: 7701234567 / КПП: 770101001</li>
              <li>ОГРН: 1157746123456</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white border border-industrial-200 rounded p-8">
            <h3 className="text-2xl font-bold text-industrial-900 mb-6">Оставить заявку</h3>
            <p className="text-sm text-industrial-600 mb-8">Наши инженеры свяжутся с вами в течение 30 минут в рабочее время для уточнения деталей заказа или проекта.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-industrial-700 mb-2">Имя / Контактное лицо *</label>
                  <input type="text" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="Иванов Иван" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-industrial-700 mb-2">Компания / ИНН</label>
                  <input type="text" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="Название или ИНН" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-industrial-700 mb-2">Телефон *</label>
                  <input type="tel" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="+7 (___) ___-__-__" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-industrial-700 mb-2">E-mail</label>
                  <input type="email" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="email@company.ru" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-2">Комментарий к заявке или ссылка на спецификацию</label>
                <textarea rows={4} className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-none" placeholder="Опишите технические требования или прикрепите ссылку на ТЗ..."></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 flex-shrink-0" id="agree" />
                <label htmlFor="agree" className="text-sm text-industrial-500 cursor-pointer">
                  Согласен на обработку персональных данных в соответствии с <a href="#" className="underline hover:text-industrial-900">Политикой конфиденциальности</a>
                </label>
              </div>

              <button type="button" className="bg-industrial-900 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded transition-colors block w-full md:w-auto">
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// REGISTER VIEW
// ----------------------------------------------------
function RegisterView({ setView }: { setView: (v: ViewName) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1"
    >
      <div className="bg-white border border-industrial-200 rounded p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-industrial-900 mb-2 text-center">Регистрация в Личном кабинете</h2>
        <p className="text-sm text-industrial-500 mb-8 text-center text-balance">
          Получите доступ к оптовым ценам, персональным скидкам и истории заказов.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-industrial-700 mb-2">Название компании или ИНН *</label>
            <input type="text" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="ООО ЭнергоПром" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-industrial-700 mb-2">ФИО представителя *</label>
            <input type="text" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="Иванов Иван Иванович" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">E-mail *</label>
              <input type="email" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="email@company.ru" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">Телефон *</label>
              <input type="tel" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="+7 (___) ___-__-__" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-industrial-700 mb-2">Пароль *</label>
            <input type="password" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="Минимум 8 символов" required />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 flex-shrink-0" id="agree-register" required />
            <label htmlFor="agree-register" className="text-sm text-industrial-500 cursor-pointer">
              Согласен на обработку персональных данных в соответствии с <a href="#" className="underline hover:text-industrial-900">Политикой конфиденциальности</a>
            </label>
          </div>

          <button type="button" onClick={() => setView('profile')} className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded transition-colors block w-full text-center">
            Зарегистрироваться
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-industrial-600">
          Уже есть аккаунт? <button onClick={() => setView('login')} className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">Войти</button>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// LOGIN VIEW
// ----------------------------------------------------
function LoginView({ setView }: { setView: (v: ViewName) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1"
    >
      <div className="bg-white border border-industrial-200 rounded p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-industrial-900 mb-2 text-center">Вход в систему</h2>
        <p className="text-sm text-industrial-500 mb-8 text-center">
          Для доступа к ценам и заказам B2B
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-industrial-700 mb-2">E-mail</label>
            <input type="email" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="email@company.ru" required />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-industrial-700">Пароль</label>
              <a href="#" className="flex text-xs font-medium text-primary-600 hover:text-primary-700">Забыли пароль?</a>
            </div>
            <input type="password" className="w-full border border-industrial-300 rounded p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" placeholder="••••••••" required />
          </div>

          <button type="button" onClick={() => setView('profile')} className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded transition-colors block w-full text-center">
            Войти
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-industrial-600">
          Нет аккаунта? <button onClick={() => setView('register')} className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">Зарегистрироваться</button>
        </div>
      </div>
    </motion.div>
  );
}
