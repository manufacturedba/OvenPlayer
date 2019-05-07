/*! For license information please see ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceLabel()&&e[o].label===n.getSourceLabel())return o;return r}},390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(391)),o=l(n(93)),a=l(n(394)),i=n(389),u=n(2);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("CORE loaded. ");var l={};(0,o.default)(l);var s=(0,i.extractVideoElement)(e.extendedElement),c=null,g=null;t.getConfig().image;e.adTagUrl&&(c=(0,r.default)(s,l,t,e.adTagUrl)),g=(0,a.default)(e.extendedElement,l,c?c.videoEndedCallback:null),s.playbackRate=s.defaultPlaybackRate=t.getPlaybackRate();var E=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=s.src,i=document.createElement("source");i.src=o.file,i.src!==a?(s.append(i),a&&s.load()):0===r&&s.currentTime>0&&l.seek(r),r>0&&(l.seek(r),l.play())}};return l.getName=function(){return e.name},l.canSeek=function(){return e.canSeek},l.setCanSeek=function(t){e.canSeek=t},l.isSeeking=function(){return e.seeking},l.setSeeking=function(t){e.seeking=t},l.setState=function(t){if(e.state!==t){var n=e.state;switch(t){case u.STATE_COMPLETE:l.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:l.trigger(u.PLAYER_PAUSE,{prevState:e.state});break;case u.STATE_PLAYING:l.trigger(u.PLAYER_PLAY,{prevState:e.state})}e.state=t,l.trigger(u.PLAYER_STATE,{prevstate:n,newstate:e.state})}},l.getState=function(){return e.state},l.setBuffer=function(t){e.buffer=t},l.getBuffer=function(){return e.buffer},l.getDuration=function(){return s.duration===1/0||(0,i.separateLive)(e.extendedElement)?1/0:s.duration},l.getPosition=function(){return s?s.currentTime:0},l.setVolume=function(e){if(!s)return!1;s.volume=e/100},l.getVolume=function(){return s?100*s.volume:0},l.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,l.trigger(u.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,l.trigger(u.CONTENT_MUTE,{mute:s.muted})),s.muted)},l.getMute=function(){return!!s&&s.muted},l.preload=function(n,r){return e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),E(r||0),new Promise(function(e,n){e(),t.isAutoStart()&&l.play(),t.isMute()&&l.setMute(!0),t.getVolume()&&l.setVolume(t.getVolume())})},l.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),E(e.sources.starttime||0)},l.play=function(){if(!s)return!1;if(l.getState()!==u.STATE_PLAYING)if(c&&c.isActive()||c&&!c.started())c.play();else{s.play();var e=s.play();void 0!==e&&e.then(function(e){}).catch(function(e){setTimeout(function(){l.play()},1e3)})}},l.pause=function(){if(!s)return!1;l.getState()===u.STATE_PLAYING?s.pause():l.getState()===u.STATE_AD_PLAYING&&c.pause()},l.seek=function(e){if(!s)return!1;s.currentTime=e},l.setPlaybackRate=function(e){return!!s&&(l.trigger(u.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},l.getPlaybackRate=function(){return s?s.playbackRate:0},l.getSources=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},l.getCurrentSource=function(){return e.currentSource},l.setCurrentSource=function(n,r){return e.currentSource!==n&&(n>-1&&e.sources&&e.sources.length>n?(OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,l.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceLabel(e.sources[n].label),r&&E(s.currentTime||0),l.pause(),l.setState(u.STATE_IDLE),e.currentSource):void 0)},l.getQualityLevels=function(){return s?e.qualityLevels:[]},l.getCurrentQuality=function(){return s?e.currentQuality:null},l.setCurrentQuality=function(e){},l.isAutoQuality=function(){},l.setAutoQuality=function(e){},l.getFramerate=function(){return e.framerate},l.setFramerate=function(t){return e.framerate=t},l.seekFrame=function(t){var n=e.framerate,r=(s.currentTime*n+t)/n;r+=1e-5,l.pause(),l.seek(r)},l.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);l.pause(),l.setState(u.STATE_IDLE)},l.destroy=function(){if(!s)return!1;l.stop(),g.destroy(),c&&c.destroy(),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(e){var t=l[e];return function(){return t.apply(l,arguments)}},l}},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(392)),o=u(n(8)),a=n(389),i=n(2);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,u){var l=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,s=google.ima.AdErrorEvent.Type.AD_ERROR,c={},g=!1,E={started:!1,active:!1,isVideoEnded:!1};google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);var d=null,f=null,v=null,T=null,A=null,y=function(n){var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,(v=n.getAdsManager(e,o)).init("100%","100%",google.ima.ViewMode.NORMAL),T=(0,r.default)(v,t,E),t.on(i.CONTENT_VOLUME,function(e){v.setVolume(e.volume/100)},c),g=!0},p=function(e){(0,a.errorTrigger)({message:e.getError().getMessage()+" ["+e.getError().getVastErrorCode()+"]",code:e.getError().getVastErrorCode(),reason:e.getError().getMessage()},t),v&&v.destroy(),E.active=!1,E.started=!0,t.play()};d=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(f=new google.ima.AdsLoader(d)).addEventListener(l,y,!1),f.addEventListener(s,p,!1);return(A=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,A.setAdWillAutoPlay(!1),A.setAdWillPlayMuted(!1),A.adTagUrl=u,f.requestAds(A),c.isActive=function(){return E.active},c.started=function(){return E.started},c.play=function(){if(t.setState(i.STATE_LOADING),!E.started){var n=0;return new Promise(function(t,r){!function o(){return n++,g?(e.load(),d.initialize(),v.start(),E.started=!0,t()):n<100?void setTimeout(o,100):r()}()})}v.resume()},c.pause=function(){v.pause()},c.videoEndedCallback=function(e){T.isAllAdComplete()||!T.isLinearAd()?e():(E.isVideoEnded=!0,f.contentComplete())},c.destroy=function(){v&&v.destroy(),d&&d.destroy(),T&&T.destroy(),f&&(f.removeEventListener(l,y),f.removeEventListener(s,p));var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(i.CONTENT_VOLUME,null,c)},c}},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(8));var r=n(2);t.default=function(e,t,n){var o={},a={},i=null,u=google.ima.AdEvent.Type.AD_BUFFERING,l=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,s=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,c=google.ima.AdEvent.Type.AD_ERROR,g=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,E=google.ima.AdEvent.Type.CLICK,d=google.ima.AdEvent.Type.SKIPPED,f=google.ima.AdEvent.Type.COMPLETE,v=google.ima.AdEvent.Type.FIRST_QUARTILE,T=google.ima.AdEvent.Type.LOADED,A=google.ima.AdEvent.Type.MIDPOINT,y=google.ima.AdEvent.Type.PAUSED,p=google.ima.AdEvent.Type.RESUMED,S=google.ima.AdEvent.Type.STARTED,m=google.ima.AdEvent.Type.USER_CLOSE,O=google.ima.AdEvent.Type.THIRD_QUARTILE,L=!1,_=null;return a[l]=function(e){OvenPlayerConsole.log(e.type),n.active=!0,t.pause()},a[s]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,n.isVideoEnded||t.play()},a[c]=function(e){OvenPlayerConsole.log(e.type)},a[g]=function(e){OvenPlayerConsole.log(e.type),L=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},a[E]=function(e){OvenPlayerConsole.log(e.type)},a[v]=function(e){OvenPlayerConsole.log(e.type)},a[u]=function(e){OvenPlayerConsole.log("AD_BUFFERING",e.type),t.setState(r.STATE_LOADING)},a[T]=function(n){OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),a=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:a.isLinear()})},a[A]=function(e){OvenPlayerConsole.log(e.type)},a[y]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},a[p]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},a[S]=function(o){OvenPlayerConsole.log(o.type);var a=o.getAd();_=a;var u={isLinear:a.isLinear(),duration:a.getDuration(),skipTimeOffset:a.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,u),a.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,i=setInterval(function(){var n=e.getRemainingTime(),o=a.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:a.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},a[f]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(i),t.trigger(r.STATE_AD_COMPLETE)},a[d]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(i),t.trigger(r.STATE_AD_COMPLETE)},a[m]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(i),t.trigger(r.STATE_AD_COMPLETE)},a[O]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(a).forEach(function(t){e.removeEventListener(t,a[t]),e.addEventListener(t,a[t])}),o.setAdCompleteCallback=function(e){},o.isAllAdComplete=function(){return L},o.isLinearAd=function(){return!_||_.isLinear()},o.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(a).forEach(function(t){e.removeEventListener(t,a[t])})},o}},394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(389);t.default=function(e,t,n){var a={};OvenPlayerConsole.log("EventListener loaded.",e,t);var i={},u=(0,o.extractVideoElement)(e);return a.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},a.durationchange=function(){a.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},a.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!=r.STATE_IDLE&&t.getState()!=r.STATE_COMPLETE&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},a.loadeddata=function(){OvenPlayerConsole.log("EventListener : on loadeddata")},a.loadedmetadata=function(){var n=u.duration===1/0||(0,o.separateLive)(e),a=t.getSources(),i=t.getCurrentSource(),l=i>-1?a[i].type:"",s={duration:n?1/0:u.duration,type:l};OvenPlayerConsole.log("EventListener : on loadedmetadata",s),t.trigger(r.CONTENT_META,s)},a.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!u.ended&&!u.error&&u.currentTime!==u.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},a.play=function(){u.paused||t.getState()===r.STATE_PLAYING||(OvenPlayerConsole.log("EventListener : on play"),t.setState(r.STATE_LOADING))},a.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),t.setState(r.STATE_PLAYING)},a.progress=function(){var e=u.buffered;if(!e)return!1;var n=u.duration,o=u.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);OvenPlayerConsole.log("EventListener : on progress",100*a),t.setBuffer(100*a),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:n})},a.stalled=function(){OvenPlayerConsole.log("EventListener : on stall")},a.timeupdate=function(){var e=u.currentTime,n=u.duration;isNaN(n)||(t.isSeeking()||u.paused||t.setState(r.STATE_PLAYING),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n}))},a.resize=function(){OvenPlayerConsole.log("EventListener : on resize")},a.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",u.currentTime),t.trigger(r.CONTENT_SEEK,{position:u.currentTime})},a.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},a.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()===r.STATE_PLAYING&&t.setState(r.STATE_STALLED)},a.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*u.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*u.volume),mute:u.muted})},a.error=function(){var e=u.error&&u.error.code||0,t={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NEWWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",t),(0,o.errorTrigger)(r.ERRORS[t])},Object.keys(a).forEach(function(e){u.removeEventListener(e,a[e]),u.addEventListener(e,a[e])}),i.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(a).forEach(function(e){u.removeEventListener(e,a[e])})},i}}}]);