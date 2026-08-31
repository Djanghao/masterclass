# Intuition around the binary search approach

**Author:** pbalogh
**Votes:** 21
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/987209/](https://leetcode.com/problems/split-array-largest-sum/solutions/987209/)

---

Basically, the idea is to redefine the problem.

Instead of thinking of it as how to subdivide your array, think of it as: "How do I set a threshold so that my array will be divided into the right number of parts?"

Now imagine you have a function that takes a threshold and tells you what that threshold would result in -- that is, how many subarrays your main array would be split into.

You could start with a guess, and if your guess is too low, you would get too many subarrays. If your guess is too high, you would get too few subarrays.

To make this concrete, imagine your array is [2,3,4,3,2].

If your guess threshold was 1,000,000, then you would easily fit all these numbers into it, so your subarrays would be 1 -- that is, you wouldn't need to split the array at all.

If your guess threshold was 4, then you'd split this into 5 subarrays like this: [2], [3], [4], [3], [2]  -- because there would be no way of fitting more than one element into a subarray without crossing that threshold.

A threshold lower than 4 would be nonsense, because you wouldn't succeed in fitting your largest element, 4, into it.

This tells us we should never guess lower than our max element.

Similarly, that guess of 1,000,000 was nonsense, because we never need to guess higher than the sum of all our elements in order to fit our array into one subarray.

Now we have all the ingredients for a binary search. We have a lower bound, an upper bound, and a (not-yet-written!) function that tells us if our guess is too high or too low.

So we iteratively guess at the midpoint between lower and upper bounds. If our guess turns out to be too high, then we bring our upper bound down to our guess. If our guess turns out to be too low, we raise our lower bound to our guess.

What's the function that takes a threshold and returns the number of subarrays it will create? Pretty simple:

```
function getSubarrayCountForThreshold(nums, threshold) {
	var numSubarrays = 1; // Our base case
	var sum = 0;
	for(var i = 0; i < nums.length; i++) {
		sum += nums[i];
		// Would this fit into our previous subarray?
		if(sum > threshold) { //No
			numSubarrays++; // we would need a new subarray
			sum = nums[i]; // That starts out by containing this new element
		}
	}
	
	return numSubarrays;
}
```

It seems to me to be pretty similar to Bresenham's line-drawing algorithm.