# dart solution

**Author:** beshoyFayz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3635870/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3635870/)

---

# steps
1. make two varaibles one with the smallest value ever to compare it each time 
2. declare function called in order which  is used to traverse the binary tree (evrey time we take the smallest deffirence)by nature it is the left
3. **the stopping condition :**if there is no more values 
4. or we would recusivily call it again using the left branch value
5. now take the smallest value between the previous on or the difference between the value and the previous value 
class Solution {
  double prev = double.negativeInfinity;
  double ans = double.infinity;
  
  int getMinimumDifference(TreeNode? root) {
    inOrder(root);
    return ans.toInt();
  }
  
  void inOrder(TreeNode? root) {
    if (root == null) return;
    
    inOrder(root.left);
    
    if (prev != double.negativeInfinity) {
      ans = ans < (root.val - prev).abs() ? ans : (root.val - prev).abs();
    }
    prev = root.val.toDouble();
    
    inOrder(root.right);
  }
}
```