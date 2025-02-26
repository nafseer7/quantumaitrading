import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum AI Platform - Advanced Trading Solutions",
  description: "Experience the future of trading with our advanced AI-powered platform. Access real-time market data, advanced analytics, and automated trading strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
