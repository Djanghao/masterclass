# Simple Python solution (beats 99% runtime, 95% memory)

**Author:** srijal
**Votes:** 106
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/362916/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/362916/)

---

There is no need to create a Trie node class. Using a dictionary can give much better performance. Nodes are replaced by dictionary. `is_word` is replaced by adding a `"-"` key to the dictionary.

	class Trie(object):

		def __init__(self):
			self.trie = {}


		def insert(self, word):
			t = self.trie
			for c in word:
				if c not in t: t[c] = {}
				t = t[c]
			t["-"] = True


		def search(self, word):
			t = self.trie
			for c in word:
				if c not in t: return False
				t = t[c]
			return "-" in t

		def startsWith(self, prefix):
			t = self.trie
			for c in prefix:
				if c not in t: return False
				t = t[c]
			return True