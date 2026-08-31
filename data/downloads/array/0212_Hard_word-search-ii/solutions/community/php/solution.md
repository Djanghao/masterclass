# Trie + Recursive DFS (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/5438760/](https://leetcode.com/problems/word-search-ii/solutions/5438760/)

---

# Approach
The given solution uses a Trie data structure. 

It performs a depth-first search (DFS) starting from each cell on the board to find words that match the words provided. 
The DFS function recursively explores adjacent cells in all directions to form potential words and checks if they are valid words based on the Trie structure. 
When a valid word is found, it is added to a set to avoid duplicates. 
Finally, the function returns a list of the unique found words.

# Complexity
- Time complexity:
$$O((M * N * W)$$, where M is the number of rows in the board, N is the number of columns in the board, and W is the number of words in the input. This is because for each cell in the MxN board, a depth-first search (DFS) is performed with a maximum depth corresponding to the length of the longest word in the input list. Since the DFS explores all possible paths from each cell, the total time complexity is the product of the board dimensions (M * N) and the number of words (W).

- Space complexity:
$$O(M * N + W)$$, where M is the number of rows in the board, N is the number of columns in the board, and W is the number of words in the input. The M * N term comes from the space needed to store the board itself or any additional data structures related to the board dimensions. The W term accounts for the space required to store the Trie data structure containing the words to search for.

# Code
``` python3 []
class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # Create a trie data structure
        trie = Trie()
        for word in words:
            trie.insert(word)

        # Get the dimensions of the board
        m, n = len(board), len(board[0])

        # Define the directions to traverse adjacent cells
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        # Initialize a set to store the found words
        res = set()

        # Define the recursive function for depth-first search
        def dfs(i, j, word, node):
            # Check if the current node represents a valid word
            if node.is_word:
                res.add(word)

            # Mark the current cell as visited and traverse adjacent cells
            char = board[i][j]
            board[i][j] = "#"
            for di, dj in directions:
                new_i, new_j = i + di, j + dj
                if (
                    0 <= new_i < m
                    and 0 <= new_j < n
                    and board[new_i][new_j] in node.children
                ):
                    dfs(new_i, new_j, word + board[new_i][new_j], node.children[board[new_i][new_j]])

            # Revert the current cell back to its original character
            board[i][j] = char

        # Start the depth-first search from each cell on the board
        for i in range(m):
            for j in range(n):
                if board[i][j] in trie.root.children:
                    dfs(i, j, board[i][j], trie.root.children[board[i][j]])

        # Return the list of found words
        return list(res)


class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_word
        
```
``` javascript []

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    trie = new Trie();
    // Create a trie data structure
    for (let word of words) {
        trie.insert(word);
    }

    // Get the dimensions of the board
    const m = board.length;
    const n = board[0].length;

    // Define the directions to traverse adjacent cells
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // Initialize a set to store the found words
    const res = new Set();

    // Define the recursive function for depth-first search
    const dfs = (i, j, word, node) => {
        // Check if the current node represents a valid word
        if (node.is_word) {
            res.add(word);
        }

        // Mark the current cell as visited and traverse adjacent cells
        const char = board[i][j];
        board[i][j] = '#';

        for (let [di, dj] of directions) {
            const new_i = i + di;
            const new_j = j + dj;

            if (
                0 <= new_i &&
                new_i < m &&
                0 <= new_j &&
                new_j < n &&
                board[new_i][new_j] in node.children
            ) {
                dfs(
                    new_i,
                    new_j,
                    word + board[new_i][new_j],
                    node.children[board[new_i][new_j]]
                );
            }
        }

        // Revert the current cell back to its original character
        board[i][j] = char;
    };

    // Start the depth-first search from each cell on the board
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] in trie.root.children) {
                dfs(
                    i,
                    j,
                    board[i][j],
                    this.trie.root.children[board[i][j]]
                );
            }
        }
    }

    // Return the list of found words
    return Array.from(res);
};

class TrieNode {
    constructor() {
        this.children = {};
        this.is_word = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.is_word = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node.is_word;
    }
}
```
``` php []
class Solution {
    private $trie;

    function __construct() {
        $this->trie = new Trie();
    }

    /**
     * @param String[][] $board
     * @param String[] $words
     * @return String[]
     */
    function findWords($board, $words) {
        // Create a trie data structure
        foreach ($words as $word) {
            $this->trie->insert($word);
        }

        // Get the dimensions of the board
        $m = count($board);
        $n = count($board[0]);

        // Define the directions to traverse adjacent cells
        $directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        // Initialize a set to store the found words
        $res = [];

        // Define the recursive function for depth-first search
        $dfs = function ($i, $j, $word, $node) use (&$board, &$res, $m, $n, $directions, &$dfs) {
            // Check if the current node represents a valid word
            if ($node->is_word) {
                $res[] = $word;
            }

            // Mark the current cell as visited and traverse adjacent cells
            $char = $board[$i][$j];
            $board[$i][$j] = '#';

            foreach ($directions as $direction) {
                $new_i = $i + $direction[0];
                $new_j = $j + $direction[1];

                if (
                    0 <= $new_i &&
                    $new_i < $m &&
                    0 <= $new_j &&
                    $new_j < $n &&
                    isset($node->children[$board[$new_i][$new_j]])
                ) {
                    $dfs($new_i, $new_j, $word . $board[$new_i][$new_j], $node->children[$board[$new_i][$new_j]]);
                }
            }

            // Revert the current cell back to its original character
            $board[$i][$j] = $char;
        };

        // Start the depth-first search from each cell on the board
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if (isset($this->trie->root->children[$board[$i][$j]])) {
                    $dfs($i, $j, $board[$i][$j], $this->trie->root->children[$board[$i][$j]]);
                }
            }
        }

        // Return the unique found words
        return array_values(array_unique($res));
    }
}

class TrieNode {
    public $children = [];
    public $is_word = false;
}

class Trie {
    public $root;

    public function __construct() {
        $this->root = new TrieNode();
    }

    public function insert($word) {
        $node = $this->root;
        for ($i = 0; $i < strlen($word); $i++) {
            $char = $word[$i];
            if (!isset($node->children[$char])) {
                $node->children[$char] = new TrieNode();
            }
            $node = $node->children[$char];
        }
        $node->is_word = true;
    }

    public function search($word) {
        $node = $this->root;
        for ($i = 0; $i < strlen($word); $i++) {
            $char = $word[$i];
            if (!isset($node->children[$char])) {
                return false;
            }
            $node = $node->children[$char];
        }
        return $node->is_word;
    }
}
```