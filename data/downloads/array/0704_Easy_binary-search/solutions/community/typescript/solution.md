# Easy TypeScript solution with detailed explanation

**Author:** Zhenyuan0Li
**Votes:** 6
**Link:** [https://leetcode.com/problems/binary-search/solutions/2622924/](https://leetcode.com/problems/binary-search/solutions/2622924/)

---

The description and general algorithm of Binary Search is easy, but the details are devil: `mid` +1 or -1, using \u2264 or < in the while loop.

### Framework of binary search

```ts
const binarySearch = (nums: number[], target: number): number => {
	let [left, right] = [0, 0];
	while (...) {
		const mid = left + (right - left) / 2;
		if (nums[mid] === target) {
			...
		} else if (nums[mid] < target) {
			...
		} else if (nums[mid] > target) {
			...
		} 
	}
	return ...;
}
```

When analysing binary search, try to avoid `else` statement, and use `else if` to display each details. `...` is the place where might go wrong. Also `left + (right - left) / 2` is equivalent to `(left + right) / 2` , to avoid the memory leak caused by the large value of `left` and `right` , the first is better. 

### Find only one index (basic Binary Search)

```ts
function binaraySearch(nums: number[], target: number): number {
  let left = 0;
	let right = nums.length - 1; // attention
	while(left <= right) {
		// js(dynamic type) remember to use Math.floor() to make it a integer
	    const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1; // attention
        } else if (nums[mid] > target) {
            right = mid - 1; // attention
        }  
    }
	return -1;
};
```

 **1. In the while loop condition, why `\u2264` instead of `<`?**

Because the initialisation of `right` is `nums.length-1` . 

These two operators are both used in binary search, but for different scenario. The first is equal to `[left, right]`, and the latter is equal to `[left, right)`. In this algorithm, we use `[left, right]` closing interval, which is the exact range each time we search.

But when to stop searching? 1. we find the target value; 2. the searching interval is empty, which means we don\u2019t find the target.

- the break condition of `while(left \u2264 right)` is `left == right + 1`, which is equal to `[right+1, right]`, the interval is obviously empty. For example, take `right = 2`, then the interval is `[3, 2]`, which is empty. You cannot find a number that is larger or equal than 2, but smaller or equal than 3.
- the break condition of `while(left < right)` is `left == right + 1`, which is equal to `[right, right]`, it is not empty, since right itself is in this interval. For example, take `right = 2`, then the interval is  `[2, 2]`. and 2 is in this interval.

Hence, if using open interval, there will be one missing element that we are not included in the searching process. But since we know where is the problem, and if we insist to use open interval, just update the return statement.

```ts
// ...
while (left < right) {
	//...
}
return nums[left] === target ? left : -1;
```

1. **Why `left = mid + 1`, `right = mid -  1`? I saw other materials are using `right = mid` or `left = mid`**

Based on previous explanation, the searching interval is `[left, right]`. What is the next interval we want if `mid` is not `target`? `[left, mid - 1]`, `[mid+1, right]`. Because we already searched `mid`, it should be excluded in the next round searching. 

1. **What is the con of this algorithm?**

For example, given `nums=[1, 2, 2, 2, 3]`, and `target=2`, it will only return index 3. What if we want we want the first occurring index 1? or the last occurring index 3.