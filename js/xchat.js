var workspace = "base.xpro.me";
    var tokens = [
        {
            name: 'Xvision',
            token: 'MjAxOTEwMTUxNzEzMjBkMWNhMzE3MWI2ZmZkY2I0ZTg3OGQwNmNhZGYzNDZmOHwxfDdmMDdjNDQzYWViYzhjMmZiMDdlZTEwMjVmZTE2NTE3fDQy',
            selected: true
        }
    ];
    
$(document).ready(function () {
    $('body').append($('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>'));
    $('body').append($('<script src="https://web.xpro.me/js/socket.io/socket.io.js"></script>'));
    
    var URL_SERVER = 'https://socket.xpro.me:3000';
    var css = '';
    css = css ? css + "/wp-content/themes/xvision/xchat.css" : "css/xchat.min.css", $("head").append('<link rel="stylesheet" href="' + css + '" type="text/css" />');
    
    $("body").append('<div id="chat"></div>');
    var btnChat = $("#chat");
    btnChat.addClass('watts-icon');
    btnChat.html('<span class="pulse"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAtCAYAAAAHiIP8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMzU1OUY3ODZFQjAxMUU5OEY0RkZGMzdDMUJDQTc5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMzU1OUY3OTZFQjAxMUU5OEY0RkZGMzdDMUJDQTc5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY2QkNDQ0ZGNkU5RDExRTk4RjRGRkYzN0MxQkNBNzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY2QkNDRDAwNkU5RDExRTk4RjRGRkYzN0MxQkNBNzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6aAGAQAABnBJREFUeNrMmgts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" alt="Xchat"></span>');

    var xChatId = "Xchat-" + (new Date).getTime();
    $("body").append('<div id="' + xChatId + '"></div>');
    var xChat = $("#" + xChatId);
    xChat.addClass("XChat");

    btnChat.click(function () {

        if($.cookie('xChatTk')){
            startSocket ($.cookie('xChatTk'), $.cookie('xChatName'));
            loadMessages();
        } else {
            windowRegister();
        }
        xChat.find(".form-error").remove();
        if ($('.XChat').css('max-width') == '425px') {
            $('.XChat').css('max-width', '0px');
            $('.pulse').css('background-color', 'white');
            $('.pulse').css('animation', 'pulse 2s infinite');
        } else {
            $('.XChat').css('max-width', '425px');
            $('.pulse').css('background-color', '#dedede');
            $('.pulse').css('animation', 'none');
        }
    });

    function loadMessages () {
        !xChat.find(".chat-window-content > div").length && loading();
        
        $.get('http://'+workspace+'/gestaodeleads/loadmessages?token='+$.cookie('xChatTk')).done(function(data){
            if(data){
                try{
                    data = JSON.parse(data);
                } catch(error){
                    data = null;
                }
                if(data){
                    windowChat(data.admin);
                    data && data.messages && data.messages.length && data.messages.forEach(function(item) {
                        addMessage(item.text, item.from, item.admin)
                    })
                } 
            }
        });

    }

    function sendMessage (text) {
        $.get('http://'+workspace+'/gestaodeleads/sendmessage?token='+$.cookie('xChatTk')+'&text='+text).done(function(data){
            if(data){
                addMessage(text, 'client');
            }
        });
    }

    function newChat (name, email, phone, token) {

        $.get('http://'+workspace+'/gestaodeleads/newchat?name='+name+'&email='+email+'&phone='+phone+'&token='+token).done(function(data){
            if(data){
                try{
                    data = JSON.parse(data);
                } catch(error){
                    data = null;
                }
                
                if(data && !data.error){
                    startSocket (data.token, name);

                    windowChat(data.admin);

                } else {
                    xChat.html('');
                    windowRegister();
                    xChat.find(".chat-window-content").append($("<div>", {
                        "class": "form-error"
                    }).text("Erro ao iniciar o chat"))
                }
                
            } else {
                xChat.html('');
                windowRegister();
                xChat.find(".chat-window-content").append($("<div>", {
                    "class": "form-error"
                }).text("Erro ao iniciar o chat"))
            }
        }).error(function(xhr, statusText) { 
            xChat.html('');
            windowRegister();
            xChat.find(".chat-window-content").append($("<div>", {
                "class": "form-error"
            }).text("Error: "+statusText))
        });
        
    }

    function windowRegister () {
        if(!xChat.html()){
            if ($("<div>", {
                id: "xchat-window",
                "class": "chat-window"
            }).append($("<div>", {
                "class": "chat-window-header"
            }).html('<span class="text name">Fale com um consultor</span><span class="close"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTBBRjA3OTE4NDQxMUU1OTE0MUU3ODBGNzZENTVGNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTBBRjA3QTE4NDQxMUU1OTE0MUU3ODBGNzZENTVGNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBMEFGMDc3MTg0NDExRTU5MTQxRTc4MEY3NkQ1NUY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBMEFGMDc4MTg0NDExRTU5MTQxRTc4MEY3NkQ1NUY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1oumfAAAAo9JREFUeNq8mM9LVFEUx+cJI/4YtcCF0EIlaxG0NfqBFuUm1BZBbuo/UFq0q1YFY1n+2BpEtQg1TfQt3fRzU/YDlFAqUCPBzSyCWZiar++B82A4vHfmXJ2ZAx8G7jv3nO+7c++59z4vCIKEg9WDY+AoOATquP0PWAffwTeQsQb0jALOgcv8ewQkY/y2wQ/wCkyB13kjkwCFE2AcbAbutsl9W7UccQ9oZG6ATLB/y3AszyqgCjwKCm+joDKfgHLwLCiePQVJTUB/UHxLxwnoBv9KIIBydEkBB8Gi0ukzz2irTYBPyvMFcCBXQJ/i/BEcZr9BQ/Ih9m0GHxS/3lBANb9h3FpuE/PkgRL0oVhuZ5QaQiNUTU4XwK7yfz0BKSHiXoTvfeFDL/ZYmVfUfp4c7xr/0xqRIJ3zvF88I8Fjhrh3yNk3TqxJUCsSDfCw57aRzwtjTJ86fHWY3S9BnVLba1mo1b5QpxXHdezzDJfJm8CsY6yVMmVrjbMucDaivR10O8ZKkoAtx04jYDqifQYMOcb6m8hTsaKKjCd2ziqxjQ86xJtP8MSy2LBIXsPzwRdL1GOhFpuiDrcMjiOgTKzzCVEnUkLEsCHuTXI+BbZiHHa4wnmGIjMeUzF3YmJTzpPhIeSt4nRRlFetwkkRncrLvaHcoeM1ba2SUk7+3DCsYyyCRnZV8buaux1XKqNAtgbeOczu9+CX8pzevkKeiE6DbAlORFkencgz4fUSCOjLdywv5sE0bb2Y3FaWz15sm2Oab0ZED1guQPIlcMX1ahbSyGfA9T0k/s0HlkYth/V2TDfiS6ADHAcNdLOW91ywARbBHPD5plyQ63lotH03gRb+PpDi9ix/H/gJVsGuNeB/AQYAwCOWnAybRUIAAAAASUVORK5CYII=" width="16px" /></span>'))
            .append($("<div>", {
                "class": "chat-window-content"
            })).append($("<div>", {
                "class": "chat-window-footer"
            })).addClass("min").prependTo(xChat), xChat.find("#xchat-window").fadeIn(1e3, function() {
                $(this).removeClass("min")
            }), xChat.find(".chat-window-content").append($("<input/>", {
                id: "xchat-user-name",
                "class": "input-text",
                type: "text",
                placeholder: "Nome"
            })).append($("<input/>", {
                id: "xchat-user-email",
                "class": "input-text",
                type: "email",
                placeholder: "E-mail"
            })).append($("<input/>", {
                id: "xchat-user-phone",
                "class": "input-text tel",
                type: "text",
                maxlength: 15,
                placeholder: "Telefone"
            })), xChat.find("#xchat-user-name").focus(), tokens.length > 0) {
                var m;
                m = xChat.find(".chat-window").height() + ((tokens.length>1)?260:220), xChat.find(".chat-window").css("height", m + "px"), m = xChat.find(".chat-window-content").height() + ((tokens.length>1)?120:70), xChat.find(".chat-window-content").css("height", m + "px");
                
                if(tokens.length>1){
                        xChat.find(".chat-window-content").append($("<div>", {
                        "class": "select"
                    }));
                    xChat.find(".chat-window-content").find(".select").append($("<select>", {
                        id: "xchat-user-tokens"
                    })), tokens.forEach(function(t) {
                        xChat.find("#xchat-user-tokens").append($("<option>", {
                            value: t.token,
                            selected: t.selected
                        }).text(t.name))
                    })
                } else {
                    xChat.find(".chat-window-content").append($("<input>", {
                        id: "xchat-user-tokens",
                        type: "hidden",
                        value: tokens[0].token
                    }))
                }
                
            }

            xChat.find(".chat-window-content").append($("<button>", {
                id: "chat-send",
                type: "button"
            }).text("enviar"))

            xChat.find("#xchat-user-phone").keypress(function(e) {
                13 !== e.keyCode && h(this, e)
            }), xChat.find("#chat-send").click(function() {
                submitForm()
            })
        }
    }

    function windowChat (admin) {
        xChat.html('');
        if ($("<div>", {
            id: "xchat-window",
            "class": "chat-window"
        }).append($("<div>", {
            "class": "chat-window-header"
        }).html('<span class="text name">Fale com um consultor</span><span class="close"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTBBRjA3OTE4NDQxMUU1OTE0MUU3ODBGNzZENTVGNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTBBRjA3QTE4NDQxMUU1OTE0MUU3ODBGNzZENTVGNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBMEFGMDc3MTg0NDExRTU5MTQxRTc4MEY3NkQ1NUY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBMEFGMDc4MTg0NDExRTU5MTQxRTc4MEY3NkQ1NUY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1oumfAAAAo9JREFUeNq8mM9LVFEUx+cJI/4YtcCF0EIlaxG0NfqBFuUm1BZBbuo/UFq0q1YFY1n+2BpEtQg1TfQt3fRzU/YDlFAqUCPBzSyCWZiar++B82A4vHfmXJ2ZAx8G7jv3nO+7c++59z4vCIKEg9WDY+AoOATquP0PWAffwTeQsQb0jALOgcv8ewQkY/y2wQ/wCkyB13kjkwCFE2AcbAbutsl9W7UccQ9oZG6ATLB/y3AszyqgCjwKCm+joDKfgHLwLCiePQVJTUB/UHxLxwnoBv9KIIBydEkBB8Gi0ukzz2irTYBPyvMFcCBXQJ/i/BEcZr9BQ/Ih9m0GHxS/3lBANb9h3FpuE/PkgRL0oVhuZ5QaQiNUTU4XwK7yfz0BKSHiXoTvfeFDL/ZYmVfUfp4c7xr/0xqRIJ3zvF88I8Fjhrh3yNk3TqxJUCsSDfCw57aRzwtjTJ86fHWY3S9BnVLba1mo1b5QpxXHdezzDJfJm8CsY6yVMmVrjbMucDaivR10O8ZKkoAtx04jYDqifQYMOcb6m8hTsaKKjCd2ziqxjQ86xJtP8MSy2LBIXsPzwRdL1GOhFpuiDrcMjiOgTKzzCVEnUkLEsCHuTXI+BbZiHHa4wnmGIjMeUzF3YmJTzpPhIeSt4nRRlFetwkkRncrLvaHcoeM1ba2SUk7+3DCsYyyCRnZV8buaux1XKqNAtgbeOczu9+CX8pzevkKeiE6DbAlORFkencgz4fUSCOjLdywv5sE0bb2Y3FaWz15sm2Oab0ZED1guQPIlcMX1ahbSyGfA9T0k/s0HlkYth/V2TDfiS6ADHAcNdLOW91ywARbBHPD5plyQ63lotH03gRb+PpDi9ix/H/gJVsGuNeB/AQYAwCOWnAybRUIAAAAASUVORK5CYII=" width="16px" /></span>')).append($("<div>", {
            "class": "chat-window-content"
        })).append($("<div>", {
            "class": "chat-window-footer"
        }).append($("<button>", {
            id: "chat-send",
            type: "button"
        }).text("enviar"))).addClass("min").prependTo(xChat), xChat.find("#xchat-window").fadeIn(1e3, function() {
            $(this).removeClass("min")
        })) xChat.addClass("talking");
        
        xChat.find(".chat-window-header .name").click(function() {
            xChat.hasClass("talking") || xChat.hasClass("with-tokens") ? xChat.find(".chat-window").toggleClass("min") : (xChat.find(".chat-window").remove(), xChat.removeClass("talking").removeClass("with-tokens"), xChat.find("#xchat-btn-status").removeAttr("style"))
        }), xChat.find(".chat-window-header .close").click(function() {
            xChat.find(".chat-window").removeClass("min"), $("<div>", {
                "class": "chat-close-confirm"
            }).append($("<p>").text("Você tem certeza que deseja finalizar a conversa?")).append($("<p>", {
                style: "margin-top: 40px;"
            }).append($("<button/>", {
                type: "button",
                "class": "close-chat-bt no"
            }).html('<img width="12px"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NDZBQjQ3RDFDMzgxMUU1ODQ5MzhGMTUxOUZFOTQwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NDZBQjQ3RTFDMzgxMUU1ODQ5MzhGMTUxOUZFOTQwRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg0NkFCNDdCMUMzODExRTU4NDkzOEYxNTE5RkU5NDBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0NkFCNDdDMUMzODExRTU4NDkzOEYxNTE5RkU5NDBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SMhQagAAAaJJREFUeNrEl8lKA0EQhp0oLoeAgnp1gTEHF4jLIQdBn1iviogH8WAOgqKCiiYiBhJcHkBo/4JpbCfdPdXVYyz4Lkml/28yvcwkSqmh/6yK4/Mko6xKQgSmQRO0QK2E8DrogGNQ7fuWboHBDLhUP/UKarmeEOrgzRjvFFTNHrN5Flyp/pJKUPi7ZbxfErq5Ai6Uu0IlXOG6DvMCw6Cj/MWVWC8Ip7qx3YI10IuU4IQ/g0WbALEaIcEJb5vhNgGphCjcJRAiQZNtWxruE+BKcIrCF1w5RTN6JVLCG84R0BJdQXirKJwrIJGg8HnO2EnAcdwAZ4w+GnAJPMQcx7YaCzh6R2KfB/K1AfYCZI9Ayupk3KdN8CGYhC8gjZ2E0nC2xF+GsyR84Z+MpZZm23FXKhETbq7zZalEPnyLEf7k2GREEmWFiyX0D0cZRyqFzzGWLUfiVvfrjegL3Hu2C3pH2AFtxtZyDXZBz9NzZ9uIpkDTYvvIvHLuP0FPxBOuSTgJzksId0kcmOGuZUgSJ9lLSky4KUEXsg/GY47jgb4dD6y+BRgAH50MmLtpVzgAAAAASUVORK5CYII="/><span class="text">Não</span>')).append($("<button/>", {
                type: "button",
                "class": "close-chat-bt yes"
            }).html('<img width="12px"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NDZBQjQ3OTFDMzgxMUU1ODQ5MzhGMTUxOUZFOTQwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NDZBQjQ3QTFDMzgxMUU1ODQ5MzhGMTUxOUZFOTQwRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg0NkFCNDc3MUMzODExRTU4NDkzOEYxNTE5RkU5NDBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0NkFCNDc4MUMzODExRTU4NDkzOEYxNTE5RkU5NDBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vEtCUgAAAWhJREFUeNrsl7tOAkEUhlkKCBfRRhsqDSZC5xv4dDYWxMSCxh5KwUULCRGv0cJYkWgi4ZJo4kMM/yEsbAZ2Lrs7LIme5GuA2e9fOHNmsRhjsSgrHou4/mQAK6oAKXANRqA0e5WacAWkwA2b1w8oTjbACuRp0GKL9Q0OLMPbMA1scOTxfs9kD2RAUyCnejf1tWfALRPXFUiakGdBRyJvktxEE5L8TlXOB9gBNjgFcR/yDXCvI3cH2AOfrg+eA0tT/iCR27zcCXA4HQx8VRRD5MCjH7kT4Few8ExB/iSRX3rJnQBVyQXKHos3wXMQuRMgMW0OUZ1wC7fAS1C5uwnpsGhLLnjskr8qyBMqDczvYdnv2QDdsOTLBhHd3RvzXw0dudck3Fa4y1DkolGcB18a8rofuews2AV9k3KVw4hG9MCUXPU0pBDDJfKLoHKd47gARmHLdZ8H9sEHqIUlJ0w/lP7/NVv/AGMBBgBePcdP/tZxSQAAAABJRU5ErkJggg=="/><span class="text">Sim</span>'))).appendTo(xChat.find(".chat-window")), $(".close-chat-bt.no").click(function() {
                $(this).closest(".chat-close-confirm").fadeOut(function() {
                    $(this).remove(), xChat.find("#xchat-user-message").focus()
                })
            }), $(".close-chat-bt.yes").click(function() {
                xChat.find(".chat-window").remove(), removeCookie("xChatTk"), removeCookie("xChatName"), xChat.removeClass("talking").removeClass("with-tokens"), xChat.find("#xchat-btn-status").removeClass("disabled"), xChat.removeAttr("style");
                
            })
        }), xChat.find("#xchat-user-phone").keypress(function(e) {
            13 !== e.keyCode && h(this, e)
        }), xChat.find("#chat-send").click(function() {
                submitForm()
        }), xChat.on("keypress", "#xchat-user-message", function(e) {
            13 === e.which && e.shiftKey === !1 &&   submitForm()
        })

        xChat.find(".chat-window-content").html('<div class="message modelo"></div>'), xChat.find(".chat-window-header").prepend($("<img/>", {
            "class": "image",
            src: admin.image
        })), admin && xChat.find(".chat-window-header").find(".name").text(admin.name).attr("data-id", admin.id), xChat.find(".chat-window-footer").prepend($("<input/>", {
            id: "xchat-user-message",
            "class": "input-text",
            type: "text",
            placeholder: "Escreva aqui sua mensagem..."
        })), xChat.find("#xchat-user-message").focus()   
    }

    function addMessage(text, from, admin){
        var msg = xChat.find(".chat-window-content").find(".message.modelo").clone();
        msg.html(text, from).removeClass("modelo").addClass(from);
        xChat.find(".chat-window-content").append(msg);

        xChat.find(".chat-window-content").animate({
            scrollTop: xChat.find(".chat-window-content")[0].scrollHeight
        }, 300)
        
    }

    function loading(){
        xChat.find(".chat-window-content").html($("<div>", {
            "class": "sk-spinner sk-spinner-wave"
        }).append($("<div>", {
            "class": "sk-rect1"
        })).append($("<div>", {
            "class": "sk-rect2"
        })).append($("<div>", {
            "class": "sk-rect3"
        })).append($("<div>", {
            "class": "sk-rect4"
        })).append($("<div>", {
            "class": "sk-rect5"
        })))
    }

    function submitForm() {
        if (xChat.hasClass("talking")) {
            var a;
            a = xChat.find("#xchat-user-message").val(), a && (xChat.find("#xchat-user-message").val("").focus(), sendMessage(a))
        } else {
            var i = {
                    name: xChat.find("#xchat-user-name"),
                    email: xChat.find("#xchat-user-email"),
                    phone: xChat.find("#xchat-user-phone"),
                    token: xChat.find("#xchat-user-tokens")
                },
                d = !1;
            if (i.name.val() ? i.name.removeClass("error") : (i.name.addClass("error"), d = !0), i.email.val() ? o(i.email) === !1 && (d = !0) : (i.email.addClass("error"), d = !0), i.phone.val() ? c(i.phone) === !1 && (d = !0) : (i.phone.addClass("error"), d = !0), i.token.length && (i.token.val() || (i.token.addClass("error"), d = !0)), d) {
                if (!xChat.find(".form-error").length) {
                    var r;
                    xChat.find(".chat-window-content").append($("<div>", {
                        "class": "form-error"
                    }).text("Por favor, preencha os campos em destaque corretamente!")), r = e(".chat-window-content").height() + 21, xChat.find(".chat-window-content").css("height", r + "px"), r = e(".chat-window").height() + 169, xChat.find(".chat-window").css("height", r + "px")
                }
            } else xChat.find(".form-error").remove(), loading(), xChat.find("#chat-send").attr("disabled", !0), newChat(i.name.val(), i.email.val(), i.phone.val(), i.token.val())
        }
    }

    function startSocket (token, name) {
        var socket = io.connect(URL_SERVER);
        socket.emit('newUser', {id: token, name: name, workspace: workspace});

        socket.on('message', function(payload){
            loadMessages();
        });

        $.cookie('xChatTk', token);
        $.cookie('xChatName', name);
    }

    function o(e) {
        var t = e.val().substring(0, e.val().indexOf("@")),
            a = e.val().substring(e.val().indexOf("@") + 1, e.val().length);
        return t.length >= 1 && a.length >= 3 && -1 === t.search("@") && -1 === a.search("@") && -1 === t.search(" ") && -1 === a.search(" ") && -1 !== a.search(".") && a.indexOf(".") >= 1 && a.lastIndexOf(".") < a.length - 1 ? (e.addClass("valido"), e.removeClass("error"), !0) : (e.removeClass("valido"), e.addClass("error"), !1)
    }

    function c(e) {
        e.removeClass("error");
        var t;
        return t = e.val().length > 14 ? /\(\d{2}\)\ \d{5}\-\d{4}/ : /\(\d{2}\)\ \d{4}\-\d{4}/, t.test(e.val()) ? !0 : (e.addClass("error"), !1)
    }

    function d(e, t, a) {
        var n, i, s, o, c, d, r, h;
        if (i = a.keyCode, s = /\-|\.|\/|\(|\)| /g, o = e.value.toString().replace(s, ""), c = 0, d = "", r = o.length, 8 !== i) {
            for (h = 0; r >= h; h++) n = "-" === t.charAt(h) || "." === t.charAt(h) || "/" === t.charAt(h), n = n || "(" === t.charAt(h) || ")" === t.charAt(h) || " " === t.charAt(h), n ? (d += t.charAt(h), r++) : (d += o.charAt(c), c++);
            return e.value = d, !0
        }
        return !0
    }

    function r(t) {
        var a = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];
        $.inArray(t.which, a) >= 0 || t.preventDefault()
    }

    function h(e, t) {
        return r(t), e.value.length > 13 ? d(e, "(00) 00000-0000", t) : d(e, "(00) 0000-0000", t)
    }

    function removeCookie(t, a) {
        return $.cookie(t, "", $.extend({}, a, {
            expires: -1
        })), !$.cookie(t)
    }
});