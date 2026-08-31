# Solution Maximum Number of Events That Can Be Attended

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/4934644/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/4934644/)

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
     * @param Integer[][] $events
     * @return Integer
     */
    function maxEvents($events) {
        $count = 0;
        $i = 0;
        usort($events, function($a, $b) {
            return $a[0] - $b[0] ?: $a[1] - $b[1];
        });

        $pq = new SplPriorityQueue();
        $pq->setExtractFlags(SplPriorityQueue::EXTR_DATA);

        for ($day = 1; $day <= 100000; $day++) {
            while ($i < count($events) && $events[$i][0] == $day) {
                $pq->insert($events[$i][1], -$events[$i][1]);
                $i++;
            }
            while (!$pq->isEmpty() && $pq->top() < $day) {
                $pq->extract();
            }
            if (!$pq->isEmpty()) {
                $pq->extract();
                $count++;
            }
        }
        return $count;
    }
}

```