# TypeScript Solution: (Beats 100%) (Two Pointers) (O(M + N)) ✔📜

**Author:** adhamniazy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2981414/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2981414/)

---

# Approach
We will mark the two arrays with `p1`, `p2` then we will try to catch the max gap between `i`, `j`.

# Complexity
- Time complexity: $$O(n + m)$$

- Space complexity: $$O(1)$$

# Code
```ts
function maxDistance(nums1: number[], nums2: number[]): number {
    let p1 = 0, p2 = 0, ans = 0;
    while ( p1 < nums1.length && p2 < nums2.length ) {

        /* 
            If nums1[p1] is larger then we need to go one step
            to decrease nums1[p1]
         */
        if ( nums1[p1] > nums2[p2] ) p1++;
        /*
            check if this diff is the max or not then take the max diff
        */
        else {
            ans = Math.max(ans, p2 - p1);
            p2++;
        }
    }

    return ans;
};
```