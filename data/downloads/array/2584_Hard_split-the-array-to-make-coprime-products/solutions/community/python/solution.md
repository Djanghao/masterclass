# Python | Explanation | Prime | Update Rightmost Index | O(n*sqrt(nums[i]))

**Author:** n124345679976
**Votes:** 9
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258079/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258079/)

---

We consider that given `[4,7,15,8,3,5]`, where is the minimum index that should be covered in left split?
That is, we should first check `4` to find the rightmost number that is not co-prime to it. The answer is `8` at index `3`. If we put 8 in the right split, then the product of two arrays will be not co-prime.
Then, because we should contain 8 in the left split, `[4, 7, 15, 8]` is now in the left split.
Therefore, we should check the rightmost number that is not co-prime to any of `[7, 15, 8]`. In the process, we are keep updating the rightmost index until the rightmost index is checked.
If rightmost index is the last item of the array, then all elements should be covered in left split, thus no such split exist, return -1.

We record the index of each prime last occurs in `lastp`. Finding all prime cost `sqrt(nums[i])`, resulting in Time Complexity `O(N * sqrt(nums[i]))`.
Updating rightmost index also requires to get primes for every element to update with the maximum of `lastp[p]`, where `p` is the prime of that element.


```
class Solution(object):
    def findValidSplit(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def yieldprime(n):
            while n % 2 == 0:
                n >>= 1
                yield 2
            p = 3
            while p * p <= n:
                while n % p == 0:
                    n //= p
                    yield p
                p += 2
            if n > 1:
                yield n
            
        lastp = {}
        for i, n in enumerate(nums):
            for p in yieldprime(n):
                lastp[p] = i
        l = 0
        maxl = 0
        while l <= maxl:
            n = nums[l]
            for p in yieldprime(nums[l]):
                maxl = max(maxl, lastp[p])
            l += 1
        return maxl if maxl != len(nums) - 1 else -1
                    
                
                
                    
                
```