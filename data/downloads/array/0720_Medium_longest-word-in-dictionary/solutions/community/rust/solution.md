# ✅ [JS/Rust] Trie Approach w/ explanation 🔥

**Author:** ad0x99
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/5484506/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/5484506/)

---

**\uD83D\uDC4D If you found my solution to be beneficial, I would be most grateful if you would consider \u261D\uFE0FUPVOTING IT\u261D\uFE0F. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---


# Trie Approach

**Idea**: Using a Trie to store each character of a word at each node in the Trie. A leaf path will represent a path to form a word. By traversing each path, we can find which path will form a longest word.

```js
   root
  /   \\
'w'    'o'
        \\
        'r'
          \\
          'l'
            \\
             'd' (word marker)

TrieNode {
  children: Map(1) { 'o' => TrieNode { children: [Map], word: 'wo' } },
  word: 'w'
}
TrieNode {
  children: Map(1) { 'r' => TrieNode { children: [Map], word: 'wor' } },
  word: 'wo'
}
TrieNode {
  children: Map(1) { 'l' => TrieNode { children: [Map], word: 'worl' } },
  word: 'wor'
}
TrieNode {
  children: Map(1) { 'd' => TrieNode { children: Map(0) {}, word: 'world' } },
  word: 'worl'
}
```

**Implementation**

1. We define a `TrieNode` which represents a node in the `Trie`. It has a `children` map that stores child nodes for each character and a `word` property to mark the end of a word.

2. In the `Trie`, we have a `insert` function which takes a `word` as input and inserts each `character` of a `word` into the `Trie`.
    - 2.1: We start from the `root` node and iterate through each `character` in the word.

    - 2.2: For each character, we check if a child node exists for that character in the current node's children map.

    - 2.3: If not, we create a new child node and add it to the map.

    - 2.4: After that, the `current node` is then updated to point to the `child node` for the next character in the word. Once all characters are inserted, the `last node's word` property is set to the `entire word`.

2. We also have a `bfs` function which performs a `BFS traversal` on the `Trie` to find the lexicographically largest word.
    - 2.1: We start with a `queue` containing only the `root node`.

    - 2.2: As long as there is node in the `queue`, we iterate through the `queue`.

    - 2.3: First, we `dequeue` the `first node` from the queue (representing the current level in the Trie).

    - 2.4: And then, we iterate through all `child nodes` of the current node.

    - 2.5: For each child node, If the `child node` has a `word` property set (meaning it represents a complete word), we compare it with the current `ans` variable (which stores the lexicographically largest word found so far).

    - 2.6: If the child node's word length is greater than the current `ans` length or if they have the same length but the child node's word comes alphabetically before `ans` (lexicographically larger), the `ans` variable is updated with the child node's word.

    - 2.7: The child node is then `enqueued` to explore its children in the next iteration (moving to the next level in the Trie).

3. After iterating through all levels of the `Trie`, we return the `ans`.



# Complexity

- Time complexity: `O(n * m)`, where `n` is the length of `words` array, and `m` is the length of `each word`.

- Space complexity: `O(n * m)`, where `n` is the length of `children` map and `m` is the length of the `queue`.

# Code

```javascript []
class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      let child = node.children.get(char);

      if (!child) {
        child = new TrieNode();
        node.children.set(char, child);
      }

      node = child;
    }

    node.word = word;
  }

  bfs() {
    const queue = [this.root];
    let ans = '';

    while (queue.length > 0) {
      const currentNode = queue.shift();

      for (const child of currentNode.children.values()) {
        const word = child.word;

        if (word) {
          if (
            word.length > ans.length ||
            (word.length === ans.length && word < ans)
          ) {
            ans = word;
          }

          queue.push(child);
        }
      }
    }

    return ans;
  }
}

const longestWord = (words) => {
  const trie = new Trie();

  for (const word of words) {
    trie.insert(word);
  }

  return trie.bfs();
};
```
```rust []
use std::collections::{HashMap, VecDeque};

struct TrieNode {
    children: HashMap<char, TrieNode>,
    word: Option<String>,
}

impl TrieNode {
    fn new() -> Self {
        TrieNode {
            children: HashMap::new(),
            word: None,
        }
    }
}

struct Trie {
    root: TrieNode,
}

impl Trie {
    fn new() -> Self {
        Trie {
            root: TrieNode::new(),
        }
    }

    fn insert(&mut self, word: String) {
        let mut node = &mut self.root;

        for ch in word.chars() {
            node = node.children.entry(ch).or_insert_with(TrieNode::new);
        }

        node.word = Some(word);
    }

    fn bfs(&self) -> String {
        let mut queue = VecDeque::new();
        queue.push_back(&self.root);
        let mut ans = String::new();

        while let Some(current_node) = queue.pop_front() {
            for child in current_node.children.values() {
                if let Some(word) = &child.word {
                    if word.len() > ans.len() || (word.len() == ans.len() && word < &ans) {
                        ans = word.clone();
                    }

                    queue.push_back(child);
                }
            }
        }

        ans
    }
}

impl Solution {
    pub fn longest_word(words: Vec<String>) -> String {
        let mut trie = Trie::new();

        for word in words {
            trie.insert(word);
        }

        trie.bfs()
    }
}
```

