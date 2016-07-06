export default function(){
  this.transition(
    this.toRoute('about'),
    this.use('fade')
  );
  this.transition(
    this.toRoute('blog'),
    this.use('fade')
  );
  this.transition(
    this.toRoute('work'),
    this.use('fade')
  );
  this.transition(
    this.toRoute('projects'),
    this.use('fade')
  );
};