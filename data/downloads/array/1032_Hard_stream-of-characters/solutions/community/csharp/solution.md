# Memory 170.52 MB Beats 100.00%, Runtime 648 ms Beats 84.62% [EXPLAINED]

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/5778648/](https://leetcode.com/problems/stream-of-characters/solutions/5778648/)

---

# Intuition
To solve the problem of checking if any suffix of a stream of characters matches a word from a list, I used a Trie data structure. I insert all words in reverse order into the Trie, which helps me efficiently find suffixes as new characters are added to the stream.

# Approach
Trie Construction:

Insert each word in reversed order into the Trie. This way, when I add characters to the stream, I can traverse the Trie from the end of the stream backwards to check if any suffix matches a word.

Processing Queries:

For each new character, append it to the stream and traverse the Trie from the end of the current stream backwards to see if any suffix forms a valid word.

# Complexity
- Time complexity:
Construction: O(N * L), where N is the number of words and L is the length of the longest word.
Query: O(L) for each query, where L is the length of the longest word in the stream.

- Space complexity:
Trie: O(N * L), where N is the number of words and L is the length of the longest word, due to storing all possible nodes in the Trie.

# Code
```csharp []
public class StreamChecker {
    private class TrieNode {
        public Dictionary<char, TrieNode> Children = new Dictionary<char, TrieNode>();
        public bool IsEndOfWord;
    }

    private TrieNode root;
    private List<char> stream;
    private TrieNode currentNode;

    public StreamChecker(string[] words) {
        root = new TrieNode();
        stream = new List<char>();

        // Insert reversed words into the Trie
        foreach (var word in words) {
            TrieNode node = root;
            for (int i = word.Length - 1; i >= 0; i--) {
                char ch = word[i];
                if (!node.Children.ContainsKey(ch)) {
                    node.Children[ch] = new TrieNode();
                }
                node = node.Children[ch];
            }
            node.IsEndOfWord = true;
        }

        // Initialize the current node for stream traversal
        currentNode = root;
    }

    public bool Query(char letter) {
        // Add the letter to the stream
        stream.Add(letter);

        // Traverse the Trie from the current node
        currentNode = root;
        for (int i = stream.Count - 1; i >= 0; i--) {
            char ch = stream[i];
            if (!currentNode.Children.ContainsKey(ch)) {
                // If the current letter is not found, reset currentNode
                currentNode = root;
                return false;
            }
            currentNode = currentNode.Children[ch];
            if (currentNode.IsEndOfWord) {
                // If currentNode marks the end of a word, return true
                return true;
            }
        }

        // If no valid suffix is found, return false
        return false;
    }
}

```