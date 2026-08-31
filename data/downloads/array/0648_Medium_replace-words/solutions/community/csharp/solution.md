# C# Solution for Replace Words Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/replace-words/solutions/5271922/](https://leetcode.com/problems/replace-words/solutions/5271922/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1.	Build a Trie: Insert all the roots from the dictionary into a Trie. This structure allows for efficient prefix searching.
2.	Traverse Each Word in the Sentence: For each word, search for the shortest root in the Trie that matches the beginning of the word.
3.	Replace with the Root: If a matching root is found, replace the word with that root.
4.	Construct the New Sentence: Combine the processed words to form the new sentence.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	TrieNode Class: Represents each node in the Trie.
	\u2022	children: A dictionary to hold child nodes.
	\u2022	word: Stores the root word if this node marks the end of a root.
2.	Trie Class: Manages the Trie.
	\u2022	Insert(string word): Inserts a word into the Trie.
	\u2022	SearchPrefix(string word): Searches for the shortest root that is a prefix of the given word.
3.	ReplaceWords Method:
	\u2022	Builds the Trie from the dictionary.
	\u2022	Splits the sentence into words and processes each word to find and replace with the shortest root.
	\u2022	Constructs the result sentence using StringBuilder.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Time Complexity:
	\u2022	Building the Trie takes O(m . k), where m is the number of roots and k is the average length of the roots.
	\u2022	Searching for each word in the Trie takes O(w . k), where w is the number of words in the sentence.
	\u2022	The overall time complexity is O(m . k + w . k).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The Trie requires O(m . k) space.
\u2022	Splitting the sentence into words and storing the result requires O(n) space, where n is the length of the sentence.
\u2022	Overall space complexity is O(m . k + n).

# Code
```
public class Solution {
    public class TrieNode {
        public Dictionary<char, TrieNode> children = new Dictionary<char, TrieNode>();
        public string word = null;
    }
    public class Trie {
        private TrieNode root;

        public Trie() {
            root = new TrieNode();
        }

        public void Insert(string word) {
            TrieNode node = root;
            foreach (char c in word) {
                if (!node.children.ContainsKey(c)) {
                    node.children[c] = new TrieNode();
                }
                node = node.children[c];
            }
            node.word = word;
        }

        public string SearchPrefix(string word) {
            TrieNode node = root;
            foreach (char c in word) {
                if (!node.children.ContainsKey(c)) {
                    break;
                }
                node = node.children[c];
                if (node.word != null) {
                    return node.word;
                }
            }
            return word;
        }
    }
    public string ReplaceWords(IList<string> dictionary, string sentence) {
        // Build the Trie from the dictionary
        Trie trie = new Trie();
        foreach (string root in dictionary) {
            trie.Insert(root);
        }
        
        // Split the sentence into words
        string[] words = sentence.Split(' ');
        StringBuilder result = new StringBuilder();

        // Process each word in the sentence
        foreach (string word in words) {
            if (result.Length > 0) {
                result.Append(" ");
            }
            result.Append(trie.SearchPrefix(word));
        }
        
        // Return the final sentence
        return result.ToString();
    }
}
```