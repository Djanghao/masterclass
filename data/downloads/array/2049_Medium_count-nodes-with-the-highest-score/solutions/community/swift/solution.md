# [Swift] DFS || O(n)

**Author:** wibosco
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4759827/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4759827/)

---

# Approach
First we convert the `parents` array into an adjacency list - this will allow for a more efficent traversal of the tree. Once we have the adjacency list, using DFS we traverse down to the leaf nodes of the tree, then as we unwind the recursive stack we calculate the size of the tree rooted at the current node and also the product of the two subtrees if the current node was removed. Next we take the other subtree that would be created by deleting the current node i.e. the subtree the current node's parent belongs to and mulitple it by the current product value - `score`. We then store this `score` value in `scores` so that we can keep track of the number of times that `score` has been produced. To allow for eaiser extracted of the highest score count we also track the max score with `maxScore`. Finally we return the size of a tree rooted at the current to allow the same calculations to be performed higher up the tree.

N.B. Special care has to be taken to avoid multiplying by 0.

# Complexity
- Time complexity:
$$O(n)$$ where n is the number of nodes in the tree

- Space complexity:
$$O(n)$$ where n is the number of nodes in the tree

# Code
```
class Solution {
    func countHighestScoreNodes(_ parents: [Int]) -> Int {
        var root = -1
        
        var adjList = Array(repeating: [Int](), count: parents.count)
        for (child, parent) in parents.enumerated() {
            guard parent != -1 else {
                root = child
                continue
            }
            adjList[parent].append(child)
        }
        
        var scores = [Int: Int]()
        var maxScore = -1
        _ = dfs(adjList, root, &scores, &maxScore)
        
        return scores[maxScore]!
    }
    
    private func dfs(_ adjList: [[Int]], _ index: Int, _ scores: inout [Int: Int], _ maxScore: inout Int) -> Int {
        var treeRootAtIndexSize = 1
        var score = 1
        
        for child in adjList[index] {
            let subtreesSize = dfs(adjList, child, &scores, &maxScore)
            
            treeRootAtIndexSize += subtreesSize
            score *= subtreesSize
        }
        
        let otherTreeSize = adjList.count - treeRootAtIndexSize
        
        score *= max(1, otherTreeSize) //to avoid multiplying by 0
        
        scores[score, default: 0] += 1
        maxScore = max(maxScore, score)
        
        return treeRootAtIndexSize
    }
}
```