import { Button } from "./ui/button";

export default function DetailsSchedulesCard({
  schedule,
  onApply,
}: {
  schedule: {
    name: string;
    date: string;
    duration: string;
  }[];
  onApply: () => void;
}) {
  const separator = <hr className="border-primary" />;

  return (
    <div className="border border-primary rounded-md p-4 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Test Schedule</h2>
      {separator}
      {schedule.map((s) => (
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <h3 className="font-semibold">{s.name}</h3>
            <p>
              {new Date(s.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <p>{s.duration}</p>
        </div>
      ))}
      <Button onClick={onApply}>Apply</Button>
    </div>
  );
}
