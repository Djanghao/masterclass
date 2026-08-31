# C++ DFS

**Author:** StefanBossbaly
**Votes:** 2
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1599202/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1599202/)

---

```
class Solution {
public:
    // Returns the max path of the children nodes
    int dfs(Node* current, int& maxDiameter)
    {
        // Base case: Node has no children
        if (current->children.empty()) return 0;
        
        // Store the first and second largest child paths (initially 0)
        int largestChildPath = 0;
        int secondLargestChildPath = 0;
        
        // Iterate over the node's children
        for (Node* child : current->children)
        {
            // Find the child's max path
            int childPath = dfs(child, maxDiameter) + 1;
            
            // Update largest or second largest if appropriate
            if (childPath > largestChildPath)
            {
                secondLargestChildPath = largestChildPath;
                largestChildPath = childPath;
            }
            else if (childPath > secondLargestChildPath)
            {
                secondLargestChildPath = childPath;
            }
        }
        
        // Update the maxDiameter with the sum of the largest and second largest children paths
        maxDiameter = std::max(maxDiameter, largestChildPath + secondLargestChildPath);
        
        // Return the largest child path 
        return largestChildPath;
    }
    
    int diameter(Node* root) 
    {
        int maxDiameter = 0;
        dfs(root, maxDiameter);
        
        return maxDiameter;
    }
};
```