# PHP DP solution with comments

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/4470149/](https://leetcode.com/problems/string-compression-ii/solutions/4470149/)

---

# Code
```
class Solution {
    function getLengthOfOptimalCompression($s, $k) {
        $n = strlen($s);
        $db = [];
        for($i=0;$i<=$n;$i++){
            for($j=0;$j<=$k;$j++){
                $dp[$i][$j] = PHP_INT_MAX; 
            }
        }
        $dp[0][0] = 0;
        for($i=1;$i<=$n;$i++){
            for($j=0;$j<=$k;$j++){
                $concatenation=0;
                $delete=0;
                // Process each character. Decide whether to keep or delete characters to minimize compressed length
                for($left = $i; $left>=1;$left--){
                    // If the character matches the current character, increase concatenation count
                    if($s[$left-1] == $s[$i-1]){
                        $concatenation++;
                    }else{
                        // Else, count it as a deletion
                        $delete++;
                    }
    
                    // Ensure that the number of deletions does not exceed the allowed limit        
                    if($j-$delete >=0){
                        // Calculate the compressed length of the current
                        $nc = 1 + ($concatenation > 1 ? strlen(strval($concatenation)) : 0);
                        // Update the DP table with the minimum value
                        $dp[$i][$j] = min($dp[$i][$j], $dp[$left-1][$j-$delete] + $nc);
                    }
                }
                // Consider the case where the current character is deleted
                if ($j>0){
                    $dp[$i][$j] = min($dp[$i][$j], $dp[$i-1][$j-1]);
                }
            }
        }
        return $dp[$n][$k];
    }  
}
```