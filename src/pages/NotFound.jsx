import React from 'react';
import '@styles/NotFound.scss'

import nave from '@icons/404.png'

const NotFound = () => {
	return (
		<div className='content'>
			<div className='content__img'>
				<img src={nave} alt='nave-404' />
				<p className='content__number'>
						404
				</p>
			</div>
			<div className='content__description'>
				<p className='content__error'>
					UPSSSS!! Something wrong!, Page Not Found.
				</p>
				<input type="submit" value="Get me out of Here!" className='content__button' />
			</div>
		</div>

	);
}

export default NotFound;