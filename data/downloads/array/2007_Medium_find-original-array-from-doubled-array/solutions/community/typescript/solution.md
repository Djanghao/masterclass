# Fast | Map | With explanation

**Author:** pmistry_
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2577589/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2577589/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

```
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if (changed.length % 2 === 1) {
        return [];
    }

    var frequency = [];
    var index_frequency = 0;
    var maxLength = Math.pow(10, 5) + 1;
    while (index_frequency < maxLength) {
        frequency[index_frequency++] = 0;
    }


    for (let n of changed) {
        frequency[n]++;
    }

    if (frequency[0] % 2 === 1) {
        return [];
    }

    var original = [];
    var index_original = 0;
    for (let i = 0; i < maxLength; i++) {
        while (2 * i < maxLength && frequency[i] > 0 && frequency[2 * i] > 0) {
            original[index_original++] = i;
            frequency[i]--;
            frequency[2 * i]--;
        }
    }
    return (index_original === changed.length / 2) ? original : [];
};
```

With Slow internet speed :D
```
Runtime: 496 ms, faster than 78.13% of JavaScript online submissions for Find Original Array From Doubled Array.
Memory Usage: 77 MB, less than 26.56% of JavaScript online submissions for Find Original Array From Doubled Array.
```

Please ref below link for explanation
https://leet-codes.blogspot.com/2022/09/2007-find-original-array-from-doubled.html