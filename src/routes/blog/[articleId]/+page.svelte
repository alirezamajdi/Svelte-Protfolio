<script>
	let {data} = $props();
	$inspect(data);
</script>

<h1>Detail Article</h1>
<h3>{data.title}</h3>
<p>{data.body}</p>
