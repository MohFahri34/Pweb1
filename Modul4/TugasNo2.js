function hitungTotal() {
    const tipeKamar = document.getElementById("tipeKamar").value;
    const durasi = parseInt(document.getElementById("durasiMenginap").value, 10); 
    const breakfast = document.getElementById("breakfast").checked;
    const hargaManual = parseInt(document.getElementById("harga").value.replace(/[^0-9]/g, ''), 10); 
    
    if (!durasi || durasi <= 0 || isNaN(durasi)) {
      alert("Durasi menginap harus diisi dengan angka yang valid!");
      return;
    }
  
    if (isNaN(hargaManual) || hargaManual <= 0) {
      alert("Harga harus diisi dengan angka yang valid!");
      return;
    }
    let totalHarga = hargaManual * durasi;
  
    let diskon = 0;
    if (durasi > 3) {
      diskon = totalHarga * 0.1;
      totalHarga *= 0.9;
    }
  
    if (breakfast) {
      totalHarga += 80000 * durasi; 
    }
    document.getElementById("diskon").value = diskon.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    document.getElementById("totalBayar").value = totalHarga.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  }
  