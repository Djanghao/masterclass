# Python dfs solution (directly use Trie implemented).

**Author:** OldCodingFarmer
**Votes:** 384
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/59790/](https://leetcode.com/problems/word-search-ii/solutions/59790/)

---

Here is an implementation based on  [Implement Trie][1] in LeetCode. TrieNode, Trie, Solution are treated as seperated classes. 

    class TrieNode():
        def __init__(self):
            self.children = collections.defaultdict(TrieNode)
            self.isWord = False
        
    class Trie():
        def __init__(self):
            self.root = TrieNode()
        
        def insert(self, word):
            node = self.root
            for w in word:
                node = node.children[w]
            node.isWord = True
        
        def search(self, word):
            node = self.root
            for w in word:
                node = node.children.get(w)
                if not node:
                    return False
            return node.isWord
        
    class Solution(object):
        def findWords(self, board, words):
            res = []
            trie = Trie()
            node = trie.root
            for w in words:
                trie.insert(w)
            for i in xrange(len(board)):
                for j in xrange(len(board[0])):
                    self.dfs(board, node, i, j, "", res)
            return res
        
        def dfs(self, board, node, i, j, path, res):
            if node.isWord:
                res.append(path)
                node.isWord = False
            if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
                return 
            tmp = board[i][j]
            node = node.children.get(tmp)
            if not node:
                return 
            board[i][j] = "#"
            self.dfs(board, node, i+1, j, path+tmp, res)
            self.dfs(board, node, i-1, j, path+tmp, res)
            self.dfs(board, node, i, j-1, path+tmp, res)
            self.dfs(board, node, i, j+1, path+tmp, res)
            board[i][j] = tmp


  [1]: https://leetcode.com/problems/implement-trie-prefix-tree/