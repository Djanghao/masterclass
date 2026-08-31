# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3903360/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3903360/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```PHP
class Solution
{
    /**
     * @param int[] $nums
     */
    function validPartition(array $nums): bool
    {
        [$a_3, $a_2, $a_1] = [false, true, false];
        for($i = 1; ($i<count($nums))&&($a_3||$a_2||$a_1);$i++) {
            $a = (($nums[$i] === ($nums[$i - 1])) && $a_2)
                || (($nums[$i] === ($nums[$i - 1])) && ($nums[$i] === ($nums[$i - 2] ?? 0)) && $a_3)
                || (($nums[$i] === 1 + ($nums[$i - 1])) && ($nums[$i] === 2 + ($nums[$i - 2] ?? -5)) && $a_3);
            $a_3 = $a_2;
            $a_2 = $a_1;
            $a_1 = $a;
        }

        return $a_1;
    }
}


```