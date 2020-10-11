import Plugin from '../../src/core/Plugin'
import datasourceDefinition from './datasource.definition'
import contextMenu from './menu'


export default class JsonArrayDatasourcePlugin extends Plugin{
    constructor(api, context){
        super(api, context);
        api.store.datasourceManager.addDatasourceDefinition(datasourceDefinition, context.pluginDir);
        api.store.contextMenu.registerPlugin(contextMenu, "json-array-datasource");
    }

    
} 