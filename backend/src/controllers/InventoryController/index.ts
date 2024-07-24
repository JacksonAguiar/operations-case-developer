import { Request, Response } from "express";
import { CreateProductDTO, UpdateProductDTO } from "./dto";
import { plainToClass } from "class-transformer";

class InventoryController {
  createProduct(req: Request, res: Response) {
    const productDTO = plainToClass(CreateProductDTO, req.body);
  }

  getProducts(req: Request, res: Response) {}

  getProductsByCategory(req: Request, res: Response) {
    const { category } = req.params;
  }
  
  getProduct(req: Request, res: Response) {
    const { id } = req.params;
  }
  
  updateProduct(req: Request, res: Response) {
    const productDTO = plainToClass(UpdateProductDTO, req.body);
  }

  deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
  }
}

export default new InventoryController();
