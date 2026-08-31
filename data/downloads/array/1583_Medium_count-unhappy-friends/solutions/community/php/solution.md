# Solution Count Unhappy Friends

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/5174142/](https://leetcode.com/problems/count-unhappy-friends/solutions/5174142/)

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
    private function check($n, $preferences, $pairht, $f, $you) {
        $isTrue = false;
        
        for ($i = 0; $i < $n - 1; $i++) {
            if ($preferences[$you][$i] == $pairht[$you]) {
                break;
            }
            
            if ($preferences[$you][$i] == $f) {
                $isTrue = true;
            }
        }
        
        return $isTrue;
    }
    
    public function unhappyFriends($n, $preferences, $pairs) {
        $pairht = array_fill(0, $n, 0);
        
        foreach ($pairs as $pair) {
            $pairht[$pair[0]] = $pair[1];
            $pairht[$pair[1]] = $pair[0];
        }
        
        $result = 0;
        
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n - 1; $j++) {
                if ($preferences[$i][$j] == $pairht[$i]) {
                    break;
                }
                
                if ($this->check($n, $preferences, $pairht, $i, $preferences[$i][$j])) {
                    $result++;
                    break;
                }
            }
        }
        
        return $result;
    }
}


```