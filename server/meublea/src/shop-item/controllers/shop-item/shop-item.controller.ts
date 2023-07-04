import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { ShopItemService } from 'src/shop-item/service/shop-item/shop-item.service';
import { CreateShopItemDto } from 'src/shop-item/controllers/dtos/CreateShopItem.dto';
import { UpdateShopItemDto } from 'src/shop-item/controllers/dtos/UpdateShopItem.dto';

@Controller('shop-item')
export class ShopItemController {
  constructor(private shopItemService: ShopItemService) { }

  @Get()
  getShopItems() {
    return this.shopItemService.findShopItem();
  }

  @Post()
  createShopItem(@Body() createShopItemDto: CreateShopItemDto) {
    return this.shopItemService.createShopItem(createShopItemDto);
  }

  @Patch(':id')


  @Put(':id')
  async updateShopItemById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShopItemDto: UpdateShopItemDto,
  ) {
    await this.shopItemService.updateShopItem(id, updateShopItemDto);
  }
  @Delete(':id') // Ajoutez la méthode DELETE avec l'annotation @Delete et le paramètre 'id'
  async deleteShopItemById(@Param('id', ParseIntPipe) id: number) {
    await this.shopItemService.deleteShopItem(id);
  }
}
