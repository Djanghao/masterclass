# PHP | Hashmap ('Design Hit Counter')

**Author:** alexander_d
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/962838/](https://leetcode.com/problems/design-hit-counter/solutions/962838/)

---

```
class HitCounter
{
    const TIME_INTERVAL = 300;

    protected $timestampHitCountMap;

    /**
     * Initialize your data structure here.
     */
    public function __construct()
    {
        $this->timestampHitCountMap = [];
    }
  
    /**
     * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
     * @param Integer $timestamp
     * @return NULL
     */
    public function hit(int $timestamp): void
    {
        $this->timestampHitCountMap[$timestamp]++;
    }
  
    /**
     * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
     * @param Integer $timestamp
     * @return Integer
     */
    public function getHits(int $timestamp): int
    {
        $result = 0;

        foreach ($this->timestampHitCountMap as $timestampHit => $count) {
            if (($timestamp - $timestampHit) >= self::TIME_INTERVAL) {
                continue;
            }

            $result += $count;
        }

        return $result;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * $obj = HitCounter();
 * $obj->hit($timestamp);
 * $ret_2 = $obj->getHits($timestamp);
 */
```