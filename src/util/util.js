import moment from "moment"

/**
 * 对比现在和过去时间来返回不同的描述时间
 *  @param {String} dataTime
 */

const desriptDateTime = function (dataTime) {
  let nowDataTime = moment().format()
  // 判断两个时间是否在同一天
  let flag = moment(nowDataTime).isSame(dataTime, 'day')
  if (flag) {
    return `'${moment(dataTime).fromNow()}'`
  } else {
    return moment(dataTime).calendar()
  }
}

/**
 * 将Map转为数组
 * @params { Map } map
 */
const changeMap = function (mapList) {
  const list = []
  mapList.forEach(x => {
    list.push(x)
  })
  return list
}

/**
 * 将数组转为Map
 * @params { Array } Lists
 */
const changeArray = function (Lists) {
  let map = new Map()
  Lists.forEach(x => {
    map.set(x.id, x)
  })
  return map
}



export default {
  desriptDateTime,
  changeMap,
  changeArray
}
