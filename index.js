const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });
        document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

document.getElementById('downloadPDF').addEventListener('click', function () {
    const element = document.body; 
    const options = {
        margin: 1,
        filename: 'CV_Jacky.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
});