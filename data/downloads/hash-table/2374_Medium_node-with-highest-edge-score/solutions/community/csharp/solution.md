# C# Linear Scan and Accumulation Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/6063179/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/6063179/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Understanding Relationships: I understood that each node has exactly one outgoing edge, so the graph is represented as a set of "pointing" relationships. The core of the problem is about finding how many other nodes point to a given node, and aggregating their labels as a score.
- Sum the Contributions: The idea that each node contributes its index as a score to the target node was intuitive. For example, if node i points to node edges[i], we need to add i to the score of the node at edges[i].
- My immediate thought was to maintain an array or dictionary to hold the scores. Using an array made sense because we have a fixed number of nodes (n), and using direct indexing is efficient.
- Efficiently Find the Maximum Score: After populating the scores, we need to determine which node has the highest score. Since multiple nodes can have the same score, I had to consider handling ties by selecting the smallest index. My instinct was to perform a second pass through the scores to determine the node with the maximum score, which ensures a linear complexity of O(n) for both traversals.
___
# Approach
- <!-- Describe your approach to solving the problem. --> Data Structures for Scores: We use an array named scores to store the edge score for each node. Since nodes are numbered from 0 to n - 1, this array will have the same length as edges.
- Calculating Scores:
- *We iterate over the edges array.
- *For each index i, we add i to scores[edges[i]] because node i is pointing to node edges[i].
- Finding the Result Node:
- *We initialize maxScore to a very small value and resultNode to 0.
- *We iterate over the scores array to find the node with the highest score.
- *If multiple nodes have the same score, we choose the node with the smaller index.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the number of nodes.
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n) for storing the scores.
___
# Code
```csharp []
public class Solution {
    public int EdgeScore(int[] edges) {
        // Use a dictionary to track the scores of each node
        long[] scores = new long[edges.Length];

        // Calculate the scores for each mode
        for (int i = 0; i < edges.Length; i++) {
            scores[edges[i]] += i;
        }

        // Find the node with the maximum score
        long maxScore = long.MinValue;
        int resultNode = 0;

        for (int i = 0; i < scores.Length; i++) {
            if (scores[i] > maxScore) {
                maxScore = scores[i];
                resultNode = i;
            } else if (scores[i] == maxScore && i < resultNode) {
                // If scores are equal, chose the smaller index
                resultNode = i;
            }
        }

        return resultNode;
    }
}
```