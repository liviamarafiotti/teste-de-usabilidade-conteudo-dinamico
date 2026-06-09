import { FlowProvider } from "./flow/FlowContext";
import EditorScreen from "./screens/EditorScreen";

export default function App() {
  return (
    <FlowProvider>
      <EditorScreen />
    </FlowProvider>
  );
}
