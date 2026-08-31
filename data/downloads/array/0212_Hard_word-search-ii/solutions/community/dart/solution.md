# Dart using Trie

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/4977256/](https://leetcode.com/problems/word-search-ii/solutions/4977256/)

---

# Code
```
class Solution {
  List<String> findWords(List<List<String>> board, List<String> words) {
    int n = board.length - 1;
    int m = board[0].length - 1;

    List<String> foundWords = [];

    void dfs(int i, int j, TrieNode p) {
      var letter = board[i][j];
      var index = letter.codeUnits[0] - 'a'.codeUnits[0];
      if (letter == '#' || p.next[index] == null) return;
      p = p.next[index]!;
      if (p.word != null) {
        foundWords.add(p.word!);
        p.word = null;
      }

      board[i][j] = '#';
      if (i > 0) dfs(i - 1, j, p);
      if (j > 0) dfs(i, j - 1, p);
      if (i < n) dfs(i + 1, j, p);
      if (j < m) dfs(i, j + 1, p);
      board[i][j] = letter;
    }

    var root = buildTrie(words);
    for (var (i, row) in board.indexed) {
      row.asMap().keys.forEach((j) => dfs(i, j, root));
    }
    return foundWords;
  }

  TrieNode buildTrie(List<String> words) {
    var root = TrieNode();
    for (var w in words) {
      var p = root;
      for (var c in w.codeUnits) {
        int i = c - 'a'.codeUnits[0];
        if (p.next[i] == null) p.next[i] = new TrieNode();
        p = p.next[i]!;
      }
      p.word = w;
    }
    return root;
  }
}

class TrieNode {
  List<TrieNode?> next = List.filled(26, null);
  String? word;
}
```