import { MoveLeft } from "lucide-react";

export default function BackwardButton({text}: {text: string}) {
    return (
        <button className="flex items-center gap-4 ml-1.5 mt-3 font-medium text-xl text-white">
            <MoveLeft size={24} />
            <h2>{text}</h2>
        </button>
    )
}