# 1046 | PHP solutions using sort and priority queue

**Author:** Sporkyy
**Votes:** 3
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/296057/](https://leetcode.com/problems/last-stone-weight/solutions/296057/)

---

The two solutions seem to be pretty equivalent speed-wise.

Here's a sort-based solution.

```
class Solution
{

    /**
     * @param Integer[] $stones
     * @return Integer
     */
    function lastStoneWeight($stones)
    {
        while (1 < count($stones)) {
            rsort($stones, SORT_NUMERIC);
            $outcome = array_shift($stones) - array_shift($stones);
            if (0 < $outcome) array_push($stones, $outcome);
        }
        return $stones[0] ?? 0;
    }
}
```

And here's a priority queue-based solution.

```
class Solution
{

    /**
     * @param Integer[] $stones
     * @return Integer
     */
    function lastStoneWeight($stones)
    {
        $pq = new SplPriorityQueue();
        $pq->setExtractFlags(SplPriorityQueue::EXTR_DATA);
        foreach ($stones as $stone) $pq->insert($stone, $stone);
        while (1 < $pq->count()) {
            $outcome = $pq->extract() - $pq->extract();
            if (0 < $outcome) $pq->insert($outcome, $outcome);
        }
        return $pq->current() ?? 0;
    }
}
```