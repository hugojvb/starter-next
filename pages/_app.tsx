import React, { FC } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../styles/theme";
import createCache, { EmotionCache } from "@emotion/cache";

export default function MyApp({
	Component,
	emotionCache = createCache({ key: "css" }),
	pageProps,
}: {
	Component: FC<typeof pageProps>;
	emotionCache: EmotionCache;
	pageProps: Object;
}) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>My page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
