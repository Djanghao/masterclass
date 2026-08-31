# PHP 100% with explanation

**Author:** Husniddinuz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5311850/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5311850/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main challenge is to maximize the total reward by adding elements from the `rewardValues` array to the total reward `x`. The condition to add an element to `x` is that it must be greater than the current value of `x`. Therefore, to maximize `x`, we should always add the smallest possible reward that satisfies this condition. By sorting the array and iterating through it, we ensure that we are adding the smallest qualifying rewards first, which helps in maximizing `x`.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sort the Array**:
   - First, sort the `rewardValues` array in ascending order. This helps in efficiently picking the smallest possible reward that can be added to the current total reward `x`.

2. **Initialize Total Reward**:
   - Start with `x = 0`, as the initial total reward.

3. **Iterate Through Sorted Rewards**:
   - Traverse the sorted `rewardValues` array.
   - For each reward `rewardValues[i]`, check if it is greater than the current total reward `x`.
   - If it is, add `rewardValues[i]` to `x`.

4. **Return the Result**:
   - After iterating thr

# Complexity
- Time complexity: $$O(n \\log n)$$

- Space complexity: $$O(n)$$ 

# Code
```
class Solution {

    private $dp = array();

    /**
     * @param Integer[] $rewardValues
     * @return Integer
     */
    function maxTotalReward($rewardValues) {
        $rewardValues = $this->removeDups($rewardValues);
        return $rewardValues[count($rewardValues) - 1] + $this->rec($rewardValues, $rewardValues[count($rewardValues) - 1] - 1);
    }

    private function rec($arr, $lim) {
        if ($lim == 0) {
            return 0;
        }
        if (isset($this->dp[$lim])) {
            return $this->dp[$lim];
        }
        $ind = $this->find($arr, $lim);
        if ($ind == -1) {
            return $lim;
        }
        $res = 0;
        for ($i = 0; $i < $ind; $i++) {
            if ($arr[$i] * 2 - 1 <= $res) {
                break;
            }
            $res = max($res, $arr[$i] + $this->rec($arr, min($lim - $arr[$i], $arr[$i] - 1)));
        }
        $this->dp[$lim] = $res;
        return $res;
    }

    private function find($arr, $x) {
        $lo = 0;
        $hi = count($arr) - 1;
        $res = -1;
        while ($lo <= $hi) {
            $mid = $lo + (int)(($hi - $lo) / 2);
            if ($arr[$mid] == $x) {
                return -1;
            } else if ($arr[$mid] < $x) {
                $lo = $mid + 1;
            } else {
                $res = $mid;
                $hi = $mid - 1;
            }
        }
        return $res;
    }

    private function removeDups($arr) {
        $set = array();
        foreach ($arr as $num) {
            $set[$num] = true;
        }
        $res = array_keys($set);
        sort($res);
        return $res;
    }
}

```