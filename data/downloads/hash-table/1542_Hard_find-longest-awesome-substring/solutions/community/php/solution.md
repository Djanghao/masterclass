# Solution Find Longest Awesome Substring

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-awesome-substring/solutions/5129872/](https://leetcode.com/problems/find-longest-awesome-substring/solutions/5129872/)

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
    public function longestAwesome($s) {
        $mp = [];
        $mp[0] = -1;
        $mask = 0;
        $ans = 1;
        
        for ($i = 0; $i < strlen($s); $i++) {
            $mask = $mask ^ (1 << (ord($s[$i]) - ord('0')));
            
            if (isset($mp[$mask])) {
                $ans = max($ans, $i - $mp[$mask]);
            } else {
                $mp[$mask] = $i;
            }
            
            for ($k = 0; $k <= 9; $k++) {
                $num = $mask ^ (1 << $k);
                if (isset($mp[$num])) {
                    $ans = max($i - $mp[$num], $ans);
                }
            }
        }
        
        return $ans;
    }
}

```