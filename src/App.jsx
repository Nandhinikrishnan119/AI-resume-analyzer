import AppRoutes from "./routes/Approutes";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
