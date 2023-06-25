import SejarahSingkat from "@/components/tentang-kami/SejarahSingkat";
import Tabs from "@/components/tentang-kami/Tabs";

const tabsData = [
  {
    label: "Visi",
    content: (
      <div>
        Bidan praktik mandiri BOS (bidan okti susanti Amd.keb) membangun
        kesehatan melalui program promotif dan preventif yang terpadu dan
        berkualitas
      </div>
    ),
  },
  {
    label: "Misi",
    content: (
      <div>Mewujudkan pelayanan kesehatan ibu dan anak yang paripurna</div>
    ),
  },
  {
    label: "Tata Nilai",
    content: (
      <>
        <div>
          <h1 className="text-4xl font-semibold">I S L A M</h1>
          <ul className="translate-x-8 max-w-[380px]">
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Indah</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Santun</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Lembut</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Amanah</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Manusiawi</h3>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    label: "Budaya Kerja",
    content: (
      <>
        <div>
          <h1 className="text-4xl font-semibold">C I N T A</h1>
          <ul className="translate-x-8 max-w-[380px]">
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Cerdas</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Ikhlas</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Nyata</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Tuntas</h3>
            </li>
            <li className="list-decimal">
              <h3 className="text-gray-800 text-lg">Aman</h3>
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <main>
        <div className="mt-20 mx-auto">
          <div className="mx-auto">
            <SejarahSingkat />
            <Tabs tabs={tabsData} />
          </div>
        </div>
      </main>
    </>
  );
}
