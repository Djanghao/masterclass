# 🤓O(1) SC | Solution in JS and TypeScript | Learn JS with Question✅|Day-5 ✊🏃

**Author:** vermaamanmr
**Votes:** 185
**Link:** [https://leetcode.com/problems/filter-elements-from-array/solutions/3502618/](https://leetcode.com/problems/filter-elements-from-array/solutions/3502618/)

---

# Intuition
The `filter `function takes an array and a filtering function, and returns a new array containing only the elements that pass the filter. We can think of this as a way to "filter out" unwanted elements from an array, leaving only the ones that meet a certain criteria.

# Approach
The approach used in this implementation is to create a new array `(filteredArr)` and loop through the original array `(arr).` At each iteration, the filtering function `(fn)` is applied to the current element and its index. If the result is truthy, the current element is added to the` filteredArr` using the` push method`.

# Complexity
- Time complexity:
O(n), where n is the length of the input array arr. 

- Space complexity:
O(k), where k is the number of elements in the resulting filtered array. 

# New Learning 
This implementation demonstrates how to use a higher-order function (in this case, fn) to filter elements in an array based on a specific condition. It also shows how to use the push method to add elements to a new array.

# Code in JavaScript
```
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};
```

# Code in TypeScript 
```
type FilterFn<T> = (element: T, index?: number, array?: T[]) => boolean;

function filter<T>(arr: T[], fn: FilterFn<T>): T[] {
    const filteredArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

```
# Code O(1) Space  Complexity

we need to modify the original array in place instead of creating a new filtered array. We can keep two pointers - one pointing to the next position to be filled in the filtered array, and one pointing to the next position to be examined in the original array.

```
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filteredIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            if (i !== filteredIndex) {
                // now I will Swap current element with next available position in filtered array
                var temp = arr[i];
                arr[i] = arr[filteredIndex];
                arr[filteredIndex] = temp;
            }
            filteredIndex++;
        }
    }
    // then we can Remove the remaining elements after filteredIndex
    arr.length = filteredIndex;
    return arr;
};
```

![upvote-2.png](./images/0.png)
