# Reuse problem 2096 ( easy to understand ) ,you will feel comfortable if editorial too difficult :D

**Author:** ducn17240
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5495672/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5495672/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Reuse problem 2096 , if you are newbie , you will feel comfortable if editorial too difficult

![Screenshot (9).png](./images/0.png)
# Approach
<!-- Describe your approach to solving the problem. -->
in 2096 problem , we found the shorted way from node to another node so we reuse it to create list route from root to leaf node . Later that we remove the longest common prefix of the two path strings to get the shorted path , if it less or equal than distance , add one to result

If you feel easy to understand , can you upvote ? :D

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */

class Solution {
    List<String>route=[];

    void Traverse(TreeNode?root,String s){
        if(root == null)return;
        if(root.left == null && root.right == null){
            
            route.add(s);
            //print(route);
        }
        Traverse(root.left,s+"L");
        Traverse(root.right,s+"R");
    }


  int countPairs(TreeNode? root, int dis) {
    Traverse(root,"");
    int op=0;
    for(int i=0  ; i<route.length ; i++){
        for(int j=i+1 ; j<route.length ; j++){
            int k=0;
            while(route[i][k] == route[j][k]){
                k++;
            }
            if((route[i].length + route[j].length - 2*k) <= dis)op++;
        }
    }
    return op;
  }
}
```