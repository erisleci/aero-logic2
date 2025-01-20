import { createServerAdapter } from "../../common/adapter/ServerAdapterFactory";
import { Riddle } from "../../domain/RiddleService";

export const useRetrieveRiddle = createServerAdapter({
  name: "riddle-retrieve-adapter",
  callback: async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/riddle/${id}`);
    const riddle: Riddle = await response.json();

    return riddle;
  },
});
