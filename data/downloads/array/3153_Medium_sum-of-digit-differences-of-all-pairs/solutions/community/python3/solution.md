# Frequency hashmap + combinatorics || Intuition explained || Python3

**Author:** reas0ner
**Votes:** 14
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177260/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177260/)

---

# Intuition
If we were to consider each pair of numbers separately and then count the different digits, it would be O(comb(n,2)) = O(n^2) and TLE.
 
A key insight for this problem is recognizing that each digit contributes individually to the overall sum of differences, so it doesn't matter whether we are considering pairs of numbers first, or considering digits first - as eventually the differences will add up to the same thing. As the digits are more limited (10 digits) we are better off maintaining a frequency hashmap for that digit and using combinatorics to calculate the numbers which have the same digits.

comb(n,2) = n*(n-1)//2 which is used in the code.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution:
    def sumDigitDifferences(self, nums: List[int]) -> int:
        num_strs = [str(num) for num in nums]
        digit_count = len(num_strs[0])
        n = len(nums)
        res = 0

        for digit_index in range(digit_count):
            freq = defaultdict(int)
            for num in num_strs:
                freq[num[digit_index]] += 1

            pairs = n * (n-1) //2
            same = 0
            for count in freq.values():
                if count > 1:
                    same += count * (count-1)//2

            diff_pairs = pairs - same
            res += diff_pairs

        return res
        
```