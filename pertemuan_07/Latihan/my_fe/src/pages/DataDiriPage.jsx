import { useEffect, useState } from "react";
import { getMahasiswa } from "../services/api";

export default function DataDiriPage() {
  const [dataDiri, setDataDiri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        if (isMounted) {
          setError("");
        }

        const data = await getMahasiswa();
        
        if (isMounted) {
          // Gunakan data mahasiswa pertama dari daftar sebagai Data Diri
          if (data && data.length > 0) {
            setDataDiri(data[0]);
          } else {
            setError(`Data mahasiswa tidak ditemukan (database kosong).`);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p className="text-center py-4">Loading data diri...</p>;
  if (error) return <p className="text-center py-4 text-red-500">Error: {error}</p>;

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-slate-800">Data Diri</h2>
      
      {dataDiri && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row border-b border-slate-100 pb-3">
            <span className="font-semibold text-slate-600 w-48">Nama Lengkap</span>
            <span className="text-slate-800">{dataDiri.nama}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row border-b border-slate-100 pb-3">
            <span className="font-semibold text-slate-600 w-48">NPM</span>
            <span className="text-slate-800">{dataDiri.npm}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row border-b border-slate-100 pb-3">
            <span className="font-semibold text-slate-600 w-48">Program Studi</span>
            <span className="text-slate-800">{dataDiri.prodi}</span>
          </div>

          <div className="flex flex-col sm:flex-row border-b border-slate-100 pb-3">
            <span className="font-semibold text-slate-600 w-48">Email</span>
            <span className="text-slate-800">{dataDiri.email}</span>
          </div>

          <div className="flex flex-col sm:flex-row border-b border-slate-100 pb-3">
            <span className="font-semibold text-slate-600 w-48">Alamat</span>
            <span className="text-slate-800">{dataDiri.alamat}</span>
          </div>
        </div>
      )}
    </div>
  );
}
