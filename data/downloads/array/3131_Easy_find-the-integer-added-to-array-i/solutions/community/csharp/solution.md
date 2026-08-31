# ✅Beats 100.00% 🔥 || Java || C# || O(n) || O(1) || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5081987/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5081987/)

---

![image.png](./images/0.png)
# Intuition
The problem aims to find the integer value that needs to be added to each element of the nums1 array to make it equal to the corresponding element in the nums2 array. The solution then returns the average of these integer values.

# Approach
- Initialize a **result** variable to store the sum of the integer values that need to be added to each element of **nums1**.
- Iterate through the **nums2** array.
- For each index i, calculate the difference between the corresponding elements in **nums2** and **nums1** (**nums2[i] - nums1[i]**).
- Accumulate this difference in the result variable.
- After iterating through the entire **nums2** array, divide the result by the length of **nums1** to get the average of the integer values.
- Return the **average** value.

# Complexity
- Time complexity: **O(n)**
Where n is the length of the nums1 and nums2 arrays. 

- Space complexity: **O(1)**
Uses only a constant amount of extra space to store the **result** variable. 

# Java
```
class Solution {
    public int addedInteger(int[] nums1, int[] nums2) {
        var result = 0;
        for (var i = 0; i < nums2.length; i++)
            result += nums2[i] - nums1[i];
        return result / nums1.length;
    }
}
```

# C#
```
public class Solution {
    public int AddedInteger(int[] nums1, int[] nums2) {
        var result = 0;
        for (var i = 0; i < nums2.Length; i++)
            result += nums2[i] - nums1[i];
        return result / nums1.Length;
    }
}
```

![image.png](./images/1.png)
