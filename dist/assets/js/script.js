"use strict";!function(){var e=document.body,t=document.getElementsByClassName("b-menu")[0],n=document.getElementsByClassName("b-container")[0],a=document.getElementsByClassName("b-nav")[0];t.addEventListener("click",function(){[e,n,a].forEach(function(e){e.classList.toggle("open")})},!1),$(".b-link").on("click",function(){$(e).removeClass("open"),$(".b-menu, .b-container, .b-nav").removeClass("open"),$(".landing-page").removeClass("blur")})}(),$(document).ready(function(){$(".b-menu").on("click",function(){$(".landing-page").toggleClass("blur")}),setTimeout(function(){$("#main").removeClass("is-loading")},200),new Instafeed({get:"user",userId:"2099259904",clientId:"fc1efb2efb724a1d9f5cf56292fcadea",accessToken:"2099259904.1677ed0.62e0f96bf6f947e9bbc44d329f0d08c3",limit:10,resolution:"standard_resolution",template:'<div class="item" style="background:url({{image}}); background-size: cover; background-position: center;"><p class="item-description mr-2 text-center">{{caption}}</p></div>',after:function(){$(".item").each(function(){switch(Math.floor(2*Math.random()+1)){case 1:$(this).addClass("item--medium");break;case 2:$(this).addClass("item--large")}})}}).run(),$(".item").hover(function(){console.log("hover"),$(".item-description",this).addClass("show")},function(){$(".item-description",this).removeClass("show")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsImJ1cmdlck1lbnUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnVyZ2VyQ29udGFpbiIsImJ1cmdlck5hdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCIkIiwib24iLCJyZW1vdmVDbGFzcyIsInJlYWR5IiwidG9nZ2xlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiSW5zdGFmZWVkIiwiZ2V0IiwidXNlcklkIiwiY2xpZW50SWQiLCJhY2Nlc3NUb2tlbiIsImxpbWl0IiwicmVzb2x1dGlvbiIsInRlbXBsYXRlIiwiYWZ0ZXIiLCJlYWNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGhpcyIsImFkZENsYXNzIiwicnVuIiwiaG92ZXIiLCJjb25zb2xlIiwibG9nIiwibm90IiwiY2xpY2siLCJldmVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJoYXNoIiwibGVuZ3RoIiwic2xpY2UiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkdGFyZ2V0IiwiZm9jdXMiLCJpcyIsImF0dHIiXSwibWFwcGluZ3MiOiJBQUFBLGNBRUEsV0FDQSxHQUFBQSxHQUFBQyxTQUFBRCxLQUNBRSxFQUFBRCxTQUFBRSx1QkFBQSxVQUFBLEdBQ0FDLEVBQUFILFNBQUFFLHVCQUFBLGVBQUEsR0FDQUUsRUFBQUosU0FBQUUsdUJBQUEsU0FBQSxFQUVBRCxHQUFBSSxpQkFBQSxRQUFBLFlBQ0FOLEVBQUFJLEVBQUFDLEdBQUFFLFFBQUEsU0FBQUMsR0FDQUEsRUFBQUMsVUFBQUMsT0FBQSxZQUVBLEdBRUFDLEVBQUEsV0FBQUMsR0FBQSxRQUFBLFdBQ0FELEVBQUFYLEdBQUFhLFlBQUEsUUFDQUYsRUFBQSxpQ0FBQUUsWUFBQSxRQUNBRixFQUFBLGlCQUFBRSxZQUFBLGFBS0FGLEVBQUFWLFVBQUFhLE1BQUEsV0FFQUgsRUFBQSxXQUFBQyxHQUFBLFFBQUEsV0FDQUQsRUFBQSxpQkFBQUksWUFBQSxVQUlBQyxXQUFBLFdBQ0FMLEVBQUEsU0FBQUUsWUFBQSxlQUNBLEtBR0EsR0FBQUksWUFDQUMsSUFBQSxPQUNBQyxPQUFBLGFBQ0FDLFNBQUEsbUNBQ0FDLFlBQUEsc0RBQ0FDLE1BQUEsR0FDQUMsV0FBQSxzQkFDQUMsU0FBQSwrS0FDQUMsTUFBQSxXQUNBZCxFQUFBLFNBQUFlLEtBQUEsV0FFQSxPQURBQyxLQUFBQyxNQUFBLEVBQUFELEtBQUFFLFNBQUEsSUFFQSxJQUFBLEdBQ0FsQixFQUFBbUIsTUFBQUMsU0FBQSxlQUNBLE1BQ0EsS0FBQSxHQUNBcEIsRUFBQW1CLE1BQUFDLFNBQUEscUJBUUFDLE1BR0FyQixFQUFBLFNBQUFzQixNQUNBLFdBQ0FDLFFBQUFDLElBQUEsU0FDQXhCLEVBQUEsb0JBQUFtQixNQUFBQyxTQUFBLFNBRUEsV0FDQXBCLEVBQUEsb0JBQUFtQixNQUFBakIsWUFBQSxVQUtBRixFQUFBLGdCQUNBeUIsSUFBQSxjQUNBQSxJQUFBLGVBQ0FDLE1BQUEsU0FBQUMsR0FDQSxHQUNBQyxTQUFBQyxTQUFBQyxRQUFBLE1BQUEsS0FBQVgsS0FBQVUsU0FBQUMsUUFBQSxNQUFBLEtBRUFGLFNBQUFHLFVBQUFaLEtBQUFZLFNBQ0EsQ0FDQSxHQUFBQyxHQUFBaEMsRUFBQW1CLEtBQUFjLEtBQ0FELEdBQUFBLEVBQUFFLE9BQUFGLEVBQUFoQyxFQUFBLFNBQUFtQixLQUFBYyxLQUFBRSxNQUFBLEdBQUEsS0FDQUgsRUFBQUUsU0FDQVAsRUFBQVMsaUJBQ0FwQyxFQUFBLGNBQUFxQyxTQUNBQyxVQUFBTixFQUFBTyxTQUFBQyxLQUNBLElBQUEsV0FDQSxHQUFBQyxHQUFBekMsRUFBQWdDLEVBRUEsSUFEQVMsRUFBQUMsUUFDQUQsRUFBQUUsR0FBQSxVQUNBLE9BQUEsQ0FFQUYsR0FBQUcsS0FBQSxXQUFBLE1BQ0FILEVBQUFDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItbWVudScpWzBdO1xuICAgIHZhciBidXJnZXJDb250YWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1jb250YWluZXInKVswXTtcbiAgICB2YXIgYnVyZ2VyTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1uYXYnKVswXTtcblxuICAgIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKCkge1xuICAgICAgICBbYm9keSwgYnVyZ2VyQ29udGFpbiwgYnVyZ2VyTmF2XS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICAkKCcuYi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGJvZHkpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQoJy5iLW1lbnUsIC5iLWNvbnRhaW5lciwgLmItbmF2JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgJCgnLmxhbmRpbmctcGFnZScpLnJlbW92ZUNsYXNzKCdibHVyJyk7XG4gICAgfSk7XG59KSgpO1xuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy9uYXZpZ2F0aW9uIGJsdXIgZWZmZWN0XG4gICAgJCgnLmItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmxhbmRpbmctcGFnZScpLnRvZ2dsZUNsYXNzKCdibHVyJyk7XG4gICAgfSk7XG5cbiAgICAvL2lzIGxvYWRpbmcgbGFuZGluZyBwYWdlIGVmZmVjdFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjbWFpblwiKS5yZW1vdmVDbGFzcyhcImlzLWxvYWRpbmdcIik7XG4gICAgfSwgMjAwKTtcblxuICAgIC8vaW5zdGFncmFtIEZlZWRcbiAgICB2YXIgY3VzdG9tRmVlZCA9IG5ldyBJbnN0YWZlZWQoe1xuICAgICAgICBnZXQ6ICd1c2VyJyxcbiAgICAgICAgdXNlcklkOiAnMjA5OTI1OTkwNCcsXG4gICAgICAgIGNsaWVudElkOiAnZmMxZWZiMmVmYjcyNGExZDlmNWNmNTYyOTJmY2FkZWEnLFxuICAgICAgICBhY2Nlc3NUb2tlbjogJzIwOTkyNTk5MDQuMTY3N2VkMC42MmUwZjk2YmY2Zjk0N2U5YmJjNDRkMzI5ZjBkMDhjMycsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgcmVzb2x1dGlvbjogJ3N0YW5kYXJkX3Jlc29sdXRpb24nLFxuICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJpdGVtXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOnVybCh7e2ltYWdlfX0pOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XCI+PHAgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uIG1yLTIgdGV4dC1jZW50ZXJcIj57e2NhcHRpb259fTwvcD48L2Rpdj4nLFxuICAgICAgICBhZnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLml0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyKSArIDEpO1xuICAgICAgICAgICAgICAgIHN3aXRjaChzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2l0ZW0tLW1lZGl1bScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2l0ZW0tLWxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3VzdG9tRmVlZC5ydW4oKTtcblxuICAgIC8vc29jaWFsLW1lZGlhIGl0ZW0gZGVzY3JpcHRpb24gZWZmZWN0XG4gICAgJCgnLml0ZW0nKS5ob3ZlcihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaG92ZXInKTtcbiAgICAgICAgICAgICQoJy5pdGVtLWRlc2NyaXB0aW9uJywgdGhpcykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuaXRlbS1kZXNjcmlwdGlvbicsIHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy9zbW9vdGggc2Nyb2xsXG4gICAgJCgnYVtocmVmKj1cIiNcIl0nKVxuICAgICAgICAubm90KCdbaHJlZj1cIiNcIl0nKVxuICAgICAgICAubm90KCdbaHJlZj1cIiMwXCJdJylcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJylcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCctMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59KTtcbiJdfQ==
