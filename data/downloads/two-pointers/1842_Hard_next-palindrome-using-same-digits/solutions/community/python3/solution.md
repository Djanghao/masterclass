# [Python] O(n) Next Permutation |  With Easy to Understand Comments

**Author:** tactic_champ
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/2421045/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/2421045/)

---

Inspired by [@medegw01 's solution](https://leetcode.com/problems/next-palindrome-using-same-digits/discuss/1642071/Python3-Straightforward-O(N)-solution)

```
class Solution:
    def nextPalindrome(self, num: str) -> str:
        
        def getGreater(left):
            # from the middle we go left untill we find a pair that is not in ascending order
            swap = len(left) - 2
            while swap >= 0 and left[swap] >= left[swap+1]:
                swap -= 1
            
            # this is already the greatest number palidrome that can be created with
            # these digits because everything in left is in ascending order (from the middle)
            if swap < 0:
                return []
            
            # now get the smallest digit to the right of swap index:
            nextSwap = swap + 1
            for j  in range(swap + 1, len(left)):
                if left[swap] < left[j]:
                    nextSwap = j
            
            # swap dem ones
            left[swap], left[nextSwap] = left[nextSwap], left[swap]
            
            # sort the nums to the right to make the num as close to the original 
            # as possible because we want the next closest palindromic number
            kept = left[:swap+1]
            greaterLeft = kept + sorted(left[swap+1:])
            return greaterLeft
            
        num = list(num)
        mid = len(num) // 2 
        left = num[: mid ] 
        midStr = num[mid] if len(num) % 2 == 1 else ""
        
        leftPal = getGreater(left)
        if leftPal == []:
            return ""
        
        leftPal = "".join(leftPal)
        return leftPal + midStr + leftPal[::-1]	
```