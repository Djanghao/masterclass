# PHP Hashmap+Prefixsum Beats 100% + Comments

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/3226825/](https://leetcode.com/problems/continuous-subarray-sum/solutions/3226825/)

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

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function checkSubarraySum($nums, $k) {
        // use prefix sum.
        // we care about each sum's reminder, repeated reminder means that we have a subarray.
        // we store reminders in a hashmap called $reminder.
        // we store indices as value, so, we can ensure that the subarray is not only one element.
        // we initialize the $reminder with 0=>-1 to avoid an edge case which happens if we have a reminder of 0
        
        $reminder = [0 => -1];
        $total = 0;

        foreach($nums as $index=>$v){
                $total += $v;
                $r = $total%$k;

                if(!isset($reminder[$r])){
                    $reminder[$r] = $index;
                }
                elseif($index-$reminder[$r]>1){
                    return true;
                }
        }

        return false;
    }

}
```