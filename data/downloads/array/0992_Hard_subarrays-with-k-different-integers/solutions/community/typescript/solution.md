# exactly (k)= atMost(k)-atMost(k-1) , [Typescript/Javascript] O(n) time and space solution

**Author:** unreal0901
**Votes:** 2
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4945557/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4945557/)

---

**Same Question:** https://leetcode.com/problems/binary-subarrays-with-sum


**Intuition**
The problem requires finding the count of subarrays with exactly `k` distinct elements. This can be solved by finding the count of subarrays with at most `k` distinct elements and subtracting the count of subarrays with at most `k-1` distinct elements.

**Approach**
The approach is to use a sliding window technique along with a HashMap to keep track of the distinct elements in the current window. We define a helper function `atMost(k)` that returns the count of subarrays with at most `k` distinct elements. The main function `subarraysWithKDistinct` then calculates the desired result by calling `atMost(k)` and subtracting `atMost(k-1)` from it.

**Complexity**
- Time complexity: **O(n)**, where `n` is the length of the input array `nums`. We iterate through the array once in the `atMost` function.
- Space complexity: **O(n)**, where `n` is the length of the input array `nums`. In the worst case, the HashMap may store all the distinct elements in the array.

**Code**
```typescript
function subarraysWithKDistinct(nums: number[], k: number): number {
    let n = nums.length;

    function atMost(k: number) {
        let l = 0;
        let r = 0;
        let mp = new Map();
        let ans = 0;

        while (r < n) {
            mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);

            while (mp.size > k) {
                if (mp.has(nums[l])) {
                    if (mp.get(nums[l]) === 1) mp.delete(nums[l]);
                    else mp.set(nums[l], mp.get(nums[l]) - 1);
                }
                l++;
            }

            ans += r - l+1;
            r++;
        }

        return ans;
    }

    return atMost(k) - atMost(k - 1);
};
```

**Explanation for adding `(r-l+1)` to `ans`**
If [i \u2026 j] is a valid subarray, ex. `[1,2,3,4]`
There are 4 subarrays with length 1, `[1], [2], [3], [4]`
3 with length 2: `[1,2], [2,3], [3,4]`
2 with length 3
1 with length 4
So if at every step we added the length:
`[1]` -> add 1
`[1,2`] -> add 2
`[1,2,3]` -> add 3
`[1,2,3,4]` -> add 4
