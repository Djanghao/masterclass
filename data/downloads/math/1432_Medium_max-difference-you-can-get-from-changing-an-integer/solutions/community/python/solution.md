# [Python] Clean greedy solution with explanation

**Author:** C0R3
**Votes:** 44
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/608804/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/608804/)

---

We need to maximize the difference of two numbers ```a``` and ```b```. Therefore we should maximize ```a``` and minimize ```b```.

To maximize ```a``` we need to find the left-most digit in it that is not a 9 and replace all occurences of that digit with 9.
9 is the maximum possible digit and the more left we find a candidate for replacement the bigger the result gets.

To minimize ```b``` we need to find the left-most digit in it that is not a 0 and replace all occurences of that digit with 0.
But we have to watch out: We are not allowed to convert the first digit to a 0 as we should not create a number with trailing zeroes.
Therefore we can only replace the first digit with a 1. All other digits can be replaced with a 0 if they are not a 1 as that would also replace the trailing 1 with a 0.

```python
class Solution:
    def maxDiff(self, num: int) -> int:
        a = b = str(num)

        for digit in a:
            if digit != "9":
                a = a.replace(digit, "9")
                break
        
        if b[0] != "1":
            b = b.replace(b[0], "1")
        else:
            for digit in b[1:]:
                if digit not in "01":
                    b = b.replace(digit, "0")
                    break
        
        return int(a) - int(b)
```