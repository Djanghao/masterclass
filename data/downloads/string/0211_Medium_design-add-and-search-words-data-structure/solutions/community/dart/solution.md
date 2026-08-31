# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/4550252/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/4550252/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class WordDictionary {

  late TrieNode root;

  WordDictionary() {
    root = TrieNode();
  }
  
  void addWord(String word) {
    var node = root;
    for (int i = 0; i < word.length; i++) {
        final char = word[i];
        if (!node.children.containsKey(char)) {
            node.children[char] = TrieNode();
        }
        node = node.children[char]!;
    }
    node.isWord = true;
  }
  
  bool search(String word) {
    return helper(word, root);
  }

  bool helper(String cand, TrieNode node) {
      if (cand.isEmpty) {
          return node.isWord;
      }
      final char = cand[0];
      if (char == '.') {
          return node.children.keys.any((k) => helper(cand.substring(1), node.children[k]!));
      } 
      
      if (!node.children.containsKey(char)) {
          return false;
      }

      return helper(cand.substring(1), node.children[char]!);
  }
}

class TrieNode {
    late Map<String, TrieNode> children;
    late bool isWord;
    TrieNode() {
        children = {};
        isWord = false;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = WordDictionary();
 * obj.addWord(word);
 * bool param2 = obj.search(word);
 */
```