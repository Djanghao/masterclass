# Swift: MINIMAL solution with DFS and Trie with complexity analysis (100%)

**Author:** voxqhuy
**Votes:** 4
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/745010/](https://leetcode.com/problems/word-search-ii/solutions/745010/)

---

Let 
m,n be the width and height of the 2D array
L be the average length of words in "words"
W be the number of words

1. *result*: takes O(W) space
2. *buildTrie()*: takes O(LW) runtime and O(LW) space
3. going through every cell takes O(mn) runtime
4. *check():* at each cell, we *check* until we either reach all possible leaf nodes OR reach the end of the board (in case one word is longer than the size of the board) => takes O(min(LW, mn)) runtime,  O(L) call stack space

In total,
**Time: O(mn * min(LW, mn) + LW), Space: O(LW)**
or simpler: **Time: O(mn * LW), Space: O(LW)**


```
class TrieNode {
	var word: String?
	var children = [Character: TrieNode]()
}

func findWords(_ board: [[Character]], _ words: [String]) -> [String] {
	if board.isEmpty { return [] }

	var result = [String]()
	var board = board
	let root = buildTrie(with: words)

	for i in 0..<board.count {
		for j in 0..<board[0].count {
			check(&board, i, j, root, &result)
		}
	}

	return result
}

func buildTrie(with words: [String]) -> TrieNode {
	let root = TrieNode()

	for word in words {
		var node = root
		for char in word {
			if node.children[char] == nil{
				node.children[char] = TrieNode()
			}
			node = node.children[char]!
		}
		node.word = word
	}

	return root
}

func check(_ board: inout [[Character]], _ i: Int, _ j: Int, _ node: TrieNode, _ result: inout [String]) {
	if i < 0 || j < 0 || i >= board.count || j >= board[0].count { return }
	guard let currNode = node.children[board[i][j]] else { return }

	if let word = currNode.word { 
		result.append(word) 
		currNode.word = nil
	}
	let char = board[i][j]
	board[i][j] = "0"

	check(&board, i - 1, j, currNode, &result)
	check(&board, i + 1, j, currNode, &result)
	check(&board, i, j - 1, currNode, &result)
	check(&board, i, j + 1, currNode, &result)
	board[i][j] = char
}
```