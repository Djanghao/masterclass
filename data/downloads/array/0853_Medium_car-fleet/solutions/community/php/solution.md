# easy PHP Car Fleet O(nlogn) time complexity

**Author:** chiazza73
**Votes:** 2
**Link:** [https://leetcode.com/problems/car-fleet/solutions/4572262/](https://leetcode.com/problems/car-fleet/solutions/4572262/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach Monotonic stack ascending
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $target
     * @param Integer[] $position
     * @param Integer[] $speed
     * @return Integer
     */
    function carFleet($target, $position, $speed) {
        $hashMap = [];
        $stack = [];
        foreach($position as $k=>$pos){
            $hashMap[$pos]= $speed[$k];
        }

        krsort($hashMap);

        foreach($hashMap as $position => $speed){
            $time = ($target-$position)/$speed;
            if(empty($stack) || $time>end($stack)){
                $stack[] = $time;
            }
        }
        
        return count($stack);
    }
}
```