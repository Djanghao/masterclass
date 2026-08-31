# 🔥More Than One Way🔥|🔥Detail Explanation🔥|🔥 Java |🔥C++ |🔥Python |🔥JavaScript |🔥C# |

**Author:** Akhilesh21
**Votes:** 174
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300738/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300738/)

---


# 1st Method :- Two Pointers / Sliding Window\uD83D\uDD25

## Intuition \uD83D\uDE80
The goal of the problem is to find the maximum frequency of an element in an array after performing certain operations. The operations involve adding or subtracting a given value `k` to elements in the array. To achieve this, the code uses a sliding window approach.

The intuition behind the sliding window is to maintain a valid subarray (window) that satisfies the given condition. By adjusting the window based on the sum of elements and the condition, the code efficiently explores different subarrays to find the maximum frequency.

## Approach \uD83D\uDE80

1. **Sorting:**
   - The array `nums` is sorted in ascending order. Sorting is crucial for the sliding window approach, as it allows us to efficiently adjust the window based on the current element.

2. **Sliding Window:**
   - Two pointers, `left` and `right`, are used to define the subarray. The `right` pointer is advanced to include elements in the current subarray, while the `left` pointer is adjusted to maintain a valid subarray.

3. **Subarray Sum and Adjustments:**
   - `currentSum` represents the sum of elements in the current subarray. The code adds the current element (`nums[right]`) to this sum.
   - A while loop checks if the current subarray violates the condition (`sum + k < nums[right] * length`). If it does, the code adjusts the subarray by removing the leftmost element and updating the sum. This ensures that the condition is satisfied.

4. **Update Maximum Frequency:**
   - The maximum frequency (`maxFrequency`) is updated by comparing it with the length of the current subarray (`right - left + 1`). The length represents the number of elements in the valid subarray.

5. **Return Result:**
   - The final result is the maximum frequency found after processing the entire array.

In summary, the approach involves efficiently exploring different subarrays using a sliding window and adjusting the window based on the sum of elements and the given condition. Sorting the array is a key step to simplify the sliding window process. The code efficiently finds the maximum frequency by maintaining a valid subarray and updating the frequency as the window moves through the array.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public int maxFrequency(int[] nums, int k) {
        int maxFrequency = 0; // Initialize the maximum frequency
        long currentSum = 0; // Initialize the current sum of the subarray elements

        Arrays.sort(nums); // Sort the array in ascending order

        for (int left = 0, right = 0; right < nums.length; ++right) {
            currentSum += nums[right]; // Include the current element in the subarray sum

            // Check if the current subarray violates the condition (sum + k < nums[right] * length)
            while (currentSum + k < (long) nums[right] * (right - left + 1)) {
                currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
                left++; // Move the left pointer to the right
            }

            // Update the maximum frequency based on the current subarray length
            maxFrequency = Math.max(maxFrequency, right - left + 1);
        }

        return maxFrequency;
    }
}

```
``` C++ []
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {
        int maxFrequency = 0; // Initialize the maximum frequency
        long currentSum = 0; // Initialize the current sum of the subarray elements

        std::sort(nums.begin(), nums.end()); // Sort the array in ascending order

        for (int left = 0, right = 0; right < nums.size(); ++right) {
            currentSum += nums[right]; // Include the current element in the subarray sum

            // Check if the current subarray violates the condition (sum + k < nums[right] * length)
            while (currentSum + k < static_cast<long>(nums[right]) * (right - left + 1)) {
                currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
                left++; // Move the left pointer to the right
            }

            // Update the maximum frequency based on the current subarray length
            maxFrequency = std::max(maxFrequency, right - left + 1);
        }

        return maxFrequency;
    }
};

```
``` Python []
class Solution(object):
    def maxFrequency(self, nums, k):
        maxFrequency = 0  # Initialize the maximum frequency
        currentSum = 0  # Initialize the current sum of the subarray elements

        nums.sort()  # Sort the array in ascending order

        left = 0
        for right in range(len(nums)):
            currentSum += nums[right]  # Include the current element in the subarray sum

            # Check if the current subarray violates the condition (sum + k < nums[right] * length)
            while currentSum + k < nums[right] * (right - left + 1):
                currentSum -= nums[left]  # Adjust the subarray sum by removing the leftmost element
                left += 1  # Move the left pointer to the right

            # Update the maximum frequency based on the current subarray length
            maxFrequency = max(maxFrequency, right - left + 1)

        return maxFrequency

