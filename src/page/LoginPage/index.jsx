import React, { useContext, useState } from "react";
import "./LoginPage.scss";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { FCheckbox, FTextField, FormProvider } from "../../components/form";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ContextValues } from "../../App";

function LoginPage() {
  const defaultValues = {
    username: "admin",
    password: "admin",
    remember: true,
  };
  const { setDataUser } = useContext(ContextValues);
  const methods = useForm({ defaultValues });
  const { handleSubmit, isSubmitting } = methods;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = (data) => {
    setDataUser(data);
    navigate("/watch");
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__brand">
            <img
              src="../images/netflix-logo.png"
              alt=" logo"
              className="navbar__brand-logo"
            />
          </div>

          <div className="navbar__items">
            <div className="navbar__container">
              <i className="fas fa-globe"></i>
              <select
                name="languages"
                id="languagesSelect"
                className="navbar__languages"
              >
                <option value="english">English</option>
                <option value="Vietnamese">Tiếng Việt</option>
              </select>
            </div>

            <button className="navbar__btn-sign" onClick={handleOpen}>
              Sign in
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero__bg-image-container">
            <img
              src="../images/backgroundNetflix.jpeg"
              alt="Background Images"
              className="hero__bg-image"
            />
          </div>

          <div className="hero__bg-overlay"></div>

          <div className="hero__card">
            <h1 className="hero__title">
              Unlimited movies, TV
              <br />
              shows and more.
            </h1>
            <p className="hero__subtitle">Watch anywhere.Cancel anytime.</p>
            <p className="hero__description">
              Ready to watch? Enter your email to create or restart your
              membership .
            </p>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="login" fontFamily={"inherit"}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <p className="login__title">Sign In</p>

            <Stack spacing={2}>
              <FTextField name="username" label="Username" />

              <FTextField
                id="outlined-adornment-password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <button className="login__btn" type="submit" loading={isSubmitting}>
              Sign In
            </button>
            <FCheckbox name="remember" label="Remember me" />
            <div className="login__fb">
              <a href="https://www.facebook.com/">
                <i
                  className="fab fa-facebook-square"
                  style={{ color: "blue", marginRight: "10px" }}
                ></i>
                <small>Login with Facebook</small>
              </a>
            </div>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <img
              src="https://drive.inet.vn/uploads/donv@inet.vn/ticketattachments/file-1642146543044_1642146542996.jpg"
              alt=""
              className="login__captcha"
            />
          </FormProvider>
        </div>
      </Modal>
    </>
  );
}

export default LoginPage;
