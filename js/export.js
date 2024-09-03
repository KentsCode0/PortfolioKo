export const exportResumeToPDF = () => {
    const element = document.querySelector('.resume-container');
    
    if (!element) {
        console.error('Element with class .resume-container not found.');
        return;
    }

    // Load the jsPDF script dynamically
    import('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js').then(() => {
        // Use jsPDF from the global scope
        const jsPDF = window.jspdf.jsPDF;

        window.html2canvas(element, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg');
            const pdf = new jsPDF('p', 'in', 'letter');
            const imgWidth = 8.5;
            const imgHeight = canvas.height * imgWidth / canvas.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            pdf.save('resume.pdf');
        }).catch(error => {
            console.error('Error generating PDF:', error);
        });
    }).catch(error => {
        console.error('Error loading jsPDF:', error);
    });
};