```
``` JavaScript []
var maxFrequency = function(nums, k) {
    let maxFrequency = 0; // Initialize the maximum frequency
    let currentSum = 0; // Initialize the current sum of the subarray

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let left = 0, right = 0; right < nums.length; ++right) {
        currentSum += nums[right]; // Include the current element in the subarray sum

        // Check if the current subarray violates the condition (sum + k < nums[right] * length)
        while (currentSum + k < nums[right] * (right - left + 1)) {
            currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
            left++; // Move the left pointer to the right
        }

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, right - left + 1);
    }

    return maxFrequency;
};

```
``` C# []
public class Solution {
    public int MaxFrequency(int[] nums, int k) {
        int maxFrequency = 0; // Initialize the maximum frequency
        long currentSum = 0; // Initialize the current sum of the subarray

        Array.Sort(nums); // Sort the array in ascending order

        for (int left = 0, right = 0; right < nums.Length; ++right) {
            currentSum += nums[right]; // Include the current element in the subarray sum

            // Check if the current subarray violates the condition (sum + k < nums[right] * length)
            while (currentSum + k < (long)nums[right] * (right - left + 1)) {
                currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
                left++; // Move the left pointer to the right
            }

            // Update the maximum frequency based on the current subarray length
            maxFrequency = Math.Max(maxFrequency, right - left + 1);
        }

        return maxFrequency;
    }
}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n log n)
- The code sorts the array, which has a time complexity of O(n log n), where n is the length of the input array `nums`.
- The main loop iterates through each element in the sorted array once, so it has a time complexity of O(n), where n is the length of the input array.
- Overall, the dominant factor is the sorting operation, making the time complexity O(n log n).

### \uD83C\uDFF9Space complexity: O(1)
- The space complexity is O(1) because the code uses a constant amount of extra space, regardless of the size of the input array. The additional space is used for variables like `maxFrequency`, `currentSum`, and loop variables (`left` and `right`), and it does not depend on the input size. Hence, the space complexity is constant.


![vote.jpg](./images/0.jpeg)

---
# 2nd Method :- Sliding Window & Greedy\uD83D\uDD25

## Intuition \uD83D\uDE80
The goal of the problem is to find the maximum frequency of any element in a subarray after performing operations on the array. The operations involve adjusting the subarray by removing elements to minimize the difference between the product of the element and the length of the subarray and the sum of the subarray.

## Approach \uD83D\uDE80

1. **Counting Sort:**
   - The initial step involves sorting the array in non-decreasing order using counting sort. This step ensures that elements are processed in ascending order during the main iteration.

2. **Sliding Window:**
   - The code uses a sliding window approach with two pointers (`start` and `i`) to define the current subarray.
   - `start` represents the leftmost index of the subarray, and `i` represents the rightmost index.

3. **Product and Sum Calculation:**
   - For each element in the sorted array, the code calculates the product of the element and the length of the current subarray (`subarrayProduct = nums[i] * subarrayLength`).
   - It also maintains the sum of elements in the current subarray (`subarraySum += nums[i]`).

4. **Adjustment of Subarray:**
   - If the difference between the product and the sum of the subarray exceeds the given limit (`k`), the subarray is adjusted.
   - The adjustment involves removing elements from the left of the subarray (`subarraySum -= nums[start]`) and updating the subarray length until the condition is satisfied.

5. **Update Maximum Frequency:**
   - The code updates the maximum frequency (`maxFrequency`) by comparing it with the length of the current subarray.
   - The length of the subarray represents the frequency of the current element in the subarray.

6. **Iteration Through Array:**
   - The iteration through the array continues until all elements are processed.

7. **Return Result:**
   - The final result returned is the maximum frequency found after processing the entire array.

### Summary:

