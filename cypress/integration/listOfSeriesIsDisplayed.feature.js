describe("A list of TV series is displayed", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:list_of_series.json",
    })
    cy.visit("/")
  })

  it("in a grid", () => {
    cy.get("#series-grid").within(() => {
      cy.get("#greys-anatomy").should("be.visible")
    })
  })
})