# Python 3 -> 94.01% faster with explanation

**Author:** mybuddy29
**Votes:** 25
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/851748/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/851748/)

---

**Suggestions to make it better are always welcomed.**

We know that in arithmetic progression, all the numbers are equally distant.
**Approach 1:** Finding the difference between every pair of number will need space to store and there will be complex logic to identify the correct difference. Hence this won't work.

**Approach 2:** Let's look at the input arr carefully. Sum the first and last numbers of array and then divide it with the length of the array, we can get the correct difference. Why this works?

Imagine: arr = [1,3,7,9,11]. Our missing number x should be somewhere in the array. Let's say hypothetically it's here:
arr = [1,3,7,9,x,11]. 

To go from arr[0] to arr[-1] we have to make 5 progressions. This is the length of the original array. Hence,
progression = (arr[0] + arr[-1])//len(arr)

If there's no progression, that means there's no difference between 2 numbers. Hence return same value, arr[0].

```
def missingNumber(self, arr: List[int]) -> int:
	diff = (arr[-1] - arr[0])//len(arr)

	if diff==0:
		return arr[0]

	for i in range(1, len(arr)):
		if arr[i-1] + diff != arr[i]:
			return arr[i-1] + diff
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**