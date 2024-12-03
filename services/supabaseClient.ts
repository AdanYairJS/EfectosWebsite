import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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
  productCode: string; // Ahora usamos `productCode`
  userName: string;
  email: string;
  address: string;
  phone: string;
  generatedKey: string;
  payment: number;
}) {
  const { data, error } = await supabase.from("apartados").insert([
    {
      client_name: userName, // Nombre del cliente
      client_email: email, // Correo del cliente
      client_adress: address, // Dirección del cliente
      status: "Pendiente", // Estado inicial
      payment: payment, // Importe del pago (30% del precio)
      product_code: productCode, // Código del producto como clave foránea
      generated_key: generatedKey, // Clave generada
    },
  ]);

  if (error) {
    console.error("Error inserting apartado:", error.message);
    return false;
  }

  return true;
}

