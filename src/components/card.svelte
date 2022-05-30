<script>
    export let genre;
    export let setGenres;
    function click() {
        fetch("/endpoint", {
            method: "POST",
            body: genre,
        });
        setGenres();
    }
</script>

<div on:click={click}>{genre}</div>

<style>
    div {
        margin: 1em;
        padding: 1em;
        display: inline-block;
        border: 1px solid black;
        border-radius: 1em;
        background-color: rgb(200, 200, 200);
        user-select: none;
    }
    div:hover {
        background-color: rgb(100, 100, 100);
        cursor: pointer;
    }
</style>
