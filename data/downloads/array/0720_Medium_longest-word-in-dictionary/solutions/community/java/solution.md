# [Java] - The easiest to understand trie solution. [100%, Explanation]

**Author:** Shargano
**Votes:** 84
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/634793/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/634793/)

---

We will use `Trie`, also called `Prefix tree`, structure to solve the problem.  
If you don't know what the `Trie` is, then complete this problem first https://leetcode.com/problems/implement-trie-prefix-tree/

First of all, let's define our node of tree:

	class TreeNode {
		TreeNode[] children = new TreeNode[26];
		String word;

		TreeNode () {}
	}

As said in constraints, words contains lowercase letters only; That's why we can simply use array `TreeNode[26]` to store node children. To compute the index we will use next trick - `index = character - 'a'`.
We need to, somehow, check is the node represents a word. So, let's store in each `TreeNode` field `word`. If node is representing the word, then value of word will be in the field `word`, otherwise field will be empty.

How to insert a word into our `Trie`? - Using `current` as pointer of node. If `current` don't have `character` in his children, just put new `TreeNode` to `current` children.
We have to put word character by character into Tree. There are 2 cases:
- 1) We already have the character -  just set `current` to `current.children[c - 'a']`
- 2) We don't have the character yet - put it into `current.children` and then set `current` to `current.children[c - 'a']`

At the end of inserting operation we need to take node, represanting the last character of a word, and set it `word` field to whole word.

The code below insert word into our `Trie`:

	private void insert(String word) {
		TreeNode current = root;
		for (char c : word.toCharArray()) {
			if (current.children[c - 'a'] == null)
				current.children[c - 'a'] = new TreeNode();
			current = current.children[c - 'a'];
		}
		current.word = word;
	}


As we defined our `TreeNode` and `insert` function, let's fill it by all words, we have in input:

	for (String w : words)
				insert(w);

Now we have all words in our `Trie` and just have to iterate over the whole tree and find the longest word.
We will use `Depth-First Search` to iterate over it.
As said in the problem defenition, we should build each word `character by character`. It means, if we have character, which isn't word - we should stop `DFS` for this branch of our `Trie`.
If current `TreeNode` have word - then check is it the longest word, we are looking for.

Next code describes `DFS`, looking for the longest word:

	private void dfs(TreeNode node) {
		if (node == null)
			return;

		if (node.word != null) {
			if (node.word.length() > result.length())
				result = node.word;
			else if (node.word.length() == result.length() && node.word.compareTo(result) < 0)
				result = node.word;
		}

		for (TreeNode child : node.children)
			if (child != null && child.word != null)
				dfs(child);
	}

Enjoy ;)
The whole solution:

	class Solution {
		private TreeNode root;
		private String result = "";

		public String longestWord(String[] words) {
			root = new TreeNode();

			for (String w : words)
				insert(w);

			dfs(root);

			return result;
		}

		private void dfs(TreeNode node) {
			if (node == null)
				return;

			if (node.word != null) {
				if (node.word.length() > result.length())
					result = node.word;
				else if (node.word.length() == result.length() && node.word.compareTo(result) < 0)
					result = node.word;
			}

			for (TreeNode child : node.children)
				if (child != null && child.word != null)
					dfs(child);
		}

		private void insert(String word) {
			TreeNode current = root;
			for (char c : word.toCharArray()) {
				if (current.children[c - 'a'] == null)
					current.children[c - 'a'] = new TreeNode();
				current = current.children[c - 'a'];
			}
			current.word = word;
		}

	}

	class TreeNode {
		TreeNode[] children = new TreeNode[26];
		String word;

		TreeNode () {}
	}