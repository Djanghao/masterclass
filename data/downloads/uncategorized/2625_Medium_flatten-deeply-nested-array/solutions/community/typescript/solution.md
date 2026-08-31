# Recursive TypeScript solution

**Author:** Joshua_desjones
**Votes:** 11
**Link:** [https://leetcode.com/problems/flatten-deeply-nested-array/solutions/3406747/](https://leetcode.com/problems/flatten-deeply-nested-array/solutions/3406747/)

---

# Approach
Any time I need to traverse a nested data structure, I reach for recursion.

Intuitively, we need to loop through the array and check if each element is a number. If so, it is already flat, so it can be pushed into our result. If the element is also an array, we need to loop it as well and check each of its elements, etc., until we reach the level requested.

So we need to create a function that will check each element in an array and recursively flatten it if it is also an array.

# Complexity
- Time complexity: $$O(n)$$ because in the worst case, we have to check every element of the array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ because we are using recursion, which means we will be pushing function calls onto the stack. In the worst case, we push a function call for each element of each array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type MultiDimensionalArray = (number | MultiDimensionalArray)[];


var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {

    // base case. If we are on depth 0, we don't flatten the element
    if (n === 0) {
        return arr;
    }
    
    // temp array to hold the flattened results for this level of the recursion
    const result: MultiDimensionalArray = [];

    // loop the elements of this array. If they are numbers, don't need to flatten,
    // just push into the result. If they are arrays, we need to flatten,
    // so recursively call the flat function, then spread the returned value and push into result.
    arr.forEach(el => {
        if (typeof el === 'number') {
            result.push(el);
        } else {
            result.push(...flat(el, n - 1));
        }
    })

    return result;
};



```