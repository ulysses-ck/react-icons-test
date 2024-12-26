import Link from "next/link"
import { AvailableIcons } from "@/types/IAvailableIcons"
export default async function Page() {
    const icons = Object.keys(AvailableIcons)

    return <div>
        <h1 className="text-2xl font-bold">Available Icons</h1>
        <ul className="flex flex-wrap gap-2">
            {icons.map((icon) => (
                <li key={icon} className="bg-gray-200 rounded-md">
                    <Link className="w-full h-full p-6" href={`/${icon}`}>{icon}</Link>
                </li>
            ))}
        </ul>
    </div>
}