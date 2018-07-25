// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import App Component
import App from './app';

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

var jsonData = {
  'banners': [
    require('./images/banner1.png'),
    require('./images/banner2.png'),
    require('./images/banner3.png'),
    require('./images/banner4.png'),
    require('./images/banner5.png')
  ],
  'trailers': [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      'img_url': require('./images/img1.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      'img_url': require('./images/img2.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      'img_url': require('./images/img3.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      'img_url': require('./images/img4.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      'img_url': require('./images/img5.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      'img_url': require('./images/img6.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      'img_url': require('./images/img7.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      'img_url': require('./images/img8.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      'img_url': require('./images/img9.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      'img_url': require('./images/img10.png'),
      'other_info': {
        'certificate': 'U/A',
        'genre': 'Action comedy',
        'release_date': '25-07-2018',
        'cast': 'Test, one, two',
        'director': 'Adnsl',
        'run_time': '02:30',
        'website': 'www.test.com'
      }
    }
  ]
}

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  data: jsonData
});
