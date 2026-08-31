# One Line Solution Sharing in Javascript

**Author:** imcoddy
**Votes:** 53
**Link:** [https://leetcode.com/problems/path-sum/solutions/36596/](https://leetcode.com/problems/path-sum/solutions/36596/)

---

Since this problem is quite straight forward, so I played around a bit and turned it into the shortest solution as below.

    /**
     * Memo:
     * Complex: O(n)
     * Runtime: 164ms
     * Tests: 114 test cases passed
     * Rank: A
     */
    var hasPathSum = function(root, sum) { return root ? (!root.left && !root.right) ? sum === root.val : (hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)) : false; };

While it is equivalent as the following
 
    var hasPathSum = function(root, sum) {
        if (!root) return false;

        if (!root.left && !root.right) { // check leaf
            return sum === root.val;
        } else { // continue DFS
            return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
        }
    };