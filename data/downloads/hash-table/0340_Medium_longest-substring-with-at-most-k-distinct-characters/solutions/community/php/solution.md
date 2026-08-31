# PHP solution, sliding window with hash table

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/4943732/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/4943732/)

---

# Code
```
class Solution {
    function lengthOfLongestSubstringKDistinct($s, $k) {
        if($k == 0){
            return 0;
        }
        $hash=[];
        $left = 0;
        $max = 0;
        for($i=0;$i<strlen($s);$i++){
            if(isset($hash[$s[$i]])){
                $hash[$s[$i]]++;
            }else{
                $hash[$s[$i]]=1;
            }
            // If the window has more than k distinct characters, 
            // shrink it from the left
            while(count($hash)>$k){
                $hash[$s[$left]]--;
                if($hash[$s[$left]] == 0){
                    unset($hash[$s[$left]]);
                }
                $left++;
            }
            // Update the maximum length found so far if necessary
            // This is safe because we either found a longer substring,
            // or the max length remains the same.
            $max = max($max, $i-$left+1);
        }
        return $max;
    }
}
```
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
