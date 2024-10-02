<script lang="ts">
    import config from '$lib/config';
</script>

<style>
    .inspectmodal {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 4;
        top: 0;
        display: flex;
    }

    .inspectmodal .modalarea {
        position: fixed;
        background-color: rgba(0, 0, 0, .8);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .inspectmodal .modalindex {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 500px;
        height: auto;
        background-color: #202225;
        border-radius: 7px;
    }

    .inspectmodal .modalbanner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 130px;
        border-radius: 7px 7px 0 0;
        overflow: hidden;
        background-image: url(/assets/bgmodal.svg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
    }

    .inspectmodal .modalcontent {
        height: 250px;
        margin: 30px 20px;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }

    .inspectmodal .modalcontent h3 {
        margin-bottom: 10px;
        margin-top: 0;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 800;
    }

    .inspectmodal .modalcontent p {
        word-wrap: break-word;
        width: 100%;
        color: #E2E2E2;
        font-size: 15px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 10px;
    }

    .inspectmodal .modalcontent .seperator {
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        width: 100%;
        margin: 20px 0;
    }

    .inspectmodal .modalcontent .modaliban {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: auto;
        background-color: #18191C;
        border-radius: 7px;
    }

    .inspectmodal .modalcontent .modaliban .ibanflex {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        margin: 15px 20px;
    }

    .inspectmodal .modalcontent .modaliban .ibanflex .modalibanindex {
        margin: 0;
        color: rgba(255, 255, 255, .4);
        word-wrap: break-word;
        width: calc(100% - 40px);
    }

    .inspectmodal .modalcontent .clipboardtext {
        font-size: 15px;
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        margin: 10px 0 0;
        transition: .1s ease-in;
        max-width: 90%;
    }

    .inspectmodal .modalcontent .otheroptions {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .inspectmodal .modalcontent .otheroptions .textarea {
        width: 70%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .inspectmodal .modalcontent .otheroptions .textarea h3 {
        margin-bottom: 10px;
        margin-top: 0;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 800;
    }

    .inspectmodal .modalcontent .otheroptions .textarea p {
        width: 100%;
        color: #E2E2E2;
        font-size: 15px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 10px;
    }

    .inspectmodal .modalcontent .otheroptions .redirectbutton {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .inspectmodal .modalcontent .otheroptions .redirectbutton .modalindexaddtodiscord {
        width: 90%;
        height: 80%;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        background-color: #2D7D46;
        border-radius: 3px;
        transition: .1s ease-in;
    }

    .inspectmodal .modalsubmit {
        width: 100%;
        height: 80px;
        background-color: #18191C;
        border-radius: 0 0 7px 7px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .inspectmodal .modalbutton {
        transition: .1s ease-in;
        border: none;
        font-size: 15px;
        min-width: 120px;
        margin: 0 16px;
        width: 25%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #404EED;
        color: #FFFFFF;
        text-decoration: none;
        border-radius: 4px;
    }
</style>

<div class="inspectmodal">
    <div class="modalarea">
        <div class="modalindex zoomIn">
            <div class="modalbanner"></div>
            <div class="modalcontent">
                <h3>Support</h3>
                <p>You can support us by donating us via IBAN</p>
                <div class="modaliban">
                    <div class="ibanflex">
                        <div class="modalibanindex">{config.iban}</div>
                    </div>
                </div>
                <p class="clipboardtext">Click to copy clipboard</p>
                <div class="seperator"></div>
                <div class="otheroptions">
                    <div class="textarea">
                        <h3>Or Add</h3>
                        <p>You can add the bot to a server.</p>
                    </div>
                    <div class="redirectbutton">
                        <a class="modalindexaddtodiscord" href={config.bot.invite}>
                            Add
                        </a>
                    </div>
                </div>
            </div>
            <div class="modalsubmit">
                <button class="modalbutton">
                    Nevermind
                </button>
            </div>
        </div>
    </div>
</div>