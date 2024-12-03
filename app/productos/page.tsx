import { Suspense } from "react";
import ProductosContent from "./ProductosContent";

export const dynamic = "force-dynamic";

export default function Productos() {
  return (
    <Suspense fallback={<p>Cargando productos...</p>}>
      <ProductosContent />
    </Suspense>
  );
}
