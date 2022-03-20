const JADWAL = [
    {
      jadwal_id: "01",
      bandara_kode_keberangkatan: "CGK",
      bandara_kode_tujuan: "TKG",
      maskapai_id: "AA",
      jadwal_keberangkatan: "14 Januari 2022",
    },
    {
      jadwal_id: "02",
      bandara_kode_keberangkatan: "TKG",
      bandara_kode_tujuan: "CGK",
      maskapai_id: "GD",
      jadwal_keberangkatan: "14 Januari 2022",
    },
    {
      jadwal_id: "03",
      bandara_kode_keberangkatan: "TKG",
      bandara_kode_tujuan: "HLP",
      maskapai_id: "BA",
      jadwal_keberangkatan: "14 Januari 2022",
    },
    {
      jadwal_id: "04",
      bandara_kode_keberangkatan: "CGK",
      bandara_kode_tujuan: "BDO",
      maskapai_id: "LA",
      jadwal_keberangkatan: "14 Januari 2022",
    },
    {
      jadwal_id: "05",
      bandara_kode_keberangkatan: "BDO",
      bandara_kode_tujuan: "CGK",
      maskapai_id: "BA",
      jadwal_keberangkatan: "14 Januari 2022",
    },
  ];
  
  const MASKAPAI = [
    {
      maskapai_id: "GD",
      maskapai_nama: "Garuda",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "AA",
      maskapai_nama: "Air Asia",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "LA",
      maskapai_nama: "Lion air",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "BA",
      maskapai_nama: "Batik air",
      maskapai_logo: " ",
    },
  ];
  
  const BANDARA = [
    {
      bandara_kode: "TKG",
      bandara_nama: "Radin Intan",
    },
    {
      bandara_kode: "CGK",
      bandara_nama: 'Soekarno Hatta',
    },
    {
      bandara_kode: "HLP",
      bandara_nama: "Halim Perdana Kusuma",
    },
    {
      bandara_kode: "BDO",
      bandara_nama: "Husein Sastranegara",
    },
  ];
  export {JADWAL, MASKAPAI, BANDARA}