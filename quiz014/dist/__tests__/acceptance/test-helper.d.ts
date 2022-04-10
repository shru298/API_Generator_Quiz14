import { Quiz14Api } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Quiz14Api;
    client: Client;
}
