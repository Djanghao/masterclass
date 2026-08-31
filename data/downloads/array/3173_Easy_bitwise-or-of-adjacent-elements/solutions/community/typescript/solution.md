# Time: O(N) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5493949/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5493949/)

---

# Code 1
![Submission runtime](./images/0.png)
[Submission](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/submissions/1324760547/)

- Time complexity: $O(N)$

- Space complexity: $O(1)$

```typescript
function orArray(nums: number[]): number[] {
    const N = nums.length;
    const answer = Array.from(nums);
    for (let i = 1; i < N; ++i) {
        answer[i-1] |= answer[i];
    }
    --answer.length;
    return answer;
};
```

# Code 2 - In-place

- Time complexity: $O(N)$

- Space complexity: $O(1)$

```typescript
function orArray(nums: number[]): number[] {
    const N = nums.length;
    for (let i = 1; i < N; ++i) {
        nums[i-1] |= nums[i];
    }
    --nums.length;
    return nums;
};
```