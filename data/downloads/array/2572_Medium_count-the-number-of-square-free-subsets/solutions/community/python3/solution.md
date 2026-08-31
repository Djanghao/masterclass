# [Python3] DFS + GCD Solution | 70ms (Beats 100%)

**Author:** xil899
**Votes:** 23
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203905/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203905/)

---

# Approach
**Step 1:** Select all possible `num` between 2 to 30 that does not have a square as its factor. Record all such `num` in a set `candidates`;
**Step 2:** Use a Counter `cnt` to record the number of appearances in `nums` for all `num` in `candidates`;
**Step 3:** Define a helper function `count()` that return all possible Square-Free Subsets of a given array `arr` with unique elements;
**Step 4:** Apply `count()` function on the unique elements of `nums` in `candidates` and multiply by the cardinality of the power set of `1`'s in `nums`, then subtract 1 (the null subset) to get the final answer.

# Code
```
class Solution:
    def squareFreeSubsets(self, nums: List[int]) -> int:
        MOD = 10 ** 9 + 7
        candidates = set([2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30])
        cnt = defaultdict(int)
        for num in nums:
            if num in candidates:
                cnt[num] += 1
        
        def count(arr):
            if not arr:
                return 1
            arr1 = []
            for num in arr[1:]:
                if math.gcd(num, arr[0]) == 1:
                    arr1.append(num)
            return (count(arr[1:]) + cnt[arr[0]] * count(arr1)) % MOD
            
        ones = nums.count(1)
        tmp = 1
        for _ in range(ones):
            tmp = (tmp * 2) % MOD
        return (count(list(cnt)) * tmp - 1) % MOD
```

# Polished code to make it less lengthy
Credit to [@bortengineer](https://leetcode.com/bortengineer/).
```
class Solution:
    def squareFreeSubsets(self, nums: List[int]) -> int:
        MOD = 10 ** 9 + 7
        cnt = Counter(nums)
        
        def count(arr):
            if not arr:
                return 1
            arr1 = [x for x in arr if math.gcd(x, arr[0]) == 1]
            return (count(arr[1:]) + cnt[arr[0]] * count(arr1)) % MOD

        candidates = [2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30]
        return (count(candidates) * pow(2, cnt[1], MOD) - 1) % MOD
```