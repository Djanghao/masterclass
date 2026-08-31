# Trie + Backtracking

**Author:** Asyncy99
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-squares/solutions/6088327/](https://leetcode.com/problems/word-squares/solutions/6088327/)

---

```javascript []
class TrieNode {
  children = {};
  words = [];
}

class Trie {
  root = new TrieNode();

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.words.push(word); // Store the word for prefix matching
    }
  }

  getWordsWithPrefix(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    } 
    return node.words; // Return the words that match the prefix
  }
}

function wordSquares(words) {
  const trie = new Trie(words);
  words.forEach(word => trie.insert(word))

  const result = [];
  const n = words[0].length;

  // Backtracking function to construct word squares
  const backtrack = (step, square) => {
    // If the square is complete, add it to the result
    if (step === n) {
      result.push([...square]);
      return;
    }
    // Construct the prefix for the next word based on the current square
    const prefix = square.map(word => word[step]).join('');
    // Get candidate words that match the prefix
    const candidates = trie.getWordsWithPrefix(prefix);

    // Try each candidate word
    for (const candidate of candidates) {
      square.push(candidate);
      backtrack(step + 1, square);
      square.pop();
    }
  }

  // Start backtracking with each word as the first word in the square
  words.forEach((word) => backtrack(1, [word]))
 
  return result; // Return all valid word squares
}
```