import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
	return (
		<div className='content'>
			<div className='content__img'>
				<img src='404.png' alt='nave-404' />
				<p className='content__number'>
						404
				</p>
			</div>
			<div className='content__description'>
				<p className='content__error'>
					UPSSSS!! Something wrong!, Page Not Found.
				</p>
				<a href="/" className='content__button'>Get me out of Here!</a>
			</div>
		</div>

	);
}

export default NotFound;