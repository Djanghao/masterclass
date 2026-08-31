# Greedy in C++, java & python

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4130630/](https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4130630/)

---

# Intuition
Start from the first number, as long as the product is no large than k, merge that number.
The special case is when we have a 0, we can always reduce the array into only one 0. So the answer is 1.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code

C++
```
class Solution {
public:
    int minArrayLength(vector<int>& nums, int k) {
        const int n = nums.size();
        int r = 0;
        for (int i = 0; i < n;) {
            int j = i;
            for (long long t = 1; j < n && (t *= nums[j]) <= k; ++j) {
                if (nums[j] == 0) return 1;
            }
            ++r;
            i = max(i + 1, j);
        }
        return r;
    }
};
```

Java
```
class Solution {
    public int minArrayLength(int[] nums, int k) {
        final int n = nums.length;
        int r = 0;
        for (int i = 0; i < n;) {
            int j = i;
            long t = 1;
            while (j < n && (t *= nums[j]) <= k) {
                if (nums[j] == 0) return 1;
                j++;
            }
            r++;
            i = Math.max(i + 1, j);
        }
        return r;
    }
}

```

Python
```
class Solution:
    def minArrayLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        r = 0
        i = 0
        while i < n:
            j = i
            t = 1
            while j < n:
                t *= nums[j]
                if t > k:
                    break
                if nums[j] == 0:
                    return 1
                j += 1
            r += 1
            i = max(i + 1, j)
        return r   
```