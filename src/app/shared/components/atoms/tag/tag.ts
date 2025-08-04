import { Component, computed, input } from '@angular/core';
import { TagOptions, TagSize } from '@app/models';

@Component({
	selector: 'app-tag',
	imports: [],
	templateUrl: './tag.html',
	styleUrl: './tag.scss',
})
export class Tag {
	label = input.required<string>();
	color = input.required<string>();
	options = input<TagOptions>();

	_label = computed(() => {
		const { upperCase } = this.options() || {};

		if (upperCase) return this.label().toLocaleUpperCase();

		return this.label();
	});

	_size = computed(() => {
		const { size } = this.options() || {};

		return size ? `tag--${size}` : `tag--${TagSize.SMALL}`;
	});
}
