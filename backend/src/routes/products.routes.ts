import express from "express";
import InventoryController from "../controllers/InventoryController";

const ProductRoutes = express();

ProductRoutes.get("/", InventoryController.getProducts);
ProductRoutes.get("/:id", InventoryController.getProducts);
ProductRoutes.get(
  "/filter",
  InventoryController.getProductsByCategoryAndRange
);
ProductRoutes.post("/", InventoryController.createProduct);
ProductRoutes.patch("/", InventoryController.updateProduct);
ProductRoutes.delete("/:id", InventoryController.deleteProduct);

export default ProductRoutes;
