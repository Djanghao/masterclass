# Greedy

**Author:** fahad_Mubeen
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5352820/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5352820/)

---

# Intution
- The goal is to ensure all elements in the array nums are non-zero using the minimum number of operations and each operation allows flipping three consecutive elements (nums[i], nums[i+1], nums[i+2]).

-  Use a two-pointer technique (i and j) to iterate through the array and a loop to check and perform operations on consecutive elements, counting operations (ans). 
- Ensure after processing that no elements in nums are zero and return ans.

# SideNote
With practice, you'll become adept at solving these types of questions. There isn't a straightforward intuition for such problems; it involves making observations and methodically/greedily approaching the problem while considering its constraints. You might consider using a sliding window approach to some extent, but this question doesn't fit neatly into any standard algorithm classification.

# Complexity
- Time complexity: $$O(n*k)$$ where k = 3 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int n = nums.size(), i = 0, j = 2, ans = 0;
        while(j < n){
            if(nums[i] == 0){
                ans++;
                for(int k = i; k < i + 3; k++){
                    nums[k] = nums[k] == 0 ? 1 : 0;
                }
            }
            i++, j++;
        }
        for(int i = 0; i < n; i++){
            if(nums[i] == 0) return -1;
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int minOperations(int[] nums) {
        int n = nums.length;
        int i = 0, j = 2, ans = 0;
        
        while (j < n) {
            if (nums[i] == 0) {
                ans++;
                for (int k = i; k < i + 3; k++) {
                    nums[k] = (nums[k] == 0) ? 1 : 0;
                }
            }
            i++;
            j++;
        }
        
        for (int m = 0; m < n; m++) {
            if (nums[m] == 0) {
                return -1;
            }
        }
        
        return ans;
    }
}

```
```Python3 []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        i, j, ans = 0, 2, 0
        
        while j < n:
            if nums[i] == 0:
                ans += 1
                for k in range(i, i + 3):
                    nums[k] = 1 if nums[k] == 0 else 0
            i += 1
            j += 1
        
        for m in range(n):
            if nums[m] == 0:
                return -1
        
        return ans

```
# Q/A
**Question** - *How can we prove that the solution we are getting from this approach is minimum?*

**Answer** - 
The key insight is that the problem has optimal substructure. This means that the optimal solution for the entire array includes optimal solutions for its subarrays.

Suppose there was a better solution that didn't flip immediately upon seeing a 0. This would mean:

We skip flipping at position i (where nums[i] = 0).
We flip at some later position j (where j > i).
But this can't be better because:

We still need to make the same number of flips (or more).
We might run out of array length, making the problem unsolvable.
Therefore, the greedy choice of flipping immediately is always optimal.