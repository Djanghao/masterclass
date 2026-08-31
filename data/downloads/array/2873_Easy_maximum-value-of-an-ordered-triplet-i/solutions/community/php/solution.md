# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/5039678/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/5039678/)

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
function maximumTripletValue($nums) {
if(count($nums) < 3) return 0;
$len = count($nums);
$max = 0;
for ($i=0; $i<$len-2; $i++){
    for ($j=$i+1; $j<$len-1; $j++){
        for ($k=$j+1; $k<$len; $k++){
            if (($nums[$i] - $nums[$j]) * $nums[$k] > $max) $max = ($nums[$i] - $nums[$j]) * $nums[$k];
        }
    }
} 
return ($max>=0) ? $max : 0; 
}
}
```