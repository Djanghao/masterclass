# Beats 83.33% of users with PHP

**Author:** monishvadhwani
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/4511679/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/4511679/)

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
     * @return Integer
     */
    function lengthOfLIS($nums) {
        if(!count($nums))
            return 1;

        $subsequenceArray[end($nums)] = 1;

        for ($i = count($nums) - 2; $i >= 0; $i--) {
            $count = 1;

            foreach ($subsequenceArray as $key => $value) {
                $temp = 1;
                if($nums[$i] < $key)
                    $temp += $value;

                if($temp > $count)
                    $count = $temp;
            }

            $subsequenceArray[$nums[$i]] = $count;
        }

        return max($subsequenceArray);
    }
}
```