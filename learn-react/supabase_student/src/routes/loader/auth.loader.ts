import { redirect } from "react-router";
import { useAuthStore } from "../../store/authStore";
import supabase from "../../utils/supabase";

export const fetchUserData = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const setLogin = useAuthStore.getState().setLogin;
    setLogin(session);
  }
};

export const requireAuth = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return redirect("/login");
  }
};

export const requireNotAuth = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    return redirect("/");
  }
};
