// import db from "../config/database.js";

import prisma from "../config/database.js";
async function getCars() {
  // const data = await db.query(`SELECT * FROM cars`);
  // return data.rows;
  const data = prisma.cars.findMany()
  return data
  

}

async function getCar(id: number) {
  // const data = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
  // return data.rows[0];
  return prisma.cars.findFirst({ where: { id } })
}

async function getCarWithLicensePlate(licensePlate: string) {
  // const data = await db.query(`SELECT * FROM cars WHERE "licensePlate" = $1`, [licensePlate]);
  // return data.rows[0];
  return prisma.cars.findFirst({ where: { licensePlate } })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  // await db.query(
  // `INSERT INTO cars (model, "licensePlate", year, color)
  //  VALUES ($1, $2, $3, $4)`,
  // [model, licensePlate, year, color]
  // );
  await prisma.cars.create({
    data: {
      color: color,
      licensePlate: licensePlate,
      model: model,
      year: year
    }
  })
}

async function deleteCar(id: number) {
  // await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
  prisma.cars.delete({ where: { id } })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;