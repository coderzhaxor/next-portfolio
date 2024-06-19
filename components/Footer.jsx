import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 py-6 bg-[#0B1121] border-t border-white/10">
      <div class="max-w-5xl mx-auto px-6 flex items-center justify-between text-white/50">
        <div>&copy; {currentYear} Alif Januantara Prima</div>
        <div className="flex items-center gap-x-4">
          <Link href="https://api.whatsapp.com/send?phone=6285871069775&text=Halo, saya tertarik dengan portfolio Anda. Bisakah kita menjadwalkan waktu untuk mendiskusikan lebih lanjut mengenai peluang kolaborasi atau proyek yang mungkin dapat kita kerjakan bersama?">
            <box-icon name="whatsapp" type="logo" color="#ffffff50"></box-icon>
          </Link>
          <Link href="https://github.com/coderzhaxor/">
            <box-icon type="logo" name="github" color="#ffffff50"></box-icon>
          </Link>
          <Link href="https://www.linkedin.com/in/lifznotes/">
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#ffffff50"
            ></box-icon>
          </Link>
        </div>
      </div>
    </footer>
  );
}
