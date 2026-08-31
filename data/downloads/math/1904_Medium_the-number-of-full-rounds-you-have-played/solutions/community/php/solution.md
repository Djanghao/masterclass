# Solution The Number of Full Rounds You Have Played

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/5722751/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/5722751/)

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
```php []
class Solution {
    public function numberOfRounds(string $loginTime, string $logoutTime): int {
        $INtime = ((intval($loginTime[0]) * 10 + intval($loginTime[1])) * 60) + (intval($loginTime[3]) * 10 + intval($loginTime[4]));
        $OUTtime = ((intval($logoutTime[0]) * 10 + intval($logoutTime[1])) * 60) + (intval($logoutTime[3]) * 10 + intval($logoutTime[4]));

        if ($OUTtime < $INtime) {
            $OUTtime += 1440;
        }

        if ($INtime % 15 != 0) {
            $val = intdiv($INtime, 15);
            $INtime = ($val + 1) * 15;  
        }

        return abs($OUTtime - $INtime) / 15;
    }
}

```