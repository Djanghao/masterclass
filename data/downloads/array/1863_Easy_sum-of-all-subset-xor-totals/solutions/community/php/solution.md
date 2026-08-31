# 1863. Sum of All Subset XOR Totals

**Author:** Epb1qPVxIT
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5189880/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5189880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    private $sum = 0;

    function subsetXORSum($nums) {
        foreach($nums as $i => $value) {
            $slice1 = array_slice($nums, $i, 1);
            $slice2 = array_slice($nums, $i + 1);
    
            $this->handle($slice1, $slice2);
        }

        return $this->sum;
        // var_dump($this->sum);
    }
    
    function handle($slice1, $slice2) {
        $this->sum += $this->xorArray($slice1);
        // var_dump($slice1);
    
        foreach($slice2 as $i => $value) {
            $newSlice1 = array_merge($slice1, [$value]);
            $newSlice2 = array_slice($slice2, $i + 1);
    
            $this->handle($newSlice1, $newSlice2);
        }
    }
    
    function xorArray(array $data) {
        return array_reduce($data, function($x, $y) {
            return $x ^ $y;
        });
    }
}
```