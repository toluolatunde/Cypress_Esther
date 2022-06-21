import Login from "../pageObjects/loginPage";
import Assets from "../pageObjects/assetsPage";
describe("Assets page", () => {
  const login = new Login();
  const assets = new Assets();

  beforeEach(() => {
    cy.visit("/");
    login.loginFunction("okaforesther55@gmail.com", "Bible@123");
  });

  it("should verify that user can access asset page", () => {
    assets.getSpace("Your first space");
    assets.getAssets();
    assets.assertPage();
  });

  it("should verify that user can upload assets", () => {
    cy.wait(5000);
    assets.getAssetPage("Your first space");
    assets.getUploadButton().should("contain.text", "Add Asset(s)");
    cy.fixture("IMG_8118.HEIC");
    cy.get(".upload-select").attachFile("IMG_8118.HEIC");
    assets.uploadAssetbtn({ force: true });
    assets.getUploadButton().should("contain.text", "%");
    cy.wait(20000);
  });

  it.only("should verify that user can select and replace asset", () => {
    assets.getAssetPage("Your first space");
    assets.selectRow1();
    assets.replaceBtn;
    cy.fixture("IMG_8119.HEIC");
    cy.get(".popover__inner > .uk-form-file > .upload-select").attachFile("IMG_8119.HEIC");
    assets.getreplacebtn()
    cy.wait(30000);
  });

  it("should verify that user is able to delete assets", () => {
    assets.getAssetPage("Your first space");
    assets.deleteAssets();
    assets.assertPage();
  });

  it("should verify user can add a foldername", () => {
    assets.getAssetPage("Your first space");
    assets.createFolder();
  });
});
