# Flattened tree solution

**Author:** Zedzdead
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5662867/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5662867/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n+1)

# Code
```php []
class Solution {
    public array $tree = [];
    
    public function getMinimumDifference($root): int {
        $this->treeToArray($root);
        $minDiff = PHP_INT_MAX;

        $i = 0;  
        while ($i < count($this->tree)) {
            $minDiff = min($minDiff, abs($this->tree[$i++] - $this->tree[$i] ?? 0));
        }

        return $minDiff;
    }

    protected function treeToArray(?TreeNode $root): void
    {
        if (!$root) {
            return;
        }
        $this->treeToArray($root->left);
        $this->tree[] = $root->val;
        $this->treeToArray($root->right);
    }
}
```