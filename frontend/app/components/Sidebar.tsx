import { Home , Activity  ,ClipboardList} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="flex h-screen w-full flex-col items-center space-y-10 mt-30 gap-8">
      <button className="group flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10">
        <Home size={24} color="white" />
      </button>
      
      <button className="group flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10">
        <Activity size={24} color="white" />
      </button>

      <button className="group flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10">
        <ClipboardList size={24} color="white" />
      </button>
    </div>
  );
}