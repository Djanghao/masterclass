# Python 3 | Permutation, Brute Force | Explanation

**Author:** idontknoooo
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1467322/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1467322/)

---

### Explanation
- Essentailly [31. Next Permutation](https://leetcode.com/problems/next-permutation/) + Brute Force on finding swaps
- See below comments for more detail
### Implementation
```
class Solution:
    def getMinSwaps(self, num: str, k: int) -> int:
        def next_permutation(nums):
            small = len(nums) - 2
            while small >= 0 and nums[small] >= nums[small+1]: small -= 1 # find last place there is an increase
            if small == -1: nums.reverse()                                # mono-decrease
            else:
                next_larger = small+1
                for i in range(len(nums)-1, small, -1):
                    # find smallest number larger than `nums[small]` from right side of `small`, 
                    #   if there are same value, take the most right one
                    if nums[small] < nums[i]: next_larger = i; break
                nums[small], nums[next_larger] = nums[next_larger], nums[small]
                start = small+1
                nums[start:] = nums[start:][::-1]
            return nums

        origin, num = list(num), list(num)
        for _ in range(k):                    # O(n*k)
            num = next_permutation(num)
        ans, n = 0, len(origin)
        for i in range(n):                    # O(n*n)
            j = num.index(origin[i], i)
            ans += j - i
            num[i:j+1] = [num[j]] + num[i:j]
        return ans
```