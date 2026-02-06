/*
 * 天翼生活去广告脚本
 * 当 reject-dict 导致APP异常时使用此脚本
 * 返回符合APP预期格式的空数据
 */

const emptyResponse = {
    "TSR_CODE": "0",
    "TSR_MSG": "success",
    "data": null
};

$done({ body: JSON.stringify(emptyResponse) });
