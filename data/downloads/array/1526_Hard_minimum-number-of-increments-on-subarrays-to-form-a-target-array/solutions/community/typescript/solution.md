# Simple solution/intuition in TypeScript / Python

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/4272701/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/4272701/)

---

# Intuition
Here we have:
- list of integers `target`
- our goal is to recreate `target` from `initial` list of integers

An `initial` list consists with `0`-s. It has **the same** structure as in `target`.

The key to solve this problem is to think about **neighbours** and how they're related to each other.

We should move only in **right** direction and at each step we interested in **decrementing at most** `target[i]`- s as we can.

```
# Example
target = [3,1,5,4,2]

# Take a look at first two neighbours.
a = 3
b = 1

# How much 'decrements' we need to make them 0-s?
# max(a, b) => 3

# Okay. Let's proceed to the next pair:

a = 1
b = 5

# What about this ones?
# If you repeat the same process before, it WON'T work
# since we've already DECREMENTED some points from 3, and 1,
# respectively. But we have a 'diff' as b > a and b - a = 4
# Will it help us somehow?

# At this step try to 'glue' first integer with this pair 
# and figure out the process of decrementing

seq = [3, 1, 5] => [(2), (0), (4)] => [(1), 0, 4] => [(0), 0, 4] => 
=> [0, 0, (3)] => [0, 0, (2)] => [0, 0, (1)] => [0, 0, (0)]

# For the first step we make 3 decrements, and at the second step 4.
# diff[0] + diff[1] = 7

# Conclusion: at each step we need to take care about cur. maximum.
# If it's higher than the previous one, increment count of steps as
# max - min, otherwise continue to move forward.
``` 

# Approach
1. declare `ans` and `curMax` as `target[0]`
2. iterate over `target`
3. if `curMax < target[i]`, increment `ans += target[i] - curMax`
4. and change `curMax` at each step
5. return `ans`

# Complexity
- Time complexity: **O(N)** to iterate over `target`

- Space complexity: **O(1)**, we don't allocate extra space

# Code in Python3
```
class Solution:
    def minNumberOperations(self, target: List[int]) -> int:
        ans = target[0]
        curMax = target[0]

        for i in range(1, len(target)):
            if curMax < target[i]: ans += target[i] - curMax 

            curMax = target[i]
        
        return ans
```
# Code in TypeScript
```
function minNumberOperations(target: number[]): number {
    let ans = target[0]
    let curMax = target[0]

    for (let i = 1; i < target.length; i++) {
        if (curMax < target[i]) ans += target[i] - curMax

        curMax = target[i]
    }

    return ans
};
```