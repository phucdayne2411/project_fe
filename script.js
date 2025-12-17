// File: project-fe/script.js
// CHÚ Ý: CẬP NHẬT URL NÀY SAU KHI DEPLOY BACKEND XONG (Bước 3)
const BACKEND_URL = "https://project-be-1zr7.onrender.com/"; 

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('dataInput').value;
    const resultDisplay = document.getElementById('backendResult');
    resultDisplay.innerText = "Đang gửi dữ liệu...";

    fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(res => {
        if (!res.ok) {
            // Xử lý lỗi HTTP (4xx, 5xx)
            throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        // Hiển thị phản hồi từ Backend
        resultDisplay.innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Lỗi API:', error);
        resultDisplay.innerText = `Lỗi kết nối Backend ❌: ${error.message}. Vui lòng kiểm tra console/URL.`;
    });
});