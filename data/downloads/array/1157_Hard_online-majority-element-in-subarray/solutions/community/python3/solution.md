# Python O(logn) with explanation

**Author:** mcmar
**Votes:** 6
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/1318841/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/1318841/)

---

## Intuition
Let's imagine that we're solving a simpler problem. Write a class that gets initialized with an array `num` and then calls `verify_num_threshold(left: int, right: int, num: int, threshold: int)`. 
#### PART 1: Verify Candidate [O(logn)]
Our function should return `true` if `num` occurs `>= threshold` times in `nums[left..right]`. We could answer that query in `O(logn)` time by mapping every occurance of `num` in `nums` to an array of all it's `indices`.
Ex:
```
nums = [7, 4, 3, 3, 4, 4]
nums_idx = { 7: [0], 4: [1, 4, 5], 3: [2, 3] }
```
Now, we can answer query by binary searching for `left` and `right` in `nums_idx[num]` and finding `l` and `r` such that `nums_idx[num][l] == left` and `nums_idx[num][r] == right`. We will return true if `r - l >= threshold`. This is effectively an LC medium problem.

But now we have to generate  candidates in `nums` to verify. Let's consider our options.
### Part 2: Generate candidates
##### Option A: Sample numbers randomly from `nums[left..right]` [O(1)]
If we know that `threshold` is at minimum a strict majority of `nums[left..right]`, then each random `nums[i]` will have a `> 50%` chance of being our candidate. If we sample randomly `20` times, our chance of "missing" our candidate would be `< 0.00009536743%`. Those are pretty good odds. But let's consider other options.
##### Option B: Pick most common numbers in `nums` [O(n)]
We could count the occurances of each element of `nums` and then iterate through those candidates in sorted order from highest to lowest. Because we eventually try every candidate in `nums`, we're guaranateed to eventually find the correct answer. But also because we try every candidate in `nums`, our runtime complexity is very poor at `O(n)`.
##### Option C: Bitwise Prefix Sum [O(1)]
**Intuition**
The problem specifies that `threshold` is always at minimum a *strict majority* of `right-left+1`. That means, we can only ever have one candidate that crosses `threshold`. In cases where you only need to retrieve one candidate `int` in an array of `ints`, bit hacking should be considered as an approach.
See: [136. Single Number](https://leetcode.com/problems/single-number/) ; [137. Single Number II](https://leetcode.com/problems/single-number-ii/) ; [260. Single Number III](https://leetcode.com/problems/single-number-iii/)
In `__init__`, we can precompute a bitwise prefix sum. `bit_sum[i][b]` is the sum of the b-th bit for all nums in range `[0..i)`. Our index `i` is offset by 1 so that we can query the edge case `bit_sum[0]` representing the start of the array.
In `query`, we reconstruct our candidate number
As long as `threshold` is a strict majority of `right-left+1`, we can be guaranteed that we only have 1 number that meets `threshold`. But it's also possible that no number meets `threshold`. In that case, we should return `-1`. Let's consider these 2 cases:
##### There exists some num in nums[left..right] where count(num) >= threshold
In this case, each set bit (`1`) in `num` will occur *at least* `threshold` times in `nums[left..right]` and no unset bit (`0`) in `num` will occur `threshold` times because only one number can cross `threshold`.
Likewise, each `0` bit will be `1` *less than* `threshold` times in `nums[left..right]`.
Therefor, we can reconstruct the majority number in `nums[left..right]` simply by adding every bit in our prefix sum `bit_sum[right+1] - bit_sum[left]` where the number of `1`s crosses our threshold.
##### There does not exist some num where count(num) >= threshold
If no num occurs a *majority* of times in `nums[left..right]`, then our reconstructed candidate `num` will simply be a random assortment of bits that happened to occur `>= threshold` times. So this is a problem, right? Not really. We already have our verification step constructed from Step 1. We can simply re-use that to validate whether `num` (effectively a random int) occurs `>= threshold` times and the answer will be no, so we'll return `-1`.

In this case, we've only attempted to verify 1 candidate and that verification takes `O(logn)`. We also generated our candidate in `O(1)` time, so our total runtime complexity is `O(logn)` and our total space complexity is `O(n)` for storing both the `nums_idx` dict and the `bit_sum` prefix sum array.

#### Code
Now let's put part1 and part2 together in code.
```
MAX_N = 2*10**4
MAX_BIT = MAX_N.bit_length()
class MajorityChecker:

    def __init__(self, nums: List[int]):
        n = len(nums)
        self.bit_sum = [[0] * MAX_BIT for _ in range(n+1)]
        for i in range(1, n+1):
            for b in range(MAX_BIT):
                self.bit_sum[i][b] = self.bit_sum[i-1][b] + ((nums[i-1] >> b) & 1)
        self.num_idx = defaultdict(list)
        for i in range(n):
            self.num_idx[nums[i]].append(i)

    def query(self, left: int, right: int, threshold: int) -> int:
        num = 0
        for b in range(MAX_BIT):
            if self.bit_sum[right+1][b] - self.bit_sum[left][b] >= threshold:
                num |= 1 << b
        l = bisect.bisect_left(self.num_idx[num], left)
        r = bisect.bisect_right(self.num_idx[num], right)
        if r-l >= threshold:
            return num
        return -1
```