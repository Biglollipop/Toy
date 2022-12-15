import React, { useState, useEffect, useRef } from 'react'

const LikeButton: React.FC = () => {
	const [like, setLike] = useState<number>(0)
	const likeRef = useRef(0)
	const inpRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		document.title = `点击了多少次 ${like}`
	}, [like])

	const handlerAlertClick = () => {
		setTimeout(() => {
			alert(`当前状态值 ${likeRef.current}`)
		}, 1500)
	}
	useEffect(() => {
		if (inpRef && inpRef.current) {
			// inpRef.current.focus()
		}
	})
	return (
		<>
			<button onClick={handlerAlertClick}>alert</button>
			<br />
			<button
				onClick={() => {
					setLike(like + 1)
					likeRef.current++
				}}
			>
				点赞 {likeRef.current} 👍
			</button>
			<br />
			<input type="text" ref={inpRef} />
		</>
	)
}

export default LikeButton
