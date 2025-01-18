"use client"
import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeComponent = () => {
  const [text, setText] = useState('');
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>QR Code</h2>
      <div ref={qrRef}>
        <QRCodeCanvas
          value={text}
          size={200} // حجم الباركود
          bgColor={"#ffffff"} // لون الخلفية
          fgColor={"#000000"} // لون الرمز
          level={"H"} // مستوى تصحيح الأخطاء
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="أدخل النص هنا"
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <button 
          onClick={downloadQRCode} 
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          PNG تحميل كـ 
        </button>
      </div>
    </div>
  );
};

export default QRCodeComponent;
