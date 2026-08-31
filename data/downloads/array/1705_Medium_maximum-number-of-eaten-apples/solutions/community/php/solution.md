# Solution Maximum Number of Eaten Apples

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/5327047/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/5327047/)

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
    public function eatenApples($apples, $days) {
        $n = count($apples);
        $pq = new SplPriorityQueue();
        $pq->setExtractFlags(SplPriorityQueue::EXTR_BOTH);
        $appleCount = 0;

        for ($i = 0; $i < $n || !$pq->isEmpty(); $i++) {
            if ($i < $n) {
                if ($apples[$i] > 0) {
                    $pq->insert(['expiration' => $i + $days[$i], 'count' => $apples[$i]], -($i + $days[$i]));
                }
            }

            while (!$pq->isEmpty() && $pq->top()['data']['expiration'] <= $i) {
                $pq->extract();
            }

            if (!$pq->isEmpty()) {
                $top = $pq->extract();
                $expiration = $top['data']['expiration'];
                $count = $top['data']['count'];
                if ($count > 1) {
                    $pq->insert(['expiration' => $expiration, 'count' => $count - 1], -$expiration);
                }
                $appleCount++;
            }
        }

        return $appleCount;
    }
}

```