// 百度网盘去广告脚本
// 针对“我的”页面配置进行净化，移除“游戏中心”等冗余卡片

let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        
        // 针对 api/getconfig 或 api/getsyscfg 接口
        // 这些接口返回的通常是包含多个 key 的配置列表
        // 需要遍历 cfg_category_keys 并清空特定模块的内容
        
        if (obj.data && obj.data.cfg_category_keys) {
            obj.data.cfg_category_keys.forEach((item) => {
                // 清空“我的”页面配置，强制其使用默认或为空
                // 观察抓包，my_personal_page_settings 是关键配置项
                if (item.cfg_category_key === "my_personal_page_settings" || 
                    item.cfg_category_key === "personal_page_area") {
                    // 方法1：直接清空该配置的版本号，强迫客户端认为没有配置，可能回退到默认
                    // item.cfg_version = 0; 
                    
                    // 方法2：如果能修改内容，通常内容在另一个字段，但这里只看到了 key 列表。
                    // 百度网盘的配置获取机制通常是：先请求 key 列表，然后客户端对比本地版本，
                    // 如果过期，再发起请求获取具体内容。
                    // 直接 reject 掉获取具体内容的请求可能更有效。
                }
            });
        }
        
        // 针对具体的配置内容返回 (如果脚本挂载在获取具体内容的接口上)
        // 假设挂载在 /api/getconfig?method=query 具体查询接口
        if (obj.errno === 0 && obj.data) {
             // 有些配置是直接 Key-Value 形式返回
             if (obj.data.my_personal_page_settings) {
                 // 尝试清空配置内容，看是否能隐藏卡片
                 obj.data.my_personal_page_settings = "{}";
             }
             
             // 针对“游戏中心”独立模块配置
             if (obj.data.game_center_config) {
                 delete obj.data.game_center_config;
             }
        }
        
        $done({body: JSON.stringify(obj)});
    } catch (e) {
        // 解析失败，原样返回
        $done({});
    }
} else {
    $done({});
}
