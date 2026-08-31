# [PHP] Easy solution faster than 100%

**Author:** rozinko
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-square/solutions/931803/](https://leetcode.com/problems/valid-square/solutions/931803/)

---

```
function validSquare($p1, $p2, $p3, $p4) {
        $points = [$p1, $p2, $p3, $p4];
        $len = [];

        for ($i = 0; $i < count($points) - 1; $i++)
            for ($j = $i + 1; $j < count($points); $j++)
                $len[] = sqrt(pow($points[$i][0] - $points[$j][0], 2) + pow($points[$i][1] - $points[$j][1], 2));

        return count(array_unique($len)) == 2 && array_search(0, $len) === false;
    }
```