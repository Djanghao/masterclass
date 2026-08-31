# C# Solution for Sum of Prefix Scores of Strings Problem

**Author:** Aman_Raj_Sinha
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830244/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830244/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to compute the score of each word in an array, where the score is the sum of how many words have each prefix of the word. A brute force approach (checking each prefix of each word against all other words) would be too slow, especially for large input sizes.

The key observation is that multiple words may share common prefixes, so storing and counting these shared prefixes efficiently can drastically improve performance. The Trie (Prefix Tree) is ideal for this since it allows us to store prefixes in a hierarchical structure, making prefix lookups and counting efficient.

By inserting each word into a Trie, we can track how many words share the same prefix. This allows us to quickly calculate the score for any word by simply summing the counts stored at each node along the path of the word in the Trie.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Trie Data Structure:
	\u2022	Each node in the Trie represents a character of a word, and the path from the root to a node represents a prefix of some word(s).
	\u2022	Each node has a count value that tracks how many words share the prefix represented by the path to that node.
2.	Steps:
	\u2022	Insert all words into the Trie:
	    \u2022	For each word, we insert its characters into the Trie. As we traverse the Trie, we increment the count at each node to track how many words pass through that prefix.
	\u2022	Calculate the score of each word:
	    \u2022	For each word, traverse the Trie from the root node to the node representing the last character of the word. Sum up the count values at each node along the way to get the total score for the word.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	Trie Construction:
	\u2022	Inserting a word into the Trie takes time proportional to its length. If there are n words and the average word length is m, then:
	    \u2022	Inserting all words:  O(n x m) 
	    \u2022	This is because for each word, we insert its m characters into the Trie, and we do this for all n words.
2.	Score Calculation:
	\u2022	For each word, calculating its score requires traversing its characters in the Trie, which takes  O(m)  time per word.
	\u2022	For n words, the total time to calculate scores is  O(n x m) .

Thus, the overall time complexity is: O(n x m)
Where:
\u2022	 n  is the number of words in the input list.
\u2022	 m  is the average length of the words.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	Trie Storage:
	\u2022	The Trie stores characters for all the words. In the worst case, if there are no shared prefixes, the Trie could contain  O(n x m)  nodes (one for each character of each word).
	\u2022	Each node also contains a count field and a dictionary (or equivalent structure) to store its children.

Thus, the space complexity for the Trie is: O(n x m)

2.	Result Array:
	\u2022	We need an array of size n to store the results, which has a space complexity of  O(n) .

Thus, the total space complexity is: O(n x m)


# Code
```csharp []
public class Solution {
    public class TrieNode {
        public Dictionary<char, TrieNode> Children;
        public int Count; // keeps track of how many words share this prefix
        
        public TrieNode() {
            Children = new Dictionary<char, TrieNode>();
            Count = 0;
        }
    }

    private void Insert(TrieNode root, string word) {
        TrieNode currentNode = root;
        foreach (char c in word) {
            if (!currentNode.Children.ContainsKey(c)) {
                currentNode.Children[c] = new TrieNode();
            }
            currentNode = currentNode.Children[c];
            currentNode.Count++;  // increase the prefix count
        }
    }

    private int GetScore(TrieNode root, string word) {
        TrieNode currentNode = root;
        int score = 0;
        foreach (char c in word) {
            currentNode = currentNode.Children[c];
            score += currentNode.Count;
        }
        return score;
    }
    public int[] SumPrefixScores(string[] words) {
        TrieNode root = new TrieNode();
        
        // Step 1: Insert all words into the Trie
        foreach (string word in words) {
            Insert(root, word);
        }
        
        // Step 2: Calculate the score for each word
        int[] result = new int[words.Length];
        for (int i = 0; i < words.Length; i++) {
            result[i] = GetScore(root, words[i]);
        }
        
        return result;
    }
}
```