# O(n) | Sliding Window  | 2-ms Beats 100% Java | C++ | Python | Rust | Go | JavaScript

**Author:** kartikdevsharma_
**Votes:** 72
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5572247/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5572247/)

---

# Appraoch 1
# Intuition

This problem of finding the minimum number of swaps to group all 1's in a circular binary array presents a unique challenge due to its circular nature. The key insight is to recognize that we're essentially looking for a contiguous subarray of a specific length (equal to the total number of 1's) that contains the maximum number of 1's.

Given the circular nature of the array, we can visualize it as a ring. The optimal solution will be a segment of this ring that contains the most 1's. The number of swaps needed will be the difference between the total number of 1's and the number of 1's already in this optimal segment.

This problem can be efficiently solved using a sliding window technique, adapted for a circular array. The circular property allows us to consider all possible contiguous segments without explicitly handling different starting positions.

# Approach

The solution employs a two-pointer technique combined with a sliding window, adapted for a circular array.
1. **Count Total Ones**: 
   - We start by iterating through the array to count the total number of 1's.
   - This count serves two purposes:
     a) It helps us handle edge cases efficiently.
     b) It determines the size of our sliding window.
   - The count is crucial because it represents the size of the group we're trying to form.

2. **Handle Edge Cases**:
   - If there are no 1's in the array, or if all elements are 1's, no swaps are needed.
   - We can immediately return 0 in these cases, saving unnecessary computations.

3. **Initialize Window**:
   - We create an initial window of size `totalOnes`.
   - We count the number of 1's in this initial window.
   - This window represents our first potential segment where all 1's could be grouped.

4. **Slide the Window**:
   - We use two pointers to slide the window around the circular array.
   - The sliding process involves:
     a) Removing the element at the start of the window.
     b) Adding the next element at the end of the window.
   - We use the modulo operator to wrap around the array, simulating its circular nature.
   - This clever use of the modulo operator allows us to handle the circular property without creating a duplicate array or using extra space.

5. **Track Maximum**:
   - As we slide the window, we keep track of the maximum number of 1's seen in any window configuration.
   - This maximum represents the largest group of 1's that already exist contiguously in the array.
   - Updating this maximum is done in constant time at each step.

6. **Calculate Minimum Swaps**:
   - After sliding the window through all positions, we know the maximum number of 1's that exist contiguously in the array.
   - The minimum number of swaps is the difference between the total number of 1's and this maximum.
   - This difference represents the number of 1's that need to be moved to create a contiguous group of all 1's.


# Complexity

- **Time complexity: O(n)**
  - We perform two main passes through the array:
    1. First pass to count the total number of 1's: O(n)
    2. Second pass to slide the window: O(n)
  - All operations inside the loops are constant time.
  - Therefore, the overall time complexity is O(n), where n is the length of the input array.
  - This linear time complexity is optimal for this problem, as we need to examine each element at least once.

- **Space complexity: O(1)**
  - We only use a constant amount of extra space:
    - `totalOnes`: integer
    - `currentOnes`: integer
    - `maxOnes`: integer
    - Loop variables
  - No additional data structures are used.
  - The space complexity remains constant regardless of the input size.
  - This constant space usage is a significant advantage of this approach, making it memory-efficient even for very large inputs.

