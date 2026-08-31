# Java 15ms Easiest Solution (100.00%)

**Author:** yavinci
**Votes:** 1884
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/59780/](https://leetcode.com/problems/word-search-ii/solutions/59780/)

---

<h2>Backtracking + Trie</h2>
<hr>

Intuitively, start from every cell and try to build a word in the dictionary. `Backtracking (dfs)` is the powerful way to exhaust every possible ways. Apparently, we need to do `pruning` when current character is not in any word. 

1. How do we instantly know the current character is invalid? `HashMap`? 
2. How do we instantly know what's the next valid character? `LinkedList`?
3. But the next character can be chosen from a list of characters. `"Mutil-LinkedList"`?

Combing them, `Trie` is the natural choice. Notice that:

1. `TrieNode` is all we need. `search` and `startsWith` are useless.
2. No need to store character at TrieNode. `c.next[i] != null` is enough.
3. Never use `c1 + c2 + c3`. Use `StringBuilder`.
4. No need to use `O(n^2)` extra space `visited[m][n].` 
5. No need to use `StringBuilder`. Storing `word` itself at leaf node is enough.
6. No need to use `HashSet` to de-duplicate. Use "one time search" trie.

For more explanations, check out [dietpepsi's blog][1].

<hr>
<h2>Code Optimization</h2>
<hr>

UPDATE: Thanks to @dietpepsi we further improved from `17ms` to `15ms`.

1. `59ms`: Use `search` and `startsWith` in Trie class like [this popular solution.][2]
2. `33ms`: Remove Trie class which unnecessarily starts from `root` in every `dfs` call. 
3. `30ms`: Use `w.toCharArray()` instead of `w.charAt(i)`.
4. `22ms`: Use `StringBuilder` instead of `c1 + c2 + c3`.
5. `20ms`: Remove `StringBuilder` completely by storing `word` instead of `boolean` in TrieNode.
6. `20ms`: Remove `visited[m][n]` completely by modifying `board[i][j] = '#'` directly.
7. `18ms`: check validity, e.g., `if(i > 0) dfs(...)`, before going to the next `dfs`.
8. `17ms`: De-duplicate `c - a` with one variable `i`.
9. `15ms`: Remove `HashSet` completely. dietpepsi's idea is awesome. 

The final run time is `15ms`. Hope it helps!

<hr>

    public List<String> findWords(char[][] board, String[] words) {
        List<String> res = new ArrayList<>();
        TrieNode root = buildTrie(words);
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                dfs (board, i, j, root, res);
            }
        }
        return res;
    }
    
    public void dfs(char[][] board, int i, int j, TrieNode p, List<String> res) {
        char c = board[i][j];
        if (c == '#' || p.next[c - 'a'] == null) return;
        p = p.next[c - 'a'];
        if (p.word != null) {   // found one
            res.add(p.word);
            p.word = null;     // de-duplicate
        }

        board[i][j] = '#';
        if (i > 0) dfs(board, i - 1, j ,p, res); 
        if (j > 0) dfs(board, i, j - 1, p, res);
        if (i < board.length - 1) dfs(board, i + 1, j, p, res); 
        if (j < board[0].length - 1) dfs(board, i, j + 1, p, res); 
        board[i][j] = c;
    }
    
    public TrieNode buildTrie(String[] words) {
        TrieNode root = new TrieNode();
        for (String w : words) {
            TrieNode p = root;
            for (char c : w.toCharArray()) {
                int i = c - 'a';
                if (p.next[i] == null) p.next[i] = new TrieNode();
                p = p.next[i];
           }
           p.word = w;
        }
        return root;
    }
    
    class TrieNode {
        TrieNode[] next = new TrieNode[26];
        String word;
    }

# Interview Friendly Version
As many folks asked, also attached my go-to version without many well thought optimizations. This version may be better for a quick solution in an interview.
```
public List<String> findWords(char[][] board, String[] words) {
    Trie trie = buildTrie(words);
    Set<String> res = new HashSet<>();
    for (int i = 0; i < board.length; i++) {
        for (int j = 0; j < board[0].length; j++) {
            dfs(board, trie, res, i, j);
        }
    }
    return new ArrayList<>(res);
}

public void dfs(char[][] board, Trie node, Set<String> res, int i, int j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || 
        board[i][j] == '#' || node.next[board[i][j] - 'a'] == null) {
            return;
    }
    if (node.next[board[i][j] - 'a'].word != null) {
        res.add(node.next[board[i][j] - 'a'].word);
    }

    // Go to next char
    node = node.next[board[i][j] - 'a']; 
    char c = board[i][j];
    board[i][j] = '#';
    dfs(board, node, res, i - 1, j);
    dfs(board, node, res, i + 1, j);
    dfs(board, node, res, i, j - 1);
    dfs(board, node, res, i, j + 1);
    board[i][j] = c;
}   

public Trie buildTrie(String[] words) {
    Trie root = new Trie();
    for (String w : words) {
        Trie p = root;
        for (char c : w.toCharArray()) {
            if (p.next[c - 'a'] == null) {
                p.next[c - 'a'] = new Trie();
            }
            p = p.next[c - 'a'];  // will point to curr char
        }
        p.word = w;
    }
    return root;
}

private class Trie {
    Trie[] next = new Trie[26];
    String word = null;
}
```

  [1]: http://algobox.org/word-search-ii/
  [2]: https://leetcode.com/discuss/36337/my-simple-and-clean-java-code-using-dfs-and-trie