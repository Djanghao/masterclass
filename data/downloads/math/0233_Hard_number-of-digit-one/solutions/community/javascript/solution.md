# 5 lines solution using recursion with explanation

**Author:** TommyFu
**Votes:** 19
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/64418/](https://leetcode.com/problems/number-of-digit-one/solutions/64418/)

---

The concept is count 1s in current level, recursively do it until the number is smaller than 10.

**Javascript Solution**

    var countDigitOne = function(n) {
        if(n <= 0) return 0;
        if(n < 10) return 1;
        var base = Math.pow(10, n.toString().length - 1);
        var answer = parseInt(n / base);
        return countDigitOne(base - 1) * answer + (answer === 1 ? (n - base + 1) : base) + countDigitOne(n % base);
    };

For example '8192':

1-999 -> countDigitOne(999)

1000-1999 -> 1000 of 1s + countDigitOne(999)

2000-2999 -> countDigitOne(999)

.

.

7000-7999 -> countDigitOne(999)

8000-8192 -> countDigitOne(192)

Count of 1s : **countDigitOne(999)*8 + 1000 + countDigitOne(192)**

**Noticed that**, if the target is '1192':

Count of 1s : **countDigitOne(999)*1 + (1192 - 1000  + 1) + countDigitOne(192)**

 (1192 - 1000  + 1) is the 1s in thousands from 1000 to 1192.



**Same codes as above, maybe much easier to understand.**

    var countDigitOne = function(n) {
        if(n <= 0){
            return 0;
        }else if(n < 10){
            return 1;
        }
        var len = n.toString().length;
        var base = Math.pow(10, len - 1);
        var answer = parseInt(n / base);
        var remainder = n % base;
        var oneInBase = 0;
        if(answer === 1){
            oneInBase = n - base + 1;
        }else{
            oneInBase = base;
        }
        return countDigitOne(base - 1) * answer + oneInBase + countDigitOne(remainder);
    };