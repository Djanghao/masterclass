# ✅ Beats 100% - Explained with [ Video ] - Without Sorting- C++/Java/Python/JS  - Visualized

**Author:** lancertech6
**Votes:** 74
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4392809/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4392809/)

---

![Screenshot 2023-12-12 063007.png](./images/0.png)

# YouTube Video Explanation:


[https://youtu.be/5QFTlws__p8](https://youtu.be/5QFTlws__p8)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 800 Subscribers*
*Current Subscribers: 738*

---

# Example Explanation
Let's create a step-by-step explanation using a table:

| **Iteration** | **Array Element** | **max1** | **max2** |
|---------------|-------------------|----------|----------|
| 1             | 3                 | 3        | -\u221E      |
| 2             | 4                 | 4        | 3        |
| 3             | 5                 | 5        | 4        |
| 4             | 2                 | 5        | 4        |

Now, we have the two maximum elements, `max1` and `max2`. The result is calculated as `(max1 - 1) * (max2 - 1)`:

**Result = (5 - 1) x (4 - 1) = 4 x 3 = 12**

So, for the input array \\([3, 4, 5, 2]\\), the maximum product is \\(12\\).

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To maximize the product `(nums[i]-1) * (nums[j]-1)`, we need to find the two maximum elements in the array. Subtracting 1 from each of these maximum elements will result in the maximum possible product.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two variables, `max1` and `max2`, to store the two maximum elements. Set them to `Integer.MIN_VALUE`.
2. Iterate through the array, updating `max1` and `max2` accordingly.
3. Calculate and return the maximum product using the formula `(max1 - 1) * (max2 - 1)`.

# Complexity
- Time Complexity: `O(N)`, where N is the length of the array. We iterate through the array once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space Complexity: `O(1)`, as we use a constant amount of extra space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int maxProduct(int[] nums) {
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num >= max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }
        }

        return (max1 - 1) * (max2 - 1);
    }
}
```
```C++ []
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int max1 = INT_MIN;
        int max2 = INT_MIN;

        for (int num : nums) {
            if (num >= max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }
        }

        return (max1 - 1) * (max2 - 1);
    }
};
```
```Python []
class Solution(object):
    def maxProduct(self, nums):
        max1 = float('-inf')
        max2 = float('-inf')

        for num in nums:
            if num >= max1:
                max2 = max1
                max1 = num
            elif num > max2:
                max2 = num

        return (max1 - 1) * (max2 - 1)
        
```
```JavaScript []
var maxProduct = function(nums) {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;

    for (const num of nums) {
        if (num >= max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return (max1 - 1) * (max2 - 1);
};
```
![upvote.png](./images/1.png)
