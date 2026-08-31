# Python Solution using Sorting

**Author:** anCoderr
**Votes:** 30
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1931017/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1931017/)

---

Since we need the largest number, what we want is basically to have the larger digits upfront and then the smaller ones. But we are given a parity condition that we need to comply to. We are allowed to swap odd digits with odd ones and even with even ones. So we simply maintain two arrays with odd and even digits. The we construct out answer by taking values from the odd or even arrays as per the parity of ith index. 

**STEPS**
1. First make a array with the digits from nums.
2. Then we traverse through the array and insert odd and even values into `odd` and `even` lists.
3. We sort these `odd` and `even` lists.
4. Then traverse from 0 to n, at each step we check for the parity at that index. For even parity we take the largest value from even array and for odd parity we take from odd array. **WE TAKE THE LARGEST VALUE AS A GREEDY CHOICE TO MAKE THE RESULTING NUMBER LARGER.**
5. Return the result.

**CODE**
```
class Solution:
    def largestInteger(self, num: int):
        n = len(str(num))
        arr = [int(i) for i in str(num)]
        odd, even = [], []
        for i in arr:
            if i % 2 == 0:
                even.append(i)
            else:
                odd.append(i)
        odd.sort()
        even.sort()
        res = 0
        for i in range(n):
            if arr[i] % 2 == 0:
                res = res*10 + even.pop()
            else:
                res = res*10 + odd.pop()
        return res
```