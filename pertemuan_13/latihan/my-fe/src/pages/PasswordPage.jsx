import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../components/atoms/Button";
import TextInput from "../components/atoms/TextInput";
import FormField from "../components/molecules/FormField";
import PageTitle from "../components/molecules/PageTitle";
import { changePassword } from "../services/api";

export default function PasswordPage() {
  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.new_password !== form.confirm_password) {
      await Swal.fire({
        title: "Gagal",
        text: "Konfirmasi password baru tidak cocok.",
        icon: "error",
      });
      return;
    }

    try {
      setLoading(true);
      await changePassword({
        old_password: form.old_password,
        new_password: form.new_password,
      });
      await Swal.fire({
        title: "Berhasil",
        text: "Password berhasil diubah",
        icon: "success",
      });
      setForm({ old_password: "", new_password: "", confirm_password: "" });
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
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-bold text-slate-900">Ubah Password</h2>
        <p className="mb-6 text-sm text-slate-600">
          Gunakan password lama untuk membuat password baru.
        </p>
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
          <FormField label="Konfirmasi Password Baru" htmlFor="confirm_password">
            <TextInput
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={form.confirm_password}
              onChange={handleChange}
              required
            />
          </FormField>
          <Button type="submit" disabled={loading}>
            {loading ? "Menyimpan..." : "Ubah Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
