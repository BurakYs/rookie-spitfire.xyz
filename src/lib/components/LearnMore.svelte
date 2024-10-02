<script lang="ts">
    export let title = '';
    export let description = '';
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
        background-image: url("/assets/bgmodal.svg");
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
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div class="modalsubmit">
                <button class="modalbutton">
                    Nevermind
                </button>
            </div>
        </div>
    </div>
</div>