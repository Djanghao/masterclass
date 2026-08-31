# PHP Solution Beats 100%

**Author:** mohammed_aladham
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/3419811/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/3419811/)

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
     * @param Integer[] $milestones
     * @return Integer
     */
    function numberOfWeeks($milestones) {
        /*
The Greedy idea is, if the max elements is larger than the sum of the rest elements. then the max answer is 2 * rest + 1, because the best strategy is pick max, pick other, pick max, pick other....pick max. otherwise, we can finish all of the milestones.
        */
        
        $mx = max($milestones);
        $sum = array_sum($milestones);
        $rest = $sum - $mx;

        return min($rest * 2 + 1, $sum);
    }
}

```