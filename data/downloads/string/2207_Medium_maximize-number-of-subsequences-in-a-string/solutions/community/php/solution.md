# PHP efficient easy understand only one loop beat 100.00% O(n)

**Author:** alisolphp
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1901643/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1901643/)

---

```
class Solution
{
    
    function maximumSubsequenceCount($s, $p)
    {
        
        // removing other characters for long cases because they have no effect on the response,
        // and useless characters only prolong our algorithm response time.
        if( strlen($s) > 10 ){
            $s = preg_replace("/[^".$p."]/","",$s);
        }
        
        // We will get max count only if add p[0] at the start of text OR add p[1] at the end of text.
        
        // assume1: insert p[0] at the start for max chances
        $choice1 = 0;
        $countOfP0 = 1;
        
        // assume2: insert p[1] at the end for max chances
        $choice2 = 0;
        $countOfP1 = 1;
        
        $c = strlen($s);
        
        for ($i = 0; $i < $c; $i++)
        {
            // if p[1] found, it can be paired with all the p[0]'s found till now
            if ($s[$i] == $p[1])
            {
                $choice1 += $countOfP0;
            }
            if ($s[$i] == $p[0])
            {
                $countOfP0++;
            }
            
            // if p[0] found, it can be paired with all the p[1]'s found till now
            if ($s[$c-$i-1] == $p[0])
            {
                $choice2 += $countOfP1;
            }
            if ($s[$c-$i-1] == $p[1])
            {
                $countOfP1++;
            }
        }
        
        if( $choice1 > $choice2 ){
            return $choice1;
        } else {
            return $choice2;
        }
    }
    
}
```