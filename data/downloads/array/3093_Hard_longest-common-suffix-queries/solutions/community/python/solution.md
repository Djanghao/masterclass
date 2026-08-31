# Short and Easy Video iterative Solution 🔥 || Why Trie ? || End-End Trie Explanation

**Author:** ayushnemmaniwar12
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-common-suffix-queries/solutions/4916774/](https://leetcode.com/problems/longest-common-suffix-queries/solutions/4916774/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry run few inputs and understand why Trie data structure perfectly suites for this problem 


# ***Easy Video Explanation***

https://youtu.be/MhD2JhxBJP4



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)->O(10^5)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    (N)

# Code


```C++ []
class Solution {
public:
    class TrieNode {
    public:
        TrieNode* children[26];
        int shortestWordLength;
        int shortestWordIndex;

        TrieNode() {
            for(int i = 0; i < 26; i++)
                children[i] = nullptr;
            shortestWordLength = INT_MAX;
            shortestWordIndex = INT_MAX;
        }
    };

    void insertWord(TrieNode *root, string word, int wordIndex) {
        int wordLength = word.size();
        reverse(word.begin(), word.end());
        
        for(int i = 0; i < wordLength; i++) {
            int charIndex = word[i] - 'a';
            if(root->children[charIndex] == nullptr) {
                TrieNode *newNode = new TrieNode();
                newNode->shortestWordLength = wordLength;
                newNode->shortestWordIndex = wordIndex;
                root->children[charIndex] = newNode;
                root = root->children[charIndex];
            } else {
                root = root->children[charIndex];
                if(wordLength < root->shortestWordLength) {
                    root->shortestWordLength = wordLength;
                    root->shortestWordIndex = wordIndex;
                }
            }
        }
    }

    int searchWord(TrieNode *root, string word) {
        reverse(word.begin(), word.end());
        int wordLength = word.size();

        for(int i = 0; i < wordLength; i++) {
            int charIndex = word[i] - 'a';
            if(root->children[charIndex] != nullptr)
                root = root->children[charIndex];
            else
                break;
        }
        return root->shortestWordIndex;
    }

    vector<int> stringIndices(vector<string>& words, vector<string>& queries) {
        int n = words.size();
        vector<int> indices;
        TrieNode *root = new TrieNode();

        for(int i = 0; i < n; i++) {
            if(words[i].size() < root->shortestWordLength) {
                root->shortestWordLength = words[i].size();
                root->shortestWordIndex = i;
            }
            insertWord(root, words[i], i);
        }

        int m = queries.size();
        for(int i = 0; i < m; i++) {
            int index = searchWord(root, queries[i]);
            indices.push_back(index);
        }
        return indices;
    }
};

```
```python []
class Solution:
    class TrieNode:
        def __init__(self):
            self.children = [None] * 26
            self.shortestWordLength = float('inf')
            self.shortestWordIndex = float('inf')

    def insertWord(self, root, word, wordIndex):
        wordLength = len(word)
        reversedWord = word[::-1]

        for i in range(wordLength):
            charIndex = ord(reversedWord[i]) - ord('a')
            if root.children[charIndex] is None:
                new_node = self.TrieNode()
                new_node.shortestWordLength = wordLength
                new_node.shortestWordIndex = wordIndex
                root.children[charIndex] = new_node
                root = root.children[charIndex]
            else:
                root = root.children[charIndex]
                if wordLength < root.shortestWordLength:
                    root.shortestWordLength = wordLength
                    root.shortestWordIndex = wordIndex

    def searchWord(self, root, word):
        reversedWord = word[::-1]
        wordLength = len(word)

        for i in range(wordLength):
            charIndex = ord(reversedWord[i]) - ord('a')
            if root.children[charIndex] is not None:
                root = root.children[charIndex]
            else:
                break
        return root.shortestWordIndex

    def stringIndices(self, words, queries):
        n = len(words)
        indices = []
        root = self.TrieNode()

        for i in range(n):
            if len(words[i]) < root.shortestWordLength:
                root.shortestWordLength = len(words[i])
                root.shortestWordIndex = i
            self.insertWord(root, words[i], i)

        m = len(queries)
        for i in range(m):
            index = self.searchWord(root, queries[i])
            indices.append(index)
        return indices

```
```Java []
import java.util.*;

public class Solution {
    static class TrieNode {
        TrieNode[] children;
        int shortestWordLength;
        int shortestWordIndex;

        TrieNode() {
            children = new TrieNode[26];
            Arrays.fill(children, null);
            shortestWordLength = Integer.MAX_VALUE;
            shortestWordIndex = Integer.MAX_VALUE;
        }
    }

    public void insertWord(TrieNode root, String word, int wordIndex) {
        int wordLength = word.length();
        StringBuilder reversedWord = new StringBuilder(word).reverse();

        for (int i = 0; i < wordLength; i++) {
            int charIndex = reversedWord.charAt(i) - 'a';
            if (root.children[charIndex] == null) {
                TrieNode newNode = new TrieNode();
                newNode.shortestWordLength = wordLength;
                newNode.shortestWordIndex = wordIndex;
                root.children[charIndex] = newNode;
                root = root.children[charIndex];
            } else {
                root = root.children[charIndex];
                if (wordLength < root.shortestWordLength) {
                    root.shortestWordLength = wordLength;
                    root.shortestWordIndex = wordIndex;
                }
            }
        }
    }

    public int searchWord(TrieNode root, String word) {
        StringBuilder reversedWord = new StringBuilder(word).reverse();
        int wordLength = word.length();

        for (int i = 0; i < wordLength; i++) {
            int charIndex = reversedWord.charAt(i) - 'a';
            if (root.children[charIndex] != null)
                root = root.children[charIndex];
            else
                break;
        }
        return root.shortestWordIndex;
    }

    public List<Integer> stringIndices(List<String> words, List<String> queries) {
        int n = words.size();
        List<Integer> indices = new ArrayList<>();
        TrieNode root = new TrieNode();

        for (int i = 0; i < n; i++) {
            if (words.get(i).length() < root.shortestWordLength) {
                root.shortestWordLength = words.get(i).length();
                root.shortestWordIndex = i;
            }
            insertWord(root, words.get(i), i);
        }

        int m = queries.size();
        for (int i = 0; i < m; i++) {
            int index = searchWord(root, queries.get(i));
            indices.add(index);
        }
        return indices;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00