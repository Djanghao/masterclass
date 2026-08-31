# PHP solution

**Author:** punkundead
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3523871/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3523871/)

---

# Code
```
class Solution
{

    private $a = [];
    private $h = [];

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxScore($nums)
    {
        $max = 0;
        $this->a = array_fill(0, count($nums) / 2, 0);
        $pairs = array_fill(0, count($nums) / 2, [0, 0]);
        sort($nums);
        foreach ($this->walk($nums, 0, 0, $pairs) as $score) {
            $max = max($max, $score);
        }

        return $max;
    }

    function walk(&$nums, $p, $mask, &$pairs)
    {
        if ($p === count($nums) / 2) {
            yield $this->calc();
            return;
        }

        for ($i = 0; $nums[$i] === 0; $i++) {
        }
        $mask ^= 1 << $i;
        $pairs[$p][0] = $nums[$i];
        $nums[$i] = 0;
        $prev = 0;
        for ($j = $i + 1; $j < count($nums); $j++) {
            if (!$nums[$j]) continue;
            if ($nums[$j] === $prev) continue;
            $prev = $nums[$j];
            $pairs[$p][1] = $nums[$j];
            $nums[$j] = 0;
            $mask ^= 1 << $j;
            $this->toA($pairs);

            $key = "{$mask}:".json_encode($this->a);
            if (empty($this->h[$key])) {
                yield from $this->walk($nums, $p + 1, $mask, $pairs);
                $this->h[$key] = 1;
            }
            $mask ^= 1 << $j;

            $nums[$j] = $pairs[$p][1];
        }

        $nums[$i] = $pairs[$p][0];
        $pairs[$p] = [0, 0];
    }

    function toA($pairs){
        foreach ($pairs as $i => [$x, $y]) {
            $this->a[$i] = $x ? $this->gcd($x, $y) : 0;
        }

        sort($this->a);
    }

    function calc()
    {

        $s = 0;
        foreach ($this->a as $i => $v) {
            $s += $i * $v + $v;
        }

        return $s;
    }

    function gcd($a, $b)
    {
        do {
            [$a, $b] = [$b, $a % $b];
        } while ($b);

        return $a;
    }

}
```