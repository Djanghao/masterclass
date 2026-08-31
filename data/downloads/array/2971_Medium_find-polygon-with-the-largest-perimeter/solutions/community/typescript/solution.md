# 🔥🔥✅Beats 100% with Proof | Very Easy to Understand | 2 Approaches ✅🔥🔥

**Author:** areetrahalder
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4730496/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4730496/)

---

# Upvote - Please upvote if you are watching the proof
![image.png](./images/0.png)

---
# First Approach - Sorting, Prefix 

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea here is to sort the array in ascending order. After sorting, we can start from the end of the array and check if the sum of the two smaller sides is greater than the largest side. If it is, then we have found a valid polygon with the largest perimeter. We continue this process until we find a valid polygon or exhaust the array.

## Algorithm
<!-- Describe your approach to solving the problem. -->
1. Sort the array `nums` in ascending order.
2. Initialize an array `prefix` of length `nums.length + 1` to store the cumulative sum of the sorted array.
3. Iterate over the sorted array and calculate the cumulative sum, storing it in the `prefix` array.
4. Start from the end of the array and check if the sum of the two smaller sides is greater than the largest side. If it is, return the sum as the largest perimeter.
5. If no valid polygon is found, return -1.

## Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> Sorting the array takes O(n log n) time, and the subsequent iteration takes O(n) time. Thus, the overall time complexity is O(n log n).

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> The space complexity is O(n) to store the `prefix` array.

# Code
```Java []
class Solution {
    public long largestPerimeter(int[] nums) {
        Arrays.sort(nums);
        long[] prefix = new long[nums.length + 1];
        int i = 1;
        while(i < prefix.length){
            prefix[i] = prefix[i-1] + nums[i++ - 1];
        }
        i = nums.length - 1;
        while(i > 1){
            if(prefix[i] > nums[i--]){
                return prefix[i + 2];
            }
        }
        return -1;
    }
}
```
```C++ []
class Solution {
public:
    long long largestPerimeter(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        std::vector<long long> prefix(nums.size() + 1, 0);
        int i = 1;
        while (i < prefix.size()) {
            prefix[i] = prefix[i - 1] + nums[i++ - 1];
        }
        i = nums.size() - 1;
        while (i > 1) {
            if (prefix[i] > nums[i--]) {
                return prefix[i + 2];
            }
        }
        return -1;
    }
};
```
```C []
long long largestPerimeter(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), [](const void* a, const void* b) {
        return (*(int*)a - *(int*)b);
    });

    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;
    int i = 1;
    while (i <= numsSize) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
        i++;
    }

    i = numsSize - 1;
    while (i > 1) {
        if (prefix[i] > nums[i]) {
            free(prefix);
            return prefix[i + 1];
        }
        i--;
    }

    free(prefix);
    return -1;
}

```
```C# []
public class Solution {
    public long LargestPerimeter(int[] nums) {
        Array.Sort(nums);
        long[] prefix = new long[nums.Length + 1];
        int i = 1;
        while (i < prefix.Length) {
            prefix[i] = prefix[i - 1] + nums[i++ - 1];
        }
        i = nums.Length - 1;
        while (i > 1) {
            if (prefix[i] > nums[i--]) {
                return prefix[i + 2];
            }
        }
        return -1;
    }
}
```
```Python []
class Solution(object):
    def largestPerimeter(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        prefix = [0] * (len(nums) + 1)
        i = 1
        while i < len(prefix):
            prefix[i] = prefix[i - 1] + nums[i - 1]
            i += 1
        i = len(nums) - 1
        while i > 1:
            if prefix[i] > nums[i]:
                return prefix[i + 1]
            i -= 1
        return -1

```
```Python3 []
class Solution:
    def largestPerimeter(self, nums):
        nums.sort()
        prefix = [0] * (len(nums) + 1)
        i = 1
        while i < len(prefix):
            prefix[i] = prefix[i-1] + nums[i-1]
            i += 1
        i = len(nums) - 1
        while i > 1:
            if prefix[i] > nums[i]:
                return prefix[i + 2]
            i -= 1
        return -1
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let prefix = new Array(nums.length + 1).fill(0);
    let i = 1;

    while (i < prefix.length) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
        i++;
    }

    i = nums.length - 1;

    while (i > 1) {
        if (prefix[i] > nums[i]) {
            return prefix[i + 2];
        }
        i--;
    }

    return -1;
};
```
```Typescript []
function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const prefix: number[] = new Array(nums.length + 1).fill(0);
    let i = 1;
    while (i < prefix.length) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
        i++;
    }
    i = nums.length - 1;
    while (i > 1) {
        if (prefix[i] > nums[i]) {
            return prefix[i + 2];
        }
        i--;
    }
    return -1;
}
```


