window.togglemenu = function() {
  const menu = document.getElementById("mymenu");
  menu.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function() {
    const routesData = [
        { airline: "Singapore Airlines", flightNo: "SQ380", aircraft: "A380-800", dep: "LFBO", arr: "WSSS", time: 765 },
        { airline: "Emirates", flightNo: "EK7380", aircraft: "A380-800", dep: "EDHI", arr: "OMDB", time: 390 },
        { airline: "Qantas", flightNo: "QF6020", aircraft: "A380-800", dep: "LFBO", arr: "YSSY", time: 1215 },
        { airline: "Air France", flightNo: "AF380V", aircraft: "A380-800", dep: "EDHI", arr: "LFPG", time: 90 },
        { airline: "Starlux Airlines", flightNo: "SJX8101", aircraft: "A350-1000", dep: "LFBO", arr: "RCTP", time: 735 },
        { airline: "French bee", flightNo: "FBU35R", aircraft: "A350-1000", dep: "LFBO", arr: "LFPO", time: 95 },
        { airline: "Air India", flightNo: "AI350K", aircraft: "A350-1000", dep: "LFBO", arr: "VIDP", time: 480 },
        { airline: "Qatar Airways", flightNo: "QR350", aircraft: "A350-900", dep: "LFBO", arr: "OTHH", time: 390 },
        { airline: "Vietnam Airlines", flightNo: "VN350", aircraft: "A350-900", dep: "LFBO", arr: "VVNB", time: 670 },
        { airline: "Finnair", flightNo: "AY350", aircraft: "A350-900", dep: "LFBO", arr: "EFHK", time: 190 },
        { airline: "LATAM Airlines", flightNo: "JJ9500", aircraft: "A350-900", dep: "LFBO", arr: "SBGR", time: 660 },
        { airline: "Singapore Airlines", flightNo: "SQ8888", aircraft: "A350-900", dep: "LFBO", arr: "WSSS", time: 750 },
        { airline: "IndiGo", flightNo: "6E 9001", aircraft: "A320-200", dep: "LFBO", arr: "VIDP", time: 525 },
        { airline: "Air India", flightNo: "AI 8820", aircraft: "A320-200", dep: "LFBO", arr: "VIDP", time: 530 },
        { airline: "Iberia", flightNo: "IBE991", aircraft: "A321-200", dep: "LFBO", arr: "LEMD", time: 80 },
        { airline: "Lufthansa", flightNo: "DLH9901", aircraft: "A321-200", dep: "EDHI", arr: "EDDF", time: 45 },
        { airline: "JetBlue Airways", flightNo: "JBU9921", aircraft: "A220-300", dep: "KMOB", arr: "KJFK", time: 130 },
        { airline: "Breeze Airways", flightNo: "MXY9901", aircraft: "A220-300", dep: "KMOB", arr: "KCHS", time: 65 },
        { airline: "Air France", flightNo: "AFR318", aircraft: "A318-100", dep: "LFBO", arr: "LFPG", time: 85 }
    ];

    const container = document.getElementById('route-container');
    if (container) {
        routesData.forEach(route => {
            let hours = Math.floor(route.time / 60);
            let minutes = route.time % 60;
            let timeString = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

            const card = document.createElement('div');
            card.className = 'route-card';
            card.innerHTML = `
                <div class="route-header">
                    <div class="route-badges">
                        <span class="badge-theme">${route.flightNo}</span>
                        <span class="badge-delivery"><i class="fa-solid fa-plane-arrival"></i> Delivery Flight</span>
                        <i class="fa-regular fa-map map-icon"></i>
                    </div>
                    <div class="route-duration">${timeString}</div>
                </div>
                
                <div class="route-path">
                    <strong>${route.dep}</strong> <i class="fa-solid fa-arrow-right-long"></i> <strong>${route.arr}</strong>
                </div>
                
                <div class="route-fleet">
                    <span class="badge-theme">${route.aircraft} (${route.airline})</span>
                </div>
            `;
            container.appendChild(card);
        });
    }
});
