import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthError, AuthApiError } from "@supabase/supabase-js";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log("Setting up auth state change listener");
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event);
      if (event === "SIGNED_IN") {
        console.log("User signed in, navigating to home");
        navigate("/");
      }
      if (event === "SIGNED_OUT") {
        setError(""); // Clear error on sign out
      }
      if (event === "USER_UPDATED" && !session) {
        console.log("Auth error occurred");
        setError("Invalid signup credentials. Please check your information and try again.");
      }
    });

    return () => {
      console.log("Cleaning up auth state change listener");
      subscription.unsubscribe();
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="mt-8">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;