# 【Video】Simple Two Pointer Solution

**Author:** niits
**Votes:** 747
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/5139915/](https://leetcode.com/problems/container-with-most-water/solutions/5139915/)

---

# Intuition
Using two pointer to get width easily and improve time complexity from $$O(n^2)$$ to $$O(n)$$.

---

# Solution Video

https://youtu.be/-nvQm6f84Yg

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,119
Thank you for your support!

---

# Approach

Simply, we calculate max area of rectangle then return it. Formula is

```
width * height
```
Let's think about `width` and `height` with this example.
```
Input: height = [1,8,6,2,5,4,8,3,7]
```
Each number is `height`, so we can easily get `height`. But how about `width`?

`width` is also simple. It's just distance between two heights. That's why it's good idea to have two pointers `left` and `right`.

```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
 L               R

Left pointer starts from index 0
Right pointer starts from the last index
```

Let's see how it works!

```
width = right - left = 8 - 0 = 8
```
For height, we take smaller height between `left` and `right`, **because if we calculate based on the taller height, the water would overflow from the container.**

```
height = min(height[left], height[right]) = min(1, 7) = 1
```
Current max area should be
```
8 * 1 = 8
```
After that, we want to move one of the pointers. How can we judge it? It's simple. We want to keep taller height between `left` and `right` because there is a possibility that we will get max area with the taller height.

In this case,
```
left vs right = 1 vs 7
```
So we move the left pointer to next.

```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
   L             R

max_area = 8
```
We will repeat the same process until we break `left < right` condition. I'll speed up.
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
   L             R

max_area = 8
current_area = 7 * 7 = 49
max_area = max(8, 49) = 49
Move R to next
```
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
   L           R

max_area = 49
current_area = 6 * 3 = 18
max_area = max(49, 18) = 49
Move R to next
```
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
   L         R

max_area = 49
current_area = 5 * 8 = 40
max_area = max(49, 40) = 49
Move L to next 
```
In the above case, we can also move `R` instead of `L` because `L` and `R`are the same(= `8`).

```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
     L       R

max_area = 49
current_area = 4 * 6 = 14
max_area = max(49, 24) = 49
Move L to next 
```
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
       L     R

max_area = 49
current_area = 3 * 2 = 6
max_area = max(49, 6) = 49
Move L to next 
```
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
         L   R

max_area = 49
current_area = 2 * 5 = 10
max_area = max(49, 10) = 49
Move L to next 
```
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
           L R

max_area = 49
current_area = 1 * 4 = 4
max_area = max(49, 4) = 49
Move L to next 
```
Now `L` and `R` are the same index. We shop iteration.
```
 0,1,2,3,4,5,6,7,8 (= index)
[1,8,6,2,5,4,8,3,7]
             L
             R 

```
```
return 49
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!


---

\u2B50\uFE0F If you\u2019re struggling with Two Pointer problems, don\u2019t miss this! I\u2019ve handpicked 5 Two Pointer questions that I\u2019ve solved to help you understand this technique.

https://youtu.be/Abdq3lNRocc


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        left = 0
        right = len(height) - 1

        while left < right:
            max_area = max(max_area, (right - left) * min(height[left], height[right]))

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_area
```
```javascript []
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;    
};
```
```java []
class Solution {
    public int maxArea(int[] height) {
        int maxArea = 0;
        int left = 0;
        int right = height.length - 1;

        while (left < right) {
            maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;        
    }
}
```
```C++ []
class Solution {
public:
    int maxArea(vector<int>& height) {
        int maxArea = 0;
        int left = 0;
        int right = height.size() - 1;

        while (left < right) {
            maxArea = max(maxArea, (right - left) * min(height[left], height[right]));

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;        
    }
};
```

## Step by Step Algorithm

1. **Initialization**:
    ```python
    max_area = 0
    left = 0
    right = len(height) - 1
    ``` 
    - `max_area = 0`: Initialize a variable `max_area` to keep track of the maximum area of water.
    - `left = 0`: Initialize a pointer `left` at the beginning of the array.
    - `right = len(height) - 1`: Initialize another pointer `right` at the end of the array.

2. **Main Loop**:
    ```python
    while left < right:
    ```
    - `while left < right`: Continue looping until `left` pointer is not equal to or exceeds the `right` pointer.

3. **Calculating Current Area**:
    ```python
    current_area = (right - left) * min(height[left], height[right])
    ``` 
    - `current_area = (right - left) * min(height[left], height[right])`: Calculate the area of the container formed by the two lines at indices `left` and `right`. It is the width of the container (distance between the two pointers) multiplied by the minimum of the heights of the two lines.

4. **Updating Maximum Area**:
    ```python
    max_area = max(max_area, current_area)
    ``` 
    - `max_area = max(max_area, current_area)`: Update `max_area` to be the maximum of its current value and `current_area`. This ensures that `max_area` always holds the maximum area encountered so far.

5. **Moving Pointers**:
    ```python
    if height[left] < height[right]:
        left += 1
    else:
        right -= 1
    ```
    - `if height[left] < height[right]: left += 1`: If the height of the line at the `left` pointer is less than the height of the line at the `right` pointer, increment the `left` pointer. This means we're trying to find a line with greater height to potentially increase the area.
    - `else: right -= 1`: Otherwise, decrement the `right` pointer. This means we're trying to find a line with greater height on the right side to potentially increase the area.

6. **Return Maximum Area**:
    ```python
    return max_area
    ```
    - `return max_area`: After the loop ends, return the maximum area calculated.

Overall, this algorithm uses a two-pointer approach to scan the array from both ends towards the center, continuously updating the maximum area encountered so far until the pointers meet. This approach ensures that all possible container areas are considered while minimizing unnecessary computations.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

# My previous post and video - Move Zeroes

post
https://leetcode.com/problems/move-zeroes/solutions/4911772/video-two-pointer-solution/

video
https://youtu.be/BPb0q5J4u-k

