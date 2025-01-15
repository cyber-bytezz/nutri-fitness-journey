import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary animate-fade-in">
            Your Personal Health Journey
            <span className="text-primary">Starts Here</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Track your nutrition, monitor your fitness progress, and achieve your health goals
            with personalized insights and AI-powered recommendations.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything you need to succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 backdrop-blur-lg bg-white/80 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4">Smart Nutrition Tracking</h3>
              <p className="text-gray-600">
                Effortlessly log your meals and get instant nutritional insights powered by AI.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-lg bg-white/80 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4">Personalized Workouts</h3>
              <p className="text-gray-600">
                Get custom workout plans tailored to your goals and fitness level.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-lg bg-white/80 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4">Progress Analytics</h3>
              <p className="text-gray-600">
                Track your progress with detailed analytics and actionable insights.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your health?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of users who have already started their journey to better health.
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;