# PHP | Recursive Permutation Search

**Author:** billy_homeless
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutations/solutions/3180188/](https://leetcode.com/problems/permutations/solutions/3180188/)

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function permute($nums) {
        $res = [];
        $size = count($nums);

        if ($size === 1) {
            $res[] = [$nums[0]];
            
            return $res;
        } else {
            for ($i = 0; $i < $size; $i++) {
                $front = array_shift($nums);
                $permutations = $this->permute($nums);
                
                foreach ($permutations as $perm) {
                    $perm[] = $front;
                    $res[] = $perm;
                }
                $nums[] = $front;
            }
        }

        return $res;
    }
}
```