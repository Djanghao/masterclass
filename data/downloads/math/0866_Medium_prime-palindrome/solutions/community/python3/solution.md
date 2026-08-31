# Python Simple Solution

**Author:** abhint1
**Votes:** 2
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/3359291/](https://leetcode.com/problems/prime-palindrome/solutions/3359291/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1>Check if n is a palindrome. If it is, check if it is a prime number. If it is, return n.
2>Otherwise, increment n by 1 and repeat step 1 until a palindrome prime is found.

# Complexity
- Time complexity:
The time complexity of this algorithm depends on the number of steps it takes to find a palindrome prime greater than or equal to n. The worst-case scenario is when n is a large prime number and the next palindrome prime is much large.

- Space complexity:
The space complexity of this algorithm is O(1) .

# Code
```
class Solution:
    def primePalindrome(self, n: int) -> int:
#1 best 
        def is_palindrome(x):
            return str(x) == str(x)[::-1]
        
        def is_prime(x):
            if x < 2:
                return False
            for i in range(2, int(x ** 0.5) + 1):
                if x % i == 0:
                    return False
            return True
        
        while True:
            if is_palindrome(n) and is_prime(n):
                return n
            n += 1
            if 10**7 < n < 10**8:
                n = 10**8
        








        #2 TLE
        # def is_prime(number):
        #     if number > 1:
        #         for num in range(2, number):
        #             if number % num == 0:
        #                 return False
        #         return True
        #     return False

        # n_str = str(n)
        # l = len(n_str)        
        # for k in range(max(0, l//2-1), 5):
        #     for i in range(10**k, 10**(k+1)):                            # odd length
        #         i_str = str(i)
        #         if k > 0 and i_str[0] in ['2','4','5','6','8']: continue # pruning
        #         cur = i_str + i_str[-2::-1]
        #         cur_int = int(cur)
        #         if cur_int >= n and is_prime(cur_int): 
        #             return cur_int
                
        #     for i in range(10**k, 10**(k+1)):                            # even length
        #         i_str = str(i)
        #         if i_str[0] in ['2','4','5','6','8']: continue           # pruning
        #         cur = i_str + i_str[::-1]
        #         cur_int = int(cur)
        #         if cur_int >= n and is_prime(cur_int): 
        #             return cur_int
        # return -1








        # #3 TLE
        # if 8 <= n <= 11: return 11
        # for x in range(10 ** (len(str(n))// 2), 10**5):
        #     y = int(str(x) + str(x)[-2::-1])
        #     if y >= n and is_prime(y): return y











        # #4 it gives TLE
        # res=n
        # c=1
        # while c:
        #     if str(res)==str(res)[::-1] and is_prime(res)==True:
        #         c=0
        #     else:
        #         res+=1
        # return res
            

     
```