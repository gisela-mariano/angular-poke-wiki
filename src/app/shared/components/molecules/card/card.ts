import { TagData } from '@/app/models';
import { Component, input } from '@angular/core';
import { Tag } from '@shared/components/atoms/tag/tag';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';

@Component({
	selector: 'app-card',
	imports: [Tag, Skeleton, SkeletonModule],
	templateUrl: './card.html',
	styleUrl: './card.scss',
})
export class Card {
	spriteUrl = input.required<string>();
	name = input.required<string>();
	identifierNumber = input<number>();
	tags = input<TagData[]>();
	isLoading = input<boolean>(false);
}
