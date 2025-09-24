import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00979D] via-[#0FA0CE] to-[#FF6B35] relative overflow-hidden">
      {/* Background tech elements */}
      <div className="absolute top-10 left-10 opacity-12 transform scale-75">
        <Icon name="Lightbulb" size={80} className="text-white" />
      </div>
      
      <div className="absolute top-20 right-20 opacity-10 transform scale-90 rotate-12">
        <Icon name="Cpu" size={75} className="text-white" />
      </div>
      
      <div className="absolute bottom-32 left-16 opacity-8 transform rotate-45">
        <Icon name="Microchip" size={60} className="text-white" />
      </div>
      
      <div className="absolute top-1/2 right-12 opacity-10 transform -rotate-12">
        <Icon name="Lightbulb" size={70} className="text-white" />
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
            <div className="inline-flex items-center justify-center mb-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/2aa1abeb-d55a-41cd-b68d-e559479bf141.png" 
                alt="ArLab Logo" 
                className="w-44 h-28 object-contain filter brightness-110 contrast-110"
              />
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