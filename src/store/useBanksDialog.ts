import { create } from "zustand";

interface State {
  isBanksDialogOpen: boolean;
  openBanksDialog: () => void;
  closeBanksDialog: () => void;
}

export const useBanksDialogStore = create<State>()((set) => ({
  isBanksDialogOpen: false,
  openBanksDialog: () => set({ isBanksDialogOpen: true }),
  closeBanksDialog: () => set({ isBanksDialogOpen: false }),
}));
