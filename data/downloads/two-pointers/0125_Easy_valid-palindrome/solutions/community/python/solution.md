# Python in-place two-pointer solution.

**Author:** OldCodingFarmer
**Votes:** 382
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/39982/](https://leetcode.com/problems/valid-palindrome/solutions/39982/)

---

        
    def isPalindrome(self, s):
        l, r = 0, len(s)-1
        while l < r:
            while l < r and not s[l].isalnum():
                l += 1
            while l <r and not s[r].isalnum():
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l +=1; r -= 1
        return True