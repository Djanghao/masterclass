# PHP. T-O(m*log*m + n), M-O(m).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4889398/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4889398/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m*logm + n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m)
# Code
```
class Solution {

    /**
     * @param Integer[] $apple
     * @param Integer[] $capacity
     * @return Integer
     */
    function minimumBoxes($apple, $capacity) {
        $n = count($capacity);
        $heap = new SplMaxHeap();
        foreach($capacity as $v){
            $heap->insert($v);
        }
        $sum=array_sum($apple);
        while($sum > 0){
            $sum -= $heap->extract();
        }
        return $n-$heap->count();
    }
}
```