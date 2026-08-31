# Solution Sell Diminishing-Valued Colored Balls

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/5219909/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/5219909/)

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
    private function getOrders($inv, $val) {
        $o = 0;
        foreach ($inv as $i) {
            $o += max(0, $i - $val);
        }
        return $o;
    }

    public function maxProfit($inventory, $orders) {
        $res = 0;
        $kMod = 1000000007;

        $low = 0;
        $high = 1000000000;
        while ($low <= $high) {
            $mid = (int)(($low + $high) / 2);
            $temp = $this->getOrders($inventory, $mid);
            if ($temp > $orders) {
                $low = $mid + 1;
            } elseif ($temp == $orders) {
                $high = $mid;
                $low = $mid;
                break;
            } else {
                $high = $mid - 1;
            }
        }

        foreach ($inventory as $i) {
            if ($i > $low) {
                $res += ($i - $low) * ($i + $low + 1) / 2;
                $res %= $kMod;
                $orders -= ($i - $low);
                $orders = max(0, $orders);
            }
        }
        return ($res + $low * $orders) % $kMod;
    }
}

```