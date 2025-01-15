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
    console.log("Setting up auth state change listener in Signup");
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed in Signup:", event, session);
      
      if (event === "SIGNED_IN") {
        console.log("User signed in successfully, navigating to home");
        navigate("/");
      }
      
      if (event === "SIGNED_OUT") {
        setError(""); // Clear error on sign out
      }

      // Handle specific auth errors
      if (event === "USER_UPDATED" && !session) {
        console.log("Auth error occurred in signup");
        const { error } = supabase.auth.getSession();
        if (error instanceof AuthApiError) {
          switch (error.status) {
            case 400:
              setError("Please check your credentials and try again.");
              break;
            case 422:
              setError("Invalid email format. Please check and try again.");
              break;
            default:
              setError(error.message);
          }
        }
      }
    });

    // Check if user is already signed in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        console.log("User already signed in, redirecting to home");
        navigate("/");
      }
    };
    
    checkUser();

    return () => {
      console.log("Cleaning up auth state change listener in Signup");
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
            view="sign_up"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;