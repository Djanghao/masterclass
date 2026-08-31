# my solution in 7 languages (explained)

**Author:** codeninja8
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4804738/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4804738/)

---

odd numbers are always have '1' at the end of the string

algorithm
1. count occurance of '1' characters
2. put '1'-s first but save the last '1' for the end
3. put all '0'
4. put '1' in the end of the string (it said that there is at least one '1' in the string)

``` java []
class Solution {
    public String maximumOddBinaryNumber(String s) {
        int count1 = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '1')
                count1++;
        }

        // use StringBuilder because it's faster
        StringBuilder sb = new StringBuilder(s.length());
        for (int i = 0; i < s.length() - 1; i++) {
            if (count1 > 1) {
                sb.append('1');
                count1--;
            } else {
                sb.append('0');
            }
        }
        sb.append('1');

        return sb.toString();

    }
}
```
``` javascript []
var maximumOddBinaryNumber = function(s) {
    var count1 = s.split('').filter(val => val == '1').length;

    return '1'.repeat(count1 - 1) + '0'.repeat(s.length - count1) + '1';
};
```
``` python []
class Solution(object):
    def maximumOddBinaryNumber(self, s):
        count1 = s.count('1')
        return '1' * (count1 - 1) + '0' * (len(s) - count1) + '1'       
```
```c []
char* maximumOddBinaryNumber(char* s){
    int len = 0;
    int count1 = 0;
    // count the length and '1' in the same loop
    while (*s != 0) {
        if (*s == '1') {
            count1++;
        }
        len++;
        s++;
    }

    // allocate memory for the result (we could reuse s though)
    char *res = (char*) malloc((len + 1)*sizeof(char));

    for (int i = 0; i < len - 1; i++) {
        if (count1 > 1) {
            res[i] = '1';
            count1--;
        } else {
            res[i] = '0';
        }
    }

    res[len - 1] = '1';
    res[len] = 0; // put zero in the end of the strng since the string in C end with zero

    return res;
}
```
```golang []
func maximumOddBinaryNumber(s string) string {
    count1 := 0
    for i := 0; i < len(s); i++ {
        if (s[i] == '1') {
            count1++;
        }
    }

    return strings.Repeat("1", count1 - 1) + strings.Repeat("0", len(s) - count1) + "1"
}
```
```php []
class Solution {
    function maximumOddBinaryNumber($s) {
        $count1 = substr_count($s, '1');

        return str_repeat('1', $count1 - 1) . str_repeat('0', strlen($s) - $count1) . '1';
    }
}
```
``` racket []
; in racket I just filter '1' and '0' and then concat them togather
(define (maximum-odd-binary-number s)
  (let ([ones (filter (lambda (x) (eq? #\\1 x)) (string->list s))]
         [zeros (filter (lambda (x) (eq? #\\0 x)) (string->list s))])
    (string-append (list->string (cdr ones)) (list->string zeros) "1")))
```
