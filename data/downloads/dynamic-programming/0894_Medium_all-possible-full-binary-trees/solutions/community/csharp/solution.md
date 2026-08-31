# 🚀 [ VIDEO] Master Full Binary Trees 🌳 | Step-by-Step LeetCode Guide

**Author:** vanAmsen
**Votes:** 7
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3803263/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3803263/)

---

# Intuition
At first glance, this problem might seem complex due to its requirement for generating all possible full binary trees. However, it's clear that the problem can be approached via dynamic programming, breaking down the larger problem into smaller sub-problems and using memoization to prevent redundant computations. 

https://youtu.be/jLnWQe4Hzps

# Approach
We start by understanding that a full binary tree always has an odd number of nodes. So, we can directly return an empty list for even numbers. For the number 1, we return a list with a single node tree. For numbers greater than 1, we iterate over all odd numbers less than `n`, and for each number `i`, we generate all pairs of trees with `i` and `n - i - 1` nodes. We then create a new tree for each pair by adding a new root node and attaching the pair as its left and right child respectively. We use a memoization dictionary to store and retrieve previously computed results.

# Complexity
- Time complexity: \\(O(4^n / n^{3/2})\\) The time complexity of this problem is governed by the Catalan number, which grows rapidly with `n`.

- Space complexity: \\(O(4^n / n^{3/2})\\) This is because we need to store each generated tree.

# Code
```Python []
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        memo = {0: [], 1: [TreeNode(0)]}
        
        def helper(n):
            if n not in memo:
                memo[n] = [TreeNode(0, left, right)
                           for i in range(1, n, 2)
                           for left in helper(i)
                           for right in helper(n - i - 1)]
            return memo[n]
        
        return helper(n)
```
``` C++ []
class Solution {
public:
    unordered_map<int, vector<TreeNode*>> memo;
    
    vector<TreeNode*> allPossibleFBT(int n) {
        if (memo.find(n) == memo.end()) {
            vector<TreeNode*> list;
            if (n == 1) {
                list.push_back(new TreeNode(0));
            } else if (n % 2 == 1) {
                for (int x = 0; x < n; ++x) {
                    int y = n - 1 - x;
                    for (TreeNode* left: allPossibleFBT(x)) {
                        for (TreeNode* right: allPossibleFBT(y)) {
                            TreeNode* root = new TreeNode(0);
                            root->left = left;
                            root->right = right;
                            list.push_back(root);
                        }
                    }
                }
            }
            memo[n] = list;
        }
        return memo[n];
    }
};
```
``` Java []
class Solution {
    Map<Integer, List<TreeNode>> memo = new HashMap<>();
    
    public List<TreeNode> allPossibleFBT(int n) {
        if (!memo.containsKey(n)) {
            List<TreeNode> list = new LinkedList<>();
            if (n == 1) {
                list.add(new TreeNode(0));
            } else if (n % 2 == 1) {
                for (int i = 0; i < n; ++i) {
                    int j = n - 1 - i;
                    for (TreeNode left: allPossibleFBT(i)) {
                        for (TreeNode right: allPossibleFBT(j)) {
                            TreeNode root = new TreeNode(0);
                            root.left = left;
                            root.right = right;
                            list.add(root);
                        }
                    }
                }
            }
            memo.put(n, list);
        }
        return memo.get(n);
    }
}
```
``` JavaScript []
var allPossibleFBT = function(n) {
    let memo = new Map();
    
    function helper(n) {
        if (memo.has(n)) return memo.get(n);
        let res = [];
        if (n === 1) {
            res.push(new TreeNode(0));
        } else if (n % 2 === 1) {
            for (let i = 0; i < n; i++) {
                let j = n - 1 - i;
                for (let left of helper(i)) {
                    for (let right of helper(j)) {
                        let root = new TreeNode(0);
                        root.left = left;
                        root.right = right;
                        res.push(root);
                    }
                }
            }
        }
        memo.set(n, res);
        return res;
    }
    
    return helper(n);    
};
```
``` C# []
public class Solution {
    Dictionary<int, IList<TreeNode>> memo = new Dictionary<int, IList<TreeNode>>();
    
    public IList<TreeNode> AllPossibleFBT(int n) {
        if (!memo.ContainsKey(n)) {
            List<TreeNode> list = new List<TreeNode>();
            if (n == 1) {
                list.Add(new TreeNode(0));
            } else if (n % 2 == 1) {
                for (int i = 0; i < n; ++i) {
                    int j = n - 1 - i;
                    foreach (TreeNode left in AllPossibleFBT(i)) {
                        foreach (TreeNode right in AllPossibleFBT(j)) {
                            TreeNode root = new TreeNode(0);
                            root.left = left;
                            root.right = right;
                            list.Add(root);
                        }
                    }
                }
            }
            memo[n] = list;
        }
        return memo[n];
    }
}
```

Remember, this problem is a great example of how dynamic programming can help solve complex problems by breaking them down into simpler sub-problems. Happy coding! \uD83D\uDE80