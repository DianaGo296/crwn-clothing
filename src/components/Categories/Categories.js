import React from 'react'
import './Categories.style.scss'
import { CategoryItem } from '../CategoryItem/CategoryItem'

export const Categories = ({categories}) => {
	return (
		<div className='categories-container'>
			{
				categories.map(category => (
					<CategoryItem key={category.id} category={category} />
				))
			}
		</div>
	)
}
