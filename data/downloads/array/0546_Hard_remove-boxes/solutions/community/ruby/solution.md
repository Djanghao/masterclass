# Beats 100% Ruby solution in Time and Space

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/4289541/](https://leetcode.com/problems/remove-boxes/solutions/4289541/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n ^ 4) -> n ^ 3 for recursion stack level and n for the loop inside dfs

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n ^ 3) -> for 3D dp array

# Code
```
# @param {Integer[]} boxes
# @return {Integer}
def remove_boxes(boxes)
    n = boxes.length
    @boxes = boxes
    # left, right and streak count
    @dp = Array.new(n) { Array.new(n) { Array.new(n) } }

    dfs(0, n - 1, 0)
end

def dfs(left, right, streak)
    return 0 if left > right

    return (streak + 1) * ( streak + 1) if left == right # only 1 element left

    return @dp[left][right][streak] if @dp[left][right][streak]

    # streak of left subarray
    # starting streak the again for the right subarray
    max_count = (streak + 1) * (streak + 1) + dfs(left + 1, right, 0)

    # k is basically the break point for 2 subarrays
    ((left + 1)..right).each do |k|
        # 1 3 2 1 2 3 4 3 1
        # l     k         r => l = left, r = right
        # we need calculate subarray [3, 2]. Hence, left + 1 and k - 1, and we are starting a new streak, hence streak = 0
        # for the right subarray, we start from k until right, streak + 1 since we found 2 consecutive 1's at 0th and 3rd index
        if @boxes[left] == @boxes[k]
            max_count = [max_count, dfs(left + 1, k - 1, 0) + dfs(k, right, streak + 1)].max
        end
    end

    @dp[left][right][streak] = max_count
    @dp[left][right][streak]
end
```