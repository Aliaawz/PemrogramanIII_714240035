import { useEffect, useState } from "react";
import { getMahasiswa } from "../services/api";

export default function Mahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");

  const fetchData = () => {
    setLoading(true);
    getMahasiswa()
      .then(setMahasiswa)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter data berdasarkan keyword pencarian (Nama, Prodi, Email, Alamat, NPM)
  const filteredMahasiswa = mahasiswa.filter((mhs) => {
    const lowerKeyword = keyword.toLowerCase();
    return (
      String(mhs.nama || "").toLowerCase().includes(lowerKeyword) ||
      String(mhs.prodi || "").toLowerCase().includes(lowerKeyword) ||
      String(mhs.email || "").toLowerCase().includes(lowerKeyword) ||
      String(mhs.alamat || "").toLowerCase().includes(lowerKeyword) ||
      String(mhs.npm || "").toLowerCase().includes(lowerKeyword)
    );
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-8xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-2">Daftar Mahasiswa</h2>

      {/* TOTAL MAHASISWA */}
      <p className="mb-4 text-gray-700 font-medium">
        Total Mahasiswa: <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">{filteredMahasiswa.length}</span>
      </p>

      {/* SEARCH & REFRESH */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Cari mahasiswa..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="overflow-hidden border rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-300 border-b text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">Nama / Prodi</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Alamat</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredMahasiswa.map((mhs, index) => (
              <tr key={mhs.npm} className="hover:bg-blue-50">
                <td className="px-4 py-3 border">{index + 1}</td>

                <td className="px-4 py-3 border">
                  <div className="font-medium">{mhs.nama}</div>
                  <div className="text-gray-500 text-xs">{mhs.prodi}</div>
                </td>

                <td className="px-4 py-3 text-gray-600 border">{mhs.email}</td>
                <td className="px-4 py-3 text-gray-500 border">{mhs.alamat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}