# Solution Alert Using Same Key-Card Three or More Times in a One Hour Period

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/5188382/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/5188382/)

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
    private function time($t) {
        $h = intval(substr($t, 0, 2));
        $m = intval(substr($t, 3));
        return 60 * $h + $m;
    }
    
    public function alertNames($keyName, $keyTime) {
        $logs = [];
        
        // Create logs
        for ($i = 0; $i < count($keyName); $i++) {
            $logs[$keyName[$i]][] = $this->time($keyTime[$i]);
        }
        
        $res = [];
        
        // Process logs
        foreach ($logs as $worker => $time) {
            sort($time);
            for ($i = 2; $i < count($time); $i++) {
                if ($time[$i] - $time[$i - 2] <= 60) {
                    $res[] = $worker;
                    break;
                }
            }
        }
        
        sort($res);
        return $res;
    }
}

```