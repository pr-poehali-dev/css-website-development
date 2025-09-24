import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00979D] via-[#0FA0CE] to-[#FF6B35] relative overflow-hidden">
      {/* Background parrot silhouettes */}
      <div className="absolute top-10 left-10 opacity-10 transform scale-75">
        <svg width="200" height="300" viewBox="0 0 200 300" className="text-white fill-current">
          <path d="M50 50C30 30 20 60 30 80C25 85 20 95 30 100C20 110 25 125 40 120L45 130C50 140 60 145 70 140L80 150C90 160 110 155 120 145C130 135 125 120 115 115C125 110 130 95 120 85C130 75 125 60 110 65C115 50 105 40 90 45C85 35 70 30 60 40C55 35 45 40 50 50Z"/>
          <circle cx="75" cy="85" r="8" className="fill-black"/>
          <path d="M85 95C90 100 95 98 92 105C88 108 85 105 85 95Z" className="fill-orange-400"/>
        </svg>
      </div>
      
      <div className="absolute top-20 right-20 opacity-8 transform scale-90 rotate-45">
        <svg width="180" height="280" viewBox="0 0 180 280" className="text-white fill-current">
          <path d="M45 45C25 25 15 55 25 75C20 80 15 90 25 95C15 105 20 120 35 115L40 125C45 135 55 140 65 135L75 145C85 155 105 150 115 140C125 130 120 115 110 110C120 105 125 90 115 80C125 70 120 55 105 60C110 45 100 35 85 40C80 30 65 25 55 35C50 30 40 35 45 45Z"/>
          <circle cx="70" cy="80" r="7" className="fill-black"/>
          <path d="M80 90C85 95 90 93 87 100C83 103 80 100 80 90Z" className="fill-orange-400"/>
        </svg>
      </div>

      {/* Arduino components as background images */}
      <div 
        className="absolute bottom-10 left-10 w-48 h-32 opacity-15 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/img/a74c1551-ed89-46d5-940b-f070476b8dc0.jpg')`,
          filter: 'brightness(0) invert(1)'
        }}
      ></div>
      
      <div 
        className="absolute bottom-20 right-20 w-40 h-28 opacity-12 bg-contain bg-no-repeat bg-center transform rotate-12"
        style={{
          backgroundImage: `url('/img/a74c1551-ed89-46d5-940b-f070476b8dc0.jpg')`,
          filter: 'brightness(0) invert(1)'
        }}
      ></div>

      {/* Tech icons decoration */}
      <div className="absolute top-1/4 left-1/6 opacity-8 animate-pulse">
        <Icon name="Cpu" size={40} className="text-white" />
      </div>
      <div className="absolute top-1/3 right-1/5 opacity-8 animate-pulse delay-1000">
        <Icon name="Zap" size={36} className="text-white" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-8 animate-pulse delay-2000">
        <Icon name="CircuitBoard" size={38} className="text-white" />
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center mb-4">
              <div className="text-6xl font-black text-white tracking-tight">
                <span className="text-[#FF6B35]">AR</span>
                <span className="text-[#00979D]">L</span>
                <span className="text-[#2C3E50]">A</span>
                <span className="text-white">B</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full relative">
                <div className="absolute top-1 left-2 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute bottom-1 right-1 w-3 h-1 bg-black rounded"></div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login" className="text-sm font-medium text-gray-700">
                    Введите логин
                  </Label>
                  <Input
                    id="login"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00979D] focus:border-transparent transition-all"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Введите пароль
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00979D] focus:border-transparent transition-all"
                    placeholder=""
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label 
                    htmlFor="remember" 
                    className="text-sm text-gray-600 font-normal cursor-pointer"
                  >
                    Запомнить меня
                  </Label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#0FA0CE] hover:bg-[#00979D] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                >
                  Войти
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-white text-sm">
          <div>Контакты: ssssssss@mail.ru</div>
          <div>© 2025 ArLab</div>
          <div>Онлайн-курсы</div>
        </div>
      </div>
    </div>
  );
};

export default Index;