export interface IWsConfig {
	bogus: string
}

export type IWsHandlerCallback<T> = {
	(
		// input: unknown,
	): Promise<T>
}

export function getWsHandler<T>(
	config: IWsConfig
): IWsHandlerCallback<T> {
	return async (
		// input: unknown,
	) => {
		return await runWs(config)
	}
}

export async function runWs(
	// input: unknown,
	config: IWsConfig
): Promise<any> {
	return {
		name: config.bogus
	}
}
