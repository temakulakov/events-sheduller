import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import './globals.css';

// const queryClient = new QueryClient();

const RootLayout = ({ children }: React.PropsWithChildren) => (
	<AntdRegistry>
		<html lang='ru'>
			<body>{children}</body>
		</html>
	</AntdRegistry>
);

export default RootLayout;
