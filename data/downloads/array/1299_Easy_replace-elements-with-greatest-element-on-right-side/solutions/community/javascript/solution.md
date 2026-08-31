# [JavaScript] Optimal solution w/ explanation

**Author:** tarsisexistence
**Votes:** 43
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/487742/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/487742/)

---

First of all, I created a base array in which I will write the results.

Initially, I already know that there will be a shift in the array: the first value will disappear, and the last will be `-1`. That's why I know that the last `result` value is `-1`.

Then, I go through the input `arr` from the end, each time checking the current value `arr[i]` with the previous value that has already been changed (which has the same index in the resulting array `result[i]`) and set the next bigger value in `result[i-1]` because as I go from the end.

The solution is good because in the end, you no longer need to modify the array. It just needs to be returned.
<br/>

```javascript
const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    
    for (let i = arr.length - 1; i > 0; i -= 1) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    
    return result;
};
```

<br/>

I hope this explanation will be useful to you.

<br/>

**Results**:

Runtime: **72 ms**, faster than **94.81%** of JavaScript online submissions.
Memory Usage: **37.9 MB**, less than **100.00%** of JavaScript online submissions.

<br/>