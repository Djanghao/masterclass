# C++ Easy & Clean Solution | Fastest: 0ms | 1 Liner | DFS | Detailed Explanation | Dry Run

**Author:** umesh72614
**Votes:** 92
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/1555940/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/1555940/)

---

##### Method: DFS [T(n) = O(n) and S(n) = O(H) [recursion stack space]]
Idea is to use DFS (Top Down) and generate number (starting with 0) going root to leaf. At each level, we have: `currNum = prevNum * 10 + root->val`. We compute this number for both left and right subtrees and finally return the sum of both subtree numbers.
*Base case:* `root->left == root->right` (only possbile for leaf node).

##### Dry Run:
```
Suppose Binary Tree is:
		1
	  /    \\
	2       3
		  /
		4
Let func. name be DFS (for explaination only).
DFS(1) = DFS(2, 1) + DFS(3, 1)
DFS(2, 1) = 10 + 2 = 12     // Base case
DFS(3, 1) = DFS(4, 10 + 3) + 0 = DFS(4, 13)
DFS(4, 13) = 130 + 4 = 134    // Base Case
=> DFS(1) = 12 + 134 = 146
```

**NOTE:** 
1. Below code (sumNumbers func. implementation) is actually 1 liner, Only for readability, I have presented it in 3 lines.
2. This problem is a perfect example of how we can use already known solution(s) to solve a new problem. The below solution is very similar to 4th Nov 2021 Daily LC Challenge [here](https://leetcode.com/problems/sum-of-left-leaves/discuss/1558669/c-easy-clean-solution-fastest-0ms-1-liner-dfs-detailed-explanation-dry-run) on leetcode.

```
class Solution {
public:
    int sumNumbers(TreeNode* root, int num=0) {
        return root->left == root->right ? num * 10 + root->val :
            ((root->left ? sumNumbers(root->left, num * 10 + root->val) : 0) + 
            (root->right ? sumNumbers(root->right, num * 10 + root->val) : 0));
    }
};
```

**NOTE:**
*If you find this post helpful then please **upvote**. It keeps me **motivated** to post such helpful solutions. Thanks!*

**PS:**
I have also written posts on:
1. All C++ (15+) sorting algorithms in a cleaner way [here](https://leetcode.com/problems/sort-an-array/discuss/1401412/C%2B%2B-Clean-Code-Solution-or-Fastest-or-All-(15%2B)-Sorting-Methods-or-Detailed) on leetcode.
2. Kadane's Algorithm and Follow up Questions [C++] in a cleaner way [here](https://leetcode.com/problems/maximum-subarray/discuss/1470547/C++-Easy-and-Clean-Solution-or-Fastest:-0ms-or-All-Methods-or-Follow-Ups-or-Detailed-Explanation) on leetcode.

*Do check it out/ bookmark (and upvote :)) to revise those concepts for the interview. Thanks!*