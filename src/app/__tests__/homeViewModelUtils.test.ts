import { createHomeViewModel } from "../homeViewModelUtils";
import { describe, expect, it } from "vitest";

describe("workInterval", () => {
  it("should return work interval in morning hours ", () => {
    const date = new Date("2021-01-01T10:00:00");
    const { workInterval } = createHomeViewModel(date);
    expect(workInterval).toBe("Busy Times");
  });
});
