/** Default left sidebar — the component palette (Figma-exported raster). */
export default function ComponentList() {
  return (
    <aside className="absolute left-0 top-[106px] z-[25] h-[872px] w-[350px] bg-surface shadow-lg">
      <img
        src="/assets/component-list.png"
        alt="Editar Landing Page — lista de componentes"
        className="h-full w-full object-cover"
      />
    </aside>
  );
}
