/**
 * Created by kylin on 16/7/31.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.userPlaylists(312224813,function (data) {
    console.log(data);
})