<script context="module">
    export async function load({fetch}) {
        const res = await fetch("/endpoint");
        const data = await res.json();
        return {
            props: {data},
        };
    }
</script>
<script>
    export let data;
</script>


{#each Object.entries(data).sort((a,b) => b[1]-a[1]) as [genre, rating]}
    <p>{genre}: {rating}</p>
{/each}