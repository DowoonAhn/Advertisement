import { create } from "zustand";

type InquiryStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useInquiry = create<InquiryStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
