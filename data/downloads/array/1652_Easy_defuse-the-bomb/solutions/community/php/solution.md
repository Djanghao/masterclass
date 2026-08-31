# Brute Force

**Author:** phg_pih
**Votes:** 0
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6058884/](https://leetcode.com/problems/defuse-the-bomb/solutions/6058884/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $code
     * @param Integer $k
     * @return Integer[]
     */
    function decrypt($code, $k) {
        $length = count($code);
        $ans = array_fill(0, $length, 0);
        if ($k == 0) return $ans;

        for ($i=0; $i<$length; $i++) {
            $c = $k;
            while (($k > 0 && $c > 0) || ($k < 0 && $c < 0)) {
                $index = $c + $i;
                if ($k > 0) {
                    $ans[$i] += $index < $length ? $code[$index] : $code[abs($length - $index)];
                    $c--;
                    continue;
                }
                
                $ans[$i] += $index < 0 ? $code[$length + $index] : $code[$index];
                $c++;
            }
        }

        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    var ans = new Array(code.length).fill(0);
    if (k === 0) return ans;

    for (let i=0; i<code.length; i++) {
        c = k;
        while ((k > 0 && c > 0) || (k < 0 && c < 0)) {
            let index = i + c;
            if (k > 0) {
                ans[i] += (index < code.length) ? code[index] : code[Math.abs(code.length - index)];
                c--;
                continue;
            }

            ans[i] += (index < 0) ? code[code.length + index] : code[index];
            c++;
        }
    }

    return ans;
};
```
```python3 []
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        length = len(code)
        ans = [0] * length
        if k == 0:
            return ans
        
        for i in range(length):
            c = k
            while ((k > 0 and c > 0) or (k < 0 and c < 0)):
                index = i + c

                if k > 0:
                    if index < length:
                        ans[i] += code[index]
                    else:
                        ans[i] += code[abs(length - index)]

                    c -= 1
                    continue

                if index < 0:
                    ans[i] += code[length + index]
                else:
                    ans[i] += code[index]

                c += 1
        
        return ans
```