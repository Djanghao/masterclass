# C++ solution + intuition (greedy solution)

**Author:** sajals5031
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/1258961/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/1258961/)

---

## Basic Idea of the Question
We are given an array of numbers (nums) and a set of requests (requests), and our task is to maximise the total sum of outputs of the requests for any permutation of the numbers in the array. The output of a request is defined as :

<code>Output for request [start, end] = 
nums[start] + nums[start+1] + nums[start+2] + ..... + nums[end - 1] + nums[end]</code>

We have to return the answer mod 1e9 + 7.

At first, this task my seem daunting, seeing the constraints, you might be thinking, checking all permutations for all requests, would just be impractical, and you would be right in thinking so. So how can you maximise the answer for a request, without considering all possible permutations.

First, let's look at what the question expects from us:
Let's say the first request was [0,1], thus its answer would be nums[0] + nums[1].
Similarly let's say the second request was [1,4], then its answer would be nums[1] + nums[2] + nums[3] + nums[4].

Then the total sum (that we have to maximise) will be nums[0] + 2 * nums[1] + nums[2] + nums[3] + nums[4].
Look closely, the order of the requests, and their specific ranges don't matter, it is only the frequency of each index in the requests, that actually matters. It my be pretty clear to you now that for maximizing this sum, we need the largest elements of the array at the most frequently requested elements. The relative order for indices with equal frequency doesn't matter, since all of them are only being added to each other.
<br/>
## Approach
As stated before, we don't care about the relative order of the requests, instead we focus on the number of times a particular index has been requested. So first, we calculate this by iterating over the requests array.
Here if we would have gone the naive way, we would have iterated over the whole request range, and incremented each value. But that is not very efficient, and will lead to TLE. Instead, we use a well known algorithm called LineSweep, or ScanLine, in which instead of storing the actual values of the elements and updating them, we just store the changes, i.e at the start of a range, we increment the element by one, and at the element after the range, we decrement it. This way, we don't have to iterate over multiple request ranges, and a simple cumulative sum of the array will give us the values desired.

Then we sort both the nums array, and the indices array (in any order, it doesn't matter as long as both of the arrays are sorted in the same order), and iterate over both the arrays simlutaneously. The sum is updated to sum + nums[i] * indices[i] using appropriate modulus operations.
<br/>

## Code
```
int maxSumRangeQuery(vector<int>& nums, vector<vector<int>>& requests) {
	int n = nums.size();
	int r = requests.size();
	vector<int> indices(n, 0);
	for(int i = 0; i<r; i++) {
		indices[requests[i][0]]++;
		if(requests[i][1] < n-1) indices[requests[i][1] + 1]--;
	}
	for(int i = 1; i<n; i++) {
		indices[i] += indices[i-1];
	}
	sort(nums.begin(), nums.end(), greater<int>());
	sort((indices.begin(), indices.end(), greater<int>());
	int sum = 0;
	for(int i = 0; i<n; i++) {
		sum = (sum + ((long long)(nums[i]%mod) * (long long)(indices[i]%mod))%mod)%mod;
	}
	return sum;
}
```

**Time : O(nlogn + r)** where n is the number of elements in nums array and r is the number of requests.
**Space: O(n)** for the extra indices array.

<br/>

**Upvote** if you liked this post and learned something from it, and feel free to ask any doubts, or suggest any corrections/improvements in the comments.

