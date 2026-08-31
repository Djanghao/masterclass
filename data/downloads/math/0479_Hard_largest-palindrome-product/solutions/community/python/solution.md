# [Python3] Solution with explanation

**Author:** frolovdmn
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/1521512/](https://leetcode.com/problems/largest-palindrome-product/solutions/1521512/)

---

```
class Solution:
    def largestPalindrome(self, n: int) -> int:
        # just to forget about 1-digit case
        if n == 1:
            return 9
        
        # min number with n digits (for ex. for n = 4, min_num = 1000)
        min_num = 10 ** (n - 1)
        
        # max number with n digits (for ex. 9999)
        max_num = 10 ** n - 1       
        
        max_pal = 0
        
        # step is equal to 2, because we have to get a number, the 1st digit of which is 9, so we have to   
		# iterate only over odd numbers
        for i in range(max_num, min_num - 1, -2): 
            
            # since we are looking for the maximum palindrome number, it makes no sense to iterate over the 
            # product less than the max_pal obtained from the last iteration
            if i * i < max_pal:
                break
                
            for j in range(max_num, i - 1, -2):
                product = i * j
                
                # since a palindrome with an even number of digits must be mod 11 == 0 and we have no reason to 
                # check the product which less or equal than max_pal
                if product % 11 != 0 and product >= max_pal:
                    continue
                    
                # check if product is a palindrome then update the max_pal
                if str(product) == str(product)[::-1]:
                    max_pal = product

        return max_pal % 1337
```

Palindrome with an even number of digits satisfies the criteria for divisibility by 11:
1) If the number of digits is even, add the first and subtract the last digit from the rest. The result must be divisible by 11:
For example: 9966006699
96600669 + 9 - 9 = 96600669,
96600669 / 11 = 8781879
2) Form the alternating sum of the digits. The result must be divisible by 11:
abs(9 + 6 + 0 + 6 + 9) - abs(9 + 6 + 0 + 6 +9) = 0, 
0 is a multiple of 11