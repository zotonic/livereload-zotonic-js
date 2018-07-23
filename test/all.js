if (typeof window === 'undefined') {
  window = {
    location: { hostname: 'localhost' }
  };
}


require('coffee-script/register');
require('./options_test');
require('./protocol_test');
require('./timer_test');
