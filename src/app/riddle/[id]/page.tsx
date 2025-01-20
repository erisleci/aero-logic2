import { useRetrieveRiddle } from "./useRetrieveRiddle";
import { RiddleAnswers } from "./RiddleAnswers";

export default async function RiddlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { getData } = await useRetrieveRiddle();
  const riddle = await getData(id);

  return (
    <main className="text-lg">
      <p
        dangerouslySetInnerHTML={{ __html: riddle.contents }}
        className="mb-16"
        data-test="riddle-contents"
      />
      <RiddleAnswers riddle={riddle} />
    </main>
  );
}
