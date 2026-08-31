# ✅ beats 100% explained + in 7 languages + xor solution 👍

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number/solutions/4756650/](https://leetcode.com/problems/missing-number/solutions/4756650/)

---

Take the sum formula from here
https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
the missing number is
$$\\frac{n * (n + 1)}{2} - sum$$

where *n* is the length of *nums*
so we need to calculate the *sum* and the complexity is O(n)

Here is the code. (Pay attention to the float to int conversion, in some languages, it can produce the wrong result)

```java []
class Solution {
    public int missingNumber(int[] nums) {
        int sum = 0;
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            sum += nums[i];
        }

        return (n * (n + 1)) / 2 - sum;
    }
}
```
``` c []
int missingNumber(int* nums, int numsSize) {
    int sum = 0;
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
    }

    return ((1 + numsSize) / 2.0) * numsSize - sum;
}
```
``` javascript []
var missingNumber = function(nums) {
    var n = nums.length;
    return ((n + 1) / 2) * n - _.sum(nums);
};
```
```python []
class Solution(object):
    def missingNumber(self, nums):
        n = len(nums)
        return (n * (1 + n)) / 2 - sum(nums)
        
```
```golang []
func missingNumber(nums []int) int {
    sum := 0
    n := len(nums)
    for i := 0; i < n; i++ {
        sum += nums[i]
    }

    return (n * (n + 1)) / 2 - sum
}
```
``` php []
class Solution {
    function missingNumber($nums) {
        $n = count($nums);
        return ($n * ($n + 1)) / 2 - array_sum($nums);
    }
}
```
``` racket []
(define (missing-number nums)
    (let ([n (length nums)]
          [sum (apply + nums)])
      (- (* (/ (add1 n) 2) n) sum)))
```

and *xor* solution in python
``` python
class Solution(object):
    def missingNumber(self, nums):
        return functools.reduce(operator.xor, range(0, len(nums) + 1)) ^ functools.reduce(operator.xor, nums)
        
```
in the xor solution we take into account that 
1 ^ 1 ^ 2 ^ 2 ^ 3 ^ 4 ^ 4 = 3
the result is always the number with odd count (you see 3 is present only once)
therefore we need to double the items in *nums*. to do so we calculate xor of the full [0, n] sequence and xor it with *nums* sequence


like \uD83D\uDC4D

