# Easy to understand C++ Solution | Post Order | DFS | O(n)

**Author:** cstrasengan
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4658308/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4658308/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are asked to count the nodes with highest score. 
**Score of a node** is nothing but product of number of nodes in the remaining forests after removing that node from the tree. 

**Important Observation**:
We can categorize the nodes into three cases
1. **Root Node** - A score of a root node is just the product of number of nodes in left sub tree and number of nodes in right sub tree i.e `leftSubTreeNodes * rightSubTreeNodes`, Since a root node doesn't have a parents, we will have at most two forests when we remove the node 
2. **Leaf Node** - Since a leaf node doesn't have any children, on deleting a leaf node we get one forest. So, the score of the leaf node is `numberOfNodesInATree` - 1
3. **Middle Node** - A Middle node can have both children and a parent. So, when we delete a middle node, we get 3 forests. Score of a middle node is `leftSubTreeNodes * rightSubTreeNodes *otherNodes`.

On careful observation cases 2 and 3 can be simplified and combined into one case.
`leftSubTreeNodes * rightSubTreeNodes * (numberOfTreeNodes - (lefSubTreeNodes + rightSubtreeNodes +1))`, *because other nodes can be calculated as total no of nodes - no of child nodes + 1(including the current node). Also, for leafnodes, we don't include the child nodes while computing the score.*

*For Root node however, since we don't have a parent, the other nodes will be 0, so we don't include that while computing the score for that node.*

Since, we want to know the count in the left subtrees and right subtrees before computing the score every node, we use the postOrder traversal.


# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an adjacency list for the tree from the parents array.
2. Do a post order traversal. 
3. In the post order traversal, while traversing the node, compute the score according to the above algorithm, update the maximum score if it's greater than the previous max score and the set the maxScore Count to 1.
4. If the score equal to maxScore, update the maxScore Frequency


# Complexity
- Time complexity: `O(n)`
We are traversing all the nodes in the Tree exactly once. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)` - to store the adjaceny list
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<vector<int>> graph;
    long long maxScore = 0;
    int root = -1;
    int maxScoreFrequency = 0;

    int dfs(int node) {
        int count = 0;
        long long score = 1;
        for(auto adj: graph[node]){
            auto child = dfs(adj);
            count += child;
            score *= child;
        }
        if(node != root) score *= (graph.size() -(count + 1));
        if(maxScore < score) {
            maxScore = score;
            maxScoreFrequency = 1;
        } else if(maxScore == score) {
            maxScoreFrequency++;
        }
        return count +1;
    }

    int countHighestScoreNodes(vector<int>& parents) {
        graph.resize(parents.size());
        for(int i = 0 ; i < parents.size(); i++) {
            if(parents[i] != -1) {
                graph[parents[i]].push_back(i);
            }else {
                root = i;
            }
        }
        dfs(root);
        return maxScoreFrequency;
    }
};
```