# [C#] Brainteaser

**Author:** Sh0wM3Th3C0d3
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/3115056/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/3115056/)

---

# Intuition
Ported from Java: https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/1189544/java-o-n-time-o-1-space-faster-than-100/?page=3
# Approach
I confess to have started this as a Union-Find problem, but this is way more elegant. The root is the node whose value equals: (the sum of the values carried by all nodes) - (the sum of the values carried by all children).
```
foreach (Node node in  tree) {
    if (node.val == totalSum) 
        return node;
}
```
# Code
```
public class Solution {
    public Node FindRoot(List<Node> tree) {
       int totalSum = 0;
        foreach (var node in tree) {
            totalSum += node.val;
        }
              
        foreach (Node node in tree) {
            foreach (var child in node.children) {
                totalSum -= child.val;
            }
        }
                        
        foreach (Node node in  tree) {
            if (node.val == totalSum) 
                return node;
        }
            
        return null;
    }
}
```