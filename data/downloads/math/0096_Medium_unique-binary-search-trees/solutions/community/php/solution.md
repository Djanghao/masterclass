# Solution in PHP

**Author:** ammohitchaprana
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/5426071/](https://leetcode.com/problems/unique-binary-search-trees/solutions/5426071/)

---

# Intuition

The problem of finding the number of unique binary search trees (BSTs) with n nodes can be solved using dynamic programming. The key insight is to observe that the number of unique BSTs with n nodes can be calculated by considering all possible root nodes from 1 to n, and then multiplying the number of unique BSTs in the left and right subtrees.

# Approach

The solution uses a dynamic programming array $dp to store the number of unique BSTs with $i nodes, where $i ranges from 0 to $n.

We initialize $dp and $dp to 1, as there is one way to construct a binary search tree with 0 nodes (an empty tree) and one way with 1 node.

Then, we iterate through the values of $i from 2 to $n (inclusive). For each value of $i, we iterate through the possible root nodes $j from 1 to $i (inclusive). For each root node $j, we calculate the number of unique BSTs with $j - 1 nodes in the left subtree (using $dp[$j - 1]) and the number of unique BSTs with $i - $j nodes in the right subtree (using $dp[$i - $j]). We multiply these two values and add the result to $dp[$i].

Finally, we return the value stored in $dp[$n], which represents the number of unique BSTs with $n nodes.

# Complexity

- Time complexity: The algorithm uses two nested loops, resulting in a time complexity of O(n^2), where $n is the input value.
- Space complexity: The algorithm uses a dynamic programming array $dp of size $n + 1, resulting in a space complexity of O(n), where $n is the input value.

# Code
```
class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function numTrees($n) {
        $dp = array_fill(0, $n + 1, 0);
        $dp[0] = $dp[1] = 1;
        
        for ($i = 2; $i <= $n; $i++) {
            for ($j = 1; $j <= $i; $j++) {
                $dp[$i] += $dp[$j - 1] * $dp[$i - $j];
            }
        }
        
        return $dp[$n];
    }
}

```