---
# Second Approach - Runs faster

> # Why does this code run faster?
> Although the code says that the worst case time complexity of this solution is $$O(n^2)$$, however the average time complexity with respect to all the test cases provided for this solution is O(n) as there can be only 2 elements at max which might be eliminated from getting considered forming the polygon.

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the largest perimeter of a polygon that can be formed using elements from the given array. The key observation is that the longest side of a polygon should be smaller than the sum of its other sides. To maximize the perimeter, we want to use the largest elements from the array as sides.

## Algorithm
<!-- Describe your approach to solving the problem. -->
The Java solution uses a recursive approach. The `largestPerimeter` method takes the array `nums` and the length `end` as parameters. It finds the maximum element in the current array, updates the sum of elements, and checks if the sum without the maximum element is still greater than the maximum element. If so, it returns the sum as the largest perimeter.

If not, it swaps the last element with the maximum element to remove it from consideration and calls the `largestPerimeter` method recursively with the updated length.

The base case is when the length becomes less than 3, indicating that a polygon with at least 3 sides cannot be formed. In such cases, the method returns -1.

## Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> * The algorithm iterates through the array once, updating the sum and finding the maximum element.
> * The recursive calls are at most n times, where n is the length of the array.

- Space complexity: $$O(1)$$
> The algorithm uses a constant amount of space for variables like max, i, and sum. The recursion stack does not grow with the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```Java []
class Solution {
    public long largestPerimeter(int[] nums) {
        return largestPerimeter(nums, nums.length);
    }
    private long largestPerimeter(int[] nums, int end){
        int max = 0, i = 0;
        long sum = 0;
        if(end < 3){
            return -1;
        }
        while(i < end){
            sum += nums[i];
            if(nums[i++] > nums[max]){
                max = i - 1;
            }
        }
        if(sum - nums[max] > nums[max]){
            return sum;
        }
        nums[end - 1] = nums[end - 1] ^ nums[max];
        nums[max] = nums[end - 1] ^ nums[max];
        nums[end - 1] = nums[end - 1] ^ nums[max];
        return largestPerimeter(nums, end - 1);
    }
}
```
```C++ []
class Solution {
public:
    long long largestPerimeter(std::vector<int>& nums) {
        return largestPerimeterRecursive(nums, nums.size());
    }

private:
    long long largestPerimeterRecursive(std::vector<int>& nums, int end) {
        int max = 0;
        int i = 0;
        long long sum = 0;

        if (end < 3) {
            return -1;
        }

        while (i < end) {
            sum += nums[i];

            if (nums[i++] > nums[max]) {
                max = i - 1;
            }
        }

        if (sum - nums[max] > nums[max]) {
            return sum;
        }

        std::swap(nums[end - 1], nums[max]);

        return largestPerimeterRecursive(nums, end - 1);
    }
};
```
```C []
long long largestPerimeter(int* nums, int numsSize) {
    return largestPerimeterRecursive(nums, numsSize);
}

long long largestPerimeterRecursive(int* nums, int end) {
    int max = 0;
    int i = 0;
    long long sum = 0;

    if (end < 3) {
        return -1;
    }

    while (i < end) {
        sum += nums[i];

        if (nums[i++] > nums[max]) {
            max = i - 1;
        }
    }

    if (sum - nums[max] > nums[max]) {
        return sum;
    }

    // Swap elements
    nums[end - 1] ^= nums[max];
    nums[max] ^= nums[end - 1];
    nums[end - 1] ^= nums[max];

    return largestPerimeterRecursive(nums, end - 1);
}
```
```C# []
public class Solution {
    public long LargestPerimeter(int[] nums) {
        return LargestPerimeterRecursive(nums, nums.Length);
    }

    private long LargestPerimeterRecursive(int[] nums, int end) {
        int max = 0;
        int i = 0;
        long sum = 0;

        if (end < 3) {
            return -1;
        }

        while (i < end) {
            sum += nums[i];

            if (nums[i++] > nums[max]) {
                max = i - 1;
            }
        }

        if (sum - nums[max] > nums[max]) {
            return sum;
        }

        // Swap elements
        int temp = nums[end - 1];
        nums[end - 1] = nums[max];
        nums[max] = temp;

        return LargestPerimeterRecursive(nums, end - 1);
    }
}
```
```Python []
class Solution(object):
    def largestPerimeter(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return self.largestPerimeterRecursive(nums, len(nums))
    
    def largestPerimeterRecursive(self, nums, end):
        max_index = 0
        i = 0
        total_sum = 0
        
        if end < 3:
            return -1
        
        while i < end:
            total_sum += nums[i]
            if nums[i] > nums[max_index]:
                max_index = i
            i += 1
        
        if total_sum - nums[max_index] > nums[max_index]:
            return total_sum
        
        nums[end - 1], nums[max_index] = nums[max_index], nums[end - 1]
        
        return self.largestPerimeterRecursive(nums, end - 1)
```
```Python3 []
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        return self.largestPerimeterHelper(nums, len(nums))
    
    def largestPerimeterHelper(self, nums: List[int], end: int) -> int:
        max_index = 0
        i = 0
        total_sum = 0
        
        if end < 3:
            return -1
        
        while i < end:
            total_sum += nums[i]
            if nums[i] > nums[max_index]:
                max_index = i
            i += 1
        
        if total_sum - nums[max_index] > nums[max_index]:
            return total_sum
        
        # Swap nums[end - 1] and nums[max_index]
        nums[end - 1], nums[max_index] = nums[max_index], nums[end - 1]
        
        return self.largestPerimeterHelper(nums, end - 1)
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    return largestPerimeterHelper(nums, nums.length);
};

var largestPerimeterHelper = function(nums, end) {
    let max = 0;
    let sum = 0;

    if (end < 3) {
        return -1;
    }

    for (let i = 0; i < end; i++) {
        sum += nums[i];
        if (nums[i] > nums[max]) {
            max = i;
        }
    }

    if (sum - nums[max] > nums[max]) {
        return sum;
    }

    // Swap nums[end - 1] and nums[max]
    [nums[end - 1], nums[max]] = [nums[max], nums[end - 1]];

    return largestPerimeterHelper(nums, end - 1);
};
```
```Typescript []
function largestPerimeter(nums: number[]): number {
    return largestPerimeterRecursive(nums, nums.length);
}

function largestPerimeterRecursive(nums: number[], end: number): number {
    let max = 0;
    let i = 0;
    let sum = 0;

    if (end < 3) {
        return -1;
    }

    while (i < end) {
        sum += nums[i];

        if (nums[i++] > nums[max]) {
            max = i - 1;
        }
    }

    if (sum - nums[max] > nums[max]) {
        return sum;
    }

    [nums[end - 1], nums[max]] = [nums[max], nums[end - 1]];

    return largestPerimeterRecursive(nums, end - 1);
}
```

# Upvote - Please
![image.png](./images/1.png)

