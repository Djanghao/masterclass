# 💥 Runtime beats 100.00%, Memory beats 66.67% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/5747314/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/5747314/)

---

# Intuition
Imagine you're trying to make two sequences of numbers strictly increasing. You have two arrays, nums1 and nums2, and you can swap elements at the same index between these arrays. Your goal is to find the minimum number of swaps required to make both arrays strictly increasing.

Think of it like organizing two rows of numbers so that each number is smaller than the one that comes after it. If you need to swap some numbers between the rows to achieve this, you want to minimize the number of swaps.

# Approach
Start Small:

Begin with the first element. If it's not swapped, the number of swaps required is zero (dp0[0] = 0). If it's swapped, you'll need one swap (dp1[0] = 1).

Move Step-by-Step:

For each subsequent element, decide whether to swap or not based on whether the current and previous numbers in both arrays are strictly increasing. You'll keep track of two things:

dp0[i]: Minimum swaps needed up to index i without swapping the current index.
dp1[i]: Minimum swaps needed up to index i with swapping the current index.

Update Your Decisions:

At each step, update the minimum swaps required based on whether you swap or not:

If you don't swap, check if the previous element conditions are satisfied without swapping.
If you swap, check if the previous element conditions are satisfied with swapping.

Choose the Best Option:

After processing all elements, you\u2019ll have two possible values for the last index: either you didn\u2019t swap or you did. The result will be the minimum of these two values.

# Complexity
- Time complexity:
O(n): The approach involves a single pass through the arrays (from the start to the end), making it linear in terms of time. For each element, we do constant-time work (checking and updating values).

- Space complexity:
O(n): We use arrays dp0 and dp1 to keep track of the minimum swaps up to each index. Since these arrays are of size n (the length of the input arrays), the space used is linear with respect to the number of elements.

# Code
```typescript []
function minSwap(nums1: number[], nums2: number[]): number {
    const n = nums1.length;
    let dp0 = new Array(n).fill(Infinity); // Minimum swaps without swap at index i
    let dp1 = new Array(n).fill(Infinity); // Minimum swaps with swap at index i

    // Initialize for the first index
    dp0[0] = 0;
    dp1[0] = 1;

    for (let i = 1; i < n; i++) {
        const noSwap = nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i];
        const swap = nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i];

        if (noSwap) {
            dp0[i] = Math.min(dp0[i], dp0[i - 1]);
            dp1[i] = Math.min(dp1[i], dp1[i - 1] + 1);
        }
        
        if (swap) {
            dp0[i] = Math.min(dp0[i], dp1[i - 1]);
            dp1[i] = Math.min(dp1[i], dp0[i - 1] + 1);
        }
    }

    return Math.min(dp0[n - 1], dp1[n - 1]);
}

```