# java DFS . easy to understand !!!

**Author:** kunal3322
**Votes:** 87
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/780231/](https://leetcode.com/problems/path-sum-iii/solutions/780231/)

---

**PLEASE upvote if helpful!!**

```
class Solution {
    int counter = 0;
    public int pathSum(TreeNode root, int sum) {

        if (root == null) return 0;

        pathSumHelper(root, sum, 0);
        pathSum(root.left, sum);
        pathSum(root.right, sum);

        return counter;

    }

    void pathSumHelper(TreeNode root, int sum, int currentSum) {
        if (root == null) {
            return;
        }
        currentSum += root.val;
        if (currentSum == sum) {
            counter++;
        }
        pathSumHelper(root.left, sum, currentSum);
        pathSumHelper(root.right, sum, currentSum);
    } 
}
```