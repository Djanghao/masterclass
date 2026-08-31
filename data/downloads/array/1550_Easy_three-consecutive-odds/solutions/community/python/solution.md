# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Simple Count

**Author:** lancertech6
**Votes:** 123
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5393466/](https://leetcode.com/problems/three-consecutive-odds/solutions/5393466/)

---

![Screenshot 2024-07-01 061042.png](./images/0.png)


# YouTube Video Explanation:

<!-- ### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail. -->

**If you want a video for this question please write in the comments**


<!-- https://youtu.be/Gt9mP2rl8Ts -->


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2500 Subscribers*
*Current Subscribers: 2406*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires checking if there are any three consecutive odd numbers in the given array. This can be solved by iterating through the array and maintaining a count of consecutive odd numbers. When the count reaches three, we return `true`. If we encounter an even number, we reset the count.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a counter `count` to 0.
2. Iterate through each element in the array.
3. For each element, check if it is odd:
   - If it is odd and `count` is less than 2, increment the count.
   - If it is odd and `count` is 2, return `true` since we have found three consecutive odd numbers.
   - If it is even, reset the count to 0.
4. If the loop completes without finding three consecutive odd numbers, return `false`.

# Complexity
- **Time Complexity**: \\(O(n)\\), where \\(n\\) is the length of the array. This is because we iterate through the array once.
- **Space Complexity**: \\(O(1)\\). No extra space is required except for a few variables.


# Step-by-Step Explanation


1. **Initialization**:
    - We start with a counter `count` set to `0`. This counter will keep track of the number of consecutive odd numbers encountered.

    ```plaintext
    count = 0
    ```

2. **Iteration Through the Array**:
    - We iterate through each element in the array `arr`.
    - For each element, we check if it is odd (`num % 2 != 0`).
    - If the element is odd, we increment the counter `count`.
    - If the element is even, we reset the counter `count` to `0`.
    - If the counter `count` reaches `3`, we return `true` as we have found three consecutive odd numbers.
    - If we finish iterating through the array without the counter `count` reaching `3`, we return `false`.

### Example
Input: `arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]`

Output: `true` (Explanation: `[5, 7, 23]` are three consecutive odd numbers)

| Index | Element (num) | `num % 2 != 0` | `count` (Before) | `count` (After) | Action            |
|-------|----------------|----------------|-------------------|------------------|-------------------|
| 0     | 1              | True           | 0                 | 1                | Increment count   |
| 1     | 2              | False          | 1                 | 0                | Reset count       |
| 2     | 34             | False          | 0                 | 0                | Reset count       |
| 3     | 3              | True           | 0                 | 1                | Increment count   |
| 4     | 4              | False          | 1                 | 0                | Reset count       |
| 5     | 5              | True           | 0                 | 1                | Increment count   |
| 6     | 7              | True           | 1                 | 2                | Increment count   |
| 7     | 23             | True           | 2                 | 3                | Increment count, Return true |
| 8     | 12             | -              | -                 | -                | - (Not reached)   |

### Final State
At index `7`, we found three consecutive odd numbers: `5, 7, 23`. Therefore, we return `true`.




# Code
```java []
class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int count = 0;  // Initialize count to keep track of consecutive odd numbers

        for (int i = 0; i < arr.length; i++) {  // Iterate through each element in the array
            if (arr[i] % 2 != 0) {  // Check if the current element is odd
                count++;  // Increment the count if it's odd
                if (count == 3) {  // If we have found three consecutive odds, return true
                    return true;
                }
            } else {  // If the element is even, reset the count to 0
                count = 0;
            }
        }

        return false;  // If we finish the loop without finding three consecutive odds, return false
    }
}
```
```C++ []
class Solution {
public:
    bool threeConsecutiveOdds(vector<int>& arr) {
        int count = 0; // Initialize count to keep track of consecutive odd numbers

        for (int num : arr) { // Iterate through each element in the array
            if (num % 2 != 0) { // Check if the current element is odd
                count++; // Increment the count if it's odd
                if (count == 3) { // If we have found three consecutive odds, return true
                    return true;
                }
            } else { // If the element is even, reset the count to 0
                count = 0;
            }
        }

        return false; // If we finish the loop without finding three consecutive odds, return false
    
    }
};
```
```Python []
class Solution(object):
    def threeConsecutiveOdds(self, arr):
        count = 0 # Initialize count to keep track of consecutive odd numbers

        for num in arr: # Iterate through each element in the array
            if num % 2 != 0: # Check if the current element is odd
                count += 1 # Increment the count if it's odd
                if count == 3: # If we have found three consecutive odds, return true
                    return True
            else: # If the element is even, reset the count to 0
                count = 0

        return False # If we finish the loop without finding three consecutive odds, return false
```
```JavaScript []
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0; // Initialize count to keep track of consecutive odd numbers

    for (let num of arr) { // Iterate through each element in the array
        if (num % 2 !== 0) { // Check if the current element is odd
            count++; // Increment the count if it's odd
            if (count === 3) { // If we have found three consecutive odds, return true
                return true;
            }
        } else { // If the element is even, reset the count to 0
            count = 0;
        }
    }

    return false; // If we finish the loop without finding three consecutive odds, return false
};
```
![upvote.png](./images/1.png)
