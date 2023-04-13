// import db from "../config/database.js";

import prisma from "../config/database";

async function getCars() {
  // const data = await db.query(`SELECT * FROM cars`);
  // return data.rows;
  return prisma.cars.findMany()

}

async function getCar(id: number) {
  // const data = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
  // return data.rows[0];
  return prisma.cars.findFirst({ where: { id: id } })
}

async function getCarWithLicensePlate(licensePlate: string) {
  // const data = await db.query(`SELECT * FROM cars WHERE "licensePlate" = $1`, [licensePlate]);
  // return data.rows[0];
  return prisma.cars.findFirst({ where: { licensePlate: licensePlate } })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  // await db.query(
  // `INSERT INTO cars (model, "licensePlate", year, color)
  //  VALUES ($1, $2, $3, $4)`,
  // [model, licensePlate, year, color]
  // );
  prisma.cars.create({
    data: {
      color: color,
      licensePlate:licensePlate,
      model:model,
      year:year
    }
  })
}

async function deleteCar(id: number) {
  // await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
  prisma.cars.delete({
    where:{
      id:id
    }
  })  
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;