# 100% beats

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/5743896/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/5743896/)

---

![yiii.png](./images/0.png)

# Code
```java []
class Solution {
    public String removeDigit(String number, char digit) {
        int len = number.length();
        int position = -1;
        char prev = '-';
        int i = 0;

        for (i = 0; i < len; i++) {
            char current = number.charAt(i);
            if (prev == digit) {
                position = i - 1;
                if (i < (len - 1)) {
                    if ((int) current > (int) prev) {
                        break;
                    }
                }
            }
            prev = current;
        }
        
        if (i == len && prev == digit) {
            position = i - 1;
        }
        
        return number.substring(0, position) + number.substring(position + 1, len);
    }
}
```
```C++ []
class Solution {
public:
    string removeDigit(string number, char digit) {
        int len = number.length();
        int position = -1;
        char prev = '-';
        int i = 0;

        for (i = 0; i < len; i++) {
            char current = number[i];
            if (prev == digit) {
                position = i - 1;
                if (i < (len - 1)) {
                    if (current > prev) {
                        break;
                    }
                }
            }
            prev = current;
        }
        
        if (i == len && prev == digit) {
            position = i - 1;
        }
        
        return number.substr(0, position) + number.substr(position + 1, len);
    }
};
```
```PHP []
class Solution {
    public function removeDigit($number, $digit) {
        $len = strlen($number);
        $position = -1;
        $prev = '-';
        $i = 0;

        for ($i = 0; $i < $len; $i++) {
            $current = $number[$i];
            if ($prev === $digit) {
                $position = $i - 1;
                if ($i < ($len - 1)) {
                    if ((int) $current > (int) $prev) {
                        break;
                    }
                }
            }
            $prev = $current;
        }
        
        if ($i === $len && $prev === $digit) {
            $position = $i - 1;
        }
        
        return substr($number, 0, $position) . substr($number, $position + 1, $len);
    }
}
```
```Typescript []
function removeDigit(number: string, digit: string): string {
    const len = number.length;
    let position = -1;
    let prev = null;
    let i = 0;
    for (i = 0; i < len; i += 1) {
        const current = number.charAt(i);
        if (prev === digit) {
            position = i - 1;
            if (i < (len - 1)) {
                if (Number(current) > Number(prev)) {
                    break;
                }
            }
        }
        prev = current;
    }
    if (i === len && prev === digit) {
        position = i - 1;
    }
    return number.substring(0, position) + number.substring(position + 1, len);
};
```