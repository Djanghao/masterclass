# SHORT(only 2 lines!) + sweet TypeScript solution (top 1% speed)

**Author:** nikmerlock
**Votes:** 30
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/1818765/](https://leetcode.com/problems/contains-duplicate/solutions/1818765/)

---

## Solution
**Link to submission \u2192  ([click here](https://leetcode.com/submissions/detail/653157243/))**
```typescript 
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums);
    return (set.size < nums.length);
};
```

### LeetCode output:
* Runtime: **76 ms**, faster than **99.50%** of TypeScript online submissions for Contains Duplicate.
* Memory Usage: **51.7 MB**, less than **22.17%** of TypeScript online submissions for Contains Duplicate.



 ### \u261D\uFE0F Considerations:
>  Although this solution is acceptable given the constraints, it is worth noting that as the input
>   *```nums```* grows larger in size, constructing a new Set object with an input array (*```nums```*, in this case) becomes increasingly less efficient.
>
> For larger input array sizes, it may be more performant to add to the set iteratively (see below)...
> 

## Solution (alt.)
**Link to submission \u2192  ([click here](https://leetcode.com/submissions/detail/653717028/))**
```javascript
// javascript
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let x of nums) {
		// short circuits the loop at the first instance of a duplicate
        if (set.has(x)) return true;
        set.add(x);
    }
    return false;
};
```

### LeetCode output:
* Runtime: **76 ms**, faster than **98.71%** of JavaScript online submissions for Contains Duplicate.
* Memory Usage: **51.4 MB**, less than **22.30%** of JavaScript online submissions for Contains Duplicate.

---

## Explanation:
Source: [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#specifications)
### \u301D
>  [In JavaScript] the ```Set``` object lets you **store unique values** of any type, whether primitive >values or object references.
>
> ### ...
>
>### Relationship with arrays:
>```javascript
>let myArray = ['value1', 'value2', 'value3']
> 
> // Use the regular Set constructor to transform an Array into a Set
> let mySet = new Set(myArray)
>
> mySet.has('value1')     // returns true
> 
> // Use the spread operator to transform a set into an Array.
> console.log([...mySet]) // Will show you exactly the same Array as myArray
>
>```
>
###  \u301E