The approach involves maintaining a sliding window and adjusting it as needed to satisfy the given condition. The code efficiently finds the maximum frequency by considering the product of elements and the length of the subarray, with counting sort aiding in sorting the array initially. The sliding window adjusts to minimize the difference between the product and the sum of the subarray, ensuring an optimal solution to the problem.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public int maxFrequency(int[] nums, int k) {
        countingSort(nums); // Sort the array using counting sort
        int start = 0; // Start index of the current subarray
        int subarraySum = 0; // Sum of elements in the current subarray
        int maxFrequency = 1; // Initialize the maximum frequency to 1

        // Iterate through the sorted array
        for (int i = 0; i < nums.length; i++) {
            int subarrayLength = i - start + 1; // Length of the current subarray
            int subarrayProduct = nums[i] * subarrayLength; // Product of element and subarray length
            subarraySum += nums[i]; // Add the current element to the subarray sum

            // Adjust the subarray to satisfy the condition (product - sum <= k)
            while (subarrayProduct - subarraySum > k) {
                subarraySum -= nums[start]; // Remove the leftmost element from the subarray
                start++; // Move the start index to the right
                subarrayLength--; // Decrease the length of the subarray
                subarrayProduct = nums[i] * subarrayLength; // Recalculate the product
            }

            // Update the maximum frequency based on the current subarray length
            maxFrequency = Math.max(maxFrequency, subarrayLength);
        }

        return maxFrequency; // Return the final result
    }

    // Counting Sort to sort the array in non-decreasing order
    private void countingSort(int[] nums) {
        int maxElement = Integer.MIN_VALUE;

        // Find the maximum element in the array
        for (int num : nums) {
            maxElement = Math.max(maxElement, num);
        }

        // Create an array to store the count of each element
        int[] countMap = new int[maxElement + 1];

        // Count the occurrences of each element in the array
        for (int num : nums) {
            countMap[num]++;
        }

        int index = 0;

        // Reconstruct the sorted array
        for (int i = 0; i <= maxElement; i++) {
            while (countMap[i]-- > 0) {
                nums[index++] = i;
            }
        }
    }
}

```
``` C++ []
class Solution {
public:
    int maxFrequency(std::vector<int>& nums, int k) {
        countingSort(nums); // Sort the array using counting sort
        int start = 0; // Start index of the current subarray
        long long subarraySum = 0; // Sum of elements in the current subarray
        int maxFrequency = 1; // Initialize the maximum frequency to 1

        // Iterate through the sorted array
        for (int i = 0; i < nums.size(); i++) {
            int subarrayLength = i - start + 1; // Length of the current subarray
            long long subarrayProduct = (long long)nums[i] * subarrayLength; // Use long long to avoid overflow
            subarraySum += nums[i]; // Add the current element to the subarray sum

            // Adjust the subarray to satisfy the condition (product - sum <= k)
            while (subarrayProduct - subarraySum > k) {
                subarraySum -= nums[start]; // Remove the leftmost element from the subarray
                start++; // Move the start index to the right
                subarrayLength--; // Decrease the length of the subarray
                subarrayProduct = (long long)nums[i] * subarrayLength; // Recalculate the product
            }

            // Update the maximum frequency based on the current subarray length
            maxFrequency = std::max(maxFrequency, subarrayLength);
        }

        return maxFrequency; // Return the final result
    }

private:
    // Counting Sort to sort the array in non-decreasing order
    void countingSort(std::vector<int>& nums) {
        int maxElement = INT_MIN;

        // Find the maximum element in the array
        for (int num : nums) {
            maxElement = std::max(maxElement, num);
        }

        // Create an array to store the count of each element
        std::vector<int> countMap(maxElement + 1, 0);

        // Count the occurrences of each element in the array
        for (int num : nums) {
            countMap[num]++;
        }

        int index = 0;

        // Reconstruct the sorted array
        for (int i = 0; i <= maxElement; i++) {
            while (countMap[i]-- > 0) {
                nums[index++] = i;
            }
        }
    }
};

```
``` Python []
class Solution:
    def maxFrequency(self, nums, k):
        self.countingSort(nums)  # Sort the array using counting sort
        start = 0  # Start index of the current subarray
        subarray_sum = 0  # Sum of elements in the current subarray
        max_frequency = 1  # Initialize the maximum frequency to 1

        # Iterate through the sorted array
        for i in range(len(nums)):
            subarray_length = i - start + 1  # Length of the current subarray
            subarray_product = nums[i] * subarray_length  # Product of element and subarray length
            subarray_sum += nums[i]  # Add the current element to the subarray sum

            # Adjust the subarray to satisfy the condition (product - sum <= k)
            while subarray_product - subarray_sum > k:
                subarray_sum -= nums[start]  # Remove the leftmost element from the subarray
                start += 1  # Move the start index to the right
                subarray_length -= 1  # Decrease the length of the subarray
                subarray_product = nums[i] * subarray_length  # Recalculate the product

            # Update the maximum frequency based on the current subarray length
            max_frequency = max(max_frequency, subarray_length)

        return max_frequency  # Return the final result

    # Counting Sort to sort the array in non-decreasing order
    def countingSort(self, nums):
        max_element = max(nums)

        # Create an array to store the count of each element
        count_map = [0] * (max_element + 1)

        # Count the occurrences of each element in the array
        for num in nums:
            count_map[num] += 1

        index = 0

        # Reconstruct the sorted array
        for i in range(max_element + 1):
            while count_map[i] > 0:
                nums[index] = i
                index += 1
                count_map[i] -= 1


