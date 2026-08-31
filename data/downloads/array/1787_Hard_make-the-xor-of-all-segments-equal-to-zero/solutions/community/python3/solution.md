# [Python3] Dynamic Programming and Optimizations

**Author:** tonghuikang
**Votes:** 51
**Link:** [https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/1097213/](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/1097213/)

---

The first observation we need to make is that the moving window of size k must cycle. When a new element enter the window from the right, the same element must leave from the left.

Now, we need to decide which element to place in each position of the window. Since the position of every element in `nums[i::k]` should be equal `for i in range(k)`, we first compile the freqency of each value for each position in the window.

```python
LIMIT = 2**3  # for now
mrr = [[0 for _ in range(LIMIT)] for _ in range(k)]
for i,x in enumerate(nums):
    mrr[i%k][x] += 1
```

For test case `nums = [3,4,5,2,1,7,3,4,7], k = 3` , the freqeuncy matrix now looks like this.

```
0 0 1 2 0 0 0 0
0 1 0 0 2 0 0 0
0 0 0 0 0 1 0 2
```

Each row is represents a position in the window. Each column represents a value (up to 8 for now). 

We want to maximise the number of values that we do not change. The task is to choose one value from each row such that the target is maximised, subject to having the XOR of all selected values to be zero.

You might consider a greedy approach where you select the most common element in each position. However, there can be many ties to break and this greatly increases computational complexity.

We take a dymanic programming approach.
- Each state is the XOR sum from the first position to the current position. There are C=1024 states.
- Each stage is the position that we have considered. There are up to k=2000 stages.
- The value of each state is the maximum number of values we could keep if we our XOR sum equal to the value.

At each position, we consider the previous position
- If we choose to value for the current position, it maps all the previous XOR sum to a new XOR sum.
- We update the dp considering
  - how often the value is found in the current position
  - the maximum number of values we have kept

```python
dp = [-2000 for _ in range(LIMIT)]
dp[0] = 0
for row in mrr:
    new_dp = [0 for _ in range(LIMIT)]
    for i,cnt in enumerate(row):
        for j,prev in enumerate(dp):
            new_dp[i^j] = max(new_dp[i^j],prev+cnt)
    dp = new_dp

return len(nums) - new_dp[0]
```

This is the value for each state after each stage of the dynamic programming.

```
0 - - - - - - -
0 0 1 2 0 0 0 0
2 2 3 2 2 2 3 4
6 5 5 4 4 5 4 4
```

We return the bottom left value - which is the maximum number of values we can leave unchanged such that the XOR of the window is zero.

However, the complexity of the above algorithm is O(kC^2) which will run out of time.

We observe the we do not need to update the state if the count is zero. There are at most 2000 nonzero count because the array size is up to 2000. This reduces the complexity to O(nC).

We can split the enumerate logic into two cases - where `cnt == 0` and where `cnt > 0`

```python
for row in mrr:
    new_dp = [0 for _ in range(LIMIT)]
    for i,cnt in enumerate(row):
        if cnt == 0:
            for j,prev in enumerate(dp):
                new_dp[i^j] = max(new_dp[i^j],prev)
    for i,cnt in enumerate(row):
        if cnt > 0:
            for j,prev in enumerate(dp):
                new_dp[i^j] = max(new_dp[i^j],prev+cnt)
    dp = new_dp
```

The iteration involving `cnt == 0` it is equivalent to applying `max(dp)` to `new_dp`.

Iterating `i^j` for all `j` for a given `i` will cover all 1024 possible values, because of how XOR functions works. When `prev = max(dp)`, this maximum score will be applied to all 1024 values. 

We can replace the block with `cnt == 0` with an `O(C)` code that applies `max(dp)` to all of `new_dp`.

This is the full code.

```python
def minChanges(self, nums: List[int], k: int) -> int:

    LIMIT = 2**10
    mrr = [[0 for _ in range(LIMIT)] 
           for _ in range(k)]
    for i,x in enumerate(nums):
        mrr[i%k][x] += 1

    dp = [-2000 for _ in range(LIMIT)]
    dp[0] = 0
    for row in mrr:
        maxprev = max(dp)
        new_dp = [maxprev for _ in range(LIMIT)]
        for i,cnt in enumerate(row):
            if cnt > 0:
                for j,prev in enumerate(dp):
                    new_dp[i^j] = max(new_dp[i^j], prev+cnt)
        dp = new_dp

    return len(nums) - new_dp[0]
```