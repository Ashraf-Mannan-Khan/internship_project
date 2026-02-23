import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function BackwardButton({text}: {text: string}) {
    const router = useRouter();
    return (
        <button className="flex items-center gap-4 ml-1.5 mt-3 font-medium text-xl text-white" onClick={() => router.back()}>
            <MoveLeft size={24} />
            <h2>{text}</h2>
        </button>
    )
}