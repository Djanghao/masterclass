# Simple, short, greedy solution with explanation

**Author:** bora_marian
**Votes:** 1
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5831124/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5831124/)

---

# Intuition
- First hint comes from the constrains of the problem 1 <= nums.length <= 10^5, meaning we are expected to solve it in O(N) or O(N logN).
- from $$(j - i) * nums[i], j > i$$ => we choose j as $$nums[j] > nums[i]$$ only then the result is maximized.
- we must include n-1 in the result
> We could use a stack to maintain the positions and add to the stack j only when $$nums[j] > nums[i]$$. We need only the top of the stack so I used only a variable li maintaining the last position j
# Complexity
- Time complexity:O(N)
- Space complexity: O(1)

\uD83D\uDCAA\uD83D\uDE80Keep leetcoding! Keep improving!
# Code
```cpp []
class Solution {
public:
    long long findMaximumScore(vector<int>& nums) {
        int li = 0, n = nums.size();
        long res = 0;
        for(int i = 0; i < n; i++) {
            if (nums[i] > nums[li]) {
                res += (long long)nums[li] * (i - li);
                li = i; 
            }
        }
        if (li != n-1) {
            res += (long long) nums[li] * (n-1 - li);
        }

        return res;
    }
};
```
```csharp []
public class Solution {
    public long FindMaximumScore(IList<int> nums) {
        int li = 0, n = nums.Count;
        long res = 0;
        for(int i = 0; i < n; i++) {
            if (nums[i] > nums[li]) {
                res += (long)nums[li] * (i - li);
                li = i; 
            }
        }
        if (li != n-1) {
            res += (long) nums[li] * (n-1 - li);
        }

        return res;
    }
}
```