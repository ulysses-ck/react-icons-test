import { AvailableIcons } from "@/types/IAvailableIcons";
import IconList from "../components/IconList";

interface IProps {
  params: Promise<{ packageName: keyof typeof AvailableIcons }>;
}

export default async function Page({ params }: IProps) {
  const { packageName } = await params;

  if (!packageName || !Object.keys(AvailableIcons).includes(packageName)) {
    return (
      <div>
        <h1>Package not found</h1>
      </div>
    );
  }

  const lib = AvailableIcons[packageName as keyof typeof AvailableIcons];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{packageName} Icons</h1>
      <div className="flex flex-wrap gap-4">
        <IconList lib={lib} />
      </div>
    </div>
  );
}
