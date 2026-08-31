# PHP rules (:

**Author:** novomolot
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/4259658/](https://leetcode.com/problems/count-good-numbers/solutions/4259658/)

---

# Intuition
split on multipliers

# Approach
calculate variantd for event and odd input value

# Complexity
- Time complexity:
O(n)...O(1)

- Space complexity:
...???

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */

     /* 
    // Optimistic function variant
    function countGoodNumbers($n) {
        
        if ($n == 1) return 5;

        $multModClosure = static function ($m, $k) {
            return ($m * $k) % (10**9 + 7);
        };
        
        $m = 5;
        for ($i=1; $i <$n; $i++) {
            $k = ($i % 2 === 0) ? 5 : 4;
            $m = $multModClosure($m, $k);
        }

        return $m;
    }

    */


    /**
     * @param Integer $n
     * @return Integer
     */
    function countGoodNumbers($n) {
        if ($n == 1) return 5;

        return self::getByN(1,$n);
    }
    
    public static function multMod($m, $k) {
        return ($m * $k) % (10**9 + 7);
    }

    const knownMaxResults = [
            200000000000000 => 803455355,
            20000000000000 => 392868233,
            2000000000000 => 985685123,
            200000000000 => 794550242,
            20000000000 => 880826810,
            2000000000 => 767857146,
            200000000 => 374132355,
            20000000 => 282593916,
            10000000 => 924188482,
            50 => 564908303,
            4 => 400,
        ];

    public static function getByN($m,$n) {
        if ($n===0) return $m;

        $isMaxFound = false;
        foreach(Solution::knownMaxResults as $maxKnownN=>$result) {
            if ($n>=$maxKnownN) {
                $isMaxFound = true;
                break;
            }
        }

        if (!$isMaxFound) {
            for ($i=0; $i <$n; $i++) {
                $k = ($i % 2 === 0) ? 5 : 4;
                $m = self::multMod($m, $k);
            }
            return $m;
        }

        if ($isMaxFound) {
            // big number process
            $result = Solution::knownMaxResults[$maxKnownN];
            $kX = floor($n / $maxKnownN);
            for ($i=0;$i<$kX;$i++) {
                $m = self::multMod($m, $result);
            }

            $n = $n - $kX * $maxKnownN;
            return self::getByN($m,$n);
        }
    }
}

```