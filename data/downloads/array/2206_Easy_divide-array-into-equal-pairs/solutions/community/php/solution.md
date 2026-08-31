# Cache php Solution

**Author:** Joel301
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/5737414/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/5737414/)

---

# Intuition
This is a typical cache problem.

# Approach
<!-- Describe your approach to solving the problem. -->
The problem has a need to find a complement and every pair need to have a pair. If the HashArray has an element at least at the end it means a number has no pair so is a false return.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function divideArray($nums) {
        $hashArray =[];
        foreach ($nums as $num){
            if(isset($hashArray[$num])){
                unset($hashArray[$num]);
                continue;
            }
            $hashArray[$num] = true;
        }
        return count($hashArray) == 0;
    }
}
```