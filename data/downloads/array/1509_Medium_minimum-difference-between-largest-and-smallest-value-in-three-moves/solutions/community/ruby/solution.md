# 💠 Ruby one-liner solution

**Author:** lowie_
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406655/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406655/)

---

# Intuition

If the length of the array is $4$ or less, we could easily see that the answer is $0$, because we have enough operations to turn all elements of the array to the same number.

Otherwise, we can see that to achieve the best answer, we would have to remove some largest, or some smallest numbers, or both, from the array.

# Approach

Let's set $nums' = sort(nums)$, the answer will be one of four:

- $nums'[n - 4] - num'[0]$.
- $nums'[n - 3] - num'[1]$.
- $nums'[n - 2] - num'[2]$.
- $nums'[n - 1] - num'[3]$.

Therefore, we will try some way to create the enumerator with these 4 elements and use `min` function on it.

We will also use `sort!` to modify `nums`, instead of `sort` which would just return the sorted array without any modification. Note that this is not a good practice at all, but it would help solving the one-liner challenge.

# Complexity
- Time complexity: $O(n * log(n))$

- Space complexity: $O(1)$

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def min_difference(nums)
    nums.sort!.length <= 4 ? 0 : 4.times.map { |i| nums[i - 4] - nums[i] }.min
end
```