### Code
```Java []
class Solution {
    public int minSwaps(int[] nums) {
        int n = nums.length;
        int totalOnes = 0;

        // Count total number of 1's
        for (int num : nums) {
            totalOnes += num;
        }

        // Edge cases
        if (totalOnes == 0 || totalOnes == n) return 0;

        int currentOnes = 0;

        // Count 1's in the first window of size totalOnes
        for (int i = 0; i < totalOnes; i++) {
            currentOnes += nums[i];
        }

        int maxOnes = currentOnes;

        // Use two pointers to slide the window
        for (int i = 0; i < n; i++) {
            currentOnes -= nums[i];
            currentOnes += nums[(i + totalOnes) % n];
            maxOnes = Math.max(maxOnes, currentOnes);
        }

        return totalOnes - maxOnes;
    }
}

```
```C++ []
class Solution {
public:
    int minSwaps(vector<int>& nums) {
        int n = nums.size();
        int totalOnes = 0;
        
        // Count total number of 1's
        for (int num : nums) {
            totalOnes += num;
        }
        
        // Edge cases
        if (totalOnes == 0 || totalOnes == n) return 0;
        
        int currentOnes = 0;
        
        // Count 1's in the first window of size totalOnes
        for (int i = 0; i < totalOnes; i++) {
            currentOnes += nums[i];
        }
        
        int maxOnes = currentOnes;
        
        // Use two pointers to slide the window
        for (int i = 0; i < n; i++) {
            currentOnes -= nums[i];
            currentOnes += nums[(i + totalOnes) % n];
            maxOnes = max(maxOnes, currentOnes);
        }
        
        return totalOnes - maxOnes;
    }
};

```
```Python []
class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        total_ones = sum(nums)
        
        # Edge cases
        if total_ones == 0 or total_ones == n:
            return 0
        
        current_ones = sum(nums[:total_ones])
        max_ones = current_ones
        
        # Use two pointers to slide the window
        for i in range(n):
            current_ones -= nums[i]
            current_ones += nums[(i + total_ones) % n]
            max_ones = max(max_ones, current_ones)
        
        return total_ones - max_ones

```
```Go []
func minSwaps(nums []int) int {
    n := len(nums)
    totalOnes := 0
    
    // Count total number of 1's
    for _, num := range nums {
        totalOnes += num
    }
    
    // Edge cases
    if totalOnes == 0 || totalOnes == n {
        return 0
    }
    
    currentOnes := 0
    
    // Count 1's in the first window of size totalOnes
    for i := 0; i < totalOnes; i++ {
        currentOnes += nums[i]
    }
    
    maxOnes := currentOnes
    
    // Use two pointers to slide the window
    for i := 0; i < n; i++ {
        currentOnes -= nums[i]
        currentOnes += nums[(i + totalOnes) % n]
        if currentOnes > maxOnes {
            maxOnes = currentOnes
        }
    }
    
    return totalOnes - maxOnes
}

```
```Rust []
impl Solution {
    pub fn min_swaps(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let total_ones = nums.iter().sum::<i32>();
        
        // Edge cases
        if total_ones == 0 || total_ones as usize == n {
            return 0;
        }
        
        let mut current_ones = nums.iter().take(total_ones as usize).sum::<i32>();
        let mut max_ones = current_ones;
        
        // Use two pointers to slide the window
        for i in 0..n {
            current_ones -= nums[i];
            current_ones += nums[(i + total_ones as usize) % n];
            max_ones = max_ones.max(current_ones);
        }
        
        total_ones - max_ones
    }
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    
    // Edge cases
    if (totalOnes === 0 || totalOnes === n) return 0;
    
    let currentOnes = nums.slice(0, totalOnes).reduce((sum, num) => sum + num, 0);
    let maxOnes = currentOnes;
    
    // Use two pointers to slide the window
    for (let i = 0; i < n; i++) {
        currentOnes -= nums[i];
        currentOnes += nums[(i + totalOnes) % n];
        maxOnes = Math.max(maxOnes, currentOnes);
    }
    
    return totalOnes - maxOnes;
};

```



---



# Approach 2

# Intuition

The circular nature of the array suggests that we need to consider all possible contiguous subarrays, including those that wrap around the end of the array.

The key insight is that if we can efficiently calculate the number of 1's in any contiguous subarray of a given length, we can determine the minimum number of swaps needed. This leads us to consider using a cumulative sum approach, which allows for constant-time queries of subarray sums.

# Approach

1. **Handling Circularity**: To address the circular nature of the array, we create a doubled array by concatenating the original array with itself. This allows us to consider all possible contiguous subarrays, including those that wrap around the end of the original array.

2. **Cumulative Sum Array**: We construct a cumulative sum array, where each element represents the sum of all elements up to that point in the doubled array. This allows us to calculate the sum of any subarray in constant time.

3. **Window Size**: The optimal grouping of 1's will have a size equal to the total number of 1's in the array. We calculate this total as our window size.

4. **Checking All Windows**: We iterate through all possible windows of the calculated size, using the cumulative sum array to efficiently determine the number of 1's in each window.

5. **Calculating Swaps**: The number of swaps needed for each window is the difference between the total number of 1's and the number of 1's already in the window. The minimum of these differences across all windows is our answer.

Step-by-step breakdown of the algorithm:

1. Count the total number of 1's in the input array.
2. Create a doubled array by concatenating the input array with itself.
3. Construct a cumulative sum array from the doubled array.
4. Iterate through all possible windows of size equal to the total number of 1's.
5. For each window, calculate the number of 1's it contains using the cumulative sum array.
6. Keep track of the maximum number of 1's found in any window.
7. Return the difference between the total number of 1's and the maximum found in any window.

# Complexity

- **Time complexity: O(n)**
  - Counting the total number of 1's: O(n)
  - Creating the doubled array: O(n)
  - Constructing the cumulative sum array: O(n)
  - Iterating through all windows: O(n)
  - All other operations are constant time.
  
  Where n is the length of the input array. Despite the nested loops, we only perform a constant number of operations for each element of the original array.

- **Space complexity: O(n)**
  - The doubled array: O(n)
  - The cumulative sum array: O(n)
  - All other variables use constant space.
  
  Where n is the length of the input array. We use linear extra space primarily for the doubled array and the cumulative sum array.


### Code 


