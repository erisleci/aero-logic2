import { useGetAnswer } from "../riddle/[id]/useGetAnswer";
import { useRetrieveRiddle } from "../riddle/[id]/useRetrieveRiddle";

describe("solve random riddle", () => {
  it("should solve the riddle correctly", async () => {
    cy.injectFakeAdapter(useRetrieveRiddle, {
      body: {
        id: "1",
        contents: "What is the answer to this riddle?",
        answers: [
          { id: "1", text: "Answer 1" },
          { id: "2", text: "Answer 2" },
        ],
      },
    });
    cy.injectFakeAdapter(useGetAnswer, {
      body: { id: "1", text: "Answer 1" },
    });

    cy.visit("/");
    cy.get("[data-test=random-riddle-control]").click();
    cy.get("[data-test=riddle-contents]").should(
      "contain",
      "What is the answer to this riddle?"
    );
    cy.get("[data-answers-list]").contains("Answer 1").click();
    cy.get("[data-test=correct-answer]").should(
      "contain",
      "Great job! You're right 🙏"
    );
  });
});
