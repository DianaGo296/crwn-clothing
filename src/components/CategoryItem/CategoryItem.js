import React from 'react';
import './CategoryItem.style.scss'

export const CategoryItem = ({ category }) => {
	const { imageUrl, title } = category;

	return (
		<div className='category-container'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='category-body-container'>
				<h2>{title.toLocaleUpperCase()}</h2>
				<span>SHOP NOW</span>
			</div>
		</div>
	)
}

