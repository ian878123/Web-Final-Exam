function change(id){
    $.getJSON("../weapons-info.json",function(data){
        for (let weapon of data){
            if(weapon.名稱 == id){
                $("#name").html(weapon.名稱);
                $("#video").html('<h3 style="text-align: center;">展示影片</h3><iframe class="mb-3" height="400" src="https://www.youtube.com/embed/LF9pPIi5ops?start='+ weapon.video+'" frameborder="0" allowfullscreen></iframe>')
                $("#icon").html("<img src=" + weapon.icon + " style='width: 40%;' />");
                $("#img").html("<img src=" + weapon.img + " style='width: 80%;' />");
                $("#分類").html("分類<br>" + weapon.分類);
                $("#價格").html("價格<br>" + weapon.價格);
                $("#穿透力").html("穿透力<br>" + weapon.穿透力);
                $("#開火模式").html(weapon.主要攻擊.開火模式);
                $("#射速").html(weapon.主要攻擊.射速);
                $("#彈匣容量").html(weapon.主要攻擊.彈匣容量);
                $("#裝彈時間").html(weapon.主要攻擊.裝彈時間);
                $("#移動速度").html(weapon.主要攻擊.移動速度);
                $("#裝備時間").html(weapon.主要攻擊.裝備時間);
                $("#暴頭倍率").html(weapon.主要攻擊.暴頭倍率);
                if(weapon.次要攻擊){
                    $("#次要").html("次要攻擊");
                    Object.keys(weapon.次要攻擊).forEach(function(key){
                        $("#ta").append("<tr><td>" + key + "</td><td>" + weapon.次要攻擊[key] + "</td></tr>");
                    })
                }else{
                    $("#次要攻擊").remove();
                }
                Object.keys(weapon.傷害).forEach(function(key){
                    $("#dis").append("<td>" + key + "</td>");
                    $("#head").append("<td>" + weapon.傷害[key].頭部 + "</td>");
                    $("#body").append("<td>" + weapon.傷害[key].軀幹 + "</td>");
                    $("#leg").append("<td>" + weapon.傷害[key].腿部 + "</td>");
                })
            }
        }
    })
}