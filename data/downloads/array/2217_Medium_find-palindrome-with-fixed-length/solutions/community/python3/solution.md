# Python | simple and straightforward

**Author:** Mikey98
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1886956/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1886956/)

---

```
class Solution:
    def kthPalindrome(self, queries: List[int], intLength: int) -> List[int]:
        # think the palindromes in half
        # e.g. len  = 4 we only consider the first 2 digits
        # half: 10, 11, 12, 13, 14, ..., 19, 20, 
        # full: 1001, 1111, 1221, 1331, ...
        # e.g. len = 5 we consider the first 3 digits
        # half: 100, 101, 102, ...
        # full: 10001, 10101, 10201, ...
        
        result = []
        
        for i in queries:
            result.append(self.generatePalindrome(intLength, i))
        
        return result
    
    def generatePalindrome(self, length, num):
        # index start from 0
		# e.g. num =1 means we want to find the most smallest palindrome, then its index is 0
		# e.g. num =2 means we want to find the second most smallest palindrome, then its index is 1
        index = num -1
        
		# if the length is even
		# we only think about the fisrt half of digits
        if length % 2 == 0:
            cur = int('1' + '0' * (length // 2 -1))
            maxLength = len(str(cur))
            cur += index
            
            if len(str(cur)) > maxLength:
                return -1
            
            else:
                cur = str(cur)
                cur = cur + cur[::-1]
                cur = int(cur)
                return cur
				
        # if the length is odd
		# we consider first (length // 2 + 1) digits
        else:
            cur = int('1' + '0' * (length // 2))
            maxLength = len(str(cur))
            cur += index
            
            if len(str(cur)) > maxLength:
                return -1
            
            else:
                cur = str(cur)
                temp = str(cur)[:-1]
                cur = cur + temp[::-1]
                cur = int(cur)
                return cur