# Solution Maximum Number of Achievable Transfer Requests

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/5183539/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/5183539/)

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
    public $ans = 0;
    public $transfer = array();

    public function helper($curr, $n, &$requests, $cnt) {
        if ($curr == count($requests)) {
            if (array_reduce($this->transfer, function ($carry, $element) {
                return $carry && $element == 0;
            }, true)) {
                $this->ans = max($this->ans, $cnt);
            }
            return;
        }

        $this->helper($curr + 1, $n, $requests, $cnt);

        $this->transfer[$requests[$curr][0]]++;
        $this->transfer[$requests[$curr][1]]--;
        $this->helper($curr + 1, $n, $requests, $cnt + 1);
        $this->transfer[$requests[$curr][0]]--;
        $this->transfer[$requests[$curr][1]]++;
    }

    public function maximumRequests($n, &$requests) {
        $this->transfer = array_fill(0, $n, 0);
        $this->helper(0, $n, $requests, 0);
        return $this->ans;
    }
}

```