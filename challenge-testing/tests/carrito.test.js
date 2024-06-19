const CarritoCompra = require('./carrito');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('inicializa el carrito como un array vacío', () => {
        expect(carrito.carrito).toEqual([]);
    });

    test('agrega un producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 100 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito).toContain(producto);
    });

    test('calcula el total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.calcularTotal()).toBe(300);
    });

    test('aplica un descuento al total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        const totalConDescuento = carrito.aplicarDescuento(10); // 10% de descuento
        expect(totalConDescuento).toBe(270);
    });

    test('calcula el total de la compra correctamente cuando el carrito está vacío', () => {
        expect(carrito.calcularTotal()).toBe(0);
    });

    test('aplica un descuento correctamente cuando el carrito está vacío', () => {
        const totalConDescuento = carrito.aplicarDescuento(10); // 10% de descuento
        expect(totalConDescuento).toBe(0);
    });
});