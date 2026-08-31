# PHP Binary search

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3497563/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3497563/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```PHP
class Solution
{
    /**
     * @param Integer[] $obstacles
     * @return Integer[]
     */
    function longestObstacleCourseAtEachPosition($obstacles)
    {
        $s = [0];
        $res = array_fill(0, count($obstacles), 0);
        foreach ($obstacles as $i => $o) {
            if (end($s) <= $o) {
                $res[$i] = count($s);
                $s[] = $o;
                continue;
            }
            $r = count($s) - 1;
            $l = 0;
            do {
                $k = ($l + $r) >> 1;
                if ($s[$k] > $o) {
                    $r = $k;
                } else {
                    $l = $k + 1;
                }
            } while ($l < $r);
            $res[$i] = $l;
            $s[$l] = $o;
        }

        return $res;
    }
}

```