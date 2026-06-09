import { useFlow, useFlowDispatch } from "../../flow/FlowContext";
import { asset } from "../../lib/asset";
import { cn } from "../../lib/cn";
import Icon from "../ui/Icon";

/**
 * Landing page canvas. The page itself is a Figma-exported raster; the title
 * element is an interactive hotspot used to attach dynamic content.
 */
export default function Preview() {
  const { selectedElement, elementDynamicOn } = useFlow();
  const dispatch = useFlowDispatch();
  const selected = selectedElement === "botao";

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden">
      <img
        src={asset("assets/preview.png")}
        alt="Pré-visualização da landing page"
        className="pointer-events-none absolute left-[-80px] top-[110px] h-[976px] w-[1912px] max-w-none object-cover"
      />

      {/* Title element hotspot (frame coords: x893 y161 482x129) */}
      <button
        type="button"
        aria-label="Selecionar título da Landing Page"
        onClick={() => dispatch({ type: "SELECT_ELEMENT", element: "botao" })}
        style={{ left: 893, top: 161, width: 482, height: 129 }}
        className={cn(
          "group absolute z-10 rounded-[2px] transition-all duration-200 ease-in-out",
          selected
            ? "ring-2 ring-primary-surface"
            : "ring-2 ring-transparent hover:ring-2 hover:ring-primary-surface/50"
        )}
      >
        {selected && elementDynamicOn && (
          <span className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary-surface text-white shadow-xs animate-scale-in">
            <Icon name="code-merge" size={16} />
          </span>
        )}
      </button>
    </div>
  );
}
