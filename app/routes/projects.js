import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ title: 'Open Tale',
              image_url: '/images/open-tale.png',
              description: "Collaborate live with users to create interesting stories.",
              url: "http://open-tale.herokuapp.com/",
              tags: ['Rails,', 'Action Cable,', 'Websockets,', 'AJAX,', 'jQuery,', 'JavaScript,', 'Postgresql,','Rails 5']
            },
            { title: 'Cocktail Cabinet',
              image_url: '/images/cocktail-cabinet.png',
              url: "http://cocktailcabinet.herokuapp.com/",
              description: 'Share cocktail recipes with people around the world.',
              tags: ['Rails,', 'AJAX,', 'jQuery,', 'Javascript,', 'Postgresql']
            },
            { title: 'Escape the Flatiron Islands',
              image_url: '/images/flatiron-islands.png',
              description: "Pilot your flagship, The Kraken, away from the reavers of Euron's fleet! Elude your pursuers until a whirlpool appears, then steer into it. True Ironborn don't fear the maelstrom.",
              url: "http://flatiron-islands.herokuapp.com/",
              tags: ['Rails,','AJAX,','jQuery,','JavaScript,', 'Ember,', 'Postgresql,', 'Phaser.js']
            }];
  },
  afterModel() {
    $(document).attr('title', 'Projects | Howard Dean Watts');
  }
});
