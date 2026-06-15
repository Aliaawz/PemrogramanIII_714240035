import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../components/atoms/Button";
import TextInput from "../components/atoms/TextInput";
import FormField from "../components/molecules/FormField";
import PageTitle from "../components/molecules/PageTitle";
import { getUser, getToken } from "../services/auth";
import { changePassword } from "../services/api";

export default function ProfilePage() {
  const user = getUser();
  const token = getToken();

  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleShowToken = () => {
    Swal.fire({
      title: "Token JWT",
      text: token,
      icon: "info",
      confirmButtonText: "Tutup",
      customClass: {
        popup: 'break-all'
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await changePassword(form);
      await Swal.fire({
        title: "Berhasil",
        text: "Password berhasil diubah",
        icon: "success",
      });
      setForm({ old_password: "", new_password: "" });
    } catch (error) {
      await Swal.fire({
        title: "Gagal",
        text: error.message || "Gagal mengubah password",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageTitle title="Profil Saya" description="Lihat profil dan ubah password." />

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-slate-900">Informasi Akun</h2>
        <div className="mb-4 space-y-2 text-slate-700">
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>
        <Button type="button" onClick={handleShowToken}>
          Lihat Token
        </Button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm max-w-md">
        <h2 className="mb-4 text-lg font-bold text-slate-900">Ubah Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField label="Password Lama" htmlFor="old_password">
            <TextInput
              id="old_password"
              name="old_password"
              type="password"
              value={form.old_password}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField label="Password Baru" htmlFor="new_password">
            <TextInput
              id="new_password"
              name="new_password"
              type="password"
              value={form.new_password}
              onChange={handleChange}
              required
            />
          </FormField>
          <Button type="submit" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
