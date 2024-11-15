import { createClient } from '@/utils/supabase/server';

export default async function Productos() {
  const supabase = await createClient(); // Espera a que la promesa se resuelva
  const { data: productos } = await supabase.from("productos").select();

  return <pre>{JSON.stringify(productos, null, 2)}</pre>;
}
