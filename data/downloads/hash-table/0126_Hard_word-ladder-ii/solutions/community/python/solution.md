# Python BFS+Backtrack Greatly Improved by bi-directional BFS

**Author:** WangQiuc
**Votes:** 219
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/269012/](https://leetcode.com/problems/word-ladder-ii/solutions/269012/)

---

An intuitive solution is to use BFS to find shorterst transformation path from begin word to end word. A valid transformation is to change any one character and transformed word should be in the a word list.

What is tricker than #127 is that we need to find all shortest paths. Thus, we need to build a search tree during BFS and backtrack along that tree to restore all shortest paths. 
So we can't stop BFS once we found a transformed word is endword but instead finishing searching is this BFS layer since there could be more than one shortest path.
And we still need to rule out all node that we have searched previously. Meanwhile if two nodes have a same child node, we need to add that child node to both node's children list as we need to backtrack all valid paths. So unlike a regular BFS, we can't use a "seen" set but a more like "explored" set. Otherwise, e.g. tree: {x->z, y->z}, z won't be added to y's children list if x is visited first and z is already seen in x's search.
```
def findLadders(beginWord, endWord, wordList):
	tree, words, n = collections.defaultdict(set), set(wordList), len(beginWord)
	if endWord not in wordList: return []
	found, q, nq = False, {beginWord}, set()
	while q and not found:
		words -= set(q)
		for x in q:
			for y in [x[:i]+c+x[i+1:] for i in range(n) for c in string.ascii_lowercase]:
				if y in words:
					if y == endWord: 
						found = True
					else: 
						nq.add(y)
					tree[x].add(y)
		q, nq = nq, set()
	def bt(x): 
		return [[x]] if x == endWord else [[x] + rest for y in tree[x] for rest in bt(y)]
	return bt(beginWord)
```
That's single one-way BFS which cost more than 2500ms. BFS't time complexity is O(b^d) where  b is branch factor and d is depth. So if we go with a bi-directional way, expanding from both being word and end word, and choosing the queue ('begin' queue or 'end' queue) with smaller size in each expansion, the branch factor will be greatly reduced.
And bi-directional BFS reducing running time from 2500ms to 100ms!
```
def findLadders(beginWord, endWord, wordList):
	tree, words, n = collections.defaultdict(set), set(wordList), len(beginWord)
	if endWord not in wordList: return []
	found, bq, eq, nq, rev = False, {beginWord}, {endWord}, set(), False
	while bq and not found:
		words -= set(bq)
		for x in bq:
			for y in [x[:i]+c+x[i+1:] for i in range(n) for c in string.ascii_lowercase]:
				if y in words:
					if y in eq: 
						found = True
					else: 
						nq.add(y)
					tree[y].add(x) if rev else tree[x].add(y)
		bq, nq = nq, set()
		if len(bq) > len(eq): 
			bq, eq, rev = eq, bq, not rev
	def bt(x): 
		return [[x]] if x == endWord else [[x] + rest for y in tree[x] for rest in bt(y)]
	return bt(beginWord)
```