# Teleport to the last simulation

**Author:** phg_pih
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5724958/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5724958/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $chalk
     * @param Integer $k
     * @return Integer
     */
    function chalkReplacer($chalk, $k) {
        $sum = array_sum($chalk);
        $remain = $k % $sum;
        if ($remain === 0) return 0;
        
        $p = 0;
        $ch = $chalk[$p];
        while ($remain >= $ch) {
            $remain -= $ch;
            $p++;
            if (!isset($chalk[$p])) $p = 0;
            $ch = $chalk[$p];
        }

        return $p;
    }
}
```
```javascript []
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = chalk.reduce((a, b) => a + b, 0);
    let remain = k % sum;
    if (remain === 0) return 0;

    p = 0;
    ch = chalk[p];
    while (remain >= ch) {
        remain -= ch;

        p++;
        if (chalk[p] === undefined) p = 0;
        ch = chalk[p];
    }

    return p;
};
```
```python3 []
class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        listSum = sum(chalk)
        remain = k % listSum
        if remain == 0:
            return 0

        p = 0
        ch = chalk[p]
        while (remain >= ch):
            remain -= ch

            p += 1
            if chalk[p] is None:
                p = 0
            ch = chalk[p]
        
        return p
```