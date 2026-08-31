# Java Trie with comments

**Author:** rakhmedovrs
**Votes:** 30
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1126702/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1126702/)

---

For simplicity let's introduce class Node, it will help us get infromation about nodes more quicly than HashTable
```
	class Node
	{
		Node[] children = new Node[26];
		int count;
		int end;
	}
```

Here's ordinary Trie implementation with my comments. Feel free to ask questions.
```
	class Trie
	{
		private Node root;

		public Trie()
		{
			root = new Node();
		}

        // We are iterating through each word character and if Node doesn't have a child we will add it.
		// on each step after adding/stepping the node we increment prefix count
		// after last step we add to words end's counter
		public void insert(String word)
		{
			Node current = root;
			int pos;
			for (char ch : word.toCharArray())
			{
				pos = ch - 'a';
				if (current.children[pos] == null)
				{
					current.children[pos] = new Node();
				}

				current = current.children[pos];
				current.count++;
			}

			current.end++;
		}

        // We are iterating through each word character and if Node doesn't have a child we return 0.
		// In case we iterated entire word, just return end's counter
		public int countWordsEqualTo(String word)
		{
			Node current = root;
			int pos;
			for (char ch : word.toCharArray())
			{
				pos = ch - 'a';
				if (current.children[pos] == null)
				{
					return 0;
				}

				current = current.children[pos];
			}

			return current.end;
		}

        // We are iterating through each word character and if Node doesn't have a child we return 0.
		// In case we iterated entire word, just return count counter
		public int countWordsStartingWith(String prefix)
		{
			Node current = root;
			int pos;
			for (char ch : prefix.toCharArray())
			{
				pos = ch - 'a';
				if (current.children[pos] == null)
				{
					return 0;
				}

				current = current.children[pos];
			}

			return current.count;
		}

        // We are iterating through each word character and if Node doesn't have a child we return
		// In case we iterated entire word, just decrement end's counter
		public void erase(String word)
		{
			Node current = root;
			int pos;
			for (char ch : word.toCharArray())
			{
				pos = ch - 'a';
				current = current.children[pos];
				current.count--;
			}

			current.end--;
		}
	}
```