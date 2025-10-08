class Karyawan{
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    info() {
        return `${this.nama} bekerja sebagai ${this.jabatan} dengan gaji ${this.gaji}`;
    }
}

    const karyawan = new Karyawan("Laksa", "Animator", "10000000");