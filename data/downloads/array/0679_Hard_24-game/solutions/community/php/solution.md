# Beating 100% users in Runtime & Memory using PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/24-game/solutions/5489911/](https://leetcode.com/problems/24-game/solutions/5489911/)

---

# Code
```
class Solution {
    function judgePoint24($cards) {
        return self::canGet24($cards);
    }

    private static function compute($a, $b) {
        return [
            $a + $b,
            $a - $b,
            $b - $a,
            $a * $b,
            $b != 0 ? $a / $b : null,
            $a != 0 ? $b / $a : null
        ];
    }

    private static function canGet24($nums) {
        if (count($nums) == 1) {
            return abs($nums[0] - 24) < 1e-6;
        }

        for ($i = 0; $i < count($nums); $i++) {
            for ($j = 0; $j < count($nums); $j++) {
                if ($i != $j) {
                    $nextNums = [];
                    for ($k = 0; $k < count($nums); $k++) {
                        if ($k != $i && $k != $j) {
                            $nextNums[] = $nums[$k];
                        }
                    }
                    foreach (self::compute($nums[$i], $nums[$j]) as $res) {
                        if ($res !== null) {
                            $nextNums[] = $res;
                            if (self::canGet24($nextNums)) {
                                return true;
                            }
                            array_pop($nextNums);
                        }
                    }
                }
            }
        }
        return false;
    }
}
```