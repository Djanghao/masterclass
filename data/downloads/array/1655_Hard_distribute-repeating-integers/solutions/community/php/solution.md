# Solution Distribute Repeating Integers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/5229919/](https://leetcode.com/problems/distribute-repeating-integers/solutions/5229919/)

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
    private function solve(&$counts, $quantity, $ithCustomer) {
        if ($ithCustomer == count($quantity)) return true;

        for ($i = 0; $i < count($counts); $i++) {
            if ($counts[$i] >= $quantity[$ithCustomer]) {
                $counts[$i] -= $quantity[$ithCustomer];
                if ($this->solve($counts, $quantity, $ithCustomer + 1)) return true;
                $counts[$i] += $quantity[$ithCustomer];
            }
        }
        return false;
    }

    public function canDistribute($nums, $quantity) {
        $countMap = array();
        foreach ($nums as $num) {
            if (!isset($countMap[$num])) {
                $countMap[$num] = 0;
            }
            $countMap[$num]++;
        }

        $counts = array_values($countMap);
        rsort($quantity);
        
        return $this->solve($counts, $quantity, 0);
    }
}

```