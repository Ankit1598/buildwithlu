import React, { useState } from "react";
import {
	DropDownContainer,
	DropDownList,
	DropDownLink,
} from "./DropDown.elements";

function DropDown(menu) {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			<DropDownContainer onClick={handleClick} click={click}>
				{menu["menu"].map((item, index) => {
					console.log(item.path)
					return (
						<DropDownList key={index}>
							<DropDownLink href={item.path} onClick={() => setClick(false)}>
								{item.title}
							</DropDownLink>
						</DropDownList>
					);
				})}
			</DropDownContainer>
		</>
	);
}

export default DropDown;
