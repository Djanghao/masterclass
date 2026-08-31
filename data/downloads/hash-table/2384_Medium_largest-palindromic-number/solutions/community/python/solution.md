# [Python] HashMap Solution with Explanation

**Author:** lee215
**Votes:** 102
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/2456655/](https://leetcode.com/problems/largest-palindromic-number/solutions/2456655/)

---

# **Explanation**
1. Count the frequency of all digits in `num`
2. Check how many pair of `9` that we have:
If we have one pair of `9`, we can make `9XXXXXX9`, `res = '99'` now.
If we have two pairs of `9`, we can make `99XXXX99`, `res = '9'` now.
3. Continue check pairs for 8,7,6,5,4,3,2,1,0
4. Strip the leading `0` in `res`
5. Find the maximum digit left that can be used for the middle digit of palindromic number.
6. final result is `res + mid + reversed(res)`
7. For special input like `00`, we need to return `0`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Python**
```py
    def largestPalindromic(self, num: str) -> str:
        count = Counter(num)
        res = ''.join(count[i] // 2 * i for i in '9876543210').lstrip('0')
        mid = max(count[i] % 2 * i for i in count)
        return (res + mid + res[::-1]) or '0'
```
