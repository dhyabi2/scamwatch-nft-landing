
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Search, Coins, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreFeatures = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Platform Features</h1>
          <p className="text-xl text-zinc-400 mb-12">
            Discover how our platform revolutionizes scam reporting through blockchain technology.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <Shield className="h-8 w-8 mb-4 text-white" />
              <h2 className="text-2xl font-semibold mb-4">Immutable Records</h2>
              <p className="text-zinc-400">
                All scam reports are permanently recorded on the blockchain, ensuring transparency and reliability.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <Search className="h-8 w-8 mb-4 text-white" />
              <h2 className="text-2xl font-semibold mb-4">Advanced Search</h2>
              <p className="text-zinc-400">
                Easily search and verify projects before investing, protecting yourself and others.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <Coins className="h-8 w-8 mb-4 text-white" />
              <h2 className="text-2xl font-semibold mb-4">Reward System</h2>
              <p className="text-zinc-400">
                Earn rewards for contributing valuable reports and helping maintain platform integrity.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700">
              <Users className="h-8 w-8 mb-4 text-white" />
              <h2 className="text-2xl font-semibold mb-4">Community Validation</h2>
              <p className="text-zinc-400">
                Reports are validated by our community of experts before being minted as NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreFeatures;
