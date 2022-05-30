<script>
    import Card from "../components/card.svelte";
    import genres from "../genres";
    let genre1;
    let genre2;
    function setGenres() {
        genre1 = genres[Math.floor(Math.random() * genres.length)];
        do {
            genre2 = genres[Math.floor(Math.random() * genres.length)];
        } while (genre1 === genre2);
    }
    setGenres();
</script>

<Card genre={genre1} {setGenres} />
<Card genre={genre2} {setGenres} />
