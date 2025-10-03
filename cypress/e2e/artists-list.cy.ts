describe("Homepage Artists List", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/artists**").as("getArtists");
    cy.visit("http://localhost:3000/artists");
    cy.wait("@getArtists").then((interception) => {
      if (interception.response?.statusCode === 500) {
        cy.wait("@getArtists");
      }
    });
  });

  it("should display the header with correct title", () => {
    cy.get('[data-testid="page-title"]').should("contain", "Hungaroton Artist");
  });

  it("should have search form with all fields", () => {
    cy.get('[data-testid="form-field-search"]').should("exist");
    cy.get('[data-testid="form-field-type"]').should("exist");
    cy.get('[data-testid="form-field-letter"]').should("exist");
  });

  it("should filter artists when using search", () => {
    cy.get('[data-testid="form-field-search"]').type("Bach");
    cy.wait("@getArtists");
    cy.url().should("include", "search=Bach");
  });

  it("should navigate to artist details when clicking details button", () => {
    cy.contains("button", "Részletek", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click();
    cy.url().should("include", "/artists/");
  });

  it("should have working pagination", () => {
    cy.contains("button[aria-label]", "2", { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.wait("@getArtists");
    cy.url().should("include", "page=2");
  });
});
