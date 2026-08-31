# Video explanation of 3 solutions with examples

**Author:** LearnWithEmKay
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4936218/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4936218/)

---

https://youtu.be/OacUJCWEZLY


# Code
```
// The man who loves walking will walk further than the man who loves the destination.

function maxSubarrayLength(nums: number[], k: number): number {
    let start = 0;
    let end = 0;
    let n = nums.length;

    let answer = 0;
    let freq: Map<number, number> = new Map();

    while(end < n) {
        freq.set(nums[end], (freq.get(nums[end]) || 0) + 1);

        if(freq.get(nums[end]) > k) { // we just violated the condition of a good subarray
            while(freq.get(nums[end]) > k) {
                freq.set(nums[start], freq.get(nums[start]) - 1);
                start++;
            }
        }

        answer = Math.max(answer, end - start + 1);

        end++;
    }

    return answer;
};
```