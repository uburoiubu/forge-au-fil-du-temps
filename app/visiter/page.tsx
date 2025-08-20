import Image from "next/image";

export default function HistoryPage() {
  return (
   <div className="font-sans text-xl leading-relaxed text-center">
         <main className="flex flex-col items-center gap-8">
          <h1 className="text-5xl text-center p-6">Visiter</h1>
           <div className="w-full h-[400px] relative">
             <Image
               src="/images/visit.jpg"
               alt="Ancienne forge à Souillac"
               fill
               className="object-cover"
             />
           </div>
         </main>
       </div>
  )
}