import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

interface Apartado {
  id: number;
  generated_key: string;
  product_code: string;
  created_at: string;
  client_name: string;
  client_email: string;
  status: string;
  payment: number;
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchProducts() {
  const { data: products, error } = await supabase.from("productos").select();

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return products || [];
}

export async function fetchProductById(productId: number) {
  const { data: product, error } = await supabase
    .from("productos")
    .select("id, name, price, codigo") 
    .eq("id", productId)
    .single();

  if (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }

  return product;
}


export async function insertApartado({
  productCode,
  userName,
  email,
  address,
  phone,
  generatedKey,
  payment,
}: {
  productCode: string; 
  userName: string;
  email: string;
  address: string;
  phone: string;
  generatedKey: string;
  payment: number;
}) {
  const { data, error } = await supabase.from("apartados").insert([
    {
      client_name: userName, 
      client_email: email,
      client_adress: address, 
      status: "Pendiente", 
      payment: payment,
      product_code: productCode, 
      generated_key: generatedKey,
    },
  ]);

  if (error) {
    console.error("Error inserting apartado:", error.message);
    return false;
  }

  return true;
}

// Obtener todos los apartados
export async function fetchApartados(): Promise<Apartado[]> {
  const { data, error } = await supabase.from("apartados").select("*");

  if (error) {
    console.error("Error fetching apartados:", error.message);
    return [];
  }

  return data as Apartado[];
}


// Actualizar estado de un apartado
export async function updateApartadoStatus(generatedKey: string, status: string) {
  const { error } = await supabase
    .from("apartados")
    .update({ status })
    .eq("generated_key", generatedKey);

  if (error) {
    console.error("Error updating apartado status:", error.message);
    return false;
  }

  return true;
}

// Cerrar sesión
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error during logout:", error.message);
    return false;
  }

  return true;
}

