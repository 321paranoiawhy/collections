/**
 *
 * @param money 金额 (数字或字符串)
 *
 * @returns 返回其汉字表示
 */
export const toChinesePrice = (money: string | number): string => {
    if (!/^(0|[1-9]\d*)(\.\d*)?$/.test(+money)) {
        return ''
    }

    let unit = '千百拾亿千百拾万千百拾元角分'
    // 量词
    const quantifiers = '零壹贰叁肆伍陆柒捌玖'

    let str = ''
    money = money.replace(',', '')
    money += '00'

    const dotIndex = money.indexOf('.')
    if (dotIndex > -1) {
        money = money.substring(0, dotIndex) + money.substr(dotIndex + 1, 2)
    }

    unit = unit.slice(unit.length - money.length)

    for (let i = 0; i < money.length; i++) {
        str += quantifiers.charAt(money.charAt(i)) + unit.charAt(i)
    }

    return str
        .replace(/零(千|百|拾|角)/g, '零')
        .replace(/(零)+/g, '零')
        .replace(/零(万|亿|元)/g, '$1')
        .replace(/(亿)万|壹(拾)/g, '$1$2')
        .replace(/^元零?|零分/g, '')
        .replace(/元$/g, '元整')
}

/**
 * 
 * @param money 金额 (数字或字符串)
 * 
 * @returns 千分位分隔的字符串金额
 */
export const format_with_regex = (money: string | number): string => {
    const reg = /(\d)(?=(?:\d{3})+$)/g
    money = money + ''
    let prefix = money
    let suffix = ''
    if (money.includes('.')) {
        [prefix, suffix] = money.split('.')
    }
    return prefix.replace(reg, '$1,') + (money.includes('.') ? `.${suffix}` : '')
}
