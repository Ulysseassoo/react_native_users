import { Heading } from "native-base"
import React from "react"

interface Props {
	name: string
}

const Town = ({ name }: Props) => {
	return (
		<Heading color="amber.800" pb="2">
			{name}
		</Heading>
	)
}

export default Town
