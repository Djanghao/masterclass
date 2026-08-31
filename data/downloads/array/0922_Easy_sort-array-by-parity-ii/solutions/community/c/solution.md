# C++ O(n) time O(1) space solution with intuition for building the solution

**Author:** sajals5031
**Votes:** 55
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/1252502/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/1252502/)

---

## Basic Idea of Question
We are given an array in which half of the numbers are odd, and the other half are even. So the length of the array is always even, and the first index is even (0), while the last index is odd (n-1). We have to arrange the numbers in the array such that at every even index, there is an even number, while at every odd index, there is an odd number.

The most naive solution to this question is to just traverse the array, and upon finding an out-of-place element, find its replacement in the array by traversing the subarray after it. This algorithm will cost us **O(n<sup>2</sup>)** in time and **O(1)** in space, but it isn't enough. It just seems too naive of a solution.
<br>

## Approach 1: Separate even and odd numbers
The next approach that might come to mind is to just iterate over the array and separate the numbers into two groups, even and odd.
Then we build the array again from the start by choosing an even number for each even index and an odd number for each odd index.
This is a good solution, and it does fit in with the least runtime possible for such an algorithm, which is **O(n)** since we have to at least check every element, so that they are all at their place, but it also requires extra space of O(n) for storing the even and odd numbers.

The code for the approach is as follows:
```
vector<int> sortByParityII(vector<int>& nums) {
	int n = nums.size();
	vector<int> evens, odds;
	evens.reserve(n/2);
	odds.reserve(n/2);
	for(int i = 0; i<n; i++) {
		if(nums[i] % 2 == 0) {
			evens.push_back(nums[i]);
		else {
			odds.push_back(nums[i]);
	}
	//filling even spaces
	for(int i = 0; i<n; i+=2) {
		nums[i] = evens[i/2];
	}
	//filling odd spaces
	for(int i = 1; i<n; i+=2) {
		nums[i] = odds[i/2];
	}
	return nums;
}
```
If you are confused by the lines ```evens.reserve(n/2)``` and ```odds.reserve(n/2)```, they are just ensuring beforehand that our vectors have adequate capacities, so that all push back operations are completed in O(1).

**Time: O(n)** as we just iterate the array two times.
**Space: O(n)**, the extra space required for the two arrays.
<br>

## Approach 2: Swap outliers
We can think of this question in another way as well. Since the number of even and odd numbers in the array is equal, if there is one outlier (even number at odd index or vice versa), there must be another outlier somewhere, since if there isn't, then this place has no rightful element which can fill it.
If we find and swap such pairs, we wouldn't have to care about finding the odd or even numbers and separating them. In fact, we can even do it in one iteration only, using two pointers.

Coming back to the question statement, as n is even,, so index 0 is even and the index (n-1) is odd. So starting at index 0 for the even pointer, and n-1 for the odd pointer would be just fine.
We follow the below algorithm until one of the pointers reaches the other end of the array (here i represents the even pointer, and j represents the odd pointer):

1. Keep incrementing i by 2 until either it reaches the other end, or an outlier (odd number at even index).
2. Keep decrementing j by 2 until either it reaches the other end, or an outlier (even number at odd index).
3. Swap nums[i] and nums[j]

You might be thinking, what happens if i stops at an outlier and j reaches the other end, or vice versa?
Well, the fact that n is even, and there being equal number of even and odd numbers prevents that situation from happening (as explained above). If there will be a pair, it will be a valid pair, otherwise both of them will reach the ends.

The code for this approach is as follows:
```
vector<int> sortByParityII(vector<int>& nums) {
	int n = nums.size();
	int i = 0, j = n-1;
	while(i<n) {
		while(i<n && nums[i]%2==0) i+=2;
		if(i==n) break;
		while(j>=0 && nums[j]%2==1) j-=2;
		//swap the outliers
		swap(nums[i], nums[j]);
	}
	return nums;
}
```

**Time: O(n)** as we traverse the array once.
**Space: O(1)** as we only use two pointers, and no other space.

<br>

**Don't forget to upvote** if you liked this post and learned something from it, and feel free to ask any doubts, or suggest any corrections/improvements in the comments.


