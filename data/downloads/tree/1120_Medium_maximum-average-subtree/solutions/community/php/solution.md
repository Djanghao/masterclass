# PHP Recursion, with comments

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/4383469/](https://leetcode.com/problems/maximum-average-subtree/solutions/4383469/)

---

# Code
```
class Solution {
    function maximumAverageSubtree($root) {
        $this->max = 0; // Initialize the maximum average to 0
        $this->rec($root); // Start the recursion with the root of the tree
        return $this->max; // Return the maximum average found
    }

    // Helper recursive function to traverse the tree
    function rec($node){
        if (!$node){
            // Base case: if the node is null, return [0, 0] (sum and count)
            return [0,0];
        }
        // Recursively compute the sum and count of left subtree
        list($leftsum, $leftcount) = $this->rec($node->left);
        // Recursively compute the sum and count of right subtree
        list($rightsum, $rightcount) = $this->rec($node->right);
        
        // Calculate the local sum and count for the current subtree
        $localsum = $leftsum + $rightsum + $node->val;
        $localcount = $leftcount + $rightcount + 1;

        // Update the maximum average if the current subtree's average is greater
        $this->max = max($this->max, $localsum / $localcount);
        // Return the sum and count of the current subtree for parent nodes to use
        return [$localsum, $localcount];
    }
}

```

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
