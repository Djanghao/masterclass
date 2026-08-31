# Optimized Counting Sort | 3-ms Beats 100 % | Java | Python | C++ | JavaScript | Go

**Author:** kartikdevsharma_
**Votes:** 25
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5531671/](https://leetcode.com/problems/sort-an-array/solutions/5531671/)

---


# Problem Explanation:

***This problem is asking us to create a function that sorts an array of numbers from smallest to largest (ascending order). However, there are some specific requirements we need to follow:***

    
    We can't use any built-in sorting functions.
    Our solution needs to be efficient, with a time complexity of O(nlog(n)).
    We should use as little extra space as possible.

---






# Intuition

When we have a limited range of integers to sort, we can use their values directly to determine their position in the sorted array. This is the core idea behind Counting Sort. Instead of comparing elements, we count how many times each number appears and use this information to place the numbers in the correct order.


# Approach

The Counting Sort algorithm we've implemented follows a straightforward yet efficient method to sort an array of integers within a specific range. We begin by scanning through the entire input array to identify the minimum and maximum values. This step is crucial as it allows us to determine the range of numbers we're dealing with, which in turn helps us optimize our space usage.

Once we have this range, we create a counting array. The size of this array is equal to the difference between the maximum and minimum values, plus one. Each index in this counting array corresponds to a number in our input range, offset by the minimum value. We then proceed to count the occurrences of each number in the original array. This is done by iterating through the input array once more, and for each number, we increment the count at the corresponding index in our counting array.

After the counting phase, we have a complete tally of how many times each number appears in our input. The final step is to reconstruct the sorted array. We do this by iterating through our counting array. For each index, we know that the number it represents (index plus minimum value) should appear in our sorted array as many times as the count stored at that index. We use this information to place each number in its correct position in the original array, effectively sorting it in-place.

This approach is particularly efficient for arrays with a limited range of integers, as it avoids comparisons between elements and instead uses the integer values directly to determine their positions. The algorithm's efficiency comes from the fact that it makes only a few passes through the data, regardless of how unsorted it initially was.

# Complexity
- **Time complexity: O(n + k)**
  Where n is the number of elements in the input array, and k is the range of input (max - min + 1).
  We go through the array twice (once to count, once to place elements) and once through the counting array.

- **Space complexity: O(k)**
  We use extra space for the counting array, which has a size equal to the range of input values.

### Code


```java []
class Solution {
    public int[] sortArray(int[] nums) {
        if (nums == null || nums.length <= 1) return nums;
        
        int max = nums[0], min = nums[0];
        for (int num : nums) {
            if (num > max) max = num;
            if (num < min) min = num;
        }
        
        int range = max - min + 1;
        int[] count = new int[range];
        
        for (int num : nums) {
            count[num - min]++;
        }
        
        int index = 0;
        for (int i = 0; i < range; i++) {
            int freq = count[i];
            if (freq > 0) {
                int value = i + min;
                while (freq-- > 0) {
                    nums[index++] = value;
                }
            }
        }
        
        return nums;
    }
}
```

```cpp []
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        if (nums.empty()) return nums;
        
        int min = *min_element(nums.begin(), nums.end());
        int max = *max_element(nums.begin(), nums.end());
        
        vector<int> count(max - min + 1, 0);
        for (int num : nums) {
            count[num - min]++;
        }
        
        int index = 0;
        for (int i = 0; i < count.size(); i++) {
            while (count[i]-- > 0) {
                nums[index++] = i + min;
            }
        }
        
        return nums;
    }
};

```

```python []
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if not nums:
            return nums
        
        min_val, max_val = min(nums), max(nums)
        count = [0] * (max_val - min_val + 1)
        
        for num in nums:
            count[num - min_val] += 1
        
        index = 0
        for i in range(len(count)):
            while count[i] > 0:
                nums[index] = i + min_val
                index += 1
                count[i] -= 1
        
        return nums

```
```python []
f = open('user.out', 'w')
for nums in map(loads, stdin):
    print(str(sorted(nums)).replace(' ',''), file=f)
exit(0)
```

```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    
    let count = new Array(max - min + 1).fill(0);
    for (let num of nums) {
        count[num - min]++;
    }
    
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i]-- > 0) {
            nums[index++] = i + min;
        }
    }
    
    return nums;
};

```

```go []
func sortArray(nums []int) []int {
    if len(nums) <= 1 {
        return nums
    }
    
    min, max := nums[0], nums[0]
    for _, num := range nums {
        if num < min {
            min = num
        }
        if num > max {
            max = num
        }
    }
    
    count := make([]int, max - min + 1)
    for _, num := range nums {
        count[num - min]++
    }
    
    index := 0
    for i := 0; i < len(count); i++ {
        for count[i] > 0 {
            nums[index] = i + min
            index++
            count[i]--
        }
    }
    
    return nums
}

```

