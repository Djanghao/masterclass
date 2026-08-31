# 💡 Javascript building up solution with easy explanation o(n log n) time, o(n) space

**Author:** avakatushka
**Votes:** 8
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/1397176/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/1397176/)

---

The problem could be rephrased. Could we find a pair for each number in the array, so one element of the pair is twice bigger than other? 

To easy check if there is an element in the array, we can use counter : a map which counts how many times each number appeared. For [-1, -2, 1, 1, 2, 2] counter would be (-1: 1, -2: 1, 1:2, 2:2).

## Easy mistake
But if we approach the map to make pairs for the elements immediately, we can run into trouble.
Presuming we have this array. [2, 4, 1, 8].
We can pair 2 with 4. And find no pair for 1, cause the array is unsorted!
So first of all, we should sort the array.

## Sorting array in JS
By default array sort in JS is compared number as they were characters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort  It could be strange for someone who had come from python world. So be careful and pass the proper function to sort, to make it sort numbers. 
```
    arr.sort((a, b) => a - b);
```
## Pairs for negative numbers
When you approach the sorted array and start with the smallest negative numbers, they should be **divided by 2** to identify their pairs. And when you jump to processing the positive ones, they should be **multiplied by 2**. Alternatively you can use sorting by modules, not real values  to escape this problem. 
## Coding solution 
```
arr.sort((a, b) => a - b);
let counter = new Map();
for (let num of arr) {
	if(!counter.has(num)) {
		counter.set(num, 0);
	}
	counter.set(num, counter.get(num) + 1);
}
for (let num of arr) {
	if (!counter.has(num)) {
		continue;
	}
	let pair = num >= 0 ? num * 2 : num / 2;
	if(!counter.has(pair)) {
		return false;
	}
	for (let k of [num, pair]) {
		counter.set(k, counter.get(k) - 1);
		if (counter.get(k) === 0) {
			counter.delete(k);
		}
	}
}
return true;
```