```
``` JavaScript []
var maxFrequency = function(nums, k) {
    countingSort(nums); // Sort the array using counting sort
    let start = 0; // Start index of the current subarray
    let subarraySum = 0; // Sum of elements in the current subarray
    let maxFrequency = 1; // Initialize the maximum frequency to 1

    // Iterate through the sorted array
    for (let i = 0; i < nums.length; i++) {
        let subarrayLength = i - start + 1; // Length of the current subarray
        let subarrayProduct = nums[i] * subarrayLength; // Product of element and subarray length
        subarraySum += nums[i]; // Add the current element to the subarray sum

        // Adjust the subarray to satisfy the condition (product - sum <= k)
        while (subarrayProduct - subarraySum > k) {
            subarraySum -= nums[start]; // Remove the leftmost element from the subarray
            start++; // Move the start index to the right
            subarrayLength--; // Decrease the length of the subarray
            subarrayProduct = nums[i] * subarrayLength; // Recalculate the product
        }

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, subarrayLength);
    }

    return maxFrequency; // Return the final result
}

/**
 * Counting Sort to sort the array in non-decreasing order.
 * @param {number[]} nums - The input array of numbers.
 */
function countingSort(nums) {
    const maxElement = Math.max(...nums); // Find the maximum element in the array
    const countMap = Array(maxElement + 1).fill(0); // Create an array to store the count of each element
    let index = 0;

    // Count the occurrences of each element in the array
    for (const num of nums) {
        countMap[num]++;
    }

    // Reconstruct the sorted array
    for (let i = 0; i <= maxElement; i++) {
        while (countMap[i]-- > 0) {
            nums[index++] = i;
        }
    }
}

```
``` C# []
public class Solution {
    public int MaxFrequency(int[] nums, int k) {
        CountingSort(nums); // Sort the array using counting sort
        int start = 0; // Start index of the current subarray
        int subarraySum = 0; // Sum of elements in the current subarray
        int maxFrequency = 1; // Initialize the maximum frequency to 1

        // Iterate through the sorted array
        for (int i = 0; i < nums.Length; i++) {
            int subarrayLength = i - start + 1; // Length of the current subarray
            int subarrayProduct = nums[i] * subarrayLength; // Product of element and subarray length
            subarraySum += nums[i]; // Add the current element to the subarray sum

            // Adjust the subarray to satisfy the condition (product - sum <= k)
            while (subarrayProduct - subarraySum > k) {
                subarraySum -= nums[start]; // Remove the leftmost element from the subarray
                start++; // Move the start index to the right
                subarrayLength--; // Decrease the length of the subarray
                subarrayProduct = nums[i] * subarrayLength; // Recalculate the product
            }

            // Update the maximum frequency based on the current subarray length
            maxFrequency = Math.Max(maxFrequency, subarrayLength);
        }

        return maxFrequency; // Return the final result
    }

    // Counting Sort to sort the array in non-decreasing order
    private void CountingSort(int[] nums) {
        int maxElement = int.MinValue;

        // Find the maximum element in the array
        foreach (int num in nums) {
            maxElement = Math.Max(maxElement, num);
        }

        int[] countMap = new int[maxElement + 1]; // Create an array to store the count of each element
        int index = 0;

        // Count the occurrences of each element in the array
        foreach (int num in nums) {
            countMap[num]++;
        }

        // Reconstruct the sorted array
        for (int i = 0; i <= maxElement; i++) {
            while (countMap[i]-- > 0) {
                nums[index++] = i;
            }
        }
    }

}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(N + K)
- **Counting Sort (sorting step):** O(N + K), where N is the length of the input array `nums`, and K is the range of values (maximum element in `nums`).
  - Counting sort has a linear time complexity because it iterates through the input array once to count the occurrences of each element and then reconstructs the sorted array.

