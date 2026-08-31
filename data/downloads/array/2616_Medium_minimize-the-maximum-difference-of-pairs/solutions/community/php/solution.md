# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3887182/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3887182/)

---

# Code
```PHP
class Solution
{
    /**
     * @param int[] $nums
     */
    function minimizeMax(array $nums, int $p): int
    {
        sort($nums);
        $l = 0;
        $r = end($nums) - reset($nums);

        while ($l < $r) {
            $k = ($l + $r) >> 1;
            if ($this->canFormPairs($nums, $k, $p)) {
                $r = $k;
            } else {
                $l = $k + 1;
            }
        }
        return $l;
    }

    /**
     * @param int[] $nums
     */
    function canFormPairs(array $nums, int $mid, int $p): bool
    {
        for ($c = 0, $i = 0; $i < count($nums) - 1 && $c < $p; $i++) {
            if ($nums[$i + 1] - $nums[$i] <= $mid) {
                $c++;
                $i++;
            }
        }
        return $c >= $p;
    }
}

```