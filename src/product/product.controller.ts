import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDto } from './dto/product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService, private prisma: PrismaService) {}

	@Get("/")
	testProduct() {
		let gg: {
			name: string;
			age: number
		}[] = [
			{
				name: "k",
				age: 25
			},
			{
				name: "gg",
				age: 25
			}
		];

		return "fffff";
	}

	@Get("/allProduct")
	async allProduct() {
		let data = await this.prisma.product.findMany();
		return data; 
	}

	@Get("/singleProduct/:id")
	async singleProduct(@Param("id", ParseIntPipe) id: number) {
		let data = await this.prisma.product.findUnique({
			where: { id }
		});

		// let data = await this.prisma.product.findUnique({ 
		// 	where: { id: id }
		// });

		return data;
	}

	@Post("/create")
	async createProduct(@Body() productDto: productDto) {
		let {name} = productDto;

		let data = await this.prisma.product.create({
			data: { 
				name: name 
			},
		});

		// let data = await this.prisma.product.create({
		// 	data: productDto
		// })

		return data;
	}

	@Put("/update/:id")
	async updateProduct(
		@Param("id", ParseIntPipe) id: number,
		@Body() productDto: productDto
	) {
		let { name } = productDto;
		let data = await this.prisma.product.update({
			data: {
				name: name
			},
			where: { id }
		});

		return data;
	}

	@Delete("/delete/:id")
	async deleteProduct(@Param("id", ParseIntPipe) id: number) {
		await this.prisma.product.delete({ where: { id }});

		return "success deleted";
	}
}