- **Main Loop (sliding window):** O(N), where N is the length of the input array `nums`.
  - The main loop iterates through each element of the sorted array once.

The overall time complexity is dominated by the counting sort step, making the total time complexity O(N + K).

### \uD83C\uDFF9Space complexity: O(K)
- **Counting Sort (sorting step):** O(K), where K is the range of values (maximum element in `nums`).
  - The space required for counting sort is proportional to the range of values in the input array.

- **Other Variables:** O(1).
  - The space required for variables such as `start`, `subarraySum`, `maxFrequency`, etc., is constant and does not depend on the input size.

The overall space complexity is O(K), where K is the range of values in the input array.

Note: The space complexity of the counting sort step dominates the overall space complexity. If the range of values (K) is significantly smaller than the length of the input array (N), the space complexity can be considered linear (O(N)).

![vote.jpg](./images/1.jpeg)

---
# 3rd Method :- Binary Search with Prefix Sum\uD83D\uDD25
## The least efficient approach

## Intuition \uD83D\uDE80
The problem requires finding the maximum frequency of an element in a subarray after performing certain operations. The operations involve changing the elements in the subarray to make the difference between the maximum and minimum elements within a specified limit (k). The provided solution tackles this problem using a binary search approach.

## Approach \uD83D\uDE80

1. **Sort the Array:**
   - The array is sorted in ascending order. Sorting simplifies the calculation of differences between adjacent elements.

2. **Calculate Differences and Prefix Sums:**
   - Differences between adjacent elements are calculated and stored in the `differences` array.
   - Prefix sums of the differences are calculated and stored in the `prefixSums` array. This aids in efficiently computing the sum of differences in subarrays.

3. **Binary Search for Maximum Frequency:**
   - A binary search is employed to find the maximum frequency that satisfies the given conditions.
   - The search space is narrowed down by adjusting the low and high pointers.

4. **isPossible Function:**
   - The `isPossible` function checks if it's possible to achieve a certain frequency with the allowed difference `k`.
   - It initializes the `times` variable based on the frequency and the last element in the subarray.
   - It iterates through the array, updating the `times` variable by considering the difference in prefix sums and new differences.
   - The minimum `times` is tracked, and the function returns true if the minimum `times` is within the allowed difference `k`.

### Explanation of Binary Search:
The binary search in this context is applied to find the maximum frequency efficiently. The search space is the potential frequencies that we can achieve. The `isPossible` function checks whether it's possible to achieve a given frequency with the allowed difference. The binary search updates the search space based on the result of this check until it finds the maximum frequency.

### Overall:
The approach leverages sorting, prefix sums, and binary search to efficiently find the maximum frequency of an element in a subarray while considering the allowed difference. The `isPossible` function plays a crucial role in determining the feasibility of achieving a certain frequency. The binary search optimally explores the space of potential frequencies.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public int maxFrequency(int[] nums, int k) {
        // Sort the array in ascending order
        Arrays.sort(nums);

        int length = nums.length;

        // Calculate the differences between adjacent elements
        long[] differences = new long[length];
        for (int i = 1; i < length; i++)
            differences[i] = (long) nums[i] - (long) nums[i - 1];

        // Calculate the prefix sums of the differences
        long[] prefixSums = new long[length];
        for (int i = 1; i < length; i++)
            prefixSums[i] = prefixSums[i - 1] + differences[i];

        int low = 1, high = length;

        // Binary search for the maximum frequency
        while (low < high) {
            int mid = (high - low + 1) / 2 + low;

            // Check if it's possible to achieve the given frequency with the allowed difference
            if (isPossible(nums, differences, prefixSums, mid, k))
                low = mid;
            else
                high = mid - 1;
        }

        return low;
    }

    // Function to check if it's possible to achieve the given frequency with the allowed difference
    public boolean isPossible(int[] nums, long[] differences, long[] prefixSums, int freq, int k) {
        int length = differences.length;

        long times = 0;

        // Calculate the initial times based on the frequency and the last element in the subarray
        for (int i = freq - 2; i >= 0; i--)
            times += (long) nums[freq - 1] - (long) nums[i];

        long minTimes = times;

        // Iterate from freq-th element to the end of the array
        for (int i = freq; i < length; i++) {
            // Update times by considering the difference in prefix sums and new differences
            times = times - (prefixSums[i - 1] - prefixSums[i - freq]) + differences[i] * (freq - 1);
            minTimes = Math.min(minTimes, times);
        }

        // Check if the minimum times is within the allowed difference (k)
        return minTimes <= (long) k;
    }
}

