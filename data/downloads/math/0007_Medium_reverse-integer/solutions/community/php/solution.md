# Fast and simple solution

**Author:** YakutD
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/4863450/](https://leetcode.com/problems/reverse-integer/solutions/4863450/)

---

```
class Solution {
    /**
     * @param Integer $x
     * @return Integer
     */
	const INT_MIN = -2147483647;
    const INT_MAX = 2147483647;
    function reverse($x) {
        $str = (int) strrev(abs($x));
        
        if($x < 0)
        	$str *= -1;
        
        if($str > self::INT_MAX || $str < self::INT_MIN)
        	return 0;
        
        return $str;
    }
}
```