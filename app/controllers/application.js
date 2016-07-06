import Ember from 'ember';

export default Ember.Controller.extend({
  sideSidebarCollapse: false,
  actions: {
    toggleSidebarCollapse() {
      var x = $("#custom-collapse")
      if ( !this.get('sideSidebarCollapse') ){
        x.slideDown();
        this.toggleProperty('sideSidebarCollapse');
        Ember.run.next(this,function(){
            var _this = this;
            $(document).one('click',function() {
              _this.toggleProperty('sideSidebarCollapse');
              x.slideUp();
            });
        });
      }
    }
  }
});
