# Faster solution in Typescript using Map

**Author:** vitpvln
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/4501639/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/4501639/)

---

# Approach
We use `Map` to save the count of repetitions of numbers. And we need only one iteration though the array `nums` using to flags `start` and `and`.

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
function distinctNumbers(nums: number[], k: number): number[] {
    let start = 0;
    let result = [];
    let hashMap = new Map();

    for (let end = 0; end < nums.length + 1; end++) {
        if (end - start === k) {
            result.push(hashMap.size);
            if (hashMap.get(nums[start]) === 1) {
                hashMap.delete(nums[start]);
            } else {
                hashMap.set(nums[start], hashMap.get(nums[start]) - 1);
            }
            start++;
        }

        hashMap.set(
            nums[end],
            hashMap.get(nums[end]) ? hashMap.get(nums[end]) + 1 : 1
        );
    }

    return result;
};
```