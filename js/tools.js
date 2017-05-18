function wheelEvent(obj, fnUp, fnDown){
  if(window.navigator.userAgent.indexOf('Firefox') > 0){
    obj.addEventListener('DOMMouseScroll', fn);
  }else{
    obj.addEventListener('mousewheel', fn);
  }
  function fn(e){
    var diration;
    if(e.wheelDelta){
      diration = e.wheelDelta > 0 ? true : false;
    }
    if(e.detail){
      diration = e.detail < 0 ? true : false;
    }
    if(diration){
      if(typeof fnUp === 'function'){
        fnUp();
      }
    }else{
      if(typeof fnDown === 'function'){
        fnDown();
      }
    }
  }
}


