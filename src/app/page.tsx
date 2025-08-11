"use client";
import { useState } from "react";
import { BookOpen, User, Lock, Eye, EyeOff, Apple, Chrome } from "lucide-react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden relative px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="absolute top-1/4 left-1/6 transform rotate-12 opacity-10">
          <BookOpen className="w-12 h-12 text-blue-600" />
        </div>
        <div className="absolute bottom-1/3 right-1/6 transform -rotate-12 opacity-10">
          <BookOpen className="w-10 h-10 text-green-600" />
        </div>
      </div>

      <div className="w-full max-w-2xl relative">
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Moove Math
            </h1>
            <p className="text-gray-500 text-sm">
              Entre e continue sua jornada de aprendizado
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  Email
                </div>
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none placeholder-gray-400"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                Seu email não será compartilhado com ninguém
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-500" />
                  Senha
                </div>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 pr-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-200 outline-none placeholder-gray-400"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-600 px-2">Lembre de mim</span>
              </div>

              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Esqueceu a senha?
              </button>
            </div>

            <button
              type="submit"
              
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Entrar na Plataforma
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-sm text-gray-500">
                  ou continue com
                </span>
              </div>
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
              >
                <Chrome className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">
                  Google
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
              >
                <Apple className="w-5 h-5 text-gray-800" />
                <span className="text-sm font-medium text-gray-600">Apple</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Não tem uma conta?{" "}
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                Cadastre-se grátis
              </button>
            </p>
          </div>
        </div>

        {/* Decorative elements around the card */}
        <div className="absolute -top-25 -left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute -top-2 -right-30 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute -bottom-30 -left-6 w-7 h-7 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute -bottom-4 -right-50 w-5 h-5 bg-orange-400 rounded-full opacity-60"></div>
      </div>
    </div>
  );
}
