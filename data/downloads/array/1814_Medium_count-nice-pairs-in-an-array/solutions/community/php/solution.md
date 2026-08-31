# fast PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4316613/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4316613/)

---

# Code
```PHP
class Solution
{
    /**
     * @param int[] $nums
     */
    function countNicePairs(array $nums):int
    {
        $h = [];
        $n = count($nums);

        for ($i = 0; $i < $n; $i++) {
            $ind = $nums[$i] - $this->rev($nums[$i]);
            $h[$ind] = 1 + $h[$ind] ?? 0;
        }
        $count = 0;
        foreach ($h as $c) {
            $count += $c * ($c - 1) / 2;
            $count %= 7 + 10e8;
        }

        return $count;
    }

    function rev(int $value): int
    {
        $rev = 0;
        while ($value) {
            $rev = $rev * 10 + $value % 10;
            $value = intdiv($value, 10);
        }
        return $rev;
    }
}

```