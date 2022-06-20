import Login from "../pageObjects/loginPage";
import Assets from "../pageObjects/assetsPage";
import { recurse } from 'cypress-recurse'

describe('Assets page', () => {
  const login = new Login()
  const assets = new Assets()

  beforeEach(() => {
      cy.visit("/")
      login.loginFunction("okaforesther55@gmail.com", "Bible@123")
  })

  it('should verify that user can access asset page', () => {
    assets.getSpace("Your first space")
    assets.getAssets()
    
  })

  it.only('should verify that user can upload assets', () => {
    cy.wait(5000);
    assets.getAssetPage("Your first space");
    
    assets.getUploadButton().should('contain.text', 'Add Asset(s)')

    cy.fixture('IMG_8118.HEIC')
    cy.get('.upload-select').attachFile('IMG_8118.HEIC')
    assets.uploadAssetbtn({force: true});
    //not neccessary
    //assets.getUploadButton().should('not.have.text', "Add Asset(s)")
    assets.getUploadButton().should('contain.text', '%')


    cy.waitUntil( () => {
      assets.getUploadButton().should('contain.text', 'Add Asset(s)')
      .then(() => assets.getUploadButton())
     
     })
    
     
  })


  it('should verify that user can upload assets using recurse', () => {
    cy.wait(5000);
    assets.getAssetPage("Your first space");

    //I am checking the button texts here so i can use it as verification
    //cy.xpath("//span[contains(text(),'Add Asset(s)')]").should('have.text', "Add Asset(s)");
    assets.getUploadButton().should('contain.text', 'Add Asset(s)')

    cy.fixture('IMG_8118.HEIC')
    cy.get('.upload-select').attachFile('IMG_8118.HEIC')
    assets.uploadAssetbtn({force: true});
    //not neccessary
    assets.getUploadButton().should('not.have.text', "Add Asset(s)")
    assets.getUploadButton().should('contain.text', '%')


    cy.waitUntil( () => {
      assets.getUploadButton().should('contain.text', 'Add Asset(s)')
      .should('contain.text', "Add Asset(s)").then()
     
     })

    })

  it('should verify that user can select and replace asset', () => {
    assets.getAssetPage("Your first space")
    assets.selectRow()
    cy.fixture('IMG_8119.HEIC')
    cy.get('.upload-select').attachFile('IMG_8119.HEIC')
    assets.uploadAssetbtn();
  

  })

  it('should verify that user is able to delete assets', () => {
    assets.getAssetPage("Your first space")
    assets.selectRow2()
    assets.deleteAssets()
  })

  it('should verify user can add a foldername' , () => {
    assets.getAssetPage("Your first space")
    assets.createFolder()
  })
})