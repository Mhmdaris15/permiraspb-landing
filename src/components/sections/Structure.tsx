// Cabinet portraits — Kabinet Nevaswara 2025—2026.
// Photo assets live in src/assets/permira-members (filenames contain spaces).
import fikria from "../../assets/permira-members/Fikaria pj ketua copy.png";
import farrell from "../../assets/permira-members/Farrell pj wakil ketua copy.png";
import riski from "../../assets/permira-members/Rai pj Sekretaris copy.png";
import aji from "../../assets/permira-members/aji pj sekre copy.png";
import bima from "../../assets/permira-members/Bima pj Bendahara copy.png";
import daryn from "../../assets/permira-members/Daryn pj PSDMK copy.png";
import abyantara from "../../assets/permira-members/BYAN Kemahasiswaan pj.png";
import moreno from "../../assets/permira-members/Moreno pj psdmk copy.png";
import alfini from "../../assets/permira-members/Fini pj psdmk copy.png";
import althaf from "../../assets/permira-members/Althaf pj kemahasiswaan copy.png";
import abil from "../../assets/permira-members/Abil pj kemahasiswaan copy.png";
import nanta from "../../assets/permira-members/Nanta Pj Kemahasiswaan copy.png";
import dhanu from "../../assets/permira-members/Danu pj kemahasiswaan copy.png";
import dymitri from "../../assets/permira-members/Dymitri pj Minbak copy.png";
import hamzah from "../../assets/permira-members/Hamzah pj minbak copy.png";
import annisa from "../../assets/permira-members/annisa pj minbak.png";
import farel from "../../assets/permira-members/Farel pj Kominfo copy.png";
import rasydan from "../../assets/permira-members/Rasy pj Kominfo copy.png";
import fathi from "../../assets/permira-members/fathi pj kominfo copy.png";
import farah from "../../assets/permira-members/Zahra pj Kominfo copy.png";
import heinz from "../../assets/permira-members/Heinz pj kominfo.png";

type Member = { name: string; role: string; img?: string; initial?: string };
type Block = { lbl: string; sub: string; lead?: boolean; members: Member[] };

const BLOCKS: Block[] = [
  {
    lbl: "Presidium",
    sub: "Pimpinan · Президиум",
    lead: true,
    members: [
      { name: "Fikria Shaleha", role: "Ketua · Chair", img: fikria },
      { name: "Farrell Umar Rayhan", role: "Wakil Ketua · Vice", img: farrell },
    ],
  },
  {
    lbl: "Inti",
    sub: "Sekretaris · Bendahara · Tech",
    members: [
      { name: "Riski Amaliah Rahman", role: "Sekretaris", img: riski },
      { name: "Aji Halim Kus Pratomo", role: "Sekretaris", img: aji },
      { name: "Bima Setyo Nugroho", role: "Bendahara", img: bima },
      {
        name: "Muhammad Aris Septanugroho",
        role: "Tech Specialist",
        initial: "A",
      },
    ],
  },
  {
    lbl: "PSDMK",
    sub: "Pengembangan SDM & Kewirausahaan",
    members: [
      { name: "Daryn Adriel", role: "PJ · Lead", img: daryn },
      { name: "Abyantara Putra Perdana", role: "Anggota", img: abyantara },
      { name: "Moreno", role: "Anggota", img: moreno },
      { name: "Alfini Riswika", role: "Anggota", img: alfini },
    ],
  },
  {
    lbl: "Kemahasiswaan",
    sub: "Kemahasiswaan & Advokasi",
    members: [
      { name: "Althaf Aryaputra Kusuma", role: "Anggota", img: althaf },
      { name: "Muhammad Abrori Abil Fida", role: "Anggota", img: abil },
      { name: "M Fauzan Ananta", role: "Anggota", img: nanta },
      { name: "Dhanu Salvatore Prajanto", role: "Anggota", img: dhanu },
    ],
  },
  {
    lbl: "Minat & Bakat",
    sub: "Departemen Minat dan Bakat",
    members: [
      { name: "M. Dymitri Ivanov", role: "Anggota", img: dymitri },
      { name: "Hamzah Aulia Rahman", role: "Anggota", img: hamzah },
      { name: "Maharani Annisa Firdaus", role: "Anggota", img: annisa },
    ],
  },
  {
    lbl: "Kominfo",
    sub: "Komunikasi & Informasi",
    members: [
      { name: "M Farrel Zaviero", role: "Anggota", img: farel },
      { name: "Muhammad Rasydan Farand Afdala", role: "Anggota", img: rasydan },
      { name: "Fathi Fauzan Suwigyo", role: "Anggota", img: fathi },
      { name: "Farah Azzahra", role: "Anggota", img: farah },
      { name: "Heinz Muhafizhan Guderian", role: "Anggota", img: heinz },
    ],
  },
];

const MemberCard = ({
  m,
  lead,
  idx,
}: {
  m: Member;
  lead?: boolean;
  idx: string;
}) => (
  <div className={`member${lead ? " lead" : ""} reveal`}>
    <div className={`portrait${m.img ? "" : " empty"}`}>
      {m.img ? <img src={m.img} alt={m.name} loading="lazy" /> : <span>{m.initial}</span>}
      <span className="idx">{idx}</span>
      <span className="ring" />
    </div>
    <div className="nm">{m.name}</div>
    <div className="rl">{m.role}</div>
  </div>
);

export const Structure = () => (
  <section id="structure">
    <div className="eyebrow reveal">
      <span className="num">№ 08 / 08</span>
      <span className="bar" />
      <span>Pengurus · Состав · Cabinet</span>
    </div>

    <h2 className="head reveal reveal-d2">
      Kabinet <em>Nevaswara,</em>
      <br />
      <span className="stroke">in full.</span>
    </h2>

    {BLOCKS.map((b, bi) => (
      <div className="org-block" key={bi}>
        <div className="org-head reveal">
          <span className="lbl">{b.lbl}</span>
          <span className="sub">{b.sub}</span>
          <span className="ct">
            {String(b.members.length).padStart(2, "0")} pengurus
          </span>
        </div>
        <div className="member-grid">
          {b.members.map((m, mi) => (
            <MemberCard
              key={mi}
              m={m}
              lead={b.lead}
              idx={`${String(bi + 1).padStart(2, "0")}·${String(mi + 1).padStart(2, "0")}`}
            />
          ))}
        </div>
      </div>
    ))}
  </section>
);
