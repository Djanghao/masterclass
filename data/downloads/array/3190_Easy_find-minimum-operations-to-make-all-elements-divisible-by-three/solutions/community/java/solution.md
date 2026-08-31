# O(n) || Math

**Author:** fahad_Mubeen
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5352878/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5352878/)

---

# Intution
- The remainder of a number when divided by 3 falls within the range [1, 2]. In either case, we increment the answer by one. Specifically, if the remainder is 2, we increment the answer; otherwise, we perform a decrement operation.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minimumOperations(vector<int>& nums) {
        int ans = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i]%3 != 0) ans++;
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int minimumOperations(int[] nums) {
        int ans = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % 3 != 0) {
                ans++;
            }
        }
        return ans;
    }
}

```
```Python3 []
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        ans = 0
        for num in nums:
            if num % 3 != 0:
                ans += 1
        return ans-
```
