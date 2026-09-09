import { getSql } from "@/lib/db";

export type InquiryPayload = {
  name: string;
  phone: string;
  site: string;
  kind: string;
  chargers: string;
  note: string;
};

/** Persists one landing-page inquiry. No auth on this site — rows are unowned. */
export async function insertInquiry(data: InquiryPayload) {
  const sql = await getSql();
  const chargers = data.chargers.trim() ? Number(data.chargers) : null;
  await sql`
    insert into inquiries (name, phone, site, kind, chargers, note)
    values (
      ${data.name.trim()},
      ${data.phone.trim()},
      ${data.site.trim() || null},
      ${data.kind},
      ${Number.isFinite(chargers) ? chargers : null},
      ${data.note.trim() || null}
    )
  `;
}
