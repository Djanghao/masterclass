# Beat 100%

**Author:** ngoc23319952
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/4708430/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/4708430/)

---


![Screenshot 2024-02-11 at 07.25.08.png](./images/0.png)


# Approach
1. Initialize the Difference Array: Create a diff array with size greater than 2 * limit (where limit is the largest possible value in the original array) to keep track of the number of changes required for each possible total value from 2 to 2 * limit.

2. Update Difference Array: Iterate through the first half of the original array and update the diff array based on the range of values where each change will affect the sum of the pair of numbers.

3. Calculate Minimum Number of Changes: Iterate through the diff array to calculate the minimum number of changes needed to make all pair sums equivalent.
# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
function minMoves(nums: number[], limit: number): number {
    const diff = new Array(2 * limit + 2).fill(0);
    const n = nums.length;

    for (let i = 0; i < n / 2; i++) {
        const a = nums[i];
        const b = nums[n - 1 - i];

        diff[2] += 2;
        diff[Math.min(a, b) + 1]--;
        diff[a + b]--;
        diff[a + b + 1]++;
        diff[Math.max(a, b) + limit + 1]++;
    }

    let res = diff[2];
    let current = diff[2];
    for (let i = 3; i <= 2 * limit; i++) {
        current += diff[i];
        res = Math.min(res, current);
    }

    return res;
}

```