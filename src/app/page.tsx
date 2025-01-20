import { createHomeViewModel } from "@/app/homeViewModelUtils";
import { RandomRiddleEntryControl } from "./RandomRiddleEntryControl";

export default function Home() {
  const { workInterval, timestamp } = createHomeViewModel(new Date());
  return (
    <main className="text-lg">
      <div data-test="metadata">
        <p>Work Interval: {workInterval}</p>
        <p>Timestamp: {timestamp}</p>
        <div className="p-20 text-center">
          <RandomRiddleEntryControl />
        </div>
      </div>
    </main>
  );
}
