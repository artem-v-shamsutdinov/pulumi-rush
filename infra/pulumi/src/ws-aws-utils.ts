import {Context} from '@pulumi/aws/lambda/lambdaMixins'
import * as awsx from '@pulumi/awsx'
import * as pulumi    from '@pulumi/pulumi'

export interface IConfig {
	[key: string]: any
}

export type IHandlerCallback = {
	(
		event: awsx.apigateway.Request,
		context: Context
	): Promise<awsx.apigateway.Response>
}

export const config            = new pulumi.Config()

export function getHandle<T>(
	callback: () => Promise<T>
): IHandlerCallback {
	return async (
		event: awsx.apigateway.Request,
		context: Context
	) => {
		let statusCode = 200
		let data
		try {
			data = await callback()
		} catch (e) {
			statusCode = 500
			data       = e
		}

		return {
			statusCode,
			body: JSON.stringify(data),
			headers: {'content-type': 'application/json'},
		}
	}
}

