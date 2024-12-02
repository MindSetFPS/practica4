import sqlite3 from "sqlite3";
import { open } from "sqlite"

export async function GET(request: Request) {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })
    
/*     await db.exec(`
        CREATE TABLE camion (
            id INT PRIMARY KEY,
            nombre VARCHAR(50),
            totalalmacenaje DECIMAL(10,2),
            marca VARCHAR(30),
            placas VARCHAR(30)
        );
    `) */
    
    await db.exec(`
        INSERT INTO camion (id, nombre, totalalmacenaje, marca, placas) VALUES 
    (1, 'Volvo FE 640', 23.50, 'Volvo', 'ABC123'),
    (2, 'Scania R480', 25.75, 'Scania', 'CBA321'),
    (3, 'Mercedes Benz Actros', 28.90, 'Mercedes-Benz', 'EFG654'),
    (4, 'Iveco Stralis', 22.10, 'Iveco', 'HGF567'),
    (5, 'Renault Traff', 24.35, ' Renault', 'JKL890'),
    (6, 'DAF XF95', 26.50, 'DAF Trucks', 'MNO741'),
    (7, 'Man TGS', 29.20, 'Man SE', 'PQR856'),
    (8, 'Kia Bongotipon', 21.80, 'Ssangyong Commercial Vehicles', 'STU910'),
    (9, 'Fiat Ducato', 27.50, 'Fiat Professional', 'VWX123'),
    (10, 'Volkswagen Crafter', 25.20, 'MAN SE, Volkswagen Aktiengesellschaft', 'YZA456'),
    (11, 'Mercedes Benz Actros Mp3', 32.50, 'Mercedes-Benz', 'GHI901'),
    (12, 'Iveco Eurotech 2000', 29.10, 'Iveco', 'JKL012'),
    (13, 'Volvo FH 16x2', 35.20, 'Volvo', 'MNO345'),
    (14, 'Scania S730', 38.50, 'Scania', 'PQR678'),
    (15, 'DAF XF95', 32.90, 'DAF Trucks', 'STU901'),
    (16, 'MAN TGS 18.310', 30.10, 'Man SE', 'UVW123'),
    (17, 'Kia K3000', 33.20, 'Ssangyong Commercial Vehicles', 'XYZ456'),
    (18, 'Fiat Ducato', 31.50, 'Fiat Professional', 'ABC789'),
    (19, 'Volkswagen Crafter', 34.90, 'MAN SE, Volkswagen Aktiengesellschaft', 'BDM234'),
    (20, 'Renault Traff', 36.10, ' Renault', 'EFHG567'),
    (21, 'Hino 700 Series', 38.20, 'Toyota Motor Corporation', 'IJKL890'),
    (22, 'Mitsubishi Fuso Canter', 35.60, 'Daimler AG', 'MNOP123'),
    (23, 'Isuzu N Series', 32.90, ' Isuzu Motors Limited', 'PQR456'),
    (24, 'Hino RN 200', 30.50, 'Toyota Motor Corporation', 'STU789'),
    (25, 'Fuso Canter Eco-Friendly', 31.20, 'Daimler AG', 'UVW012'),
    (26, 'Peugeot Boxer', 33.60, 'PSA Peugeot Citroën', 'XYZ345'),
    (27, 'Citroen Jumper', 35.90, 'PSA Peugeot Citroën', 'ABC901'),
    (28, 'Mercedes-Benz Citan', 32.10, 'Daimler AG', 'BDM567'),
    (29, 'Renault Master', 34.20, ' Renault', 'EFHG890'),
    (30, 'Iveco Daily', 36.50, 'Iveco', 'IJKL123');
    
    `)

    return Response.json(await db.all("SELECT * FROM camion"))
}