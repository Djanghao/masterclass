# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4577684/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4577684/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $batteryPercentages
     * @return Integer
     */
    function countTestedDevices($batteryPercentages) {
        $decay = 0;
        $res = 0;
        foreach($batteryPercentages as $v){
            if($v-$decay > 0){
                $res++;
                $decay++;
            }
        }
        return $res;
    }
}
```