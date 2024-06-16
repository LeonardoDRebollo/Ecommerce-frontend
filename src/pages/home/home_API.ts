// Definir los tipos de Producto y Section
interface Producto {
    imagen: string;
    nombre_producto: string;
    precio: number;
  }


  interface Categoria{
    icono: string;
    nombre_categoria: string;
  }
  
  interface Section {
    title: string;
    productos: Producto[];
  }
  
  // Simular la llamada a la API con datos estáticos
  export const mockApiData = {
    sections: [
      {     
        title: "OFERTAS DEL DÍA",
        productos: [
          { imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg", nombre_producto: "Producto 1", precio: 100 },
          { imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/0b41e24d-24e8-4cbe-83da-ecce450eac62.7bfec2164b6d0408c73aab48df95b601.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", nombre_producto: "Producto 2 fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", precio: 200 },
          { imagen: "https://m.media-amazon.com/images/I/71sWVYmpkhL.jpg", nombre_producto: "Producto 2 Producto 2 fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", precio: 200 },
          { imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwGQ8mI2C89GWpO0rH-FWOGBoJ19nsJK72A&s", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/188094241/telefono-con-teclado-grande-y-pantalla.jpg", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://m.media-amazon.com/images/I/717njqTYEJL._AC_UF894,1000_QL80_.jpg", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://m.media-amazon.com/images/I/61hZQrYWXpL._AC_UF894,1000_QL80_.jpg", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24zZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCZkNDUmN0SlpnYXpQNFNTbUVsbTlnST0=", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://mabeglobal.com/medias/mabeV2-Mabe-Lavadora-25kg-diamond-gray-LMP75201WDAB0-derecha-V2.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzA0MDl8aW1hZ2UvanBlZ3xhR1ExTDJnell5ODVPREkxTmpFd05EazRNRGM0TDIxaFltVldNbDlOWVdKbExVeGhkbUZrYjNKaExUSTFhMmN0WkdsaGJXOXVaQzFuY21GNUxVeE5VRGMxTWpBeFYwUkJRakF0WkdWeVpXTm9ZUzFXTWk1cWNHZGZNVEl3TUZkNE1USXdNRWd8OGRkYjFkNTZlNjBkYmFmNmViZmI3MWJjZDdhNGQ3NDY4YTVhOWI3ZmJiYTM5MDA4MGM1NDVkNjhjNzYzZGI5OA", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://www.lg.com/content/dam/channel/wcms/mx/images/lavadoras-y-secadoras/wm22vv2s6gr_asselat_enms_mx_c/gallery/DZ_01.jpg", nombre_producto: "Producto 2", precio: 200 },
          { imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9DHAbX1RMK-jOq00ffQkM7fA3-0ZQGEeZw&s", nombre_producto: "Producto 2", precio: 200 },
        ],
      },
      {
        title: "MODA PARA TODOS",
        productos: [
          { imagen: "https://www.tiendaenlinea.unam.mx/storage/products/1663/1862/3001000026172-1674147188-114.jpg", nombre_producto: "Producto 3", precio: 300 },
          { imagen: "https://www.innovasport.com/medias/chamarra-the-north-face-antora-triclimate-is-NF0A7UJPKZ3-3.jpg?context=bWFzdGVyfGltYWdlc3w4MDc2OXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDM1LzExMzk3ODI5MDY2NzgyLmpwZ3xiMjliMzQ3OWMyNzBkMDkwNWM4YmJmN2Y3MmZhYTQ0ZWVlMWUwY2UyYmQwYTgwOWY2ZTFhOWY1Zjg2YTY3ZTcy", nombre_producto: "Producto 4", precio: 400 },
        ],
      },
      {
        title: "AUTOMOVILES",
        productos: [
          { imagen: "https://www.tiendaenlinea.unam.mx/storage/products/1663/1862/3001000026172-1674147188-114.jpg", nombre_producto: "Producto 3", precio: 300 },
          { imagen: "https://www.innovasport.com/medias/chamarra-the-north-face-antora-triclimate-is-NF0A7UJPKZ3-3.jpg?context=bWFzdGVyfGltYWdlc3w4MDc2OXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDM1LzExMzk3ODI5MDY2NzgyLmpwZ3xiMjliMzQ3OWMyNzBkMDkwNWM4YmJmN2Y3MmZhYTQ0ZWVlMWUwY2UyYmQwYTgwOWY2ZTFhOWY1Zjg2YTY3ZTcy", nombre_producto: "Producto 4", precio: 400 },
        ],
      },
      {
        title: "TELEFONÍA A GRANDES PRECIOS",
        productos: [
          { imagen: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818", nombre_producto: "Producto 5", precio: 500 },
          { imagen: "https://cdn1.coppel.com/images/catalog/pm/2368973-1.jpg", nombre_producto: "Producto 6", precio: 600 },
        ],
      },
    ],
  };
  
  // Simular una función para obtener los datos
  export const fetchSections = async (): Promise<{ sections: Section[] }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockApiData);
      }, 1000); // Simula un retardo de 1 segundo
    });
  };
  