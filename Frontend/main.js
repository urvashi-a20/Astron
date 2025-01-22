$(document).ready(function () {

    eel.init()()
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect:"bounceIn",
        },
        out:{
            effect:"bounceOut",
        },
    });
    //Siriwave
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 640,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart:true,
      });
      //Siri messege animation
      $('.siri-messege').textillate({
        loop: true,
        sync: true,
        in:{
            effect:"fadeInUp",
            sync:true,
        },
        out:{
            effect:"fadeOutUp",
            sync:true, 
        },
    });

      // Mic Button clickevent
      $("#MicBtn").click(function () { 
        eel.playAssistantSound()
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommands()()
    
    });

    function doc_keyUp(e){
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
        if (e.key === 'j' && e.metaKey) {
        eel.playAssistantSound()
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommands()()
        }
    }    
    document.addEventListener('keyup', doc_keyUp, false); 

    function PlayAssistant(message){

        if(message != ""){
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands(message);
            $("#chatbox").val("")//if the attr is false of the SiriWave, then the chatbox will empty.
            $("#MicBtn").attr("hidden", false);
            $("#SendBtn").attr("hidden", true);
        }
    }


    function ShowHideButton(message){
        if (message.length == 0){
            $("#MicBtn").attr("hidden", false);
            $("#SendBtn").attr("hidden", true);
        }
        else{
            $("#MicBtn").attr('hidden', true);
            $("#SendBtn").attr('hidden', false);
        }
    }
    
    $("#chatbox").keyup(function(){
         let message = $("#chatbox").val();
         ShowHideButton(message)
    })

    $("#SendBtn").click(function(){

        let message = $("#chatbox").val()
        PlayAssistant(message)
    });

    $("#chatbox").keypress(function(e){
        key = e.which; 
        if(key == 13) {
            // 13 means enter key in javascript 
            let message = $("#chatbox").val()
            PlayAssistant(message)
        }
    })

});
