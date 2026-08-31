# Lexicographically Smallest String After a Swap

**Author:** akhilk47
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5495587/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5495587/)

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

    /**
     * @param String $s
     * @return String
     */
    function getSmallestString($s) { 
        for($i=1;$i<strlen($s);$i++){
            $n1=intval($s[$i]);
            $n2=intval($s[$i-1]);
            if($n1%2==$n2%2&&($n1<$n2))
            {
                $s[$i-1]=strval($n1);
                $s[$i]=strval($n2);
                 break;
            }
        }
        return $s;
    }
}
```