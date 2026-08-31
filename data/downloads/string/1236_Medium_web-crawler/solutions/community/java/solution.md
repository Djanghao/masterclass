# [Java] Clean Code - BFS

**Author:** AlgorithmImplementer
**Votes:** 2
**Link:** [https://leetcode.com/problems/web-crawler/solutions/678980/](https://leetcode.com/problems/web-crawler/solutions/678980/)

---

**BFS**  This grap traversal takes the time O(V + E) where V is the vertices and E is the count of edges in the graph.
As for the space, O(V) where V is the number of vertices in the graph.

```java
public List<String> crawl(String startUrl, HtmlParser htmlParser) {

	String hostname = getHostname(startUrl);

	Queue<String> queue = new LinkedList<>();
	queue.offer(startUrl);

	Set<String> result = new HashSet<>();
	result.add(startUrl);

	while (!queue.isEmpty()) {
		String url = queue.poll();

		for (String next : htmlParser.getUrls(url))
			if (next.startsWith(hostname) && result.add(next))
				queue.offer(next);
	}
	return new ArrayList<>(result);
}

private String getHostname(String url) {
	int index = url.indexOf("/", 7);
	
	return index == -1 ? url : url.substring(0, index);
}