```
``` C++ []
class Solution {
public:
    int maxFrequency(std::vector<int>& nums, int k) {
        // Sort the array in ascending order
        std::sort(nums.begin(), nums.end());

        int length = nums.size();

        // Calculate the differences between adjacent elements
        std::vector<long> differences(length);
        for (int i = 1; i < length; i++)
            differences[i] = static_cast<long>(nums[i]) - static_cast<long>(nums[i - 1]);

        // Calculate the prefix sums of the differences
        std::vector<long> prefixSums(length);
        for (int i = 1; i < length; i++)
            prefixSums[i] = prefixSums[i - 1] + differences[i];

        int low = 1, high = length;

        // Binary search for the maximum frequency
        while (low < high) {
            int mid = (high - low + 1) / 2 + low;

            // Check if it's possible to achieve the given frequency with the allowed difference
            if (isPossible(nums, differences, prefixSums, mid, k))
                low = mid;
            else
                high = mid - 1;
        }

        return low;
    }

private:
    // Function to check if it's possible to achieve the given frequency with the allowed difference
    bool isPossible(const std::vector<int>& nums, const std::vector<long>& differences, const std::vector<long>& prefixSums, int freq, int k) {
        int length = differences.size();

        long times = 0;

        // Calculate the initial times based on the frequency and the last element in the subarray
        for (int i = freq - 2; i >= 0; i--)
            times += static_cast<long>(nums[freq - 1]) - static_cast<long>(nums[i]);

        long minTimes = times;

        // Iterate from freq-th element to the end of the array
        for (int i = freq; i < length; i++) {
            // Update times by considering the difference in prefix sums and new differences
            times = times - (prefixSums[i - 1] - prefixSums[i - freq]) + differences[i] * (freq - 1);
            minTimes = std::min(minTimes, times);
        }

        // Check if the minimum times is within the allowed difference (k)
        return minTimes <= static_cast<long>(k);
    }
};

```
``` Python []
class Solution:
    def maxFrequency(self, nums, k):
        # Sort the array in ascending order
        nums.sort()

        length = len(nums)

        # Calculate the differences between adjacent elements
        differences = [0] * length
        for i in range(1, length):
            differences[i] = nums[i] - nums[i - 1]

        # Calculate the prefix sums of the differences
        prefix_sums = [0] * length
        for i in range(1, length):
            prefix_sums[i] = prefix_sums[i - 1] + differences[i]

        low, high = 1, length

        # Binary search for the maximum frequency
        while low < high:
            mid = (high - low + 1) // 2 + low

            # Check if it's possible to achieve the given frequency with the allowed difference
            if self.isPossible(nums, differences, prefix_sums, mid, k):
                low = mid
            else:
                high = mid - 1

        return low

    def isPossible(self, nums, differences, prefix_sums, freq, k):
        length = len(differences)

        times = 0

        # Calculate the initial times based on the frequency and the last element in the subarray
        for i in range(freq - 2, -1, -1):
            times += nums[freq - 1] - nums[i]

        min_times = times

        # Iterate from freq-th element to the end of the array
        for i in range(freq, length):
            # Update times by considering the difference in prefix sums and new differences
            times = times - (prefix_sums[i - 1] - prefix_sums[i - freq]) + differences[i] * (freq - 1)
            min_times = min(min_times, times)

        # Check if the minimum times is within the allowed difference (k)
        return min_times <= k

```
``` JavaScript []
var maxFrequency = function(nums, k) {
/**
 * Function to find the maximum frequency of an element in a subarray
 * after performing certain operations.
 * @param {number[]} nums - The input array of numbers.
 * @param {number} k - The allowed difference for operations.
 * @returns {number} - The maximum frequency.
 */
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    const length = nums.length;

    // Calculate the differences between adjacent elements
    const differences = new Array(length).fill(0);
    for (let i = 1; i < length; i++)
        differences[i] = nums[i] - nums[i - 1];

    // Calculate the prefix sums of the differences
    const prefixSums = new Array(length).fill(0);
    for (let i = 1; i < length; i++)
        prefixSums[i] = prefixSums[i - 1] + differences[i];

    let low = 1, high = length;

    // Binary search for the maximum frequency
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low;

        // Check if it's possible to achieve the given frequency with the allowed difference
        if (isPossible(nums, differences, prefixSums, mid, k))
            low = mid;
        else
            high = mid - 1;
    }

    return low;
}

