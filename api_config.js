// API密钥配置文件
// 请在此文件中配置您的各种API密钥

const API_CONFIG = {
    // Coze API配置
    COZE: {
        API_TOKEN: 'pat_YZLs0q3UrzudVISqiEtO0ZeGO2NRoLYLEBsSTnBvt2d4G4cOYJhQANX5Kau6pLGE',
        API_URL: 'https://api.coze.cn/v1/workflow/run',
        WORKFLOW_ID: '7545716297935028258'
    },
    
    // 图片分析API配置 (ARK/豆包)
    IMAGE_ANALYSIS: {
        API_KEY: '1132936a-f20d-4270-838b-4565de9e0087',
        API_URL: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
        MODEL: 'doubao-1-5-thinking-vision-pro-250428'
    },
    
    // 其他API配置可以在这里添加
    // OPENAI: {
    //     API_KEY: 'your-openai-api-key',
    //     API_URL: 'https://api.openai.com/v1/chat/completions'
    // }
};

// 检查API密钥是否已配置的函数
function checkApiKey(service) {
    switch(service) {
        case 'COZE':
            return API_CONFIG.COZE.API_TOKEN && API_CONFIG.COZE.API_TOKEN !== 'YOUR_COZE_API_TOKEN';
        case 'IMAGE_ANALYSIS':
            return API_CONFIG.IMAGE_ANALYSIS.API_KEY && API_CONFIG.IMAGE_ANALYSIS.API_KEY !== 'YOUR_ARK_API_KEY';
        default:
            return false;
    }
}

// 获取API配置的函数
function getApiConfig(service) {
    return API_CONFIG[service] || null;
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIG, checkApiKey, getApiConfig };
}
