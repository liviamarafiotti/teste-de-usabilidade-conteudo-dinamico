import ComponentList from "../components/editor/ComponentList";
import DynamicContentDrawer from "../components/editor/DynamicContentDrawer";
import ElementPanel from "../components/editor/ElementPanel";
import Navbar from "../components/editor/Navbar";
import Preview from "../components/editor/Preview";
import Subheader from "../components/editor/Subheader";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";
import { useFlow, useFlowDispatch } from "../flow/FlowContext";

export default function EditorScreen() {
  const { drawerOpen, deleteTargetId, toast, selectedElement } = useFlow();
  const dispatch = useFlowDispatch();

  return (
    <div className="flex min-h-full items-start justify-center overflow-x-auto bg-[#3a3a3a] py-0">
      <div className="relative h-[900px] w-[1440px] shrink-0 overflow-hidden bg-surface">
        {/* Editor chrome */}
        <div className="relative z-30">
          <Navbar />
          <Subheader />
        </div>

        {/* Canvas */}
        <Preview />

        {/* Left panel: palette or selected-element editor */}
        {selectedElement ? <ElementPanel /> : <ComponentList />}

        {/* Right "Conteúdo dinâmico" drawer */}
        {drawerOpen && <DynamicContentDrawer />}

        {/* Delete confirmation modal */}
        {deleteTargetId && (
          <Modal
            title="Excluir regra"
            onClose={() => dispatch({ type: "CANCEL_DELETE_RULE" })}
            footer={
              <>
                <Button variant="outline" onClick={() => dispatch({ type: "CANCEL_DELETE_RULE" })}>
                  Cancelar
                </Button>
                <Button variant="danger" onClick={() => dispatch({ type: "CONFIRM_DELETE_RULE" })}>
                  Excluir regra
                </Button>
              </>
            }
          >
            A exclusão desta regra fará com que todos os componentes vinculados a ela parem de exibir conteúdos
            dinâmicos personalizados. Deseja excluir a regra?
          </Modal>
        )}

        {/* Toast */}
        {toast && (
          <Toast title={toast.title} description={toast.description} onClose={() => dispatch({ type: "DISMISS_TOAST" })} />
        )}
      </div>
    </div>
  );
}
