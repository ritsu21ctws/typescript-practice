import { toaster } from "@/components/ui/toaster"
import { useCallback } from "react"

type Props = {
  title: string;
  type: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
  const showMessage = useCallback((prpps: Props) => {
    const { title, type } = prpps;
    toaster.create({
      title,
      type,
      duration: 2000,
      meta: { closable: true }
    })
  }, []);
  return { showMessage }
}