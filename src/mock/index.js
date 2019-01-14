const Mock = require('mockjs');
const Random = Mock.Random;
const produceNewsData = function() {
  let articles = [];
  let hot = [];
  let tags = [];
  let colors = ['rgb(208, 80, 146)','rgb(220, 183, 91)','rgb(76, 237, 55)','rgb(115, 192, 153)','rgb(90, 87, 104)','rgb(208, 30, 1)',
    'rgb(223, 1, 131)','rgb(156, 240, 248)','rgb(157, 187, 218)','rgb(157, 187, 218)','rgb(157, 187, 218)','rgb(157, 187, 218)','rgba(247,133,0,1)']
  for (let i = 0; i < 8; i++) {
    let newArticleObject = {
      id:i+1,
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      outline:Random.cparagraph(8,12),
      thumbnail_pic: Random.dataImage('96x66', 'mock'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  for (let i = 0; i < 5; i++) {
    let newArticleObject = {
      id:i+1,
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      outline:Random.cparagraph(8,12),
      thumbnail_pic: Random.dataImage('96x66', 'img'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    hot.push(newArticleObject)
  }


  for(let i = 0; i< 20;i++){
    let tagsArray = {
      label: Random.ctitle(1,3),
      number:Random.integer(3,10),
      color:colors[Random.integer(0,12)],
      category:Random.csentence(2,5)
    }
    tags.push(tagsArray)
  }

  return {
    articles: articles,
    hots: hot,
    tags:tags
  }
}

// Mock.mock( url, post/get , 返回的数据)；
const news = Mock.mock('/news', 'post', produceNewsData);

export  default {news}
