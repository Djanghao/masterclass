# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830771/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830771/)

---

![image.png](./images/0.png)


---

## Intuition
The task involves calculating the "prefix score" for each word in a list, where the prefix score is the sum of the counts of all prefixes of the word in the given word list. The Trie data structure is well-suited for such prefix-based queries, as it allows efficient insertion of words and tracking of prefix counts.

---

## Approach
1. **Trie Construction**: Insert each word into the Trie, and at each node, maintain a count of how many times a prefix has been encountered.
2. **Score Calculation**: For each word, traverse through the Trie and sum up the counts at each node corresponding to the prefixes of the word.
3. **Efficiency**: The Trie allows us to efficiently handle prefix operations for all words, reducing the complexity of calculating prefix scores compared to a brute force approach.

---

## Complexity
- **Time complexity**:  
  - Insertion of a word into the Trie takes $$O(L)$$, where $$L$$ is the length of the word.  
  - Calculating the score for a word also takes $$O(L)$$.
  - For a list of $$n$$ words with an average length of $$L$$, the time complexity is $$O(n \	imes L)$$.

- **Space complexity**:  
  - The space complexity is $$O(n \	imes L)$$ for storing the Trie, where $$n$$ is the number of words and $$L$$ is the average word length.

---
## Code Implementations


```dart []
class TrieNode {
  Map<String, TrieNode> children = {};
  int count = 0;
}

class Trie {
  TrieNode root = TrieNode();
  
  // Function to insert a word into the trie and update prefix counts
  void insert(String word) {
    TrieNode node = root;
    for (int i = 0; i < word.length; i++) {
      String char = word[i];
      if (!node.children.containsKey(char)) {
        node.children[char] = TrieNode();
      }
      node = node.children[char]!;
      node.count++; // Update count for this prefix
    }
  }

  // Function to calculate the score for a word
  int calculateScore(String word) {
    TrieNode node = root;
    int score = 0;
    for (int i = 0; i < word.length; i++) {
      String char = word[i];
      node = node.children[char]!;
      score += node.count; // Add the count for each prefix
    }
    return score;
  }
}

class Solution {
  List<int> sumPrefixScores(List<String> words) {
    Trie trie = Trie();
    
    // Step 1: Insert all words into the Trie
    for (String word in words) {
      trie.insert(word);
    }
    
    // Step 2: Calculate the score for each word
    List<int> result = [];
    for (String word in words) {
      result.add(trie.calculateScore(word));
    }
    
    return result;
  }
}
```



```java []
import java.util.HashMap;
import java.util.Map;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    int count = 0;
}

class Trie {
    TrieNode root = new TrieNode();

    public void insert(String word) {
        TrieNode node = root;
        for (char ch : word.toCharArray()) {
            node.children.putIfAbsent(ch, new TrieNode());
            node = node.children.get(ch);
            node.count++;
        }
    }

    public int calculateScore(String word) {
        TrieNode node = root;
        int score = 0;
        for (char ch : word.toCharArray()) {
            node = node.children.get(ch);
            score += node.count;
        }
        return score;
    }
}

class Solution {
    public int[] sumPrefixScores(String[] words) {
        Trie trie = new Trie();

        // Step 1: Insert all words into the Trie
        for (String word : words) {
            trie.insert(word);
        }

        // Step 2: Calculate the score for each word
        int[] result = new int[words.length];
        for (int i = 0; i < words.length; i++) {
            result[i] = trie.calculateScore(words[i]);
        }
        return result;
    }
}
```



```javascript []
class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
            node.count++;
        }
    }

    calculateScore(word) {
        let node = this.root;
        let score = 0;
        for (const char of word) {
            node = node.children.get(char);
            score += node.count;
        }
        return score;
    }
}

function sumPrefixScores(words) {
    const trie = new Trie();

    // Step 1: Insert all words into the Trie
    for (const word of words) {
        trie.insert(word);
    }

    // Step 2: Calculate the score for each word
    return words.map(word => trie.calculateScore(word));
}
```



