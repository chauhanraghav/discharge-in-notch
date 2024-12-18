// Function to calculate discharge for V-Notch and Rectangular Notch
document.getElementById('calculateBtn').addEventListener('click', function () {
    // Constants
    const g = 981; // Acceleration due to gravity (m/s^2)

    // V-Notch Inputs
    const H_v = parseFloat(document.getElementById('vNotchHead').value) || 0; // Head (meters)
    const theta = parseFloat(document.getElementById('vNotchAngle').value) || 0; // Angle (degrees)

    // Rectangular Notch Inputs
    const H_r = parseFloat(document.getElementById('rectHead').value) || 0; // Head (meters)
    const B = parseFloat(document.getElementById('rectWidth').value) || 0; // Width (meters)

    // V-Notch Discharge Calculation
    let Qv = 0;
    if (theta > 0 && H_v > 0) {
        const C_d_v = 0.58; // Coefficient of discharge for V-Notch
        Qv = C_d_v * (8 / 15) * Math.sqrt(2 * g) * Math.tan((theta * Math.PI) / 360) * Math.pow(H_v, 2.5);
    }

    // Rectangular Notch Discharge Calculation
    let Qr = 0;
    if (B > 0 && H_r > 0) {
        const C_d_r = 0.62; // Coefficient of discharge for Rectangular Notch
        Qr = C_d_r * B * Math.sqrt(2 * g) * Math.pow(H_r, 1.5);
    }

    // Display Results
    document.getElementById('vNotchOutput').innerText = Qv.toFixed(4) || "--";
    document.getElementById('rectNotchOutput').innerText = Qr.toFixed(4) || "--";
});
