// This file contains JavaScript code that handles the functionality of the "Lihat Detail" button.
// It includes event listeners to open the modal and display complete information about the selected event.

document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            title: "Event 1",
            description: "Description for Event 1.",
            image: "path/to/image1.jpg",
            details: "Complete details for Event 1."
        },
        {
            title: "Event 2",
            description: "Description for Event 2.",
            image: "path/to/image2.jpg",
            details: "Complete details for Event 2."
        },
        {
            title: "Event 3",
            description: "Description for Event 3.",
            image: "path/to/image3.jpg",
            details: "Complete details for Event 3."
        },
        {
            title: "Event 4",
            description: "Description for Event 4.",
            image: "path/to/image4.jpg",
            details: "Complete details for Event 4."
        },
        {
            title: "Event 5",
            description: "Description for Event 5.",
            image: "path/to/image5.jpg",
            details: "Complete details for Event 5."
        }
    ];

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    document.querySelectorAll('.lihat-detail').forEach((button, index) => {
        button.addEventListener('click', function() {
            modalTitle.textContent = events[index].title;
            modalBody.textContent = events[index].details;
            $('#eventModal').modal('show');
        });
    });
});