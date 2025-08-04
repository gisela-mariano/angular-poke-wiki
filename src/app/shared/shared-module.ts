import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Card } from '@shared/components/molecules/card/card';

@NgModule({
	declarations: [],
	imports: [CommonModule, Card],
	exports: [Card],
})
export class SharedModule {}
