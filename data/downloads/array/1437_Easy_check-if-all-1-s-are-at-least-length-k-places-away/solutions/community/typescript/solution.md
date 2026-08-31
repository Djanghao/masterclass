# 2 Solutions | Time: O(N) | Space: O(1)

**Author:** rojas
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4207785/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4207785/)

---

# Code 1: Regex
- Time complexity: $O(N)$
- Space complexity: $O(N)$
```Typescript
function kLengthApart(nums: number[], k: number): boolean {
    return k < 1 || !(new RegExp(`10{0,${k-1}}1`)).test(nums.join(""));
};
```

# Code 2: Next Allowed
- Time complexity: $O(N)$
- Space complexity: $O(1)$
```Typescript
function kLengthApart(nums: number[], k: number): boolean {
    const N = nums.length;

    ++k;
    let nextAllowed = 0;
    for (let i = 0; i < N; ++i) {
        if (nums[i] === 0) {
            continue;
        }
        if (i < nextAllowed) {
            return false;
        }
        nextAllowed = i + k;
    }

    return true;
};
```