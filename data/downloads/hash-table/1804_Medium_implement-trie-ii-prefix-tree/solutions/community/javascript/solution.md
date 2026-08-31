# Trie

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/6092003/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/6092003/)

---

```javascript []
class TrieNode {
  children = new Map();
  wordEnd = 0;
  prefixCount = 0;
}

class Trie {
  root = new TrieNode();

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
      node.prefixCount++;
    }
    node.wordEnd++;
  }

  countWordsEqualTo(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) return 0;
      node = node.children.get(char);
    }
    return node.wordEnd;
  }

  countWordsStartingWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) return 0;
      node = node.children.get(char);
    }
    return node.prefixCount;
  }

  erase(word) {
    let node = this.root;
    for (const char of word) {
      node.children.get(char).prefixCount--;
      if (node.children.get(char).prefixCount === 0) {
        node.children.delete(char);
        return;
      }
      node = node.children.get(char);
    }
    node.wordEnd--;
  }
}
```