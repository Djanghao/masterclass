# php solution using hashmap 0ms

**Author:** dexterbagtang
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/6111274/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/6111274/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
function findSubarrays($nums) {
    $map = [];
    for ($i = 0; $i < count($nums) - 1; $i++) {
        $sum = $nums[$i] + $nums[$i + 1];
        if (!isset($map[$sum])){
            $map[$sum] = true;
        }else{
            return true;
        }
    }
    return false;
}
}
```