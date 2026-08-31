# Easy Solution with O(n) time

**Author:** deepankyadav
**Votes:** 54
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/3726814/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/3726814/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
The problem asks for the maximum average of a subarray of length k in the given array. To find the maximum average, we can use a sliding window approach to efficiently calculate the sum of subarrays and keep track of the maximum average.

# Approach
1. Initialize the start and end pointers of the sliding window at indices 0 and k-1 respectively.
1. Calculate the initial average of the first k elements in the array.
1. Set the maximum average as the initial average.
1. Slide the window to the right by incrementing both start and end pointers.
1. Subtract the leftmost element from the average and add the rightmost element to the average.
1. Update the maximum average if the current average is greater.
1. Repeat step 4 until the end pointer reaches the end of the array.
Return the maximum average.


# Complexity
- Time complexity:
The time complexity of this solution is $$O(n)$$, where n is the length of the input array. We iterate through the array once to calculate the average for each subarray.

- Space complexity:
The space complexity is $$O(1)$$ because we are using a constant amount of extra space to store the variables.
# Code
```java []
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        // If the array has only one element, return the element itself as the maximum average
        if (nums.length == 1)
            return (double) nums[0];

        int start = 0;
        int end = k;
        double average = 0;

        // Calculate the initial average of the first k elements
        for (int i = 0; i < k; i++) {
            average = average + (double) nums[i] / k;
        }

        // Set the initial maximum average to the calculated average
        double max = average;

        while (end < nums.length) {
            // Slide the window and update the average
            average = average - (double) nums[start++] / k;
            average = average + (double) nums[end++] / k;

            // Update the maximum average if the current average is greater
            max = Math.max(average, max);
        }

        return max;
    }
}

```
```python []
class Solution(object):
    def findMaxAverage(self, nums, k):
        if len(nums) == 1:
            return float(nums[0])
        
        start = 0
        end = k
        average = 0.0
        
        # Calculate the average of the first window
        for i in range(k):
            average += float(nums[i]) / k
        
        # Initialize the maximum average
        max_average = average
        
        # Slide the window and update the maximum average
        while end < len(nums):
            average = average - float(nums[start]) / k
            average = average + float(nums[end]) / k
            max_average = max(max_average, average)
            start += 1
            end += 1
        
        return max_average

```
```C++ []
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        if (nums.size() == 1) {
            return static_cast<double>(nums[0]);
        }
        
        int start = 0;
        int end = k;
        double average = 0.0;
        
        // Calculate the average of the first window
        for (int i = 0; i < k; i++) {
            average += static_cast<double>(nums[i]) / k;
        }
        
        // Initialize the maximum average
        double max_average = average;
        
        // Slide the window and update the maximum average
        while (end < nums.size()) {
            average = average - static_cast<double>(nums[start]) / k;
            average = average + static_cast<double>(nums[end]) / k;
            max_average = max(max_average, average);
            start++;
            end++;
        }
        
        return max_average;
    }
};

```
## ***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)
