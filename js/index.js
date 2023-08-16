function openMenu() {
    if (document.querySelector(".burgericon").id === "menuopened") return document.querySelector(".responsivemenu").style.display = "none", document.querySelector(".burgericon").id = "menuclosed", void (document.querySelector("body, html, .app").style.overflow = "auto");
    document.querySelector("body, html, .app").style.overflow = "hidden", document.querySelector(".responsivemenu").style.display = "flex", document.querySelector(".burgericon").id = "menuopened"
}
function inspectModal() {
    document.querySelector("html, body, .app").style.overflow = "hidden";
    document.body.innerHTML += `<div class="inspectmodal" style="width:100%;height:100%;position:absolute;z-index:+4;top:0;display:flex"><div class="modalarea" data-aos="fade-in" style="position:fixed;background-color:rgba(0,0,0,.8);width:100%;height:100%;display:flex;justify-content:center;align-items:center"><div class="modalindex zoomIn" style="display:flex;flex-direction:column;width:80%;max-width:500px;height:auto;background-color:#202225;border-radius:6.5px"><div class="modalbanner" style="display:flex;justify-content:center;align-items:center;width:100%;height:130px;border-radius:6.5px 6.5px 0 0;overflow:hidden;background-image:url(/assets/bgmodal.svg);background-repeat:no-repeat;background-size:cover;background-position:top"></div><div class="modalcontent" style="height:250px;margin:30px 20px;overflow:auto;display:flex;flex-direction:column"><h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800">Support</h3><p style="word-wrap:break-word;width:100%;color:#e2e2e2;font-size:15px;font-weight:400;margin-top:0;margin-bottom:10px">You can support us by donating Turkish Lira to the Papara account below.</p><div class="modaliban" style="display:flex;flex-direction:row;align-items:center;width:100%;height:auto;background-color:#18191c;border-radius:6.5px"><div class="ibanflex" style="width:100%;height:100%;display:flex;align-items:center;margin:15px 20px"><div class="modalibanindex" style="margin:0;color:rgba(255,255,255,.4);word-wrap:break-word;width:calc(100% - 40px)">1552428169</div></div></div><p class="clipboardtext" style="font-size:15px;font-weight:400;color:rgba(255,255,255,.5);margin:0;margin-top:10px;transition:.1s ease-in;max-width:90%">Click to copy clipboard</p><div style="border-bottom:1px solid rgba(255,255,255,.1);width:100%;margin:20px 0"></div><div style="width:100%;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center"><div style="width:70%;height:auto;display:flex;flex-direction:column"><h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800">Or Add</h3><p style="width:100%;color:#e2e2e2;font-size:15px;font-weight:400;margin-top:0;margin-bottom:10px">You can add the bot to a server.</p></div><div style="width:30%;height:100%;display:flex;align-items:center"><a href="/invite" class="modalindexaddtodiscord" style="width:90%;height:80%;text-decoration:none;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#2d7d46;border-radius:3px;transition:.1s ease-in">Add</a></div></div></div><div class="modalsubmit" style="width:100%;height:80px;background-color:#18191c;border-radius:0 0 6.5px 6.5px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center"><button class="modalbutton" style="transition:.1s ease-in;border:none;font-size:15px;min-width:120px;margin:0 16px;width:25%;height:48px;display:flex;justify-content:center;align-items:center;background-color:#404eed;color:#fff;text-decoration:none;border-radius:4px">Nevermind</button></div></div></div>`;
    return true;
}
function learnMore(num) {
    document.querySelector("html, body, .app").style.overflow = "hidden";
    if (num === 1) {
        var text = `<div class="inspectmodal" style="width:100%;height:100%;position:absolute;z-index:+4;top:0;display:flex"><div class="modalarea" data-aos="fade-in" style="position:fixed;background-color:rgba(0,0,0,.8);width:100%;height:100%;display:flex;justify-content:center;align-items:center"><div class="modalindex zoomIn" style="display:flex;flex-direction:column;width:80%;max-width:500px;height:auto;background-color:#202225;border-radius:6.5px"><div class="modalbanner" style='display:flex;justify-content:center;align-items:center;width:100%;height:130px;border-radius:6.5px 6.5px 0 0;overflow:hidden;background-image:url("/assets/bgmodal.svg");background-repeat:no-repeat;background-size:cover;background-position:top'></div><div class="modalcontent" style="height:250px;margin:30px 20px;overflow:auto;display:flex;flex-direction:column"><h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800">Locker Generation</h3><p style="word-wrap:break-word;width:100%;color:#e2e2e2;font-size:15px;font-weight:400;margin-top:0;margin-bottom:10px">You can view your Fortnite locker either on the Fortnite.GG website or as an image. These are very simple to do. All you need to do is use the "/locker" command to select whether you want to view your locker on Fortnite.GG or as an image. When you select Fortnite.GG as an option, the bot will create your entire locker in seconds and upload it to the Fortnite.GG website, then send you a link to the website. If you want to create it as an image, the bot will ask you which type of cosmetics you want to create for your locker. Once you answer this, the bot will create an image of your locker in seconds and send it to you.</p></div><div class="modalsubmit" style="width:100%;height:80px;background-color:#18191c;border-radius:0 0 6.5px 6.5px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center"><button class="modalbutton" style="transition:.1s ease-in;border:none;font-size:15px;min-width:120px;margin:0 16px;width:25%;height:48px;display:flex;justify-content:center;align-items:center;background-color:#404eed;color:#fff;text-decoration:none;border-radius:4px">Nevermind</button></div></div></div></div>`
    } else if (num === 2) {
        var text = `<div class="inspectmodal" style="width:100%;height:100%;position:absolute;z-index:+4;top:0;display:flex"><div class="modalarea" data-aos="fade-in" style="position:fixed;background-color:rgba(0,0,0,.8);width:100%;height:100%;display:flex;justify-content:center;align-items:center"><div class="modalindex zoomIn" style="display:flex;flex-direction:column;width:80%;max-width:500px;height:auto;background-color:#202225;border-radius:6.5px"><div class="modalbanner" style="display:flex;justify-content:center;align-items:center;width:100%;height:130px;border-radius:6.5px 6.5px 0 0;overflow:hidden;background-image:url(/assets/bgmodal.svg);background-repeat:no-repeat;background-size:cover;background-position:top"></div><div class="modalcontent" style="height:250px;margin:30px 20px;overflow:auto;display:flex;flex-direction:column"><h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800">Friend Management</h3><p style="word-wrap:break-word;width:100%;color:#e2e2e2;font-size:15px;font-weight:400;margin-top:0;margin-bottom:10px">Rookie Spitfire is the best way to manage your friends. You can add, remove, block and list your friends with just one command. You can simply do all of these with buttons with the "/friends user" command or if you want to add/remove/block friends you can simply select the subcommand you'd like to use.</p></div><div class="modalsubmit" style="width:100%;height:80px;background-color:#18191c;border-radius:0 0 6.5px 6.5px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center"><button class="modalbutton" style="transition:.1s ease-in;border:none;font-size:15px;min-width:120px;margin:0 16px;width:25%;height:48px;display:flex;justify-content:center;align-items:center;background-color:#404eed;color:#fff;text-decoration:none;border-radius:4px">Nevermind</button></div></div></div></div>`
    } else if (num === 3) {
        var text = `<div class="inspectmodal" style="width:100%;height:100%;position:absolute;z-index:+4;top:0;display:flex"><div class="modalarea" data-aos="fade-in" style="position:fixed;background-color:rgba(0,0,0,.8);width:100%;height:100%;display:flex;justify-content:center;align-items:center"><div class="modalindex zoomIn" style="display:flex;flex-direction:column;width:80%;max-width:500px;height:auto;background-color:#202225;border-radius:6.5px"><div class="modalbanner" style='display:flex;justify-content:center;align-items:center;width:100%;height:130px;border-radius:6.5px 6.5px 0 0;overflow:hidden;background-image:url("/assets/bgmodal.svg");background-repeat:no-repeat;background-size:cover;background-position:top'></div><div class="modalcontent" style="height:250px;margin:30px 20px;overflow:auto;display:flex;flex-direction:column"><p style="word-wrap:break-word;width:100%;color:#e2e2e2;font-size:15px;font-weight:400;margin-top:0;margin-bottom:10px"><h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800">Ghost Equip</h3>This command equips any skin, dance, backpack, pickaxe you want, whether you have it or not. It is very simple to use, just use the "/ghost-equip" command and type the cosmetic name then send the command. If the cosmetic you are searching for exists but the bot says it's not this means cosmetic type is not valid.<h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800"><br>Fake Level</h3>This command is pretty self-explanatory, it changes your level to any level you want with the "/fake-level" command.<h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800"><br>Fake Crown Wins</h3>This command is pretty self-explanatory aswell, the command is "/fake-crown-wins", it changes your crown wins to any number you want and uses the Crowning Achievement emote for you.</p></div><div class="modalsubmit" style="width:100%;height:80px;background-color:#18191c;border-radius:0 0 6.5px 6.5px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center"><button class="modalbutton" style="transition:.1s ease-in;border:none;font-size:15px;min-width:120px;margin:0 16px;width:25%;height:48px;display:flex;justify-content:center;align-items:center;background-color:#404eed;color:#fff;text-decoration:none;border-radius:4px">Nevermind</button></div></div></div></div>`
    } else if (num === 4) {
        var text = `<div class="inspectmodal" style="width:100%;height:100%;position:absolute;z-index:+4;top:0;display:flex"><div class="modalarea" data-aos="fade-in" style="position:fixed;background-color:rgba(0,0,0,.8);width:100%;height:100%;display:flex;justify-content:center;align-items:center"><div class="modalindex zoomIn" style="display:flex;flex-direction:column;width:80%;max-width:500px;height:auto;background-color:#202225;border-radius:6.5px"><div class="modalbanner" style="display:flex;justify-content:center;align-items:center;width:100%;height:130px;border-radius:6.5px 6.5px 0 0;overflow:hidden;background-image:url(/assets/bgmodal.svg);background-repeat:no-repeat;background-size:cover;background-position:top"></div><div class="modalcontent" style="height:250px;margin:30px 20px;overflow:auto;display:flex;flex-direction:column"><h3 style="margin-bottom:10px;margin-top:0;color:#fff;font-size:17px;font-weight:800">Multi-Language Support</h3><p style="word-wrap:break-word;width:100%;color:#e2e2e2;font-size:15px;font-weight:400;margin-top:0;margin-bottom:10px">Rookie Spitfire supports multiple languages! For now, we only support English and Turkish but don't worry about it. You or the community can add their own language or contribute to the existing languages. These people will also receive the Translator role in the support server. If you want to be a translator, join our support server for more information.</p></div><div class="modalsubmit" style="width:100%;height:80px;background-color:#18191c;border-radius:0 0 6.5px 6.5px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center"><button class="modalbutton" style="transition:.1s ease-in;border:none;font-size:15px;min-width:120px;margin:0 16px;width:25%;height:48px;display:flex;justify-content:center;align-items:center;background-color:#404eed;color:#fff;text-decoration:none;border-radius:4px">Nevermind</button></div></div></div></div>`
    }
    document.body.innerHTML += text
}
function openFaq(e) {
    let t = document.querySelector(`.${e}`),
        o = document.querySelector(`.${e} .accordion`),
        i = document.querySelector(`.${e} .areasbottom`),
        n = document.querySelector(`.${e} .areastop`),
        r = document.querySelector(`.${e} .areastop .areasright button .icon .i2`),
        d = document.querySelector(".faq");
    if (t.id === "faqClosed") {
        for (var a = 0; a < d.length; a++)
            if ("faqOpened" === d[a].id && !d[a].classList[1] !== e) {
                var l = {
                    element: document.querySelector(`.${d[a].classList[1]}`),
                    icon: document.querySelector(`.${d[a].classList[1]} .areastop .areasright button .icon .i2`),
                    accordion: document.querySelector(`.${d[a].classList[1]} .accordion`),
                    style: document.querySelector(`.${d[a].classList[1]} .areastop`).style
                };
                l.accordion.style.height = 0, l.style.borderBottom = "none", l.element.id = "faqClosed", l.icon.style.display = "flex"
            } n.style.borderBottom = "1px solid rgba(55,56,58,.7)", o.style.height = i.clientHeight + "px", t.id = "faqOpened", r.style.display = "none"
    } else o.style.height = 0, n.style.borderBottom = "none", t.id = "faqClosed", r.style.display = "flex"
}
document.querySelector(".burgericon")?.addEventListener("click", openMenu), document.querySelector(".closemenu")?.addEventListener("click", openMenu), window.onclick = function (e) {
    let t = document.querySelector(".modalarea"),
        o = document.querySelector(".modalbutton"),
        i = document.querySelector(".modaliban"),
        n = document.querySelector(".modalibanindex"),
        r = document.querySelector(".ibanflex"),
        d = document.querySelector(".inspect");
    e.target == document.querySelector(".menuback") && (document.querySelector(".responsivemenu").style.display = "none", document.querySelector(".burgericon").id = "menuclosed", document.querySelector("body, html, .app").style.overflow = "auto"), e.target == d && (document.querySelector("body, html, .app").style.overflow = "hidden"), e.target == t || e.target == o ? (document.querySelector(".inspectmodal").remove(), document.querySelector("html, body, .app").style = "") : e.target != i && e.target != n && e.target != r || (navigator.clipboard.writeText(n.innerHTML), document.querySelector(".clipboardtext").style.color = "#41ce6d", document.querySelector(".clipboardtext").innerHTML = "Copied! Thank you for your support!")
}