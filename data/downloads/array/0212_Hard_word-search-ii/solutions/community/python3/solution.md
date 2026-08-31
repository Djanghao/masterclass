# 212: Beats 94%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 30
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/3224569/](https://leetcode.com/problems/word-search-ii/solutions/3224569/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
Beats
94%

- Space complexity:
Beats
81.69%

# Code
```
class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        
        # Define a DFS function to traverse the board and search for words
        def dfs(x, y, root):
            # Get the letter at the current position on the board
            letter = board[x][y]
            # Traverse the trie to the next node
            cur = root[letter]
            # Check if the node has a word in it
            word = cur.pop('#', False)
            if word:
                # If a word is found, add it to the results list
                res.append(word)
            # Mark the current position on the board as visited
            board[x][y] = '*'
            # Recursively search in all four directions
            for dirx, diry in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                curx, cury = x + dirx, y + diry
                # Check if the next position is within the board and the next letter is in the trie
                if 0 <= curx < m and 0 <= cury < n and board[curx][cury] in cur:
                    dfs(curx, cury, cur)
            # Restore the original value of the current position on the board
            board[x][y] = letter
            # If the current node has no children, remove it from the trie
            if not cur:
                root.pop(letter)
                
        # Build a trie data structure from the list of words
        trie = {}
        for word in words:
            cur = trie
            for letter in word:
                cur = cur.setdefault(letter, {})
            cur['#'] = word
            
        # Get the dimensions of the board
        m, n = len(board), len(board[0])
        # Initialize a list to store the results
        res = []
        
        # Traverse the board and search for words
        for i in range(m):
            for j in range(n):
                # Check if the current letter is in the trie
                if board[i][j] in trie:
                    dfs(i, j, trie)
        
        # Return the list of results
        return res

```
The basic idea of the solution is to use a trie data structure to efficiently search for words on the board. We first build the trie from the list of words, where each node in the trie represents a letter in a word and the '#' symbol indicates the end of a word. Then, we traverse the board and use a depth-first search (DFS) algorithm to search for words starting from each position on the board. We use the trie to efficiently traverse the board and check if each sequence of letters corresponds to a valid word in the trie. When a valid word is found, we add it to the results list. Finally, we return the list of results.