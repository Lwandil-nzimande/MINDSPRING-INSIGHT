function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}
document.querySelector('.cta-btn').addEventListener('click', () => {
    console.log('CTA button clicked - user interested in booking');
});