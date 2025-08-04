export enum TagSize {
	SMALL = 'sm',
	LARGE = 'lg',
	EXTRA_LARGE = 'xl',
}

export type TagData = {
	label: string;
	color: string;
};

export type TagOptions = {
	upperCase?: boolean;
	size?: TagSize;
};
