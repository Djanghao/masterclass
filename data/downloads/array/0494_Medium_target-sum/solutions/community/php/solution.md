# Very simple solution! (recursion + memoization)

**Author:** andriibakulin
**Votes:** 0
**Link:** [https://leetcode.com/problems/target-sum/solutions/4636639/](https://leetcode.com/problems/target-sum/solutions/4636639/)

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
class Solution
{
    private $memo = [];

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function findTargetSumWays($nums, $target, $idx = 0)
    {
        if ($idx == count($nums))
            return $target == 0 ? 1 : 0;

        if (isset($this->memo[$idx][$target]))
            return $this->memo[$idx][$target];

        $res = $this->findTargetSumWays($nums, $target - $nums[$idx], $idx+1)
            +  $this->findTargetSumWays($nums, $target + $nums[$idx], $idx+1);

        return $this->memo[$idx][$target] = $res;
    }
}

```