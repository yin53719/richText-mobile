export default `<style>
    *{
        margin: 0;
        padding: 0;
        // box-sizing: border-box;
    }
    html,body{
        overflow: hidden;
        box-sizing: border-box;
    }
    body{
        padding:5px;
        overflow-y: auto;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    p{
        width:100%;
    }
    p>img,p>video{
        width:100%;
    }
    video{
        width: auto;
    }
</style>
`