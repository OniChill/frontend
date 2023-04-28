import * as Yup from "yup";

const validationAddUser = Yup.object({
  name: Yup.string().required("Wajib diisi"),
  email: Yup.string()
    .email("Alamat email tidak valid")
    .required("Wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Wajib diisi"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Konfirmasi password harus sesuai dengan password')
    .required('Wajib diisi'),
});

const validationEditUser = (user) => Yup.object({
  name: Yup.string().required("Wajib diisi"),
  email: Yup.string()
    .email("Alamat email tidak valid")
    .required("Wajib diisi")
    .test("is-not-unchanged", "Tidak ada perubahan pada form", function (value) {
      const { name, email } = this.parent;
      if (name !== this.resolve(user.name) || email !== this.resolve(user.email)) {
        return true; // Valid form
      }
      return false; // Invalid form
    }),
});


const validationLogin = Yup.object({
  email: Yup.string()
    .email("Alamat email tidak valid")
    .required("Wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Wajib diisi"),
});

export {validationAddUser, validationLogin, validationEditUser};
