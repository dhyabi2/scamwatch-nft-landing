import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ListChecks, ShoppingBag, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="min-h-screen flex items-center justify-center relative opacity-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 text-center z-10">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-zinc-800/50 rounded-full backdrop-blur-sm border border-zinc-700">
            Revolutionizing Scam Prevention
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Report Scams as NFTs
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Transform scam reports into verifiable digital assets, creating a transparent and immutable record of fraudulent projects.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Pioneer Scam Detection</h3>
              <p className="text-zinc-400">
                Become an early guardian by identifying and documenting scams before others. Your vigilance transforms into valuable digital assets.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Earn While Protecting</h3>
              <p className="text-zinc-400">
                Join our mission to purify the market. Be rewarded for your contribution in making the digital space safer for everyone.
              </p>
            </div>
          </div>
          <Link to="/get-started">
            <Button
              className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-full px-8 py-6 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="min-h-screen py-24 relative opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-zinc-800/50 rounded-full backdrop-blur-sm border border-zinc-700">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              A simple three-step process to report and verify scam projects
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Report",
                description:
                  "Submit detailed information about the scam project",
              },
              {
                icon: <ListChecks className="h-8 w-8" />,
                title: "Verify",
                description:
                  "Our community validates the report through consensus",
              },
              {
                icon: <ShoppingBag className="h-8 w-8" />,
                title: "Mint",
                description:
                  "Verified reports are minted as unique NFTs",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="bg-white/10 p-4 rounded-xl inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Teaser */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="min-h-screen py-24 relative opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 border border-zinc-700">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-zinc-800/50 rounded-full backdrop-blur-sm border border-zinc-700">
                Coming Soon
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">NFT Marketplace</h2>
              <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12">
                Be the first to access our revolutionary marketplace for verified scam reports
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300">
                  <div className="bg-white/10 p-3 rounded-xl inline-block mb-4">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Value by Verification</h3>
                  <p className="text-zinc-400">
                    The most thoroughly verified scam reports become the most valuable NFTs, rewarding vigilant contributors.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300">
                  <div className="bg-white/10 p-3 rounded-xl inline-block mb-4">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reward System</h3>
                  <p className="text-zinc-400">
                    Early detection and comprehensive reporting lead to higher NFT values and greater rewards.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/explore-features">
                <Button
                  className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-full px-8 py-6 text-lg group"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
