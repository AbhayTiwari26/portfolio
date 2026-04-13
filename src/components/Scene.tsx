import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { FloatingItem } from './FloatingItem';

interface SceneProps {
  onItemClick: (label: string) => void;
  theme: string;
}

export const Scene = ({ onItemClick, theme }: SceneProps) => {
  const getThemeConfig = () => {
    switch(theme) {
      case 'cyberpunk':
        return { primary: '#ec4899', secondary: '#22d3ee', text: '#ffffff', act: '#10b981', stars: true };
      case 'light':
        return { primary: '#3b82f6', secondary: '#10b981', text: '#1e293b', act: '#f59e0b', stars: false };
      case 'dark':
      default:
        return { primary: '#6b21a8', secondary: '#06b6d4', text: '#ffffff', act: '#10b981', stars: true };
    }
  };

  const config = getThemeConfig();

  return (
    <div className="absolute inset-0 w-full h-full z-10 transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Environment Lights */}
        <ambientLight intensity={theme === 'light' ? 0.6 : 0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color={config.primary} />
        <pointLight position={[-10, -10, -5]} intensity={1} color={config.secondary} />
        
        {config.stars && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
        <Environment preset={theme === 'light' ? "city" : "night"} />

        <FloatingItem 
          position={[-4, 2, 0]} 
          label="Projects" 
          distort={true} 
          hasRing={true}
          color={config.primary}
          textColor={config.text}
          onClick={() => onItemClick('Projects')} 
        />
        <FloatingItem 
          position={[4, 2, 0]} 
          label="Skills" 
          hasRing={false}
          distort={false}
          color={config.secondary}
          textColor={config.text}
          onClick={() => onItemClick('Skills')} 
        />
        <FloatingItem 
          position={[0, 0, 2]} 
          label="Achievements" 
          hasRing={true}
          distort={false}
          color="#f59e0b"
          textColor={config.text}
          onClick={() => onItemClick('Achievements')} 
        />
        <FloatingItem 
          position={[-4, -2, 0]} 
          label="About Me" 
          distort={true}
          hasRing={false}
          color={config.act}
          textColor={config.text}
          onClick={() => onItemClick('About Me')} 
        />
        <FloatingItem 
          position={[4, -2, 0]} 
          label="Contact" 
          hasRing={true}
          distort={false}
          color="#ef4444"
          textColor={config.text}
          onClick={() => onItemClick('Contact')} 
        />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
