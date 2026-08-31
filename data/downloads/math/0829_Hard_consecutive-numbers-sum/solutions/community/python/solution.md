# [Python 3] - Simple math with proof

**Author:** dharm1k987
**Votes:** 16
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/974849/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/974849/)

---

```
class Solution:
    def consecutiveNumbersSum(self, N: int) -> int:
        '''
        Consider N = 10, and a sequence 1 + 2 + 3 + 4
        This sequence starts at x = 1 and goes as:
        x + (x + 1) + (x + 2) + (x + 3) = x + (x + 1) + (x + 2) + (x + n - 1)
        where n = 4, ie, the total number of elements in the sequence
        x + (x + 1) + (x + 2) + (x + n - 1) = (first_elem + last_elem) * num_elem / 2 [properties of arithmetic series]
        x + (x + 1) + (x + 2) + (x + n - 1) = (x + x + n - 1) * n / 2
        x + (x + 1) + (x + 2) + (x + n - 1) = (2x + n - 1) * n / 2
        
        Note that x + (x + 1) + (x + 2) + (x + n - 1) = N
        (2x + n - 1) * n / 2 = N
        2xn / 2 + n(n-1) / 2 = N
        xn + n(n-1)/2 = N
        xn = N - n(n-1)/2
        
        All we require is x to be an integer, like 1 above.
        This means that if [N - n(n-1)/2] % n == 0, this means that we can form a sequence
        starting at x = [N - n(n-1)/2]/n
        
        All we need to do is loop through each n from 2 onwards
        Why two? Remember that n describes the number of elements in the sequence, and by default,
        the sequence 10 is already included, which is 1 number
        
        What must n be less than? Notice that x is positive, which means N - n(n-1)/2 > 0, which further 
        translated to 2N > n(n-1), which is close to 2N > n(n)
        So now we see that 2N > n^2, meaning that n < sqrt(2N)
        
        The code then is a simple loop
        '''
        import math
        
        # initial answer
        count = 1
        
        # smallest size
        n = 2
        target = math.sqrt(2*N)
        while n < target:
            if (N - n*(n-1)/2) % n == 0:
                count += 1
            n += 1
        return count
```