```python []
class TrieNode:
    def __init__(self):
        self.children = {}
        self.count = 0

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
            node.count += 1

    def calculate_score(self, word):
        node = self.root
        score = 0
        for ch in word:
            node = node.children[ch]
            score += node.count
        return score

class Solution:
    def sumPrefixScores(self, words):
        trie = Trie()

        # Step 1: Insert all words into the Trie
        for word in words:
            trie.insert(word)

        # Step 2: Calculate the score for each word
        return [trie.calculate_score(word) for word in words]
```



```cpp []
#include <unordered_map>
#include <vector>
#include <string>

using namespace std;

class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    int count = 0;
};

class Trie {
public:
    TrieNode* root;
    
    Trie() {
        root = new TrieNode();
    }

    void insert(const string& word) {
        TrieNode* node = root;
        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                node->children[ch] = new TrieNode();
            }
            node = node->children[ch];
            node->count++;
        }
    }

    int calculateScore(const string& word) {
        TrieNode* node = root;
        int score = 0;
        for (char ch : word) {
            node = node->children[ch];
            score += node->count;
        }
        return score;
    }
};

class Solution {
public:
    vector<int> sumPrefixScores(vector<string>& words) {
        Trie trie;
        
        // Step 1: Insert all words into the Trie
        for (const string& word : words) {
            trie.insert(word);
        }
        
        // Step 2: Calculate the score for each word
        vector<int> result;
        for (const string& word : words) {
            result.push_back(trie.calculateScore(word));
        }
        
        return result;
    }
};
```



```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct TrieNode {
    struct TrieNode* children[26];
    int count;
} TrieNode;

TrieNode* createNode() {
    TrieNode* node = (TrieNode*) malloc(sizeof(TrieNode));
    for (int i = 0; i < 26; i++) {
        node->children[i] = NULL;
    }
    node->count = 0;
    return node;
}

void insert(TrieNode* root, const char* word) {
    TrieNode* node = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int index = word[i] - 'a';
        if (node->children[index] == NULL) {
            node->children[index] = createNode();
        }
        node = node->children[index];
        node->count++;
    }
}

int calculateScore(TrieNode* root, const char* word) {
    TrieNode* node = root;
    int score = 0;
    for (int i = 0; word[i] != '\\0'; i++) {
        int index = word[i] - 'a';
        node = node->children[index];
        score += node->count;
    }
    return score;
}

int* sumPrefixScores(char** words, int wordsSize, int* returnSize) {
    TrieNode* root = createNode();
    int* result = (int*) malloc(wordsSize * sizeof(int));

    // Step 1: Insert all words into the Trie
    for (int i = 

0; i < wordsSize; i++) {
        insert(root, words[i]);
    }

    // Step 2: Calculate the score for each word
    for (int i = 0; i < wordsSize; i++) {
        result[i] = calculateScore(root, words[i]);
    }

    *returnSize = wordsSize;
    return result;
}
```



```go []
package main

import "fmt"

type TrieNode struct {
	children map[rune]*TrieNode
	count    int
}

type Trie struct {
	root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{root: &TrieNode{children: make(map[rune]*TrieNode)}}
}

func (t *Trie) Insert(word string) {
	node := t.root
	for _, ch := range word {
		if _, found := node.children[ch]; !found {
			node.children[ch] = &TrieNode{children: make(map[rune]*TrieNode)}
		}
		node = node.children[ch]
		node.count++
	}
}

func (t *Trie) CalculateScore(word string) int {
	node := t.root
	score := 0
	for _, ch := range word {
		node = node.children[ch]
		score += node.count
	}
	return score
}

func sumPrefixScores(words []string) []int {
	trie := NewTrie()

	// Step 1: Insert all words into the Trie
	for _, word := range words {
		trie.Insert(word)
	}

	// Step 2: Calculate the score for each word
	result := make([]int, len(words))
	for i, word := range words {
		result[i] = trie.CalculateScore(word)
	}

	return result
}

func main() {
	words := []string{"abc", "ab", "a"}
	fmt.Println(sumPrefixScores(words)) // Output: [3, 2, 1]
}
```

---

![image.png](./images/1.png) {:style='width:250px'}

