import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ercanbelul.umrehesaplayici',
  appName: 'umreHesaplayici',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    allowNavigation: [
      "api.frankfurter.app"
    ]
  }
};

export default config;