```Java []

class Solution {
    public int minSwaps(int[] nums) {
        int n = nums.length;
        int totalOnes = 0;

        // Count total number of 1's and create a doubled array
        int[] doubledNums = new int[2 * n];
        for (int i = 0; i < n; i++) {
            totalOnes += nums[i];
            doubledNums[i] = doubledNums[i + n] = nums[i];
        }

        // Edge cases
        if (totalOnes == 0 || totalOnes == n) return 0;

        // Create cumulative sum array
        int[] cumulativeSum = new int[2 * n + 1];
        for (int i = 0; i < 2 * n; i++) {
            cumulativeSum[i + 1] = cumulativeSum[i] + doubledNums[i];
        }

        int maxOnesInWindow = 0;

        // Check all possible windows of size totalOnes
        for (int i = 0; i <= n; i++) {
            int onesInWindow = cumulativeSum[i + totalOnes] - cumulativeSum[i];
            maxOnesInWindow = Math.max(maxOnesInWindow, onesInWindow);
        }

        return totalOnes - maxOnesInWindow;
    }
}
```
```C++ []
class Solution {
public:
    int minSwaps(vector<int>& nums) {
        int n = nums.size();
        int totalOnes = 0;
        
        // Count total number of 1's and create a doubled array
        vector<int> doubledNums(2 * n);
        for (int i = 0; i < n; i++) {
            totalOnes += nums[i];
            doubledNums[i] = doubledNums[i + n] = nums[i];
        }
        
        // Edge cases
        if (totalOnes == 0 || totalOnes == n) return 0;
        
        // Create cumulative sum array
        vector<int> cumulativeSum(2 * n + 1, 0);
        for (int i = 0; i < 2 * n; i++) {
            cumulativeSum[i + 1] = cumulativeSum[i] + doubledNums[i];
        }
        
        int maxOnesInWindow = 0;
        
        // Check all possible windows of size totalOnes
        for (int i = 0; i <= n; i++) {
            int onesInWindow = cumulativeSum[i + totalOnes] - cumulativeSum[i];
            maxOnesInWindow = max(maxOnesInWindow, onesInWindow);
        }
        
        return totalOnes - maxOnesInWindow;
    }
};

```
```Python []
class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        total_ones = sum(nums)
        
        # Edge cases
        if total_ones == 0 or total_ones == n:
            return 0
        
        # Create doubled array and cumulative sum
        doubled_nums = nums + nums
        cumulative_sum = [0] + list(accumulate(doubled_nums))
        
        max_ones_in_window = 0
        
        # Check all possible windows of size total_ones
        for i in range(n + 1):
            ones_in_window = cumulative_sum[i + total_ones] - cumulative_sum[i]
            max_ones_in_window = max(max_ones_in_window, ones_in_window)
        
        return total_ones - max_ones_in_window


```
```Go []
func minSwaps(nums []int) int {
    n := len(nums)
    totalOnes := 0
    
    // Count total number of 1's and create a doubled array
    doubledNums := make([]int, 2*n)
    for i := 0; i < n; i++ {
        totalOnes += nums[i]
        doubledNums[i] = nums[i]
        doubledNums[i+n] = nums[i]
    }
    
    // Edge cases
    if totalOnes == 0 || totalOnes == n {
        return 0
    }
    
    // Create cumulative sum array
    cumulativeSum := make([]int, 2*n+1)
    for i := 0; i < 2*n; i++ {
        cumulativeSum[i+1] = cumulativeSum[i] + doubledNums[i]
    }
    
    maxOnesInWindow := 0
    
    // Check all possible windows of size totalOnes
    for i := 0; i <= n; i++ {
        onesInWindow := cumulativeSum[i+totalOnes] - cumulativeSum[i]
        if onesInWindow > maxOnesInWindow {
            maxOnesInWindow = onesInWindow
        }
    }
    
    return totalOnes - maxOnesInWindow
}

```
```Rust []
impl Solution {
    pub fn min_swaps(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let total_ones = nums.iter().sum::<i32>();
        
        // Edge cases
        if total_ones == 0 || total_ones == n as i32 {
            return 0;
        }
        
        // Create doubled array and cumulative sum
        let doubled_nums: Vec<i32> = nums.iter().chain(nums.iter()).cloned().collect();
        let mut cumulative_sum = vec![0; 2 * n + 1];
        for i in 0..2*n {
            cumulative_sum[i + 1] = cumulative_sum[i] + doubled_nums[i];
        }
        
        let mut max_ones_in_window = 0;
        
        // Check all possible windows of size total_ones
        for i in 0..=n {
            let ones_in_window = cumulative_sum[i + total_ones as usize] - cumulative_sum[i];
            max_ones_in_window = max_ones_in_window.max(ones_in_window);
        }
        
        total_ones - max_ones_in_window
    }
}

```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    
    // Edge cases
    if (totalOnes === 0 || totalOnes === n) return 0;
    
    // Create doubled array and cumulative sum
    const doubledNums = [...nums, ...nums];
    const cumulativeSum = [0];
    for (let i = 0; i < 2 * n; i++) {
        cumulativeSum[i + 1] = cumulativeSum[i] + doubledNums[i];
    }
    
    let maxOnesInWindow = 0;
    
    // Check all possible windows of size totalOnes
    for (let i = 0; i <= n; i++) {
        const onesInWindow = cumulativeSum[i + totalOnes] - cumulativeSum[i];
        maxOnesInWindow = Math.max(maxOnesInWindow, onesInWindow);
    }
    
    return totalOnes - maxOnesInWindow;
};

```