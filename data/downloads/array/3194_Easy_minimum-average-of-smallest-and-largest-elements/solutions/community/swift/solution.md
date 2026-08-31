# Easiest solution | 100% Beats ✅ | C++ | Swift

**Author:** a_kufaev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/6109432/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/6109432/)

---

# Intuition
The first and most important thing to understand when solving the problem is that the condition for removing the smallest and largest value from the array is a little confusing and in fact nothing from the array needs to be deleted to solve the problem

Given that the number of elements in the array is always even, we can always walk through it, getting **closer to the middle**. 

It is also worth noting that we need to find the **minimum** number, and we already know the **maximum** from the condition - **50**.

# Approach
1. To solve the problem, we need to sort the array;
2. and walk through it to the middle, reading the values from the beginning and the end. Thus, we do not perform any unnecessary manipulations with the array and do not create new arrays, as the description suggests.
3. When passing, we immediately calculate the average value and compare it with the current minimum average (fortunately we have a maximum of 50).

# Complexity
- Time complexity: $$O(NlogN)$$
The most difficult operation here is sorting the array

- Space complexity: $$O(1)$$

We do not store anything superfluous and do not create arrays, so the complexity is $$O(1)$$

# Code
```cpp []
class Solution {
public:
    double minimumAverage(vector<int>& nums) {
        double average = 50;

        // 1. Sorting
        sort(nums.begin(), nums.end());
        
        // 2. We go through the array until the indexes meet (in the middle of array)
        int i = 0, j = nums.size() - 1;
        while (i < j) {
            // 3.1. Read values from begin and end, step-by-step
            int a = nums[i++], b = nums[j--];
            // 3.2. Calculate average value and compare it with previous result
            average = min(average, double(a + b) / 2);
        }

        return average;
    }
};
```
```swift []
class Solution {
    func minimumAverage(_ nums: [Int]) -> Double {
        var average = 50.0

        // 1. Sorting
        let nums = nums.sorted()

        // 2. We go through the array until the indexes meet (in the middle of array)
        var i = 0, j = nums.count - 1
        while i < j {
            // 3.1. Read values from begin and end, step-by-step
            let a = nums[i]; b = nums[j]
            i += 1; j -= 1
            // 3.2. Calculate average value and compare it with previous result
            average = min(average, Double(a + b) / 2)
        }

        return average
    }
}
```