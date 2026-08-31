# C# solution beats 100% submissions

**Author:** phumney89
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5478738/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5478738/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int FindDistance(TreeNode root, int p, int q) {
        if(root==null||p==q)
            return 0;
        return Helper(root, p, q, 0);
    }
    int Helper(TreeNode root, int p, int q, int dist){
        if(root==null)
            return 0;
        
        int left = Helper(root.left, p, q, dist+1);
        int right = Helper(root.right, p, q, dist+1);

        if(root.val==p||root.val==q){
            if(left==0 && right==0)
                return dist;
            if(left!=0){
                return left-dist;
            }
            else if(right!=0){
                return right-dist;
            }
        }
        
        if(left!=0 && right!=0)
            return (right-dist)+(left-dist);
        
        return (left+right);
    }
}
```