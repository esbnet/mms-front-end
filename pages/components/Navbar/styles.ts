import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	ul {
		display: flex;
		justify-content: space-around;
		max-width: 1200px;

		li {
			margin: 10px;
			list-style: none;
			color: #fff;

			a:hover {
				color: yellow;
				text-decoration: none;
			}

			a:active {
				text-decoration: underline;
			}
		}
	}
`;
