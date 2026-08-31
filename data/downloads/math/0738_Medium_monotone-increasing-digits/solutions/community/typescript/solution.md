# easy-peasy

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/5773414/](https://leetcode.com/problems/monotone-increasing-digits/solutions/5773414/)

---

# Code
```cpp []
class Solution {
public:
    int monotoneIncreasingDigits(int n) {
        string str = std::to_string(n);
        int len = str.length();
        int prev = 10;
        string result = "";
        int repeat9 = 0;

        for (int i = len - 1; i >= 0; i--) {
            int digit = str[i] - '0';
            if (digit <= prev) {
                prev = digit;
                result = std::to_string(prev) + result;
            } else {
                prev = digit - 1;
                repeat9 = len - 1 - i;
                result = (i == 0 && prev == 0) ? "" : std::to_string(prev);
            }
        }
        for (int i = 0; i < repeat9; i++) {
            result += '9';
        }
        return std::stoi(result);
    }
};


```
```Typescript []
function monotoneIncreasingDigits(n: number): number {
    const str =n.toString();
    const len = str.length;
    let prev = 10;
    let result = '';
    let repeat9 = 0;
    for (let i = len - 1; i >= 0; i -= 1) {
        const digit = Number(str.charAt(i));
        if (digit <= prev) {
            prev = digit;
            result = prev.toString() + result;
        }
        else {
            prev = digit - 1;
            repeat9 = len - 1 - i;
            result = i === 0 && prev === 0 ? '' : prev.toString();
        }
    }
    for (let i = 0; i < repeat9; i += 1) {
        result += '9';
    }
    return Number(result);
};
```
```PHP []
class Solution {

    function monotoneIncreasingDigits($n) {
        $str = (string)$n;
        $len = strlen($str);
        $prev = 10;
        $result = '';
        $repeat9 = 0;

        for ($i = $len - 1; $i >= 0; $i--) {
            $digit = (int)$str[$i];
            if ($digit <= $prev) {
                $prev = $digit;
                $result = $prev . $result;
            } else {
                $prev = $digit - 1;
                $repeat9 = $len - 1 - $i;
                $result = ($i === 0 && $prev === 0) ? '' : $prev;
            }
        }

        for ($i = 0; $i < $repeat9; $i++) {
            $result .= '9';
        }

        return (int)$result;
    }
}
```
```Python []
class Solution(object):
    def monotoneIncreasingDigits(self, n):
        """
        :type n: int
        :rtype: int
        """
        str_n = str(n)
        length = len(str_n)
        prev = 10
        result = ''
        repeat9 = 0
        
        for i in range(length - 1, -1, -1):
            digit = int(str_n[i])
            if digit <= prev:
                prev = digit
                result = str(prev) + result
            else:
                prev = digit - 1
                repeat9 = length - 1 - i
                result = '' if i == 0 and prev == 0 else str(prev)
        
        result += '9' * repeat9
        return int(result)
```