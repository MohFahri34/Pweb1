function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        alert("Login Sukses!");
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("menu").style.display = "block";
    } else {
        alert("Login Gagal! Silakan coba lagi.");
    }
}

function showForm(formId) {
    document.getElementById("addRoomForm").style.display = "none";
    document.getElementById("addFacilityForm").style.display = "none";
    document.getElementById(formId).style.display = "block";
}

function validateRoomForm() {
    const roomNumber = document.getElementById("roomNumber").value;
    const roomType = document.getElementById("roomType").value;

    if (roomNumber === "" || roomType === "") {
        alert("Semua kolom wajib diisi!");
        return false;
    }

    if (isNaN(roomNumber)) {
        alert("Nomor kamar harus berupa angka!");
        return false;
    }

    alert("Data kamar berhasil disimpan!");
    return true;
}

function validateFacilityForm() {
    const facilityName = document.getElementById("facilityName").value;
    const description = document.getElementById("description").value;

    if (facilityName === "" || description === "") {
        alert("Semua kolom wajib diisi!");
        return false;
    }

    if (facilityName.length < 3) {
        alert("Nama fasilitas minimal 3 karakter!");
        return false;
    }

    alert("Data fasilitas berhasil disimpan!");
    return true;
}        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "123") {
                alert("Login Sukses!");
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("menu").style.display = "block";
            } else {
                alert("Login Gagal! Silakan coba lagi.");
            }
        }

        function showForm(formId) {
            document.getElementById("addRoomForm").style.display = "none";
            document.getElementById("addFacilityForm").style.display = "none";
            document.getElementById(formId).style.display = "block";
        }

        function validateRoomForm() {
            const roomNumber = document.getElementById("roomNumber").value;
            const roomType = document.getElementById("roomType").value;

            if (roomNumber === "" || roomType === "") {
                alert("Semua kolom wajib diisi!");
                return false;
            }

            if (isNaN(roomNumber)) {
                alert("Nomor kamar harus berupa angka!");
                return false;
            }

            alert("Data kamar berhasil disimpan!");
            return true;
        }

        function validateFacilityForm() {
            const facilityName = document.getElementById("facilityName").value;
            const description = document.getElementById("description").value;

            if (facilityName === "" || description === "") {
                alert("Semua kolom wajib diisi!");
                return false;
            }

            if (facilityName.length < 3) {
                alert("Nama fasilitas minimal 3 karakter!");
                return false;
            }

            alert("Data fasilitas berhasil disimpan!");
            return true;
        }