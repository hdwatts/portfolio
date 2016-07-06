import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ title: 'Open Tale',
              description: "Collaborate live with users to create interesting stories.",
              tags: ['Rails', 'Action Cable', 'Websockets', 'AJAX', 'jQuery', 'JavaScript', 'Postgresql','Rails 5']
            },
            { title: 'Escape the Flatiron Islands',
              description: "Pilot your flagship, The Kraken, away from the reavers of Euron's fleet! Elude your pursuers until a whirlpool appears, then steer into it. True Ironborn don't fear the maelstrom.",
              tags: ['Rails','AJAX','jQuery','JavaScript', 'Ember', 'Postgresql', 'Phaser.js']
            },
            { title: 'Cocktail Cabinet',
              description: 'Share cocktail recipes with people around the world.',
              tags: ['Rails', 'AJAX', 'jQuery', 'Javascript', 'Postgresql']
            }];
  },
  afterModel() {
    $(document).attr('title', 'Projects | Howard Dean Watts');
  }
});