/**
 * Function to check if it's possible to achieve the given frequency with the allowed difference.
 * @param {number[]} nums - The input array of numbers.
 * @param {number[]} differences - The array of differences between adjacent elements.
 * @param {number[]} prefixSums - The array of prefix sums of differences.
 * @param {number} freq - The current frequency being considered.
 * @param {number} k - The allowed difference for operations.
 * @returns {boolean} - True if the given frequency is possible; otherwise, false.
 */
function isPossible(nums, differences, prefixSums, freq, k) {
    const length = differences.length;

    let times = 0;

    // Calculate the initial times based on the frequency and the last element in the subarray
    for (let i = freq - 2; i >= 0; i--)
        times += nums[freq - 1] - nums[i];

    let minTimes = times;

    // Iterate from freq-th element to the end of the array
    for (let i = freq; i < length; i++) {
        // Update times by considering the difference in prefix sums and new differences
        times = times - (prefixSums[i - 1] - prefixSums[i - freq]) + differences[i] * (freq - 1);
        minTimes = Math.min(minTimes, times);
    }

    // Check if the minimum times is within the allowed difference (k)
    return minTimes <= k;
}


```
``` C# []
using System;

public class Solution {
    public int MaxFrequency(int[] nums, int k) {
        // Sort the array in ascending order
        Array.Sort(nums);

        int length = nums.Length;

        // Calculate the differences between adjacent elements
        long[] differences = new long[length];
        for (int i = 1; i < length; i++)
            differences[i] = nums[i] - nums[i - 1];

        // Calculate the prefix sums of the differences
        long[] prefixSums = new long[length];
        for (int i = 1; i < length; i++)
            prefixSums[i] = prefixSums[i - 1] + differences[i];

        int low = 1, high = length;

        // Binary search for the maximum frequency
        while (low < high) {
            int mid = (high - low + 1) / 2 + low;

            // Check if it's possible to achieve the given frequency with the allowed difference
            if (IsPossible(nums, differences, prefixSums, mid, k))
                low = mid;
            else
                high = mid - 1;
        }

        return low;
    }

    // Function to check if it's possible to achieve the given frequency with the allowed difference
    public bool IsPossible(int[] nums, long[] differences, long[] prefixSums, int freq, int k) {
        int length = differences.Length;

        long times = 0;

        // Calculate the initial times based on the frequency and the last element in the subarray
        for (int i = freq - 2; i >= 0; i--)
            times += nums[freq - 1] - nums[i];

        long minTimes = times;

        // Iterate from freq-th element to the end of the array
        for (int i = freq; i < length; i++) {
            // Update times by considering the difference in prefix sums and new differences
            times = times - (prefixSums[i - 1] - prefixSums[i - freq]) + differences[i] * (freq - 1);
            minTimes = Math.Min(minTimes, times);
        }

        // Check if the minimum times is within the allowed difference (k)
        return minTimes <= k;
    }

}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n log n)
1. **Sorting:**
   - The initial sorting of the array takes O(n log n) time, where n is the length of the array.

2. **Differences and Prefix Sums:**
   - Calculating differences and prefix sums involves iterating through the array once, which takes O(n) time.

3. **Binary Search:**
   - The binary search iterates log(n) times.

4. **isPossible Function:**
   - The `isPossible` function iterates through the array once, making it O(n).

The overall time complexity is dominated by the sorting step, making it O(n log n).

### \uD83C\uDFF9Space complexity: O(n)

1. **Differences and Prefix Sums:**
   - Additional space is used to store the arrays `differences` and `prefixSums`, each of size n. Therefore, the space complexity for these arrays is O(n).

2. **Other Variables:**
   - Other variables like `low`, `high`, `mid`, `times`, and `minTimes` use constant space.

The overall space complexity is O(n) due to the additional arrays created for differences and prefix sums.






![upvote.png](./images/2.png)

# Up Vote Guys






