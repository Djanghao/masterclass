# Python 3, Java | Binary Search, Sliding Window, Two Pointers | Explanation

**Author:** idontknoooo
**Votes:** 41
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/1322795/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/1322795/)

---

### Explanation
- Based on the **_hint_** section, we can find number of subarray-sum less than `x`, so that local the `k`th smallest number among all subarrays using binary search.
- Imagine we find all subarray-sum for some array and sort them, the `k`th smallest subarray-sum, will lay between the minimum sum and the maximum sum.
	- We don't necessarily need to find all subarray-sum, nor sort them
	- Instead, since we know the range, we can use binary search to locate the `k`th smallest
	- Essentially, using a binary search is to eliminate the subarray-sums which contains more than `k` values
	- At the of the binary search, the lower & upper bound will crossover. 
	- The lower bound tells us, there are `k` sums that less than this lower bound, which makes this lower bound the `k`th smallest value, or the largest among these `k` sums.
- To find number of subarray-sum less than `x`, we can iterate the array while maintaining two pointers to count how many valid subarrays are there. The time complexity of this process is `O(n)` because each element is visited twice at max. (`n` is the length of the array)
- Time complexity: `O(Nlog(N))`, where `N` is the length of the array. Binary search takes `O(log(N*(N+1)/2)) = O(log(N^2)) = O(2logN) = O(logN)`. Finding subarray-sum less than `x` takes `O(N)` as mentioned before.
- Space Complexity: `O(1)`

### Implementation
<iframe src="https://leetcode.com/playground/BSGCNsKv/shared" frameBorder="0" width="550" height="500"></iframe>