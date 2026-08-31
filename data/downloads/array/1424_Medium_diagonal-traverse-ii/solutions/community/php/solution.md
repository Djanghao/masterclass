# [PHP] A simple three-liner and an optimized BFS solution

**Author:** reveron-n
**Votes:** 1
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/603901/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/603901/)

---

Here's a three-liner optimized for PHP 7.3. Although written in a fancy way, it utilizes the same idea as described in most other posts.

```
class Solution
{
    public function findDiagonalOrder($i)
    {
        for ($r = 0; $r < count($i); $r++)
            for ($c = 0; isset($i[$r][$c]); $d[$r+$c][] = $i[$r][$c++]);
        return array_merge(...array_map('array_reverse', $d));
    }
}
```

And here is another BFS solution that also optimized for PHP 7.3. So far it is the fastest PHP implementation.

```
class Solution
{
    public function findDiagonalOrder($nums)
    {
        $queue = [[0, 0]];
        $result = [];
        $count = count($nums);
        $counts = array_map('count', $nums);

        for ($i = 0; isset($queue[$i]); $i++) {
            [$row, $col] = $queue[$i];
            unset($queue[$i]);

            $result[] = $nums[$row][$col];

            if (!$col && $row+1 < $count) {
                $queue[] = [$row+1, 0];
            }

            if ($col+1 < $counts[$row]) {
                $queue[] = [$row, $col+1];
            }
        }

        return $result;
    }
}
```