
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white p-8">
      <div className="container mx-auto">
        <Link to="/">
          <Button variant="ghost" className="text-white mb-8 hover:bg-zinc-800/50">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started</h1>
          <p className="text-xl text-zinc-400 mb-8">
            Follow these steps to begin reporting scams and contributing to a safer digital ecosystem.
          </p>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <h2 className="text-2xl font-semibold mb-4">1. Create Your Account</h2>
              <p className="text-zinc-400">
                Sign up with your email or connect your wallet to begin your journey as a scam reporter.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <h2 className="text-2xl font-semibold mb-4">2. Submit Your First Report</h2>
              <p className="text-zinc-400">
                Provide detailed information about a suspicious project, including links, screenshots, and any relevant evidence.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <h2 className="text-2xl font-semibold mb-4">3. Earn Recognition</h2>
              <p className="text-zinc-400">
                Once your report is verified by our community, it will be minted as an NFT, establishing you as a contributor to blockchain security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
