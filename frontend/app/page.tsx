import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[150px_1fr_300px] gap-4">
        <aside className="bg-red-500 min-h-screen">sidebar</aside>
        <main className="bg-red-500">
          <header className="flex justify-between">
            <h1>
              <span className="block text-3xl font-bold text-white">Computer</span>
              <span className="block text-sm text-white">Science And Design</span>
            </h1>
            <input type="text" placeholder="search" className="bg-[rgba(23,24,33,1)] text-white placeholder-white w-70 h-10 rounded-2xl pl-7 "/>
          </header>
        </main>
        <aside className="bg-red-500">right panel</aside>
      </div>
    </>
  );
}
