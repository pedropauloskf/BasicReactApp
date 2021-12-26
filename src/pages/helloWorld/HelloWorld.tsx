import React, { ReactElement } from 'react';

import logo from '../../logo.svg';
import { Code, Header, Link, Logo, Paragraph } from './styles';

export const HelloWorld = (): ReactElement => {
	return (
		<Header>
			<Logo src={logo} alt='logo' />
			<Paragraph>
				Edit <Code>src/App.tsx</Code> and save to reload.
			</Paragraph>
			<Link href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
				Learn React
			</Link>
		</Header>
	);
};
