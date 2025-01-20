import { createClientAdapter } from "../../common/adapter/ClientAdapterFactory";
import { getAnswerFor } from "riddle-exam";

export const useGetAnswer = createClientAdapter({
  name: "get-answer",
  callback: async (id: string) => {
    const data = await getAnswerFor(id);

    return data;
  },
});
