# Python Permutation Solution

**Author:** schir2
**Votes:** 33
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/1000324/](https://leetcode.com/problems/beautiful-arrangement/solutions/1000324/)

---

It took a while for me to understand this question. In the end all they were asking for was to find a permutation of n numbers that satisfy **one of these conditions**. EIther the number at index + 1 is divisible by the index + 1 or index + 1 is divisible  by the number. Also a much better example would have been to show what happens with 3 numbers.

I'll just put one example of where this fails because it seems like a better example.

***[1,3,2] - This fails because 3 is not divisible by index + 1 (2) and also index + 1 (2) is not divisible by 3.***

1. Generate the array of numbers that will be used to create permutations of 1 to n (n inclusive) **ex**: 3 will become [1,2,3]
2. Iterate through all elements in the list and compare it to  i which is initialized at 1 to avoid the while index + 1 thing.
3. If the number is divisible by i or i is divisible by the number, remove the number from nums and continue generating the permutation.
4. If a full permutation is generated (i == n+1, aka went past the index) then we have one solution. Add that to the result.

```
class Solution:
    def countArrangement(self, n: int) -> int:
        
        self.res = 0
        nums = [i for i in range(1, n+1)]
        
        def dfs(nums: list, i: int = 1):
            if i == n+1: 
                self.res += 1
                return
            
            for j, num in enumerate(nums):
                if not(num % i and i % num):
                    dfs(nums[:j] + nums[j+1:], i+1)
            
        dfs(nums)
        return self.res