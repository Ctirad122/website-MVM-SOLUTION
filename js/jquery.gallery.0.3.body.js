/**
 * jQuery Gallery Plugin
 *   http://code.google.com/p/jquery-gallery-plugin/
 *
 * Copyright (c) 2009 Yusuke Horie
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Since  : 0.1.0 - 08/02/2009
 * Version: 0.3.0 - 08/25/2009
 */
(function(jQuery) {

  /** body html **/

$(document).ready(function(){
  $('#gallery').gallery({
    interval: 10500,
    height: '360px',
    width: '654px'
    //toggleBar: false
  });
});
 
  


})(jQuery);