# Python | Easy Explanation | Meet in the Middle

**Author:** malraharsh
**Votes:** 187
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1513435/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1513435/)

---

**NOTE** - This is question was very easy, if you had done this https://leetcode.com/problems/closest-subsequence-sum/. So Please first go and try that.

Here we have to find 2 groups of equal length (N).
Let's say, left_ans is required the N elements required for first group, and right_ans is the other N elements for second group.

**Intuition ->**
The main and only intuition which is required here is,
nums = [1,3,6,5,4,2]
So, let's divide into 2 parts
left_part = [1,3,6]
right_part = [5,4,2]
N = len(nums) // 2, i.e. no. of elements in each group. Here 3.
So here, to make left_ans either we can take all 3 from left_part and 0 from right_part, or 1 from left_part and 2(N-1) from right_part, 2 from left_part and 1(N-2) from right_part.

So how this works is, if we take 1 from left_part, so this means we have taken one group of element, so its sum is taken from l_sum = left_sums[1], now to make is closer to half = total // 2, we need to add req_sum = half - l_sum, so we will binary search the value of it in right_sums. So now lest_ans_sum will become l_sum + r_sum(the binary search sum we got closest go req_sum).
Note - Above we are just finding the best possible sum of left_ans, as right_ans sum will then be total - left_ans_sum.

The get_sums function generate all possible subset sums using k elements from nums.
nums = [1,3,6]
get_sums(nums) will give,
{1: [1, 3, 6], # using only 1 elements from nums
2: [4, 7, 9], # using only 2
3: [10]} # using all 3

**Why not TLE ->**
And why this works is, because we are generating all possible subset sums using only k elements, where k is from 1 to N. Which is in total 2\\**k, and as max value of k is 15, so 2\\**15 is 32,000. Which is easy to work with. While if you try to make all subset sums, it becomes 2\\**30 is 1,073,741,824 which will give TLE.

**Meet in the Middle ->**
This technique is called meet in the middle. Here we are halving the max array size from 30, to 15. As generating all possible subset sums is feasible, ie 2\\**15. And to complete left_ans, we are taking subset sum of k from left_part, and N-k from right_part.

**Time Complexity ->** 
For N elements, there are 2\\**N subset possible. Then we also sum those each of those subset. O(N * 2^N)
For each k from 1 to 15, there are 2\\**M1 subset sums for left, then we are sorting right O(M2 * logM2), then we are finding its other part using binary search logM2. 
O(2\\**M1 * logM2 + M2 * logM2), 
where,
M1 = no. of elements in left_sums[k], 
M2 = no. of elements in right_sums[N-k]

**Space Complexity ->**
As there are 2\\**N subsets, for left and right. So, O(2 * 2^N), where max value of N is 15.

```
class Solution:
    def minimumDifference(self, nums: List[int]) -> int:
        N = len(nums) // 2 # Note this is N/2, ie no. of elements required in each.
        
        def get_sums(nums): # generate all combinations sum of k elements
            ans = {}
            N = len(nums)
            for k in range(1, N+1): # takes k element for nums
                sums = []
                for comb in combinations(nums, k):
                    s = sum(comb)
                    sums.append(s)
                ans[k] = sums
            return ans
        
        left_part, right_part = nums[:N], nums[N:]
        left_sums, right_sums = get_sums(left_part), get_sums(right_part)
        ans = abs(sum(left_part) - sum(right_part)) # the case when taking all N from left_part for left_ans, and vice versa
        total = sum(nums) 
        half = total // 2 # the best sum required for each, we have to find sum nearest to this
        for k in range(1, N):
            left = left_sums[k] # if taking k no. from left_sums
            right = right_sums[N-k] # then we have to take remaining N-k from right_sums.
            right.sort() # sorting, so that we can binary search the required value
            for x in left:
                r = half - x # required, how much we need to add in x to bring it closer to half.
                p = bisect.bisect_left(right, r) # we are finding index of value closest to r, present in right, using binary search
                for q in [p, p-1]:
                    if 0 <= q < len(right):
                        left_ans_sum = x + right[q]
                        right_ans_sum = total - left_ans_sum
                        diff = abs(left_ans_sum - right_ans_sum)
                        ans = min(ans, diff) 
        return ans
```


Please give this a **UPVOTE** , if you liked my effort.
And feel free to let me know if you have any doubts or suggestions.