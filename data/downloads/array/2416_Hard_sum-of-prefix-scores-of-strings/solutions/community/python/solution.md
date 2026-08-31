# Trie || Beats 97% || C++ || Python || Java

**Author:** 4ty7
**Votes:** 12
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5829962/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5829962/)

---

# Intuition
The goal of the problem is to calculate the total score of every non-empty prefix of each word in a given list of strings. The score of a prefix is defined as the number of strings in the list that start with that prefix.

To solve this efficiently, we can use a Trie (prefix tree) data structure. The Trie allows us to group words by their prefixes and efficiently count how many words share a given prefix.

# Approach
1. **Use of Trie**:
   - Implement a Trie (prefix tree) to efficiently group words by their prefixes.

2. **Building the Trie**:
   - Iterate through each word in the input list.
   - For each character in the word, navigate through the Trie.
   - Create nodes as necessary and maintain a count at each node to track how many words share that prefix.

3. **Calculating Prefix Scores**:
   - For each word, traverse the Trie again character by character.
   - Accumulate the counts from the Trie nodes to compute the total score for all non-empty prefixes of that word.

4. **Final Output**:
   - Return an array where each element corresponds to the total prefix score of the respective word in the input list.
# Complexity
- Time complexity:
$$O(n *m)$$ 

- Space complexity:
$$O(n *m)$$ 

# Code
```python3 []
class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        # Build the trie structure from the list of words
        trie = self.buildTrie(words)
        # Calculate and return the prefix scores for each word
        return self.calculatePrefixScores(trie, words)

    def buildTrie(self, words: List[str]) -> Dict:
        trie = {}
        for word in words:
            node = trie
            for char in word:
                # Navigate through or create nodes in the trie
                node = node.setdefault(char, {})
                # Count occurrences of the prefix
                node['$'] = node.get('$', 0) + 1
        return trie

    def calculatePrefixScores(self, trie: Dict, words: List[str]) -> List[int]:
        scores = []
        for word in words:
            node = trie
            total_score = 0
            for char in word:
                # Move to the next node and accumulate the score
                node = node[char]
                total_score += node['$']
            scores.append(total_score)
        return scores

```
``` cpp []
#include <vector>
#include <string>
#include <unordered_map>

class Solution {
public:
    std::vector<int> sumPrefixScores(std::vector<std::string>& words) {
        // Build the trie structure from the list of words
        auto trie = buildTrie(words);
        // Calculate and return the prefix scores for each word
        return calculatePrefixScores(trie, words);
    }

private:
    // Trie node structure
    struct TrieNode {
        std::unordered_map<char, TrieNode*> children;
        int prefixCount = 0;
    };

    // Build the trie from the words
    TrieNode* buildTrie(const std::vector<std::string>& words) {
        TrieNode* root = new TrieNode();
        for (const std::string& word : words) {
            TrieNode* node = root;
            for (char ch : word) {
                // Navigate through or create nodes in the trie
                node = node->children[ch];
                if (!node) {
                    node = new TrieNode();
                    node->children[ch] = node;
                }
                // Count occurrences of the prefix
                node->prefixCount++;
            }
        }
        return root;
    }

    // Calculate prefix scores based on the trie
    std::vector<int> calculatePrefixScores(TrieNode* trie, const std::vector<std::string>& words) {
        std::vector<int> scores;
        for (const std::string& word : words) {
            TrieNode* node = trie;
            int totalScore = 0;
            for (char ch : word) {
                // Move to the next node and accumulate the score
                node = node->children[ch];
                totalScore += node->prefixCount;
            }
            scores.push_back(totalScore);
        }
        return scores;
    }
};
```
``` java []
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

class Solution {
    public List<Integer> sumPrefixScores(List<String> words) {
        // Build the trie structure from the list of words
        TrieNode trie = buildTrie(words);
        // Calculate and return the prefix scores for each word
        return calculatePrefixScores(trie, words);
    }

    // Trie node structure
    private static class TrieNode {
        HashMap<Character, TrieNode> children = new HashMap<>();
        int prefixCount = 0;
    }

    // Build the trie from the words
    private TrieNode buildTrie(List<String> words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode node = root;
            for (char ch : word.toCharArray()) {
                // Navigate through or create nodes in the trie
                node = node.children.computeIfAbsent(ch, c -> new TrieNode());
                // Count occurrences of the prefix
                node.prefixCount++;
            }
        }
        return root;
    }

    // Calculate prefix scores based on the trie
    private List<Integer> calculatePrefixScores(TrieNode trie, List<String> words) {
        List<Integer> scores = new ArrayList<>();
        for (String word : words) {
            TrieNode node = trie;
            int totalScore = 0;
            for (char ch : word.toCharArray()) {
                // Move to the next node and accumulate the score
                node = node.children.get(ch);
                totalScore += node.prefixCount;
            }
            scores.add(totalScore);
        }
        return scores;
    }
}
```