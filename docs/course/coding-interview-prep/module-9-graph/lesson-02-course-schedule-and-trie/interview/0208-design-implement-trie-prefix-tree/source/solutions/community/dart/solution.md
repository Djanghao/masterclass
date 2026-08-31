# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/4550496/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/4550496/)

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
class Trie {
    late TrieNode root;
    Trie() {
        root = TrieNode();
    }
    
    void insert(String word) {
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
        var node = root;
        for (int i = 0; i < word.length; i++) {
            final char = word[i];
            if (!node.children.containsKey(char)) {
                return false;
            } 
            node = node.children[char]!;           
        }

        return node.isWord;
    }
    
    bool startsWith(String prefix) {
        return helper(prefix, root, 1);
    }

    bool helper(String cand, TrieNode node, int length) {
        if (!node.children.containsKey(cand[0])) {
            return false;
        }

        if (length == cand.length) {
            return true;
        }

        return helper(cand.substring(1), node.children[cand[0]]!, length);
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
 * Your Trie object will be instantiated and called as such:
 * Trie obj = Trie();
 * obj.insert(word);
 * bool param2 = obj.search(word);
 * bool param3 = obj.startsWith(prefix);
 */
```