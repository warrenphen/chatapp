Meteor.startup(function () {
  smtp = {
    username: 'warren.phen@gmail.com',
    password: 'eh0C_bb2lGBKkPf5gmgtSw',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});