# Solution Ways to Split Array Into Three Subarrays

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/5354644/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/5354644/)

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
    public function waysToSplit($nums) {
        $mod = 1000000007;
        $n = count($nums);
        $pref = array_fill(0, $n, 0);
        $pref[0] = $nums[0];
        
        for ($i = 1; $i < $n; $i++) {
            $pref[$i] = $pref[$i - 1] + $nums[$i];
        }
        
        $ans = 0;
        
        for ($i = $n - 1; $i >= 2; $i--) {
            $l = 1;
            $r = $i - 1;
            $sum3 = $pref[$n - 1] - $pref[$i - 1];
            $idx1 = -1;
            $idx2 = -1;
            
            while ($l <= $r) {
                $mid = (int)(($l + $r) / 2);
                $sum1 = $pref[$mid - 1];
                $sum2 = $pref[$i - 1] - $sum1;
                
                if ($sum1 <= $sum2 && $sum2 <= $sum3 && $sum1 <= $sum3) {
                    $idx1 = $mid;
                    $l = $mid + 1;
                } elseif ($sum1 > $sum2) {
                    $r = $mid - 1;
                } else {
                    $l = $mid + 1;
                }
            }
            
            $l = 1;
            $r = $i - 1;
            
            while ($l <= $r) {
                $mid = (int)(($l + $r) / 2);
                $sum1 = $pref[$mid - 1];
                $sum2 = $pref[$i - 1] - $sum1;
                
                if ($sum1 <= $sum2 && $sum2 <= $sum3 && $sum1 <= $sum3) {
                    $idx2 = $mid;
                    $r = $mid - 1;
                } elseif ($sum1 > $sum2) {
                    $r = $mid - 1;
                } else {
                    $l = $mid + 1;
                }
            }
            
            if ($idx1 != $idx2 && $idx1 != -1 && $idx2 != -1) {
                $ans = ($ans + (($idx1 - $idx2) + 1)) % $mod;
            } elseif ($idx1 != -1 || $idx2 != -1) {
                $ans = ($ans + 1) % $mod;
            }
        }
        
        return $ans;
    }
}

```