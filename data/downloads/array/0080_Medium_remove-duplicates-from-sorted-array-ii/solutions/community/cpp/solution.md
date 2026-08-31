# 0(N) EASY TO UNDERSTAND SOLUTION

**Author:** 2005115
**Votes:** 533
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4062386/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4062386/)

---

# **PLEASE UPVOTE MY SOLUTION IF YOU LIKE IT**
# **CONNECT WITH ME**
#### **[https://www.linkedin.com/in/pratay-nandy-9ba57b229/]()**
#### **[https://www.instagram.com/pratay_nandy/]()**
# Approach
The goal of this function is to remove duplicates from the nums vector while keeping at most two occurrences of any element. The function returns the length of the modified vector after removing duplicates.

Here's the approach implemented in the code:

- Initialize an integer variable i to 0. This variable will keep track of the current position in the modified nums vector.

- Use a for loop to iterate through each element ele in the nums vector using the range-based for loop.

- Inside the loop, check the following conditions:

---


1. i == 0: This condition ensures that the first element is always included in the modified vector.
2. i == 1: This condition ensures that the second element is always included in the modified vector.
3. nums[i-2] != ele: This condition checks if the current element ele is not the same as the element two positions before the current position i. This ensures that only two occurrences of any element are included in the modified vector.
---
-  If any of the above conditions are met, copy the current element ele to the nums[i] position in the modified vector, and increment i by 1 to move to the next position.


- Repeat this process for all elements in the nums vector.

- Finally, return the value of i, which represents the length of the modified vector with duplicates removed.

This approach effectively modifies the nums vector in place, removing duplicates while keeping at most two occurrences of each element. The function returns the length of the modified vector, which can be used to access the unique elements in the first i positions of the vector
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:**0(N)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:**0(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.png](./images/0.png)


# Code
```
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int i =0;
        // int ele= nums[0];
        for(auto ele : nums)
        {
            if(i==0 || i==1 || nums[i-2] != ele)
            {
                nums[i] = ele;
                i++;
            }
        }
    return i ;
    }
};
```