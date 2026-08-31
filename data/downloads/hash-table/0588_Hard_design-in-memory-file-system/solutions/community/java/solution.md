# Java | Trie | Clean | Explained

**Author:** prashant404
**Votes:** 37
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/1679689/](https://leetcode.com/problems/design-in-memory-file-system/solutions/1679689/)

---

**Idea:** 
* Treat the file system as a Trie or an Nary tree. 
* Until content is added to a node, it's a directory
* Possible improvements: 
	* Implement getters and setters in the `Node` class
	* Replace `split` method with character by character parsing of the path for better time and space complexity
* The crux of the solution is the `traversePath` method
* For design questions, strive to make the code modular and clean, ensuring [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). Your code's legibility is just as important as the business logic working
* IMO the code is self-explanatory, but feel free to ask any questions
> **T/S:** n = depth(path), m = size(content)
> *constructor*: O(1)/O(1)
> *ls*: O(n)/O(n)
> *mkdir*: O(n)/O(n)
> *addContentToFile*: O(n + m)/O(n + m)
> *readContentFromFile*: O(n)/O(n)

```
class FileSystem {

	private static class Node {
		private final String name;
		private final Map<String, Node> nodeByName = new TreeMap<>();
		private final StringBuilder content = new StringBuilder();
		private boolean isFile;

		Node(final String name) {
			this.name = name;
		}

		private boolean isFile() {
			return isFile;
		}
	}

	private final Node root = new Node("");

	/**
	 * Initializes the object of the system.
	 */
	public FileSystem() {}

	/**
	 * @param path file or directory path
	 * @return If path is a file path, returns a list that only contains this file's name.
	 * If path is a directory path, returns the list of file and directory names in this directory.
	 */
	public List<String> ls(final String path) {
		var node = traversePath(path);
		return node.isFile() ? List.of(node.name) : List.copyOf(node.nodeByName.keySet());
	}

	/**
	 * Makes a new directory according to the given path. The given directory path does not exist.
	 * If the middle directories in the path do not exist, you should create them as well.
	 *
	 * @param path directory path
	 */
	public void mkdir(final String path) {
		traversePath(path);
	}

	/**
	 * If filePath does not exist, creates that file containing given content.
	 * If filePath already exists, appends the given content to original content.
	 *
	 * @param filePath filepath
	 * @param content  content of the file
	 */
	public void addContentToFile(final String filePath, final String content) {
		var node = traversePath(filePath);
		node.isFile = true;
		node.content.append(content);
	}

	/**
	 * @param filePath file path
	 * @return the content in the file at filePath.
	 */
	public String readContentFromFile(final String filePath) {
		return traversePath(filePath).content.toString();
	}

	/**
	 * Traverse the path and create the nodes that don't exist along the path.
	 *
	 * @param path path to the node
	 * @return the node corresponding to the path
	 */
	private Node traversePath(final String path) {
		var current = root;
		var parts = path.split("/");
		var i = new int[]{1};

		while (i[0] < parts.length) {
			current = current.nodeByName.computeIfAbsent(parts[i[0]], k -> new Node(parts[i[0]]));
			i[0]++;
		}
		
		return current;
	}
}
```
***Please upvote if this helps***