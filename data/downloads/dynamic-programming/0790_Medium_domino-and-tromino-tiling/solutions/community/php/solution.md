# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/6071620/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/6071620/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function numTilings($n) {
        /*  n   pos
            0   0
            1   1
            2   2
            3   5
            4   11
            5   24
            ...
            ==> Seems that [n] = 2*[n-1] + [n-3] for n>3.
        */
        $memo = [
            0 => 0,
            1 => 1,
            2 => 2,
            3 => 5,
        ];
        for ($i=4; $i<=$n; $i++) {
            $memo[$i] = (2*$memo[$i-1] + $memo[$i-3]) % (1e9+7);
        }
        return $memo[$n];
    }
}
```