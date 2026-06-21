import PageTitle from "../components/molecules/PageTitle";
import { getUser } from "../services/auth";
import FormField from "../components/molecules/FormField";
import TextInput from "../components/atoms/TextInput";

export default function ProfilePage() {
  const user = getUser();

  return (
    <div className="space-y-6">
      <PageTitle title="Profil" description="Informasi akun yang sedang login." />

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Username" htmlFor="username">
            <TextInput
              id="username"
              name="username"
              type="text"
              value={user?.username || ""}
              disabled
            />
          </FormField>
          
          <FormField label="Role" htmlFor="role">
            <TextInput
              id="role"
              name="role"
              type="text"
              value={user?.role || ""}
              disabled
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}
