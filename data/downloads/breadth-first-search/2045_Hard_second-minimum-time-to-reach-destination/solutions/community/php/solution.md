# Solution Second Minimum Time to Reach Destination

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5548274/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5548274/)

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
    private $adj;

    public function secondMinimum($n, $edges, $time, $change) {
        $this->adj = array_fill(0, $n + 1, []);

        $firstArrivedTime = PHP_INT_MAX;

        foreach ($edges as $e) {
            $this->adj[$e[0]][] = $e[1];
            $this->adj[$e[1]][] = $e[0];
        }

        $q = new SplQueue();
        $q->enqueue([1, 0]);

        $visTime = array_fill(0, $n + 1, PHP_INT_MAX);
        $visCount = array_fill(0, $n + 1, 0);

        while (!$q->isEmpty()) {
            $p = $q->dequeue();
            $node = $p[0];
            $t = $p[1];

            foreach ($this->adj[$node] as $next) {
                $t2 = $t;
                $isRed = (($t2 / $change) % 2) == 1;

                if ($isRed) {
                    $t2 += $change - ($t2 % $change);
                }
                
                $t2 += $time;

                if ($next == $n && $firstArrivedTime == PHP_INT_MAX) {
                    $firstArrivedTime = $t2;
                }

                if ($next == $n && $t2 > $firstArrivedTime) {
                    return $t2;
                }

                if ($visTime[$next] != $t2 && $visCount[$next] <= 1) {
                    $visTime[$next] = $t2;
                    $visCount[$next]++;
                    $q->enqueue([$next, $t2]);
                }
            }
        }

        return -1;
    }
}

```