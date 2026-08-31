# [Python] DP & DFS Solutions - Easy-to-understand with Explanation

**Author:** zayne-siew
**Votes:** 66
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/1624391/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/1624391/)

---

### Introduction

We want to partition `nums` into two subsets such that their sums are equal. Intuitively, we can establish that the total sum of the elements in `nums` **has to be an even number** for this to be possible:

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
	    if sum(nums)%2:  # or if sum(nums)&1
		    return False
		# main logic here
```

---

### Approach 1: DP (0/1 Knapsack Problem)

This problem is a variant of the famous [Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem). Essentially, if we were able to pick certain elements from `nums` to create one of the two subsets, which elements would we pick? This involves looping through combinations of elements to find one possible combination that satisfies our criteria, namely, that partitions `nums` such that their sums are equal.

We can perform this iteration on each element in `nums`. Since there only exists two choices - to select the current element or not - we can compute and store the obtained total sum for each case into an array.

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        s = sum(nums)
        if s&1:
            return False
        """
        The dp array stores the total obtained sums we have come across so far.
        Notice that dp[0] = True; if we never select any element, the total sum is 0.
        """
        dp = [True]+[False]*s
        # Now, loop through each element
        for num in nums:
            for curr in range(s, num-1, -1):  # avoid going out-of-bounds
                """
                Case 1: The current sum (curr) has been seen before.
                        Then, if we don't select the current element, the sum will not change.
						So, this total sum will still exist, and its dp value remains True.
				
				Case 2: The current sum (curr) has not been seen before,
				        but it can be obtained by selecting the current element.
						This means that dp[curr-num] = True, and thus dp[curr] now becomes True.
				
				Case 3: The current sum (curr) has not been seen before,
				        and it cannot be obtained by selecting the current element.
						So, this total sum will still not exist, and its dp value remains False.
                """
                dp[curr] = dp[curr] or dp[curr-num]
        # Finally, we want to obtain the target sum
        return dp[s//2]  # or dp[s>>1]
```

We can further optimise this implementation by discarding all obtained sums that are greater than the target sum.

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        s = sum(nums)
        if s&1:
            return False
        dp = [True]+[False]*(s>>1)
        for num in nums:
            for curr in range(s>>1, num-1, -1):
                dp[curr] = dp[curr] or dp[curr-num]
        return dp[-1]
```

We can also replace the `dp` array with a `set()` instead, so that we don't need to store `False` for a value that has not yet been obtained.

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        dp, s = set([0]), sum(nums)
        if s&1:
            return False
        for num in nums:
            for curr in range(s>>1, num-1, -1):
                if curr not in dp and curr-num in dp:
                    if curr == s>>1:
                        return True
                    dp.add(curr)
        return False
```

**TC: <img src="https://latex.codecogs.com/svg.image?O(nW)" title="O(nW)" />**, where `n` is the number of elements in `nums` and `W` is `sum(nums)`, due to the nested for loop. It should be noted that <img src="https://latex.codecogs.com/png.image?\\dpi{110}&space;O(n^{2})\\leq&space;TC<&space;O(2^{n})" title="O(n^{2})\\leq TC<O(2^{n})" />, which is a large range, but it's the best estimate of the TC that I have so far (comment down below if you have a more reasonable one).
**SC: <img src="https://latex.codecogs.com/png.image?\\dpi{110}&space;O(\\frac{W}{2})" title="O(\\frac{W}{2})" />**, for the `dp` array / set.

Finally, we can do away with having to loop through the range of possible total sums (credit to [@archit91](https://leetcode.com/archit91/) for the suggestion). From the set implementation, all we need to do is iterate through each sum that has already been obtained, and add the element's value to it. Our previous optimisation of limiting the obtained sum to the target sum (which is half of the total sum of elements in `nums`) now serves the purpose of preventing the set from growing exponentially.

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        dp, s = set([0]), sum(nums)
        if s&1:
            return False
        for num in nums:
            dp.update([v+num for v in dp if v+num <= s>>1])
        return s>>1 in dp
```

**TC: <img src="https://latex.codecogs.com/svg.image?O(n^{2})\\leq&space;TC<&space;O(nW)" title="O(n^{2})\\leq TC< O(nW)" />**. It is still very difficult to pinpoint the exact time complexity, although it will definitely be much closer to <img src="https://latex.codecogs.com/svg.image?O(n^{2})" title="O(n^{2})" /> than the previous implementation.
**SC: <img src="https://latex.codecogs.com/svg.image?SC\\leq&space;O(\\frac{W}{2})" title="SC\\leq O(\\frac{W}{2})" />**, due to the space optimisations as discussed above.

---

### Approach 2: DFS (Backtracking)

Another way to approach this problem is to select each element in `nums` until the target sum is reached / exceeded. If we exceed the target sum, then we remove the previously-selected element and mark it as unselected before trying the next element. This continues until we either reach the target sum or until we have iterated through all possible combinations.

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        l, s = len(nums), sum(nums)
        @cache  # this is important to avoid unnecessary recursion
        def dfs(curr: int, idx: int) -> bool:
            """
            Select elements and check if nums can be partitioned.
            :param curr: The current sum of the elements in the subset.
            :param idx: The index of the current element in nums.
            :return: True if nums can be partitioned, False otherwise.
            """
            if idx == l:  # we have reached the end of the array
                return curr == s>>1
            elif curr+nums[idx] == s>>1 or \\  # target sum obtained
                    (curr+nums[idx] < s>>1 and \\
                     dfs(curr+nums[idx], idx+1)):  # or, target sum will be reached by selecting this element
                return True
            return dfs(curr, idx+1)  # else, don't select this element, continue
        return False if s&1 else dfs(0, 0)
```

You could compress the code if you wanted, though I would not recommend doing so.

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        l, s = len(nums), sum(nums)
        @cache
        def dfs(curr: int, idx: int) -> bool:
		    return curr == s>>1 if idx == l else True if curr+nums[idx] == s>>1 or \\
				(curr+nums[idx] < s>>1 and dfs(curr+nums[idx], idx+1)) else dfs(curr, idx+1)
        return False if s&1 else dfs(0, 0)
```

**TC: <img src="https://latex.codecogs.com/svg.image?O(n^{2})\\leq&space;TC<&space;O(nW)" title="O(n^{2})\\leq TC< O(nW)" />**. <code lang=python>dfs(curr+nums[idx], idx+1)</code> acts as a nested for loop since when it fails, it calls <code lang=python>dfs(curr, idx+1)</code>.
**SC: <img src="https://latex.codecogs.com/svg.image?SC\\leq&space;O(\\frac{W}{2})" title="SC\\leq O(\\frac{W}{2})" />**. The `cache` will most likely have to store each of the obtained sums, which will perform on par with the DP approach as discussed above.

---

Please upvote if this has helped you! Appreciate any comments as well :)