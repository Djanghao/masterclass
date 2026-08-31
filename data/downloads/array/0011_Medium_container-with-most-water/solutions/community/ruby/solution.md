# 🔥Beats 100% | 🔥O(n) Solution With Detailed Example💡| C++ | Java | Python | Javascript | C | Ruby

**Author:** nikkipriya78
**Votes:** 108
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/4141944/](https://leetcode.com/problems/container-with-most-water/solutions/4141944/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding two lines in a set of vertical lines (represented by an array of heights) that can form a container to hold the maximum amount of water. The water's capacity is determined by the height of the shorter line and the distance between the two lines. We want to find the maximum capacity among all possible combinations of two lines.

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. We use a two-pointer approach, starting with the left pointer at the leftmost edge of the array (left = 0) and the right pointer at the rightmost edge of the array (right = height.size() - 1).

2. We initialize a variable maxWater to store the maximum water capacity, initially set to 0.

3. We enter a while loop, which continues as long as the left pointer is less than the right pointer. This loop allows us to explore all possible combinations of two lines.

4. Inside the loop, we calculate the width of the container by subtracting the positions of the two pointers: width = right - left.

5. We calculate the height of the container by finding the minimum height between the two lines at positions height[left] and height[right]: h = min(height[left], height[right]).

6. We calculate the water capacity of the current container by multiplying the width and height: water = width * h.

7. We update the maxWater variable if the current container holds more water than the previous maximum: maxWater = max(maxWater, water).

8. Finally, we adjust the pointers: if the height at the left pointer is smaller than the height at the right pointer (height[left] < height[right]), we move the left pointer to the right (left++); otherwise, we move the right pointer to the left (right--).

9. We repeat steps 4-8 until the left pointer is less than the right pointer. Once the pointers meet, we have explored all possible combinations, and the maxWater variable contains the maximum water capacity.

10. We return the maxWater value as the final result.

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this algorithm is O(n), where n is the number of elements in the height array. This is because we explore all possible combinations of two lines once, and each operation inside the loop is performed in constant time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1), which means the algorithm uses a constant amount of extra space regardless of the input size. We only use a few extra variables (left, right, maxWater, width, h, and water) that do not depend on the input size.

---


```C++ []
class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0;            // Left pointer starting from the leftmost edge
        int right = height.size() - 1; // Right pointer starting from the rightmost edge
        int maxWater = 0;        // Initialize the maximum water capacity
        
        while (left < right) {
            // Calculate the width of the container
            int width = right - left;
            
            // Calculate the height of the container (the minimum height between the two lines)
            int h = min(height[left], height[right]);
            
            // Calculate the water capacity of the current container
            int water = width * h;
            
            // Update the maximum water capacity if the current container holds more water
            maxWater = max(maxWater, water);
            
            // Move the pointers towards each other
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxWater;
    }
};
```
```Java []
class Solution {
    public int maxArea(int[] height) {
        int left = 0;                   // Left pointer starting from the leftmost edge
        int right = height.length - 1;  // Right pointer starting from the rightmost edge
        int maxWater = 0;               // Initialize the maximum water capacity
        
        while (left < right) {
            // Calculate the width of the container
            int width = right - left;
            
            // Calculate the height of the container (the minimum height between the two lines)
            int h = Math.min(height[left], height[right]);
            
            // Calculate the water capacity of the current container
            int water = width * h;
            
            // Update the maximum water capacity if the current container holds more water
            maxWater = Math.max(maxWater, water);
            
            // Move the pointers towards each other
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxWater;
    }
}

```
```Python []
class Solution:
    def maxArea(self, height):
        left = 0            # Left pointer starting from the leftmost edge
        right = len(height) - 1  # Right pointer starting from the rightmost edge
        maxWater = 0        # Initialize the maximum water capacity
        
        while left < right:
            # Calculate the width of the container
            width = right - left
            
            # Calculate the height of the container (the minimum height between the two lines)
            h = min(height[left], height[right])
            
            # Calculate the water capacity of the current container
            water = width * h
            
            # Update the maximum water capacity if the current container holds more water
            maxWater = max(maxWater, water)
            
            # Move the pointers towards each other
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return maxWater

```
```Javascript []
var maxArea = function(height) {
    let left = 0;            // Left pointer starting from the leftmost edge
    let right = height.length - 1; // Right pointer starting from the rightmost edge
    let maxWater = 0;        // Initialize the maximum water capacity
    
    while (left < right) {
        // Calculate the width of the container
        let width = right - left;
        
        // Calculate the height of the container (the minimum height between the two lines)
        let h = Math.min(height[left], height[right]);
        
        // Calculate the water capacity of the current container
        let water = width * h;
        
        // Update the maximum water capacity if the current container holds more water
        maxWater = Math.max(maxWater, water);
        
        // Move the pointers towards each other
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};

```
```Ruby []
class Solution
  def max_area(height)
    left = 0             # Left pointer starting from the leftmost edge
    right = height.size - 1  # Right pointer starting from the rightmost edge
    max_water = 0        # Initialize the maximum water capacity
    
    while left < right
      # Calculate the width of the container
      width = right - left
      
      # Calculate the height of the container (the minimum height between the two lines)
      h = [height[left], height[right]].min
      
      # Calculate the water capacity of the current container
      water = width * h
      
      # Update the maximum water capacity if the current container holds more water
      max_water = [max_water, water].max
      
      # Move the pointers towards each other
      if height[left] < height[right]
        left += 1
      else
        right -= 1
      end
    end
    
    max_water
  end
end

```
```C []
int maxArea(int* height, int heightSize) {
    int left = 0;                // Left pointer starting from the leftmost edge
    int right = heightSize - 1;  // Right pointer starting from the rightmost edge
    int maxWater = 0;            // Initialize the maximum water capacity

    while (left < right) {
        // Calculate the width of the container
        int width = right - left;

        // Calculate the height of the container (the minimum height between the two lines)
        int h = height[left] < height[right] ? height[left] : height[right];

        // Calculate the water capacity of the current container
        int water = width * h;

        // Update the maximum water capacity if the current container holds more water
        if (water > maxWater) {
            maxWater = water;
        }

        // Move the pointers towards each other
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

```

# \uD83D\uDCA1If you come this far, then i would like to request you to please upvote this solution so that it could reach out to another one \u2763\uFE0F\uD83D\uDCA1



