/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IActionContext } from 'vscode-azureextensionui';
import { CosmosDBConnection } from '../../explorer/CosmosDBConnection';
import { ext } from "../../extensionVariables";

export async function revealConnection(context: IActionContext, node?: CosmosDBConnection): Promise<void> {
    if (!node) {
        node = await ext.tree.showTreeItemPicker<CosmosDBConnection>(CosmosDBConnection.contextValue, { ...context, suppressCreatePick: true });
    }

    await node.cosmosExtensionItem.reveal();
}
