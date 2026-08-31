# [Python3/C++/Java] Sweep Line - Detail Solution

**Author:** dolong2110
**Votes:** 13
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6055367/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6055367/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Update in Range -> Sweep Line

# Approach
<!-- Describe your approach to solving the problem. -->

This code efficiently determines the minimum number of queries required to transform the nums array into a zero array (all elements equal to 0). It uses a sweep line technique to process range updates efficiently.

**1.Initialization**

- `n = len(nums)`: Stores the length of the input array `nums`.
- `cnt = [0 for _ in range(n + 1)]`: Creates a list `cnt` of size `n + 1` initialized with zeros. This list will store the accumulated effect of decrement operations on each index of nums. The extra element at the end simplifies range updates.
- `s = k = 0`: Initializes two variables:
    - `s`: Keeps track of the cumulative sum of decrements applied to the current index of `nums`.
    - `k`: Counts the number of queries processed.

**2. Iterating through nums**

- `for i in range(n)`: This loop iterates over each index `i` in the nums array.

**3. Processing queries**

- `while s + cnt[i] < nums[i]:`: This while loop continues processing queries as long as the current accumulated decrement `s + cnt[i]` is less than the value at the current index `nums[i]`. This ensures that we process enough queries to make the element at index `i` zero.
    - `k += 1`: Move to the next query in the queries list. This make sure the While loop will not run forever because of the below condition.
    - `if k - 1 >= len(queries): return -1`: If we have processed all queries `k - 1` because `k` was already incremented and still haven't made the current element zero, it's impossible to achieve a zero array. In this case, the function `returns -1`.
    - `l, r, val = queries[k - 1]`: Extracts the left index `l`, right index `r`, and decrement value `val` from the current query `queries[k - 1]`.
    - `if r < i: continue`: If the right index `r` of the current query is less than the current index `i` in the nums array, it means this query doesn't affect the current element. So, we skip this query and move to the next one using `continue`.
    - `cnt[max(l, i)] += val`: This is where the sweep line technique comes into play. We add the val to the cnt list at the index `max(l, i)`. This is done to mark the beginning of the decrement effect of the current query. We use `max(l, i)` to handle cases where the query's range starts before the current index `i`.
    - `cnt[r + 1] -= val`: We subtract the val from the cnt list at index `r + 1`. This marks the end of the decrement effect of the current query. By adding val at the beginning and subtracting it at the end, we effectively apply the decrement to the entire range `[l, r]` without actually modifying the nums array directly.

**4. Accumulating decrements**

- `s += cnt[i]`: After processing the necessary queries to make the element at index `i` zero, we update the cumulative decrement sum `s` by adding the accumulated decrement value `cnt[i]` at that index.

**5. Returning the result**

- `return k`: Finally, the function returns the value of `k`, which represents the minimum number of queries required to make the `nums` array a zero array.

**In summary**

This code uses a sweep line technique and a clever way to store and accumulate the effects of range decrements to efficiently find the minimum number of queries needed to turn the input array into a zero array. This approach avoids redundant modifications to the original array and improves the overall efficiency of the solution.

# Complexity
- Time complexity: $$O(N + M)$$ with `N` is length of `nums` and `M` is length of `queries
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)
        cnt = [0 for _ in range(n + 1)]
        s = k = 0
        for i in range(n):
            while s + cnt[i] < nums[i]:
                k += 1
                if k - 1 >= len(queries): return -1
                l, r, val = queries[k - 1]
                if r < i: continue
                cnt[max(l, i)] += val
                cnt[r + 1] -= val
            s += cnt[i]
        return k
```
```C++ []
class Solution {
public:
    int minZeroArray(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        vector<int> cnt(n + 1, 0);
        int s = 0, k = 0;

        for (int i = 0; i < n; ++i) {
            while (s + cnt[i] < nums[i]) {
                k++; // Increment k before accessing queries
                if (k - 1 >= queries.size()) {
                    return -1;
                }
                int l = queries[k - 1][0], r = queries[k - 1][1], val = queries[k - 1][2];
                if (r < i) {
                    continue;
                }
                cnt[max(l, i)] += val;
                cnt[r + 1] -= val;
            }
            s += cnt[i];
        }
        return k;
    }
};
```
```java []
class Solution {
    public int minZeroArray(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] cnt = new int[n + 1];
        int s = 0, k = 0;

        for (int i = 0; i < n; ++i) {
            while (s + cnt[i] < nums[i]) {
                k++; // Increment k before accessing queries
                if (k - 1 >= queries.length) {
                    return -1;
                }
                int l = queries[k - 1][0], r = queries[k - 1][1], val = queries[k - 1][2];
                if (r < i) {
                    continue;
                }
                cnt[Math.max(l, i)] += val;
                cnt[r + 1] -= val;
            }
            s += cnt[i];
        }
        return k;
    }
}
```