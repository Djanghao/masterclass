# recursive solution

**Author:** kooroshkakaei
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/3813817/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/3813817/)

---

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countNumbersWithUniqueDigits($n) {
        return self::rec($n);
    }
    private static function rec($n)
    {
        if($n==0)
            return 1;
        if($n==1)
            return 10;
        $ret=81;
        $bound=11-$n;
        for($i=8;$i>=$bound;$i--)
            $ret*=$i;
        return $ret+self::rec($n-1);            

    }
}
```