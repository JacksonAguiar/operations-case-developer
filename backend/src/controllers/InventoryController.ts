import { Request, Response } from "express";
import { ProductDTO, UpdateProductDTO } from "../dto/InventoryDTO";
import { plainToClass } from "class-transformer";
import InventoryRepository from "../repositories/InventoryRepository";

class InventoryController {
  async createProduct(req: Request, res: Response) {
    const productDTO = plainToClass(ProductDTO, req.body);

    await InventoryRepository.create(productDTO);

    res.status(201).json({
      message: "Product created successfully",
    });
  }

  async getProducts(req: Request, res: Response) {
    const { id } = req.params;

    var result;
    if (id) {
      result = await InventoryRepository.getById(id);
      if (!result) {
        res.status(404).json({
          message: "Product not found",
        });
      }
    } else {
      result = await InventoryRepository.get();
    }

    res.status(200).json(result);
  }

  async getProductsByCategoryAndRange(req: Request, res: Response) {
    const { category, minRange, maxRange }: any = req.query;
    var result = await InventoryRepository.getByCategoryAndRange(
      category,
      minRange,
      maxRange
    );

    res.status(200).json(result);
  }

  async updateProduct(req: Request, res: Response) {
    const productDTO = plainToClass(UpdateProductDTO, req.body);
    const { id } = req.params;
    await InventoryRepository.update(productDTO, id);

    res.status(200).json({
      message: "Product updated successfully",
    });
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    await InventoryRepository.delete(id);
  }
}

export default new InventoryController();
