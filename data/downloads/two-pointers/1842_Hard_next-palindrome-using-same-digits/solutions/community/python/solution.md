# [Python3] O(N) time O(N) space solution using Two Pointers

**Author:** nebularthm
**Votes:** 5
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/2412052/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/2412052/)

---

This problem builds heavily on [Next Greater Element 3](https://leetcode.com/problems/next-greater-element-iii/) and [Next Permutation](https://leetcode.com/problems/next-permutation/), so do those first if you have not already.

This problem is essentially asking us to find the next greater number string for half of the palindrome. As the left portion of the palindrome contains the most significant digits, we will run our next permutation algoritm on that, and then simply reverse it to get our true palindrome. The last thing to consider is how to deal with odd strings and even strings. If the string is odd in length, simply keep the middle character where it is
```
class Solution:
    def nextPalindrome(self, num: str) -> str:
        #we split the stirng into 2 halves
        midpoint = len(num)//2
        midstr = num[midpoint] if len(num)%2 else ""
        leftpali = self.next_perm(num[0:midpoint])
        return leftpali + midstr + leftpali[::-1] if leftpali else ""
    def next_perm(self,digits):
            digits = list(digits)#strings are immutable to convert to a mutable list/arr/whatever
            i = len(digits)-2
            #find first place that this digit is out of place
            while i >= 0 and digits[i+1] <= digits[i]:
                i -= 1
            if i < 0:
                return ""
            j = len(digits) - 1
            while j >= 0 and digits[j] <= digits[i]:
                j -= 1
            digits[i], digits[j] = digits[j], digits[i]
            left,right = i + 1, len(digits)-1
            while left < right:
                digits[left],digits[right] = digits[right], digits[left]
                left += 1
                right -= 1
            return "".join(digits)
            
            
        
```