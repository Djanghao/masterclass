# In depth explanation and step by step walkthrough

**Author:** JamesCommits
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/4712135/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/4712135/)

---

### Problem Understanding

The problem asks for counting distinct numbers in every subarray of length `k` within a given array `nums`. It's a sliding window problem where the window of size `k` moves across the array `nums` from left to right, and for each position of the window, we need to calculate the number of distinct elements within that window.

### Solution Breakdown

The solution uses a sliding window approach with two pointers (`left` and `right`) and an array `counts` to keep track of the occurrence count of each number within the current window. Here\u2019s how it works:

- **Array `counts`**: An array to count occurrences of elements. Since the problem constraints allow numbers up to `10^5`, `counts` is sized accordingly.
- **Variable `distinct`**: Keeps track of the number of distinct elements in the current window.
- **Sliding Window**: Expands by moving `right` and contracts by moving `left`. The size of the window is maintained to be exactly `k`.
- **Logic**: When expanding the window by moving `right`, if we encounter a number for the first time (`counts[nums[right]]++ == 0`), `distinct` is incremented. When the window reaches the desired size `k`, we record `distinct` in the result. Then, to slide the window, we contract it from the left. If the count of the element at `left` becomes 0 after decrementing (`-counts[nums[left++]] == 0`), it means we removed a distinct element, and thus `distinct` is decremented.

### Walkthrough

---

We'll use a simplified version of Example 1 from the problem statement:

### Example:

- **Input**: `nums = [1, 2, 3, 2, 1]`, `k = 3`
- **Expected Output**: `[3, 2, 2]`

This means we are looking for the count of distinct numbers in every subarray of length `3` within the array `nums`.

### Initial Setup:

- `result = []` (will eventually have the size of `3` since `5 - 3 + 1 = 3`)
- `counts = [0, 0, 0, ..., 0]` (an array of size `100001` initialized to `0`)
- `distinct = 0` (no distinct elements counted yet)
- `left = 0` (starting point of our sliding window)

### Step-by-Step Walkthrough:

**Iteration 1**: (right = 0)

- Expand window to include `nums[right] = 1`.
- Since `counts[1]` was `0`, after incrementing, `distinct` becomes `1`.
- `counts = [0, 1, 0, 0, ..., 0]`
- Window size is less than `k`, continue to next iteration.

**Iteration 2**: (right = 1)

- Include `nums[right] = 2`.
- `counts[2]` was `0`, increment `distinct` to `2`.
- `counts = [0, 1, 1, 0, ..., 0]`
- Window size is less than `k`, continue to next iteration.

**Iteration 3**: (right = 2)

- Include `nums[right] = 3`.
- `counts[3]` was `0`, increment `distinct` to `3`.
- `counts = [0, 1, 1, 1, ..., 0]`
- Window size is now `3` (`right - left + 1 == k`), so `result[0] = 3`.
- No need to adjust window yet, as we've just reached the desired size.

**Iteration 4**: (right = 3)

- Move `right` to include `nums[3] = 2`.
- `counts[2]` was `1`, incrementing it doesn't change `distinct`.
- Need to adjust window size by moving `left`. Remove `nums[left] = 1` from window.
- Decrement `counts[1]` to `0`. Since it reaches `0`, decrement `distinct` to `2`.
- `result[1] = 2` (after moving `left` from `0` to `1`).

**Iteration 5**: (right = 4)

- Include `nums[right] = 1`.
- `counts[1]` was `0`, incrementing it to `1` doesn't change `distinct` as `1` was already counted before.
- Adjust window by moving `left`. Remove `nums[left] = 2`.
- Decrement `counts[2]` to `1`. `distinct` remains `2`.
- `result[2] = 2` (after moving `left` from `1` to `2`).

### Final Output:

- `result = [3, 2, 2]`

### Explanation:

- In the first window `[1, 2, 3]`, all elements are distinct, so the count is `3`.
- When the window slides to include `[2, 3, 2]` and then `[3, 2, 1]`, we see that the number of distinct elements is `2` in each case, despite the actual elements changing, because of the overlap and repetition of elements within these windows.

### Summary:

The algorithm effectively maintains a dynamic count of distinct elements within a sliding window of size `k` across the array `nums`. By incrementing and decrementing the `counts` as elements enter and exit the window, and adjusting the `distinct` count accordingly, we can efficiently compute the desired result without needing to repeatedly count elements from scratch for each window.

# Code
```
func distinctNumbers(nums []int, k int) []int {
    result := make([]int, len(nums)-k+1)
    counts := make([]int, 100001)
    distinct := 0
    left := 0

    for right := 0; right < len(nums); right++ {
        if counts[nums[right]] == 0 {
            distinct++
        }
        counts[nums[right]]++

        if right-left+1 == k {
            result[left] = distinct
            counts[nums[left]]--
            if counts[nums[left]] == 0 {
                distinct--
            }
            left++
        }
    }

    return result
}
```