let pdfUrl = "./sample.pdf";

function getPageText(pageNum, PDFDocumentInstance) {
  return new Promise(function (resolve, reject) {
    PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
      pdfPage.getTextContent().then(function (textContent) {
        let textItems = textContent.items;
        let finalArray = [];

        for (let i = 0; i < textItems.length; i++) {
          finalArray.push(textItems[i]);
        }

        resolve(finalArray);
      });
    });
  });
}

pdfjsLib.getDocument(pdfUrl).then(function (PDFDocumentInstance) {
  getPageText(1, PDFDocumentInstance).then(function (textPage) {
    console.log(textPage);
  });
}, function (err) {
  console.error(err);
});