# PHP union find

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3700908/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3700908/)

---

# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n*m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```PHP
class Solution
{

    /**
     * @param Integer[][] $cells
     */
    function latestDayToCross(int $row, int $col,  array $cells): int
    {
        $a = array_fill(0, $row + 1, array_fill(0, $col + 1, 0));
        for ($i = 1; $i < $row + 1; $i++) {
            $a[$i][0] = 1;
            $a[$i][$col + 1] = 2;
        }
        $g = range(0, 2);
        for ($d = 0; $g[2] === 2; $d++) {
            [$i, $j] = $cells[$d];
            $groups = array_filter(
                [
                    $a[$i - 1][$j - 1], $a[$i - 1][$j], $a[$i - 1][$j + 1],
                    $a[$i    ][$j - 1],                 $a[$i    ][$j + 1],
                    $a[$i + 1][$j - 1], $a[$i + 1][$j], $a[$i + 1][$j + 1]
                ]);
            foreach ($groups as $i_ => $group) {
                $groups[$i_] = $this->getG($g, $group);
            }
            if ($groups) {
                $mg = min($groups);
                foreach ($groups as $group) {
                    $g[$group] = $mg;
                }
                $a[$i][$j] = $mg;
            } else {
                $mg = count($g);
                $a[$i][$j] = $g[$mg] = $mg;
            }

        }

        return $d - 1;
    }

    function getG(array $g, int $i)
    {
        while ($g[$i] !== $i) {
            $i = $g[$i] = $g[$g[$i]];
        }
        return $i;
    }
}

```