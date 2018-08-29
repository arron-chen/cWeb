const Mock = require('mockjs');
const Random = Mock.Random;
const produceNewsData = function() {
  let cards = [];
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      id:i+1,
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      outline:Random.cparagraph(8,12),
      thumbnail_pic: Random.dataImage('300x250', 'mock'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    cards.push(newArticleObject)
  }

  return {
    cards: cards
  }
}

// Mock.mock( url, post/get , 返回的数据)；
const news = Mock.mock('/news', 'post', produceNewsData);

export  default {news}
