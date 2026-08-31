# PHP binary search

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3821104/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3821104/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```PHP
class Solution
{

    /**
     * @param int[] $dist
     */
    function minSpeedOnTime(array $dist, float $hour): int
    {
        $n = count($dist);
        $h = ceil($hour);
        if ($n > $h) return -1;
        $max = max($dist);
        if ($n == $h && $n > $hour) {
            $max = max($max, end($dist) / ($hour - floor($hour)));
        }

        $min = max(1, floor(array_sum($dist) / $hour));

        while ($min < $max) {
            $k = ($min + $max) >> 1;
            if ($this->getTime($dist, $k) > $hour) {
                $min = $k + 1;
            } else {
                $max = $k;
            }
        }

        return $min;
    }

    /**
     * @param int[] $dist
     */
    function getTime(array $dist, int $speed): float
    {
        $time = 0.0;
        foreach ($dist as $d) {
            $time = ceil($time) + $d / $speed;
        }

        return $time;
    }
}

```