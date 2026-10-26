import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <div className="w-full h-[43.75rem] flex justify-center items-center gap-3 font-pop">
      <div className="w-[37.5rem] h-[40.625rem]">
        <ContactForm />
      </div>
      <div className="w-[21.875rem] h-[40.625rem] flex flex-col gap-2 p-10">
        <h1 className="text-[1.875rem] font-semibold">Contact Details</h1>
        <h2 className="text-[1.25rem] text-[#DC3545] font-medium">No 3,Taiwo Oladiran Street, Behinde Brymor Hotel Off Ilobu Road, Agunbelewo</h2>
        <p className="text-sm text-gray-400"><span className="underline decoration-dotted">P</span>: 080-339-41875 || 070-870-13129</p>
        <p className="text-sm text-gray-400"><span className="underline decoration-dotted">E</span>: <span className="font-semibold text-[#01D28E]">info@theplacesoteria.org</span></p>
      </div>
    </div>
  )
}