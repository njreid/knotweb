import { readable } from 'svelte/store'

export const knots = readable([
	{
		name: 'Bowline',
		description:
			'A strong, reliable loop knot that is easy to untie after use. It can be used for rescuing people or objects, securing a mooring line, or as a climbing knot.',
		use_category: 'Sailing, Climbing, Rescue'
	},
	{
		name: 'Clove Hitch',
		description:
			'A simple knot that is used to secure a rope to a post or other fixed object. It can also be used as a starting point for more complex knots.',
		use_category: 'Sailing, Climbing, Rescue'
	},
	{
		name: 'Square Knot',
		description:
			'A basic knot often used to join two ropes together. It can also be used to tie a bandage or to secure a package.',
		use_category: 'Sailing, Climbing, Rescue, First Aid'
	},
	{
		name: 'Half Hitch',
		description:
			'A simple knot that is often used as a building block for more complex knots. It can be used to secure a rope to a post or other fixed object.',
		use_category: 'Sailing, Climbing, Rescue'
	},
	{
		name: 'Sheet Bend',
		description:
			'A knot used to join two ropes of different thicknesses together. It can also be used to tie a bandage or to secure a package.',
		use_category: 'Sailing, Climbing, Rescue, First Aid'
	},
	{
		name: 'Rolling Hitch',
		description:
			'A knot used to secure a rope to a cylindrical object, such as a pole or pipe. It is also used in climbing and rescue situations.',
		use_category: 'Sailing, Climbing, Rescue'
	},
	{
		name: "Fisherman's Knot",
		description:
			'A strong knot often used by anglers to join two lines or to tie a fly to a leader. It can also be used in rescue and climbing situations.',
		use_category: 'Fishing, Climbing, Rescue'
	},
	{
		name: "Double Fisherman's Knot",
		description:
			'A strong and secure bend knot that is often used in climbing and rescue situations. It is also used by divers to secure their tanks.',
		use_category: 'Climbing, Rescue, Scuba Diving'
	},
	{
		name: 'Water Knot',
		description:
			'A strong and secure bend knot that is often used to join two pieces of webbing together. It is also used in climbing and rescue situations.',
		use_category: 'Climbing, Rescue, Outdoor'
	},
	{
		name: "Trucker's Hitch",
		description:
			'A knot used to secure a load on a truck or trailer. It can also be used to hoist a heavy object or as a makeshift pulley system.',
		use_category: 'Transportation, Lifting, Outdoor'
	},
	{
		name: 'Munter Hitch',
		description:
			'A knot used for belaying and rappelling in rock climbing and canyoneering. It is also used in rescue situations as a braking system.',
		use_category: 'Climbing, Rescue'
	},
	{
		name: 'Half Hitch',
		description:
			'A simple and basic knot that is often used as a starting point for more complex knots. It is often used to secure a rope to a post or tree.',
		use_category: 'Camping, Hiking'
	},
	{
		name: 'Mooring Hitch',
		description:
			'A knot used to secure a boat to a dock or mooring buoy. It is a secure and reliable knot that is easy to tie and untie.',
		use_category: 'Boating'
	},
	{
		name: 'Prusik Knot',
		description:
			'A knot often used in climbing and rescue work. It allows the rope to be easily moved, but will grip and hold in place if the rope is pulled tight.',
		use_category: 'Climbing, Rescue'
	},
	{
		name: 'Sheet Bend',
		description:
			'A knot often used to tie two ropes of different sizes together. It is a strong and reliable knot that is easy to tie and untie.',
		use_category: 'Camping, Hiking, Boating'
	},
	{
		name: "Stevedore's Knot",
		description:
			'A strong and secure knot often used in boating and cargo work. It is easy to tie and untie, and is often used to secure a rope to a load.',
		use_category: 'Boating, Cargo'
	}
])
