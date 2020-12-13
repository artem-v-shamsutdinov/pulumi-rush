import {
	getWsHandler,
	IWsConfig
} from '@pulumi-rush/ws'
import * as awsx from '@pulumi/awsx'
import {
	config,
	getHandle
}                from './ws-aws-utils'

export const wsConfig = config.requireObject<IWsConfig>('ws')

new awsx.apigateway.API('ws-aws', {
	routes: [{
		path: '/search',
		method: 'GET',
		eventHandler: getHandle(getWsHandler(wsConfig))
	}]
})
