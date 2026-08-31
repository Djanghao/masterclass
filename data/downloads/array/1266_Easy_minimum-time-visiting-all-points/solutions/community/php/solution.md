# PHP | Linear ('Minimum Time Visiting All Points')

**Author:** alexander_d
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/882768/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/882768/)

---

```
class Solution
{
    /**
     * @param Integer[][] $points
     *
     * @return Integer
     */
    public function minTimeToVisitAllPoints(array $points): int
    {
        $result = 0;
        
        $pointsCount = count($points);
        for ($i = 0; $i < $pointsCount - 1; $i++) {            
            $currentPoint = $points[$i];
            $nextPoint = $points[$i + 1];
            $xDelta = abs($nextPoint[0] - $currentPoint[0]);
            $yDelta = abs($nextPoint[1] - $currentPoint[1]);
            $result += ($xDelta > $yDelta) ? $xDelta : $yDelta;
        }
        
        return $result;
    }
}
```