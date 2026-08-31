# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 13
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/4671892/](https://leetcode.com/problems/type-of-triangle/solutions/4671892/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3250).png](./images/0.png)

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The goal is to determine the type of triangle that can be formed based on the given array of three sides. We need to check if the sides satisfy the conditions for forming a triangle and then identify whether it's equilateral, isosceles, scalene, or none.

---
# Approach
<!-- Describe your approach to solving the problem. -->
**Triangle Inequality Condition Check:**

The code starts by checking the triangle inequality condition. This condition ensures that the sum of any two sides of a triangle must be greater than the length of the third side.
If this condition is not met for the given sides, it means a triangle cannot be formed, and the function returns "none."

**Identifying Triangle Types:**

If the triangle inequality condition is satisfied, the code proceeds to check the type of triangle.
For an equilateral triangle, all sides must be of equal length. This is checked by comparing each side with the other two sides using equality.
For a scalene triangle, all sides must be of different lengths. This is checked by ensuring that no two sides are equal.
If the triangle is not equilateral or scalene, it is considered isosceles.

**Returning the Result:**

Finally, the function returns the type of triangle identified based on the conditions.
If the sides do not form a triangle, it returns "none."
If all sides are equal, it returns "equilateral."
If all sides are different, it returns "scalene."
Otherwise, it returns "isosceles."

**In Summary:**

The code checks if the given sides can form a triangle using the triangle inequality condition. If they can, it further determines the type of triangle (equilateral, isosceles, scalene) based on the lengths of the sides and returns the result. If the sides cannot form a triangle, it returns "none."

---

# Complexity
- Time complexity: O(1) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


![download.jpeg](./images/1.jpeg)

---

# Code
C++
```
class Solution {
public:
    // Function to determine the type of triangle based on given sides
    string triangleType(vector<int>& nums) {
        // Step 1: Check the triangle inequality condition
        if (!((nums[0] + nums[1] > nums[2]) && (nums[0] + nums[2] > nums[1]) && (nums[2] + nums[1] > nums[0])))
            return "none";  // If the sides do not satisfy the triangle inequality, return "none"

        // Step 2: Check if all sides are equal (equilateral)
        if (nums[0] == nums[1] && nums[1] == nums[2])
            return "equilateral";  // If all sides are equal, return "equilateral"
        else if (nums[0] != nums[1] && nums[0] != nums[2] && nums[1] != nums[2])
            return "scalene";  // If no two sides are equal, return "scalene"

        // Step 3: If not equilateral or scalene, it is isosceles
        return "isosceles";  // Return "isosceles" as the default option
    }
};

```

---
Python3
```
class Solution:
    # Function to determine the type of triangle based on given sides
    def triangleType(self, nums: List[int]) -> str:
        # Step 1: Check the triangle inequality condition
        if not (nums[0] + nums[1] > nums[2] and nums[0] + nums[2] > nums[1] and nums[2] + nums[1] > nums[0]):
            return "none"  # If the sides do not satisfy the triangle inequality, return "none"

        # Step 2: Check if all sides are equal (equilateral)
        if nums[0] == nums[1] == nums[2]:
            return "equilateral"  # If all sides are equal, return "equilateral"
        elif nums[0] != nums[1] and nums[0] != nums[2] and nums[1] != nums[2]:
            return "scalene"  # If no two sides are equal, return "scalene"

        # Step 3: If not equilateral or scalene, it is isosceles
        return "isosceles"  # Return "isosceles" as the default option

```

---
Java
```
public class Solution {
    // Function to determine the type of triangle based on given sides
    public String triangleType(int[] nums) {
        // Step 1: Check the triangle inequality condition
        if (!(nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[2] + nums[1] > nums[0]))
            return "none";  // If the sides do not satisfy the triangle inequality, return "none"

        // Step 2: Check if all sides are equal (equilateral)
        if (nums[0] == nums[1] && nums[1] == nums[2])
            return "equilateral";  // If all sides are equal, return "equilateral"
        else if (nums[0] != nums[1] && nums[0] != nums[2] && nums[1] != nums[2])
            return "scalene";  // If no two sides are equal, return "scalene"

        // Step 3: If not equilateral or scalene, it is isosceles
        return "isosceles";  // Return "isosceles" as the default option
    }
} 
```
