# Solution Minimize Deviation in Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/5260772/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/5260772/)

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
    public function minimumDeviation($nums) {
        $n = count($nums);
        $pq = new SplPriorityQueue();
        $pq->setExtractFlags(SplPriorityQueue::EXTR_BOTH);
        $maxi = PHP_INT_MIN;
        $mini = PHP_INT_MAX;

        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] % 2 != 0) {
                $nums[$i] *= 2;
            }
            $maxi = max($maxi, $nums[$i]);
            $mini = min($mini, $nums[$i]);
            $pq->insert($nums[$i], $nums[$i]);
        }

        $ans = $maxi - $mini;

        while (!$pq->isEmpty() && $pq->top()['data'] % 2 == 0) {
            $top = $pq->extract()['data'];

            $ans = min($ans, $top - $mini);

            $top /= 2;
            $mini = min($mini, $top);
            $pq->insert($top, $top);
        }

        $ans = min($ans, $pq->top()['data'] - $mini);
        return $ans;
    }
}

```