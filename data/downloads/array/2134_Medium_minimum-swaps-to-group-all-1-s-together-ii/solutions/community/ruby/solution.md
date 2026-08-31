# Sliding Window Solution 💯 | O(n) - 3ms 🚀 | Fast Approach 🎯 | Java, Python, JS , C#, Ruby,C++

**Author:** vineetverma123
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5586086/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5586086/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem of finding the minimum number of swaps to group all 1's in a circular binary array presents a unique challenge due to its circular nature. The key insight is to recognize that we're essentially looking for a contiguous subarray of a specific length (equal to the total number of 1's) that contains the maximum number of 1's.

Given the circular nature of the array, we can visualize it as a ring. The optimal solution will be a segment of this ring that contains the most 1's. The number of swaps needed will be the difference between the total number of 1's and the number of 1's already in this optimal segment.

This problem can be efficiently solved using a sliding window technique, adapted for a circular array. The circular property allows us to consider all possible contiguous segments without explicitly handling different starting positions.

# Approach
<!-- Describe your approach to solving the problem. -->
# **1. Calculate the Window Size:**

The window size is the total number of 1s in the array. This is because to group all 1s together, we need to consider a window of the same size as the number of 1s.

```
int windowSize = 0;
for(int i = 0; i < n; i++) {
    windowSize += nums[i];
}
```

# **2. Initialize the Current Window:**

- The currentWindow variable is used to keep track of the number of 1s in the current window of size windowSize.
- Initially, calculate the number of 1s in the first window (the first windowSize elements of the array).

```
int currentWindow = 0;
for(int i = 0; i < windowSize; i++) {
    currentWindow += nums[i];
}
```
# **3. Find the Maximum Number of 1s in Any Window of Size windowSize:**

- Initialize maxWindow with the value of currentWindow.
- Slide the window across the array while maintaining the circular nature of the array using modulo operation.
- For each new position of the window, update the count of 1s in the window by adding the next element (new element entering the window) and subtracting the element that is leaving the window.
- Keep track of the maximum number of 1s found in any window.
```
int maxWindow = currentWindow;
for(int i = 0; i < n; i++) {
    currentWindow += (nums[(i + windowSize) % n] - nums[i]);
    maxWindow = Math.max(maxWindow, currentWindow);
}
```
# 3. **Calculate the Minimum Swaps:**

The minimum number of swaps needed is the difference between the window size (total number of 1s) and the maximum number of 1s found in any window.
```
return windowSize - maxWindow;
```

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```Java []
class Solution {
    public int minSwaps(int[] nums) {
        int windowSize=0;
        int n=nums.length;

        //Find the window Size
        for(int i=0;i<n;i++)
        windowSize+=nums[i];

        int currentWindow=0;

        //Find first currentWindow from starting
        for(int i=0;i<windowSize;i++)
        currentWindow+=nums[i];

        int maxWindow=currentWindow;

        // Move currentWindow and find maxWindow
        for(int i=0;i<n;i++){
            currentWindow+=(nums[(i+windowSize)%n]-nums[i]);
            maxWindow=Math.max(maxWindow,currentWindow);
        }
        return windowSize-maxWindow;
    }
}
```
```python []
class Solution:
    def minSwaps(self, nums):
        windowSize = sum(nums)
        n = len(nums)

        currentWindow = sum(nums[:windowSize])
        maxWindow = currentWindow

        for i in range(n):
            currentWindow += nums[(i + windowSize) % n] - nums[i]
            maxWindow = max(maxWindow, currentWindow)

        return windowSize - maxWindow

```
```javascript []
class Solution {
    minSwaps(nums) {
        let windowSize = 0;
        const n = nums.length;

        // Find the window Size
        for (let i = 0; i < n; i++) {
            windowSize += nums[i];
        }

        let currentWindow = 0;

        // Find first currentWindow from starting
        for (let i = 0; i < windowSize; i++) {
            currentWindow += nums[i];
        }

        let maxWindow = currentWindow;

        // Move currentWindow and find maxWindow
        for (let i = 0; i < n; i++) {
            currentWindow += (nums[(i + windowSize) % n] - nums[i]);
            maxWindow = Math.max(maxWindow, currentWindow);
        }

        return windowSize - maxWindow;
    }
}
```
```C# []
public class Solution {
    public int MinSwaps(int[] nums) {
        int windowSize = 0;
        int n = nums.Length;

        // Find the window Size
        for (int i = 0; i < n; i++) {
            windowSize += nums[i];
        }

        int currentWindow = 0;

        // Find first currentWindow from starting
        for (int i = 0; i < windowSize; i++) {
            currentWindow += nums[i];
        }

        int maxWindow = currentWindow;

        // Move currentWindow and find maxWindow
        for (int i = 0; i < n; i++) {
            currentWindow += (nums[(i + windowSize) % n] - nums[i]);
            maxWindow = Math.Max(maxWindow, currentWindow);
        }

        return windowSize - maxWindow;
    }
}

```
```ruby []
class Solution
  def min_swaps(nums)
    window_size = nums.sum
    n = nums.length

    current_window = nums[0...window_size].sum
    max_window = current_window

    (0...n).each do |i|
      current_window += nums[(i + window_size) % n] - nums[i]
      max_window = [max_window, current_window].max
    end

    window_size - max_window
  end
end

```
```C++ []
class Solution {
public:
    int minSwaps(vector<int>& nums) {
        int windowSize = 0;
        int n = nums.size();

        // Find the window Size
        for(int i = 0; i < n; i++) {
            windowSize += nums[i];
        }

        int currentWindow = 0;

        // Find first currentWindow from starting
        for(int i = 0; i < windowSize; i++) {
            currentWindow += nums[i];
        }

        int maxWindow = currentWindow;

        // Move currentWindow and find maxWindow
        for(int i = 0; i < n; i++) {
            currentWindow += (nums[(i + windowSize) % n] - nums[i]);
            maxWindow = max(maxWindow, currentWindow);
        }

        return windowSize - maxWindow;
    }
};

```
