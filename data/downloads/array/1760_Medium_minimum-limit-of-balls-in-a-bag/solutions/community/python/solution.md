# Simple and Easy Solution | Binary Search |  ✅Beats 100% | C++| Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6121632/](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6121632/)

---


---


# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F  

---

## Connect with me on Linkedin [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).  

---


## Follow me also on Codeforces: [Bijoy Sing](https://codeforces.com/profile/BijoySingh7)

###### *Solution in C++, Python, Java, and JavaScript*

```cpp []
class Solution {
public:
    int minimumSize(vector<int>& nums, int maxOperations) {
        int left = 1, right = *max_element(nums.begin(), nums.end());    
        int ans = right;

        while (left <= right) {
            int mid = (left + right) / 2, ops = 0;

            for (int n : nums) {
                ops += (n - 1) / mid;
                if (ops > maxOperations) break;
            }

            if (ops <= maxOperations) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return ans;
    }
};
```

```python []
class Solution:
    def minimumSize(self, nums, maxOperations):
        left, right = 1, max(nums)
        ans = right

        while left <= right:
            mid = (left + right) // 2
            ops = 0

            for n in nums:
                ops += (n - 1) // mid
                if ops > maxOperations:
                    break

            if ops <= maxOperations:
                ans = mid
                right = mid - 1
            else:
                left = mid + 1

        return ans
```

```java []
class Solution {
    public int minimumSize(int[] nums, int maxOperations) {
        int left = 1, right = Arrays.stream(nums).max().getAsInt();
        int ans = right;

        while (left <= right) {
            int mid = (left + right) / 2;
            int ops = 0;

            for (int n : nums) {
                ops += (n - 1) / mid;
                if (ops > maxOperations) {
                    break;
                }
            }

            if (ops <= maxOperations) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return ans;
    }
}
```

```javascript []
class Solution {
    minimumSize(nums, maxOperations) {
        let left = 1, right = Math.max(...nums);
        let ans = right;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let ops = 0;

            for (let n of nums) {
                ops += Math.floor((n - 1) / mid);
                if (ops > maxOperations) break;
            }

            if (ops <= maxOperations) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return ans;
    }
}
```

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- We need to minimize the largest bag size after performing at most `maxOperations` splits.
- Binary search can be used to find the optimal penalty (maximum bag size) since it allows us to efficiently check all possible values of the largest bag size.

# Approach
<!-- Describe your approach to solving the problem. -->
- Start by using binary search between `1` and the largest bag size (`max(nums)`).
- For each mid value in the binary search, calculate how many splits are needed to ensure no bag exceeds this size.
- If the number of splits is within the allowed limit (`maxOperations`), adjust the binary search bounds to look for a smaller penalty. Otherwise, increase the minimum allowed size.

# Complexity
- Time complexity: $$O(n \\cdot \\log(\	ext{max}(nums)))$$
    - The binary search takes $$O(\\log(\	ext{max}(nums)))$$ iterations.
    - For each binary search step, we iterate through the `nums` array to count the required splits, which takes $$O(n)$$.
- Space complexity: $$O(1)$$
    - We are only using a few extra variables for the binary search, so the space complexity is constant.

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*