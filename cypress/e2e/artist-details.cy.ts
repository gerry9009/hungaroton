describe("Artist Details Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/artists**").as("getArtists");

    cy.visit("http://localhost:3000/artists");

    cy.wait("@getArtists").then((interception) => {
      if (interception.response?.statusCode === 500) {
        cy.wait("@getArtists");
      }
    });

    cy.contains("button", "Részletek", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click();
  });

  it("should display artist name", () => {
    cy.get(".MuiTypography-h5", { timeout: 10000 }).should("exist");
  });

  it("should display artist image", () => {
    cy.get("img", { timeout: 10000 }).should("exist");
    cy.get("img").should("have.attr", "alt");
  });

  it("should display album count", () => {
    cy.contains("Albumok:", { timeout: 10000 }).should("exist");
  });

  it("should have back to list button", () => {
    cy.contains("button", "Vissza", { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.url().should("include", "/artists");
  });
});
