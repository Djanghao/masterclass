# [Java] [Kotlin]Clear Trie + Back Tracking Solution.

**Author:** luoyunfeng1853
**Votes:** 7
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/2779728/](https://leetcode.com/problems/word-search-ii/solutions/2779728/)

---

Java
```
class Solution {
    private TrieNode root = new TrieNode();
    private int m = 0;
    private int n = 0;
    private Set<String> set = new HashSet<>();
    private int[] dir = new int[] {1, 0, -1, 0, 1};
    
    public List<String> findWords(char[][] board, String[] words) {
        for (String w : words) {
            insert(w);
        }
        m = board.length;
        n = board[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                bt(i, j, board, new boolean[m][n], root);
            }
        }
        
        return new ArrayList<String>(set);
    }
    
    private void bt(int x, int y, char[][] board, boolean[][] visited, TrieNode node) {
        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) {
            return;
        }
        
        int idx = board[x][y] - 'a';
        if (node.children[idx] == null) {
            return;
        }
        
        if (node.children[idx].w != null) {
            set.add(node.children[idx].w); // Notice: do not return. cause there may have a longer word!
        }
        
        visited[x][y] = true;
        
        for (int i = 0; i < dir.length-1; i++) {
            bt(x+dir[i], y + dir[i+1], board, visited, node.children[idx]);
        }
        
        visited[x][y] = false;
    }
    
    private void insert(String w) {
        TrieNode node = root;
        for (char ch : w.toCharArray()) {
            int idx = ch - 'a';
            if (node.children[idx] == null) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
        }
        
        node.w = w;
    }
}

class TrieNode {
    TrieNode[] children = new TrieNode[26];
    String w;
}
```
Kotlin
```
class Solution {
    fun findWords(board: Array<CharArray>, words: Array<String>): List<String> {
        val m = board.size
        val n = board[0].size
        
        val dir = intArrayOf(1, 0, -1, 0, 1)
        
        val root = TrieNode()
        val res = mutableListOf<String>()
        
        fun insert(w: String) {
            var node = root
            for (ch in w.toCharArray()) {
                node = node.children.getOrPut(ch) { TrieNode() }
            }
            node.w = w
        }
        
        for (w in words) {
            insert(w)
        }
        
        fun bt(x: Int, y: Int, board: Array<CharArray>, visited: Array<BooleanArray>, node: TrieNode) {
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) return
            
            val next = node.children.get(board[x][y])
            
            next ?: return
            
            next.w?.let {
                res.add(it)
                next.w = null
            }
            
            visited[x][y] = true
            for (i in 0 until dir.size-1) {
                bt(x + dir[i], y + dir[i+1], board, visited, next)
            }
            visited[x][y] = false
        }
        
        for (i in 0 until m) {
            for (j in 0 until n) {
                bt(i, j, board, Array(m) { BooleanArray(n) }, root)
            }
        }
        
        return res
    }
}

class TrieNode {
    val children = mutableMapOf<Char, TrieNode>()
    var w: String? = null
}
```
