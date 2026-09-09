import { createServerFn } from "@tanstack/react-start";
import { create } from "zustand";
import { z } from "zod";

type InquiryStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useInquiry = create<InquiryStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(30),
  site: z.string().max(200).optional().default(""),
  kind: z.string().trim().min(1).max(50),
  chargers: z.string().max(10).optional().default(""),
  note: z.string().max(2000).optional().default(""),
});

/**
 * Persists a landing-page inquiry. No accounts on this site (§0.5: database
 * on, auth off) — never wire authMiddleware in here.
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { insertInquiry } = await import("@/lib/inquiry-submit.server");
    await insertInquiry(data);
  });
