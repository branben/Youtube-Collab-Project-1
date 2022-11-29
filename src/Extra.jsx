// for the search bar css look 
import React from "react";
import "./Extra.css"


const extra = () => {

  // jQuery(document).ready(function () {
  //   jQuery.getScript("//www.youtube.com/iframe_api");
  // });
  
  // var yt_01_player_object,
  //   yt_01_video_wrap = jQuery("#yt-video-wrap"),
  //   yt_01_player_id = "yt-player",
  //   yt_01_timeInterval = 0;
  
  // function onYouTubeIframeAPIReady() {
  //   yt_01_player_object = new YT.Player(yt_01_player_id, {
  //     height: "540",
  //     width: "960",
  //     videoId: "iABUHt-Z9Gc",
  //     playerVars: {
  //       autohide: 1,
  //       autoplay: 0,
  //       controls: 0,
  //       fs: 1,
  //       disablekb: 0,
  //       modestbranding: 1,
  //       // 'cc_load_policy': 	1, // forces closed captions on
  //       iv_load_policy: 3, // annotations, 1=on, 3=off
  //       // 'playlist': 		videoID, videoID, videoID, etc,
  //       rel: 0,
  //       showinfo: 0,
  //       theme: "light", // dark, light
  //       color: "white" // red, white
  //     },
  //     events: {
  //       onReady: yt_01_onPlayerReady,
  //       onStateChange: yt_01_onPlayerStateChange,
  //       onError: yt_01_onPlayerError
  //     }
  //   });
  // }
  // function yt_01_onPlayerReady() {
  //   yt_01_initializePlayerControls();
  // }
  // function yt_01_onPlayerStateChange(state) {
  //   switch (state.data) {
  //     case -1: //unstarted
  //       // do nothing
  //       break;
  //     case 0: // ended
  //       yt_01_video_wrap.find(".yt-pause").hide();
  //       yt_01_video_wrap.find(".yt-play").show();
  //       break;
  //     case 1: // playing
  //       yt_01_video_wrap.find(".yt-pause").show();
  //       yt_01_video_wrap.find(".yt-play").hide();
  //       yt_01_startYoutubeTime();
  //       break;
  //     case 2: // paused
  //       yt_01_video_wrap.find(".yt-pause").hide();
  //       yt_01_video_wrap.find(".yt-play").show();
  //       break;
  //     case 3: // buffering
  //       // do nothing
  //       break;
  //     case 5: // video cued
  //       // do nothing
  //       break;
  //     default:
  //     // do nothing
  //   }
  // }
  // function yt_01_onPlayerError(error) {
  //   console.log(error);
  // };
  // function yt_01_startYoutubeTime() {
  //   if (yt_01_timeInterval > 0) clearInterval(yt_01_timeInterval); // stop
  //   yt_01_timeInterval = setInterval("yt_01_updateYoutubeTime()", 100); // run
  // };
  // function yt_01_updateYoutubeTime() {
  //   if (yt_01_player_object.getCurrentTime() >= 60) {
  //     yt_01_video_wrap
  //       .find(".yt-current-time")
  //       .text(
  //         Math.floor(yt_01_player_object.getCurrentTime() / 60) +
  //           ":" +
  //           yt_01_FormatNumberLength(
  //             Math.round(yt_01_player_object.getCurrentTime() % 60),
  //             2
  //           )
  //       );
  //   } else {
  //     yt_01_video_wrap
  //       .find(".yt-current-time")
  //       .text(
  //         "0:" +
  //           yt_01_FormatNumberLength(
  //             Math.floor(yt_01_player_object.getCurrentTime()),
  //             2
  //           )
  //       );
  //   }
  //   yt_01_video_wrap
  //     .find(".yt-progress .yt-play-bar")
  //     .width(
  //       Math.floor(
  //         (yt_01_player_object.getCurrentTime() /
  //           yt_01_player_object.getDuration()) *
  //           100
  //       ) + "%"
  //     );
  // }
  // function yt_01_FormatNumberLength(num, length) {
  //   var r = "" + num;
  //   while (r.length < length) {
  //     r = "0" + r;
  //   }
  //   return r;
  // }
  // function yt_01_initializePlayerControls(index) {
  //   yt_01_video_wrap.find(".yt-pause").hide();
  //   yt_01_video_wrap.find(".yt-unmute").hide();
  //   yt_01_video_wrap.find(".yt-restore-screen").hide();
  
  //   yt_01_player_object.setVolume(80);
  //   yt_01_video_wrap.find(".yt-volume-bar .yt-volume-bar-value").width("80%");
  
  //   yt_01_video_wrap.on("click", ".yt-play", function (e) {
  //     e.preventDefault();
  //     jQuery(this).hide();
  //     yt_01_video_wrap.find(".yt-pause").show();
  //     yt_01_player_object.playVideo();
  //   });
  //   yt_01_video_wrap.on("click", ".yt-pause", function (e) {
  //     e.preventDefault();
  //     jQuery(this).hide();
  //     yt_01_video_wrap.find(".yt-play").show();
  //     yt_01_player_object.pauseVideo();
  //   });
  //   yt_01_video_wrap.on("click", ".yt-mute", function (e) {
  //     e.preventDefault();
  //     jQuery(this).hide();
  //     yt_01_video_wrap.find(".yt-unmute").show();
  //     yt_01_video_wrap.find(".yt-volume-bar .yt-volume-bar-value").hide();
  //     yt_01_player_object.mute();
  //   });
  //   yt_01_video_wrap.on("click", ".yt-unmute", function (e) {
  //     e.preventDefault();
  //     jQuery(this).hide();
  //     yt_01_video_wrap.find(".yt-mute").show();
  //     yt_01_video_wrap.find(".yt-volume-bar .yt-volume-bar-value").show();
  //     yt_01_player_object.unMute();
  //   });
  //   yt_01_video_wrap.find(".yt-volume-bar").on("click", function (e) {
  //     e.preventDefault();
  //     var posX = jQuery(this).offset().left,
  //       posWidth = jQuery(this).width();
  //     posX = (e.pageX - posX) / posWidth;
  //     yt_01_video_wrap
  //       .find(".yt-volume-bar .yt-volume-bar-value")
  //       .width(posX * 100 + "%")
  //       .show();
  //     yt_01_player_object.setVolume(posX * 100);
  
  //     yt_01_video_wrap.find(".yt-unmute").hide();
  //     yt_01_video_wrap.find(".yt-mute").show();
  //   });
  //   yt_01_video_wrap.find(".yt-seek-bar").on("click", function (e) {
  //     e.preventDefault();
  //     var posX = jQuery(this).offset().left,
  //       posWidth = jQuery(this).width();
  //     posX = (e.pageX - posX) / posWidth;
  //     yt_01_video_wrap.find(".yt-progress .yt-play-bar").width(posX * 100 + "%");
  //     posX = Math.round(posX * yt_01_player_object.getDuration());
  //     yt_01_player_object.seekTo(posX, true);
  //   });
  //   yt_01_video_wrap.find(".yt-quality ul li a").on("click", function (e) {
  //     e.preventDefault();
  //     var quality = jQuery(this).data("quality");
  //     jQuery(this).parents("li").siblings("li").removeClass("active");
  //     jQuery(this).parents("li").addClass("active");
  //     yt_01_player_object.stopVideo();
  //     yt_01_player_object.setPlaybackQuality(quality);
  //     yt_01_player_object.playVideo();
  //   });
  // }
  // jQuery(document).ready(function () {
  //   jQuery.getJSON(
  //     "https://www.googleapis.com/youtube/v3/videos?id=iABUHt-Z9Gc&key=AIzaSyCXI4mJa2v2iAcX5fB2VIa6WOHePAOEE2g&part=snippet,contentDetails,statistics,status",
  //     function (data) {
  //       yt_01_video_wrap
  //         .find(".yt-title")
  //         .text(
  //           data.items[0].snippet.title +
  //             " - from: " +
  //             data.items[0].snippet.channelTitle
  //         );
  
  //       var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  //       var hours = 0,
  //         minutes = 0,
  //         seconds = 0,
  //         totalseconds;
  //       if (reptms.test(data.items[0].contentDetails.duration)) {
  //         var matches = reptms.exec(data.items[0].contentDetails.duration);
  //         if (matches[1]) hours = Number(matches[1]);
  //         if (matches[2]) minutes = Number(matches[2]);
  //         if (matches[3]) seconds = Number(matches[3]);
  //         totalseconds = hours * 3600 + minutes * 60 + seconds;
  //       }
  
  //       yt_01_video_wrap
  //         .find(".yt-duration")
  //         .text(Math.floor(totalseconds / 60) + ":" + ((totalseconds % 60) - 1));
  //     }
  //   );
  // });
  // jQuery.fn.filterNode = function (name) {
  //   return this.find("*").filter(function () {
  //     return this.nodeName === name;
  //   });
  // };
  


  return (
    <div class="container">
  {/* //   <div class="columns sixteen">

  //   <div id="yt-video-wrap" class="yt-video">
  //     <div class="yt-player">
  //       <div  id="yt-player"></div>
  //     </div>
  //     <div class="yt-gui">
  //       <div class="yt-interface">
  //         <div class="yt-controls-holder">
  //           <ul class="yt-controls">
  //             <li><a href="#" class="yt-play">play</a></li>
  //             <li><a href="#" class="yt-pause">pause</a></li>
  //             <li><a href="#" class="yt-mute">mute</a></li>
  //             <li><a href="#" class="yt-unmute">unmute</a></li>
  //           </ul>
  //           <div class="yt-quality">
  //             <ul>
  //               <li><a href="#" data-quality="small">240p</a></li>
  //               <li><a href="#" data-quality="medium">360p</a></li>
  //               <li><a href="#" data-quality="large">480p</a></li>
  //               <li><a href="#" data-quality="hd720">720p</a></li>
  //               <li><a href="#" data-quality="hd1080">1080p</a></li>
  //               <li><a href="#" data-quality="highres">Best</a></li>
  //             </ul>
  //           </div>
  //           <div class="yt-volume-bar">
  //             <div class="yt-volume-bar-value"></div>
  //           </div>
  //         </div>
  //         <div class="yt-progress">
  //           <div class="yt-seek-bar">
  //             <div class="yt-play-bar"></div>
  //           </div>
  //         </div>
  //         <div class="yt-current-time">0:00</div>
  //         <div class="yt-duration">0:00</div>
  //         <div class="yt-title">Title	</div>
  //       </div>
  //     </div>
  //   </div>	

  // </div>
  // <div class="clear"></div> */}
  </div>
  )
}

export default extra
