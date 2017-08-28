// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 2.0

// development and production host
const hosts = {
    development: 'http://localhost:3020',
    production: 'https://www.learningwang.top/books/'
}

// apis
const api = {
    user: {
		/**
		 * login api
		 * need header:
		 * {
		 *   'x-wechat-code': code,
		 *   'x-wechat-encrypted': encryptedData,
		 *   'x-wechat-iv': iv
		 * }
		 */
        hootBooks: {
            method: 'GET',
            url: '/getHotBooks/'
        },
        login: {
            method: 'GET',
            url: '/weChatLogin/'
        },
        userInfo: {
            method: 'GET',
            url: '/getUserInfoById/'
        },
        editInfo: {
            url: '/finishUserInfo/',
            method: 'PUT'
        }
    },
    common: {
        hootBooks: {
            method: 'GET',
            url: 'getHotBooks/'
        },
        recommend: {
            method: 'GET',
            url: '/findEveryDayBooks/'
        },
        classify: {
            method: 'GET',
            url: '/findBookTypeById/'
        },
        search: {
            method: 'GET',
            url: '/findBooksByKey/'
        },
        classifyById: {
            method: 'GET',
            url: '/getBooksByTypeid/'
        },
        bookCount: {
            method: 'GET',
            url: '/getBookCaseById/'
        },
        relevant: {
            method: 'GET',
            url: '/getRelativeBooks/'
        }


    },
    lendBook: {
        getLendBooks: {
            method: 'GET',
            url: '/getLendBooks/'
        }
    },
    collectBook: {
        getCollectBook: {
            method: 'GET',
            url: '/getCollectBooks/'
        }
    },
    appointBook: {
        getAppointBook:{
            method: 'GET',
            url: '/getAppointBooks/'
        }
    },
    notifications: {
        count: {
            method: 'GET',
            url: '/v2/notifications'
        },
        messages: {
            method: 'GET',
            url: '/v2/notifications/messages'
        },
        read: {
            method: 'PUT',
            url: '/v2/notifications'
        }
    },
    configs: {
        method: 'GET',
        url: '/v2/configs'
    }
}

module.exports = {
    env,
    version,
    api: disposeUrl(api, hosts[env])
}

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })

    return obj
}
