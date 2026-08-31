# Simplest O(n) Python Solution with Explanation

**Author:** ivankatrump
**Votes:** 195
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/237611/](https://leetcode.com/problems/sliding-window-maximum/solutions/237611/)

---

The solution using deque isn't very intuitive but is very simple once it *"clicks"*


To summarize:
1. We maintain a deque of the indexes of the largest elements we've seen (aka "good candidates")
2. The problem is that we need to maintain sanity of this deque. To this we need to make sure about two things:
	1. Deque should NEVER point to elements smaller than current element
	2. Deque should NEVER point to elements outside our sliding window (which can happen, for instance in above example, where the first element is actually the largest element in the whole array, and sort of "clings" to the deque, only until we reach an index outside the window it can stretch to, where it's fate has come and it shall be removed from the throne!)
3. We also keep furnishing the deque with curr_element
4. Finally, and most importantly, we keep appending the front of the deque to our output `out`.



```
import collections
class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        d = collections.deque()
        out = []
        for i, n in enumerate(nums):
            print("i = {}, curr element = {}, d = {} and out = {}".format(i, n, d, out))
            while d and nums[d[-1]] < n:
                d.pop()
                print("\	 Popped from d because d has elements and nums[d.top] < curr element")
            d.append(i)
            print("\	 Added i to d")
            if d[0] == i - k:
                d.popleft()
                print("\	 Popped left from d because it's outside the window's leftmost (i-k)")
            if i>=k-1:
                out.append(nums[d[0]])
				print("\	 Append nums[d[0]] = {} to out".format(nums[d[0]]))
        return out
```

Lets run this "self-explanatory" code (literally!) to see what it is doing with our array `nums` step by step. The given test case isn't a very good candidate to understand this solution, so I'll make a small change and change the first element to `8`:

`print(Solution().maxSlidingWindow([8,3,-1,-3,5,3,6,7], 3))`

<pre>
i = 0, curr element = 8, d = deque([]) and out = []
	 Added i to d
i = 1, curr element = 3, d = deque([0]) and out = []
	 Added i to d
i = 2, curr element = -1, d = deque([0, 1]) and out = []
	 Added i to d
	 Append nums[d[0]] = 8 to out
i = 3, curr element = -3, d = deque([0, 1, 2]) and out = [8]
	 Added i to d
	 Popped left from d because it's outside the window's leftmost (i-k)
	 Append nums[d[0]] = 3 to out
i = 4, curr element = 5, d = deque([1, 2, 3]) and out = [8, 3]
	 Popped from d because d has elements and nums[d.top] < curr element
	 Popped from d because d has elements and nums[d.top] < curr element
	 Popped from d because d has elements and nums[d.top] < curr element
	 Added i to d
	 Append nums[d[0]] = 5 to out
i = 5, curr element = 3, d = deque([4]) and out = [8, 3, 5]
	 Added i to d
	 Append nums[d[0]] = 5 to out
i = 6, curr element = 6, d = deque([4, 5]) and out = [8, 3, 5, 5]
	 Popped from d because d has elements and nums[d.top] < curr element
	 Popped from d because d has elements and nums[d.top] < curr element
	 Added i to d
	 Append nums[d[0]] = 6 to out
i = 7, curr element = 7, d = deque([6]) and out = [8, 3, 5, 5, 6]
	 Popped from d because d has elements and nums[d.top] < curr element
	 Added i to d
	 Append nums[d[0]] = 7 to out
[8, 3, 5, 5, 6, 7]
</pre>


**BONUS** Trying to be a strong Java Developer ? Checkout this [awesome hands-on series](https://abhinandandubey.github.io/posts/tags/Advanced-Java-Series) with illustrations!