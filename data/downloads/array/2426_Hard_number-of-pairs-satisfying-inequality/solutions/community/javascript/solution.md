# ✅100%✅SIMPLE✅solution with Binary-Search

**Author:** kang_hyun
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2647305/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2647305/)

---

Sorry, I'm not good at english and explanation

**Explanation**

Let's see the conditions.

```
0 <= i < j <= n - 1 and
nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff.
```

**First,** *i* is always smaller than *j*

It means we just need to compare *i* th elem with *0 ... ( i-1 )* th elems.

thus, we can't sort this array.

**Second,** it is equation, you can change it like below.

nums1[ *i* ] **- nums1[ *j* ]** <= **nums2[ *i* ]** - nums2[ *j* ] + diff

=> nums1[ *i* ] **- nums2[ *i* ]** <= **nums1[ *j* ]** - nums2[ *j* ] + diff

Then we can get a hint with this permuted equation.

diff + *j* th sum of both array should be bigger than *i* th sum of both array or equal

**conclusion** is we need to find a good solution that compare value fast and memoize past values with ascending orders.

so I used binary search and i tried to find both index in binSeach function
1. index of satisfying *condition 2* 
2. index of *j* th sum

```
const binSearch = (arr, sum, diff) => {
    let l1 = 0;
    let r1 = arr.length;
    
    let l2 = 0;
    let r2 = arr.length;
    
    while(l1 < r1 || l2 < r2) {
		// 1. index of satisfying *condition 2* 
        if(l1 < r1) {
            const mid = Math.floor((l1 + r1) / 2);
            if(arr[mid] <= sum + diff) l1 = mid + 1;
            else r1 = mid;
        }
		// 2. index of *j* th sum
        if(l2 < r2) {
            const mid = Math.floor((l2 + r2) / 2);
            if(arr[mid] <= sum) l2 = mid + 1;
            else r2 = mid;
        }
    }
    return [l1, l2];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, diff) {    
    let answer = 0;
    const past = [];
    
    for(let i = 0; i < nums1.length; i++) {
        const sum = nums1[i] - nums2[i];
        const [cnt, pos] = binSearch(past, sum, diff);
        answer += cnt;
        past.splice(pos, 0, sum);
    }
    
    return answer;
};
```