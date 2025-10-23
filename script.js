let allTours = [
    {
        name: "Tokyo Adventure",
        country: "Japan",
        duration: "7 Days",
        price: "₹1,08,000",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
        people: "2-8"
    },
    {
        name: "Bali Paradise",
        country: "Indonesia",
        duration: "5 Days",
        price: "₹74,900",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        people: "2-10"
    },
    {
        name: "Bangkok Explorer",
        country: "Thailand",
        duration: "6 Days",
        price: "₹62,400",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
        people: "2-12"
    },
    {
        name: "Seoul Discovery",
        country: "South Korea",
        duration: "5 Days",
        price: "₹91,500",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
        people: "2-8"
    },
    {
        name: "Singapore Highlights",
        country: "Singapore",
        duration: "4 Days",
        price: "₹99,900",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
        people: "2-10"
    },
    {
        name: "Vietnam Journey",
        country: "Vietnam",
        duration: "8 Days",
        price: "₹83,200",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
        people: "2-15"
    }
];

function renderTours(toursToDisplay = allTours) {
    const grid = document.getElementById('toursGrid');
    if (toursToDisplay.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3 style="color: #666; font-size: 1.5rem;">No tours found matching your criteria</h3>
                <p style="color: #999; margin-top: 1rem;">Try adjusting your search filters</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = toursToDisplay.map(tour => `
        <div class="tour-card" onclick="openBooking('${tour.name}')">
            <div class="tour-image" style="background-image: url('${tour.image}')">
                <div class="tour-badge">⭐ ${tour.rating}</div>
            </div>
            <div class="tour-content">
                <h3>${tour.name}</h3>
                <div class="tour-location">📍 ${tour.country}</div>
                <div class="tour-details">
                    <div class="detail-item">⏱️ ${tour.duration}</div>
                    <div class="detail-item">👥 ${tour.people} people</div>
                </div>
                <div class="tour-price">${tour.price} <span style="font-size: 0.9rem; color: #666;">per person</span></div>
                <button class="btn" style="width: 100%;">Book Now</button>
            </div>
        </div>
    `).join('');
}

function openBooking(tourName) {
    document.getElementById('modalTitle').textContent = `Book ${tourName}`;
    document.getElementById('bookingModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitBooking(event) {
    event.preventDefault();
    alert('🎉 Thank you for your booking!\n\nWe will contact you shortly to confirm your reservation and provide payment details.');
    closeModal();
    document.getElementById('bookingForm').reset();
}

function searchTours() {
    const destination = document.getElementById('destination').value.toLowerCase().trim();
    const date = document.getElementById('date').value;
    const travelers = document.getElementById('travelers').value;
    
    if (!destination && !date && !travelers) {
        alert('Please enter at least one search criteria');
        return;
    }

    let filteredTours = allTours;

    // Filter by destination (searches in tour name and country)
    if (destination) {
        filteredTours = filteredTours.filter(tour => 
            tour.name.toLowerCase().includes(destination) || 
            tour.country.toLowerCase().includes(destination)
        );
    }

    // Filter by number of travelers
    if (travelers) {
        filteredTours = filteredTours.filter(tour => {
            const parts = tour.people.split('-');
            const maxPeople = parts.length > 1 ? parseInt(parts[1]) : parseInt(parts[0]);
            const travelerCount = travelers === '6+' ? 6 : parseInt(travelers);
            return travelerCount <= maxPeople;
        });
    }

    // Show results
    document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
    renderTours(filteredTours);

    // Show search summary
    const summaryParts = [];
    if (destination) summaryParts.push(`Destination: ${destination}`);
    if (date) summaryParts.push(`Date: ${date}`);
    if (travelers) summaryParts.push(`Travelers: ${travelers}`);
    
    setTimeout(() => {
        alert(`🔍 Search Results\n\n${summaryParts.join('\n')}\n\nFound ${filteredTours.length} tour(s)`);
    }, 500);
}

// Add reset function
function resetSearch() {
    document.getElementById('destination').value = '';
    document.getElementById('date').value = '';
    document.getElementById('travelers').value = '';
    renderTours(allTours);
}

window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

renderTours();
