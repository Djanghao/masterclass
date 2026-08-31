# 4 Approach | Sliding Window | Counting Sort |Beats 100% Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 156
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5583514/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5583514/)

---

# Sliding Window
### Intuition
We don't actually need to generate all possible subarrays, sort them, and then sum the required range. Such an approach would be highly inefficient.

Instead, we can use the properties of subarray sums and use a combination of sliding window and binary search techniques to solve this problem efficiently. The core ideas are:

1. We can calculate the sum of all subarrays ending at a particular index in linear time using a sliding window approach.
2. We can use binary search to find the Kth smallest subarray sum without actually generating and sorting all subarray sums.
3. We can use the principle of inclusion-exclusion to calculate the sum of subarrays in a given range.

The intuition behind using a sliding window is that as we move the window, we can efficiently update the sum of subarrays ending at the current index. This allows us to count the number of subarrays with sum less than or equal to a given threshold and calculate their total sum.

The binary search comes into play when we need to find the Kth smallest subarray sum. We can binary search on the possible sum values (from the minimum possible subarray sum to the maximum possible subarray sum) and use our sliding window method to count how many subarrays have a sum less than or equal to the current mid value.

Finally, the principle of inclusion-exclusion allows us to calculate the sum of subarrays from index left to right by subtracting the sum of the first (left-1) subarrays from the sum of the first right subarrays.

### Approach

Let's break down the approach:

1. **Initialization:**
   - We define constants and instance variables:
     - `MODULUS`: The modulo value (10^9 + 7) to handle large sums.
     - `maxSubarraySum`: To store the maximum possible subarray sum.
     - `minSubarraySum`: To store the minimum possible subarray sum.

2. **countAndSumSubarrays method:**
   This method is the core of our sliding window approach. It counts the number of subarrays with sum less than or equal to a given threshold and calculates their total sum.

   - We use two pointers, `start` and `end`, to define our window.
   - As we move the `end` pointer:
     - We update `runningSum` which represents the sum of all subarrays ending at the current index.
     - We update `currentWindowSum` which is the sum of elements in the current window.
   - If `currentWindowSum` exceeds the threshold, we shrink the window from the left.
   - We count the number of valid subarrays ending at the current index and add their sums to `totalSum`.
   - Finally, we return a pair of the count and total sum.

3. **calculateSumOfFirstKSubarrays method:**
   This method uses binary search to find the Kth smallest subarray sum.

   - We perform binary search on the range from `minSubarraySum` to `maxSubarraySum`.
   - For each mid value, we use `countAndSumSubarrays` to check how many subarrays have sum less than or equal to mid.
   - We adjust our search range based on this count.
   - Once we find the correct threshold, we calculate the sum of the first K subarrays.

4. **rangeSum method:**
   This is our main method that puts everything together.

   - We initialize `minSubarraySum` and `maxSubarraySum`.
   - We calculate the sum of the first `right` subarrays and subtract the sum of the first `left-1` subarrays.
   - We handle the modulo arithmetic to avoid overflow.

Now, let's dive deeper into each of these components:

**countAndSumSubarrays:**
This method is the heart of our solution. It uses a sliding window technique to efficiently count and sum subarrays. Here's how it works:

1. We initialize variables:
   - `count`: to keep track of the number of subarrays with sum <= threshold
   - `totalSum`: to sum up all these subarrays
   - `currentWindowSum`: to maintain the sum of the current window
   - `runningSum`: to keep track of the sum of all subarrays ending at the current index

2. We use two pointers, `start` and `end`, to define our window.

3. As we move the `end` pointer:
   - We update `runningSum` by adding `array[end] * (end - start + 1)`. This is because for each new element, we're adding it to all existing subarrays ending at the previous index, plus creating a new subarray with just this element.
   - We add the current element to `currentWindowSum`.

4. If `currentWindowSum` exceeds the threshold, we need to shrink our window:
   - We subtract `currentWindowSum` from `runningSum` because all subarrays including the start element are now invalid.
   - We remove the start element from `currentWindowSum` and move the start pointer.

5. After adjusting the window, we know that all subarrays ending at the current index and starting from start to end are valid. So we add `end - start + 1` to our count.

6. We add `runningSum` to `totalSum` to account for all these valid subarrays.

7. Finally, we return a pair of the count and total sum.

This method allows us to count and sum subarrays in O(n) time complexity, which is crucial for the efficiency of our overall solution.

**calculateSumOfFirstKSubarrays:**
This method uses binary search to find the Kth smallest subarray sum. Here's a detailed explanation:

1. We set our search range from `minSubarraySum` to `maxSubarraySum`. These values represent the smallest and largest possible subarray sums respectively.

2. We perform binary search on this range:
   - Calculate the mid value.
   - Use `countAndSumSubarrays` to find how many subarrays have sum <= mid.
   - If this count is less than K, we know our target sum is higher, so we search in the upper half.
   - Otherwise, we search in the lower half.

3. Once the binary search converges, we have found the threshold where exactly K subarrays have sum <= threshold.

4. We then call `countAndSumSubarrays` one more time with this threshold to get the exact count and sum.

5. Finally, we need to adjust our sum. The sum we got includes some subarrays with sum equal to the threshold that we don't want. We subtract `threshold * (count - K)` to remove these extra subarrays.

This binary search approach allows us to find the Kth smallest sum in O(log(sum) * n) time, where sum is the total sum of the array. This is much more efficient than generating and sorting all possible subarray sums.

**rangeSum:**
This is our main method that orchestrates the entire solution:

1. We start by initializing `minSubarraySum` and `maxSubarraySum`:
   - `minSubarraySum` is set to the smallest element in the array.
   - `maxSubarraySum` is set to the sum of all elements in the array.

2. We then calculate our result using the principle of inclusion-exclusion:
   - We calculate the sum of the first `right` subarrays using `calculateSumOfFirstKSubarrays`.
   - We subtract from this the sum of the first `left-1` subarrays.
   - This gives us the sum of subarrays from index `left` to `right`.

3. We handle the modulo arithmetic carefully to avoid overflow:
   - We add `MODULUS` before taking the final modulo to ensure we don't end up with a negative result.

4. Finally, we cast the result to an int and return it.

This approach allows us to solve the problem without ever explicitly generating all possible subarray sums, which would be prohibitively expensive for large inputs.

### Complexity

- **Time complexity: O(n * log(sum))**

  Where n is the length of the input array and sum is the total sum of all elements in the array.

  Let's break this down:
  - The `rangeSum` method itself is O(n) for initializing `minSubarraySum` and `maxSubarraySum`.
  - It then calls `calculateSumOfFirstKSubarrays` twice, which dominates the time complexity.
  - `calculateSumOfFirstKSubarrays` performs a binary search, which takes O(log(sum)) iterations.
  - In each iteration, it calls `countAndSumSubarrays`, which is O(n).
  - Thus, the overall time complexity is O(n * log(sum)).

  This is significantly better than the naive approach of generating all subarrays (O(n^2)), sorting them (O(n^2 * log(n))), and then summing a range (O(n^2)).

- **Space complexity: O(1)**

  The space complexity is constant because we only use a fixed number of variables regardless of the input size. We don't create any data structures that grow with the input size.

  Here's a breakdown of the space used:
  - A few long variables (`maxSubarraySum`, `minSubarraySum`, etc.)
  - A few int variables in various methods
  - The input array, which is not counted in the additional space complexity as it's part of the input

  Even in the `countAndSumSubarrays` method, which uses a sliding window approach, we only use a constant amount of extra space to keep track of counts and sums.


### Code
```Java []
import java.util.*;

class Solution {
    private static final int MODULUS = 1000000007;
    private long maxSubarraySum = 0;
    private long minSubarraySum = 0;

    private Map.Entry<Integer, Long> countAndSumSubarrays(int[] array, long threshold) {
        int count = 0;
        long totalSum = 0;
        long currentWindowSum = 0;
        long runningSum = 0;
        int size = array.length;

        for (int start = 0, end = 0; end < size; ++end) {
            runningSum += (long) array[end] * (end - start + 1);
            currentWindowSum += array[end]; 
            while (currentWindowSum > threshold) {
                runningSum -= currentWindowSum;
                currentWindowSum -= array[start++];
            }
            count += end - start + 1;
            totalSum += runningSum;
        }
        return new AbstractMap.SimpleEntry<>(count, totalSum);
    }

    private long calculateSumOfFirstKSubarrays(int[] array, int k) {
        long low = minSubarraySum, high = maxSubarraySum;
        while (low < high) {
            long mid = low + (high - low) / 2;
            if (countAndSumSubarrays(array, mid).getKey() < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        Map.Entry<Integer, Long> result = countAndSumSubarrays(array, low);
        long sum = result.getValue();
        int count = result.getKey();
        return sum - low * (count - k);
    }

    public int rangeSum(int[] nums, int n, int left, int right) {
        minSubarraySum = nums[0];
        for (int num : nums) {
            maxSubarraySum += num;
            minSubarraySum = Math.min(minSubarraySum, num);
        }

        long result = (calculateSumOfFirstKSubarrays(nums, right) % MODULUS - 
                       calculateSumOfFirstKSubarrays(nums, left - 1) % MODULUS + 
                       MODULUS) % MODULUS;
        return (int) result;
    }
}
```
```C++ []
#include <vector>
#include <algorithm>
#include <utility>

class Solution {
private:
    static const int MODULUS = 1000000007;
    long long maxSubarraySum = 0;
    long long minSubarraySum = 0;

    std::pair<int, long long> countAndSumSubarrays(const std::vector<int>& array, long long threshold) {
        int count = 0;
        long long totalSum = 0, currentWindowSum = 0, runningSum = 0;
        int size = array.size();

        for (int start = 0, end = 0; end < size; ++end) {
            runningSum += static_cast<long long>(array[end]) * (end - start + 1);
            currentWindowSum += array[end];
            while (currentWindowSum > threshold) {
                runningSum -= currentWindowSum;
                currentWindowSum -= array[start++];
            }
            count += end - start + 1;
            totalSum += runningSum;
        }
        return {count, totalSum};
    }

    long long calculateSumOfFirstKSubarrays(const std::vector<int>& array, int k) {
        long long low = minSubarraySum, high = maxSubarraySum;
        while (low < high) {
            long long mid = low + (high - low) / 2;
            if (countAndSumSubarrays(array, mid).first < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        auto [count, sum] = countAndSumSubarrays(array, low);
        return sum - low * (count - k);
    }

public:
    int rangeSum(std::vector<int>& nums, int n, int left, int right) {
        minSubarraySum = *std::min_element(nums.begin(), nums.end());
        maxSubarraySum = std::accumulate(nums.begin(), nums.end(), 0LL);

        long long result = (calculateSumOfFirstKSubarrays(nums, right) % MODULUS - 
                            calculateSumOfFirstKSubarrays(nums, left - 1) % MODULUS + 
                            MODULUS) % MODULUS;
        return static_cast<int>(result);
    }
};
```
```Python []
from typing import List, Tuple

class Solution:
    MODULUS = 10**9 + 7

    def count_and_sum_subarrays(self, array: List[int], threshold: int) -> Tuple[int, int]:
        count, total_sum, current_window_sum, running_sum = 0, 0, 0, 0
        start = 0

        for end, num in enumerate(array):
            running_sum += num * (end - start + 1)
            current_window_sum += num
            while current_window_sum > threshold:
                running_sum -= current_window_sum
                current_window_sum -= array[start]
                start += 1
            count += end - start + 1
            total_sum += running_sum

        return count, total_sum

    def calculate_sum_of_first_k_subarrays(self, array: List[int], k: int) -> int:
        low, high = min(array), sum(array)
        while low < high:
            mid = (low + high) // 2
            if self.count_and_sum_subarrays(array, mid)[0] < k:
                low = mid + 1
            else:
                high = mid
        count, sum_value = self.count_and_sum_subarrays(array, low)
        return sum_value - low * (count - k)

    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        result = (self.calculate_sum_of_first_k_subarrays(nums, right) -
                  self.calculate_sum_of_first_k_subarrays(nums, left - 1))
        return result % self.MODULUS
```
```Go []
func rangeSum(nums []int, n int, left int, right int) int {
    const MODULUS = 1000000007

    countAndSumSubarrays := func(array []int, threshold int64) (int, int64) {
        count := 0
        var totalSum, currentWindowSum, runningSum int64
        start := 0

        for end := 0; end < len(array); end++ {
            runningSum += int64(array[end]) * int64(end-start+1)
            currentWindowSum += int64(array[end])
            for currentWindowSum > threshold {
                runningSum -= currentWindowSum
                currentWindowSum -= int64(array[start])
                start++
            }
            count += end - start + 1
            totalSum += runningSum
        }
        return count, totalSum
    }

    calculateSumOfFirstKSubarrays := func(array []int, k int) int64 {
        low := int64(array[0])
        var high int64
        for _, num := range array {
            if int64(num) < low {
                low = int64(num)
            }
            high += int64(num)
        }

        for low < high {
            mid := low + (high-low)/2
            if count, _ := countAndSumSubarrays(array, mid); count < k {
                low = mid + 1
            } else {
                high = mid
            }
        }
        count, sum := countAndSumSubarrays(array, low)
        return sum - low*int64(count-k)
    }

    result := (calculateSumOfFirstKSubarrays(nums, right) -
               calculateSumOfFirstKSubarrays(nums, left-1) +
               int64(MODULUS)) % int64(MODULUS)
    return int(result)
}
```
```Rust []
const MODULUS: i64 = 1000000007;

impl Solution {
    fn count_and_sum_subarrays(array: &[i32], threshold: i64) -> (i32, i64) {
        let mut count = 0;
        let mut total_sum = 0;
        let mut current_window_sum = 0;
        let mut running_sum = 0;
        let mut start = 0;

        for (end, &num) in array.iter().enumerate() {
            running_sum += i64::from(num) * (end - start + 1) as i64;
            current_window_sum += i64::from(num);
            while current_window_sum > threshold {
                running_sum -= current_window_sum;
                current_window_sum -= i64::from(array[start]);
                start += 1;
            }
            count += (end - start + 1) as i32;
            total_sum += running_sum;
        }
        (count, total_sum)
    }

    fn calculate_sum_of_first_k_subarrays(array: &[i32], k: i32) -> i64 {
        let mut low = *array.iter().min().unwrap() as i64;
        let mut high = array.iter().map(|&x| i64::from(x)).sum();

        while low < high {
            let mid = low + (high - low) / 2;
            if Self::count_and_sum_subarrays(array, mid).0 < k {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        let (count, sum) = Self::count_and_sum_subarrays(array, low);
        sum - low * (count as i64 - k as i64)
    }

    pub fn range_sum(nums: Vec<i32>, n: i32, left: i32, right: i32) -> i32 {
        let result = (Self::calculate_sum_of_first_k_subarrays(&nums, right) -
                      Self::calculate_sum_of_first_k_subarrays(&nums, left - 1) +
                      MODULUS) % MODULUS;
        result as i32
    }
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MODULUS = 1000000007;

    function countAndSumSubarrays(array, threshold) {
        let count = 0;
        let totalSum = 0n;
        let currentWindowSum = 0n;
        let runningSum = 0n;
        let start = 0;

        for (let end = 0; end < array.length; end++) {
            runningSum += BigInt(array[end]) * BigInt(end - start + 1);
            currentWindowSum += BigInt(array[end]);
            while (currentWindowSum > threshold) {
                runningSum -= currentWindowSum;
                currentWindowSum -= BigInt(array[start]);
                start++;
            }
            count += end - start + 1;
            totalSum += runningSum;
        }
        return [count, totalSum];
    }

    function calculateSumOfFirstKSubarrays(array, k) {
        let low = BigInt(Math.min(...array));
        let high = BigInt(array.reduce((a, b) => a + b, 0));

        while (low < high) {
            let mid = low + (high - low) / 2n;
            if (countAndSumSubarrays(array, mid)[0] < k) {
                low = mid + 1n;
            } else {
                high = mid;
            }
        }
        const [count, sum] = countAndSumSubarrays(array, low);
        return sum - low * BigInt(count - k);
    }

    const result = (calculateSumOfFirstKSubarrays(nums, right) -
                    calculateSumOfFirstKSubarrays(nums, left - 1) +
                    BigInt(MODULUS)) % BigInt(MODULUS);
    return Number(result);
};
```

---
# Counting Sort 
### Intuition
The initial thought might be to generate all possible subarrays, compute their sums, sort these sums, and then sum the required range. However a straightforward approach would be inefficient for larger inputs.

Upon closer examination, we can observe that the problem exhibits characteristics suitable for a counting-based solution. The subarrays have a limited range of possible sums, and we're more interested in the frequency and order of these sums rather than the specific subarrays that produce them.

This observation leads to the idea of using a counting sort approach, which can efficiently handle the sorting aspect without explicitly generating and storing all subarray sums.

### Approach


1. **Maximum Sum Calculation:**
   The first step involves determining the maximum possible sum of any subarray. This is achieved by summing all elements in the input array. This maximum sum serves as an upper bound for our counting array.

   ```java
   int maxSum = 0;
   for (int num : nums) {
       maxSum += num;
   }
   ```

2. **Frequency Counting of Subarray Sums:**
   Next, we generate all possible subarrays and count the frequency of each sum. This is done using a nested loop structure. The outer loop selects the starting index of the subarray, while the inner loop extends the subarray to all possible ending indices. As we compute each subarray sum, we increment its count in the frequency array.

   ```java
   int[] count = new int[maxSum + 1];
   for (int i = 0; i < n; i++) {
       int sum = 0;
       for (int j = i; j < n; j++) {
           sum += nums[j];
           count[sum]++;
       }
   }
   ```

3. **Cumulative Frequency Calculation:**
   After counting the frequencies, we convert the count array into a cumulative frequency array. This step is crucial as it allows us to determine the position of each sum in the sorted order of all subarray sums.

   ```java
   for (int i = 1; i <= maxSum; i++) {
       count[i] += count[i - 1];
   }
   ```

4. **Range Sum Computation:**
   Finally, we iterate through the possible sum values from 1 to maxSum. For each sum, we check if its position in the sorted order falls within our target range (left to right). If it does, we add it to our result. The variable k keeps track of the current position in the sorted order of all subarray sums.

   ```java
   long result = 0;
   for (int sum = 1, k = 1; sum <= maxSum; sum++) {
       while (k <= count[sum]) {
           if (k >= left && k <= right) {
               result = (result + sum) % MOD;
           }
           k++;
       }
   }
   ```

This approach effectively "sorts" the subarray sums without explicitly generating and storing them all, which is the core optimization in this solution.

### Complexity

- **Time complexity: O(n^2 + m)**

  The time complexity of this algorithm can be broken down into several parts:

  1. Finding the maximum sum: O(n)
  2. Counting frequencies of subarray sums: O(n^2)
     This is the dominant factor in the time complexity. We have two nested loops, each potentially iterating up to n times.
  3. Calculating cumulative frequencies: O(m)
     Where m is the maximum sum, which is at most n * max(nums[i]).
  4. Computing the range sum: O(m)
     In the worst case, we iterate through all possible sum values up to the maximum sum.

  Therefore, the overall time complexity is O(n^2 + m). While this might seem high, it's important to note that for the given constraints (n \u2264 1000 and nums[i] \u2264 100), this approach is quite efficient in practice.

- **Space complexity: O(m)**

  The space complexity is dominated by the count array, which has a size of maxSum + 1. In the worst case, maxSum could be n * max(nums[i]), giving us a space complexity of O(n * max(nums[i])).

  Given the problem constraints:
  - n \u2264 1000
  - nums[i] \u2264 100

  The maximum possible sum (and thus the maximum size of our count array) is 1000 * 100 = 100,000.

  This fixed upper bound means that in practice, the space complexity can be considered O(1) for the given constraints. However, if we consider the general case where n and nums[i] can be arbitrarily large, the space complexity would be O(n * max(nums[i])).


### Code
```Java []
class Solution {
    private static final int MOD = 1000000007;

    public int rangeSum(int[] nums, int n, int left, int right) {
        // Find the maximum possible sum
        int maxSum = 0;
        for (int num : nums) {
            maxSum += num;
        }

        // Count the frequency of each sum
        int[] count = new int[maxSum + 1];
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += nums[j];
                count[sum]++;
            }
        }

        // Calculate prefix sum of frequencies
        for (int i = 1; i <= maxSum; i++) {
            count[i] += count[i - 1];
        }

        long result = 0;
        for (int sum = 1, k = 1; sum <= maxSum; sum++) {
            while (k <= count[sum]) {
                if (k >= left && k <= right) {
                    result = (result + sum) % MOD;
                }
                k++;
            }
        }

        return (int) result;
    }
}
```
```C++ []
class Solution {
public:
    static const int MOD = 1000000007;
    
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        // Find the maximum possible sum
        int maxSum = 0;
        for (int num : nums) {
            maxSum += num;
        }
        
        // Count the frequency of each sum
        vector<int> count(maxSum + 1, 0);
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += nums[j];
                count[sum]++;
            }
        }
        
        // Calculate prefix sum of frequencies
        for (int i = 1; i <= maxSum; i++) {
            count[i] += count[i - 1];
        }
        
        long long result = 0;
        for (int sum = 1, k = 1; sum <= maxSum; sum++) {
            while (k <= count[sum]) {
                if (k >= left && k <= right) {
                    result = (result + sum) % MOD;
                }
                k++;
            }
        }
        
        return static_cast<int>(result);
    }
};
```
```Python []
class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        MOD = 10**9 + 7
        
        # Find the maximum possible sum
        maxSum = sum(nums)
        
        # Count the frequency of each sum
        count = [0] * (maxSum + 1)
        for i in range(n):
            current_sum = 0
            for j in range(i, n):
                current_sum += nums[j]
                count[current_sum] += 1
        
        # Calculate prefix sum of frequencies
        for i in range(1, maxSum + 1):
            count[i] += count[i - 1]
        
        result = 0
        k = 1
        for current_sum in range(1, maxSum + 1):
            while k <= count[current_sum]:
                if left <= k <= right:
                    result = (result + current_sum) % MOD
                k += 1
        
        return result
```
```Go []
func rangeSum(nums []int, n int, left int, right int) int {
    const MOD = 1000000007
    
    // Find the maximum possible sum
    maxSum := 0
    for _, num := range nums {
        maxSum += num
    }
    
    // Count the frequency of each sum
    count := make([]int, maxSum+1)
    for i := 0; i < n; i++ {
        sum := 0
        for j := i; j < n; j++ {
            sum += nums[j]
            count[sum]++
        }
    }
    
    // Calculate prefix sum of frequencies
    for i := 1; i <= maxSum; i++ {
        count[i] += count[i-1]
    }
    
    result := 0
    k := 1
    for sum := 1; sum <= maxSum; sum++ {
        for k <= count[sum] {
            if k >= left && k <= right {
                result = (result + sum) % MOD
            }
            k++
        }
    }
    
    return result
}
```
```Rust []
impl Solution {
    pub fn range_sum(nums: Vec<i32>, n: i32, left: i32, right: i32) -> i32 {
        const MOD: i64 = 1000000007;
        
        // Find the maximum possible sum
        let max_sum = nums.iter().sum::<i32>() as usize;
        
        // Count the frequency of each sum
        let mut count = vec![0; max_sum + 1];
        for i in 0..n as usize {
            let mut sum = 0;
            for j in i..n as usize {
                sum += nums[j] as usize;
                count[sum] += 1;
            }
        }
        
        // Calculate prefix sum of frequencies
        for i in 1..=max_sum {
            count[i] += count[i - 1];
        }
        
        let mut result = 0i64;
        let mut k = 1;
        for sum in 1..=max_sum {
            while k <= count[sum] {
                if k >= left as usize && k <= right as usize {
                    result = (result + sum as i64) % MOD;
                }
                k += 1;
            }
        }
        
        result as i32
    }
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MOD = 1000000007;
    
    // Find the maximum possible sum
    const maxSum = nums.reduce((a, b) => a + b, 0);
    
    // Count the frequency of each sum
    const count = new Array(maxSum + 1).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            count[sum]++;
        }
    }
    
    // Calculate prefix sum of frequencies
    for (let i = 1; i <= maxSum; i++) {
        count[i] += count[i - 1];
    }
    
    let result = 0;
    let k = 1;
    for (let sum = 1; sum <= maxSum; sum++) {
        while (k <= count[sum]) {
            if (k >= left && k <= right) {
                result = (result + sum) % MOD;
            }
            k++;
        }
    }
    
    return result;
};
```
---

# Priority Queue


## Intuition

The core challenge in this problem is to efficiently generate and process subarray sums without explicitly creating all possible subarrays. Our solution uses a key insight: we can generate these sums in a sorted order on-the-fly, eliminating the need for a separate, costly sorting step.

This approach is based on the concept of lazy evaluation, where we only compute and consider subarray sums as we need them, rather than generating all possible sums upfront.

## Approach

1. **Priority Queue Initialization:**
   - We use a priority queue (min-heap) to keep track of the smallest subarray sum at any given time.
   - The queue stores custom objects (`SubarraySum`) containing:
     - The current sum of the subarray
     - The start index of the subarray
     - The end index of the subarray
   - We initialize the queue with n elements, each representing a single-element subarray.

2. **Iterative Sum Generation:**
   - We iterate 'right' times, each time:
     a. Extract the smallest sum from the queue (which is guaranteed to be the next smallest sum overall).
     b. If the iteration count is between 'left' and 'right', we add this sum to our result.
     c. If the extracted subarray doesn't end at the last element of the original array, we "grow" it:
        - Extend the subarray by one element to the right.
        - Recalculate the sum.
        - Insert this new subarray back into the priority queue.

3. **Result Accumulation:**
   - We keep a running total of the sums we've seen between the 'left' and 'right' iterations.
   - This total is our final answer, which we return after applying the modulo operation.

## Key Optimizations

1. **Space Efficiency:** 
   - Instead of storing all possible subarrays (which would be O(n^2)), we only store at most n subarrays in the queue at any time.

2. **Time Efficiency:** 
   - By using a priority queue, we always have access to the next smallest sum in O(log n) time.
   - We avoid sorting the entire list of all possible subarray sums, which would be O(n^2 log n).

3. **Lazy Evaluation:** 
   - We only compute larger subarrays as needed, saving unnecessary computations.

 **Implementation Details**

The `SubarraySum` class is crucial for encapsulating the state of each subarray:
- `sum`: Stores the current sum of the subarray.
- `start` and `end`: Keep track of the subarray's boundaries, allowing us to extend it efficiently.

The `PriorityQueue` is initialized with a custom comparator that orders `SubarraySum` objects based on their `sum` value, ensuring we always extract the smallest sum first.

## Complexity Analysis


**Time Complexity (TC):O(n^2 * log(n))**

1. Initialization: O(n)
   - Creating the PriorityQueue and initializing it with n elements (one for each number in nums) takes O(n) time.

2. Main loop: O(right * log(n))
   - The main loop runs 'right' times.
   - In each iteration:
     a. Polling from the PriorityQueue: O(log(n))
     b. Potentially adding a new element to the PriorityQueue: O(log(n))
   - So, each iteration of the loop takes O(log(n)) time.

Therefore, the overall time complexity is O(n + right * log(n)).

In the worst case, where right = n * (n+1) / 2 (the total number of possible subarrays), the time complexity becomes O(n^2 * log(n)).

 **Explanation:**
   - The initialization phase takes O(n) time because we iterate through the input array once to create SubarraySum objects and add them to the PriorityQueue.
   - The main loop runs 'right' times, which in the worst case could be n * (n+1) / 2 (total number of subarrays).
   - In each iteration of the main loop:
     * We poll from the PriorityQueue, which takes O(log(n)) time in a heap-based implementation.
     * We might add a new element to the PriorityQueue, which also takes O(log(n)) time.
   - These operations dominate the time complexity within the loop.


**Space Complexity (SC):O(n)**

1. PriorityQueue: O(n)
   - In the worst case, the PriorityQueue will contain all n elements from the input array.

2. SubarraySum objects: O(n)
   - We create at most n SubarraySum objects, one for each element in the input array.

3. Other variables: O(1)
   - The method uses a constant amount of additional space for variables like result, i, current, etc.

Therefore, the overall space complexity is O(n).

**Explanation:**
   - The PriorityQueue stores at most n SubarraySum objects at any given time. Even though we process more subarrays, we only keep track of at most n active subarrays simultaneously.
   - We create n SubarraySum objects initially, and reuse them throughout the algorithm.
   - The space used by other variables is constant and doesn't grow with the input size.









### Code
```Java []
class Solution {
    private static final int MOD = 1000000007;

    public int rangeSum(int[] nums, int n, int left, int right) {
        PriorityQueue<SubarraySum> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a.sum));
        
        for (int i = 0; i < n; i++) {
            pq.offer(new SubarraySum(nums[i], i, i));
        }
        
        long result = 0;
        for (int i = 1; i <= right; i++) {
            SubarraySum current = pq.poll();
            if (i >= left) {
                result = (result + current.sum) % MOD;
            }
            if (current.end < n - 1) {
                current.sum += nums[++current.end];
                pq.offer(current);
            }
        }
        
        return (int) result;
    }
    
    private static class SubarraySum {
        int sum;
        int start;
        int end;
        
        SubarraySum(int sum, int start, int end) {
            this.sum = sum;
            this.start = start;
            this.end = end;
        }
    }
}
```
```cpp []
class Solution {
private:
    static const int MOD = 1000000007;
    
    struct SubarraySum {
        int sum, start, end;
        SubarraySum(int s, int st, int e) : sum(s), start(st), end(e) {}
    };
    
    struct CompareSubarraySum {
        bool operator()(const SubarraySum& a, const SubarraySum& b) {
            return a.sum > b.sum;
        }
    };

public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        priority_queue<SubarraySum, vector<SubarraySum>, CompareSubarraySum> pq;
        
        for (int i = 0; i < n; i++) {
            pq.push(SubarraySum(nums[i], i, i));
        }
        
        long long result = 0;
        for (int i = 1; i <= right; i++) {
            SubarraySum current = pq.top();
            pq.pop();
            
            if (i >= left) {
                result = (result + current.sum) % MOD;
            }
            
            if (current.end < n - 1) {
                current.sum += nums[++current.end];
                pq.push(current);
            }
        }
        
        return static_cast<int>(result);
    }
};

```



```python []
import heapq

class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        MOD = 1000000007
        pq = [(num, i, i) for i, num in enumerate(nums)]
        heapq.heapify(pq)
        
        result = 0
        for i in range(1, right + 1):
            current_sum, start, end = heapq.heappop(pq)
            if i >= left:
                result = (result + current_sum) % MOD
            
            if end < n - 1:
                heapq.heappush(pq, (current_sum + nums[end + 1], start, end + 1))
        
        return result

```



```go []
type SubarraySum struct {
    sum, start, end int
}

type PriorityQueue []*SubarraySum

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].sum < pq[j].sum }
func (pq PriorityQueue) Swap(i, j int) { pq[i], pq[j] = pq[j], pq[i] }
func (pq *PriorityQueue) Push(x interface{}) { *pq = append(*pq, x.(*SubarraySum)) }
func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    *pq = old[0 : n-1]
    return item
}

func rangeSum(nums []int, n int, left int, right int) int {
    const MOD = 1000000007
    pq := make(PriorityQueue, n)
    
    for i := 0; i < n; i++ {
        pq[i] = &SubarraySum{nums[i], i, i}
    }
    heap.Init(&pq)
    
    result := 0
    for i := 1; i <= right; i++ {
        current := heap.Pop(&pq).(*SubarraySum)
        if i >= left {
            result = (result + current.sum) % MOD
        }
        if current.end < n-1 {
            current.end++
            current.sum += nums[current.end]
            heap.Push(&pq, current)
        }
    }
    
    return result
}

```



```rust []
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn range_sum(nums: Vec<i32>, n: i32, left: i32, right: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let n = n as usize;
        let mut pq = BinaryHeap::new();
        
        for i in 0..n {
            pq.push(Reverse((nums[i] as i64, i, i)));
        }
        
        let mut result = 0;
        for i in 1..=right as usize {
            if let Some(Reverse((sum, start, end))) = pq.pop() {
                if i >= left as usize {
                    result = (result + sum) % MOD;
                }
                if end < n - 1 {
                    pq.push(Reverse((sum + nums[end + 1] as i64, start, end + 1)));
                }
            }
        }
        
        result as i32
    }
}

```



```javascript []
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MOD = 1000000007;
    const pq = new MinPriorityQueue({ priority: x => x.sum });
    
    for (let i = 0; i < n; i++) {
        pq.enqueue({ sum: nums[i], start: i, end: i });
    }
    
    let result = 0;
    for (let i = 1; i <= right; i++) {
        const current = pq.dequeue().element;
        if (i >= left) {
            result = (result + current.sum) % MOD;
        }
        if (current.end < n - 1) {
            current.sum += nums[++current.end];
            pq.enqueue(current);
        }
    }
    
    return result;
};



```





---
# Brute Force
### Intuition

We need to do a few things here:

1. Find all possible continuous subarrays from the given array.
2. Calculate the sum of each subarray.
3. Sort these sums.
4. Add up a specific range of these sorted sums.

As i have mentioned in my previous approach that at first glance, it seemed like a straightforward process, but potentially time-consuming for larger arrays.

### Approach

Let's break down the solution step by step:

1. First, we create a list to store all the subarray sums. We call this list `subarraySums`.

2. We use two nested loops to generate all possible subarrays:
   - The outer loop (i) starts from the beginning of the array and represents the start of each subarray.
   - The inner loop (j) starts from i and goes to the end of the array, representing the end of each subarray.

3. As we go through these loops, we keep a running sum of the elements. Each time we add a new element to our current subarray, we add that sum to our `subarraySums` list.

4. After we've found all subarray sums, we sort the `subarraySums` list in ascending order.

5. Finally, we sum up the elements in `subarraySums` from index `left-1` to `right-1` (remember, the problem uses 1-based indexing, but Java uses 0-based indexing, so we subtract 1).

6. As we sum these elements, we use the modulo operator (%) with 1000000007 (10^9 + 7) to keep the sum from getting too large, as specified in the problem.

### Complexity

 **Time complexity: O(n^2 * log(n))**

Let's break this down:
1. Generating all subarrays takes O(n^2) time. For each element (n times), we potentially create a subarray going to the end of the array (another n times).
2. We create n*(n+1)/2 subarrays in total, which is O(n^2).
3. Sorting these O(n^2) sums takes O(n^2 * log(n^2)) time.
4. The final summation is at most O(n^2), which is overshadowed by the sorting time.

Therefore, the overall time complexity is dominated by the sorting step: We can simplify this: O(n^2 * log(n^2))

- log(n^2) = 2 * log(n)
- O(n^2 * log(n^2)) = O(n^2 * 2 * log(n)) = O(2 * n^2 * log(n))
- The constant 2 can be dropped in big O notation
- Thus, we arrive at the final time complexity: O(n^2 * log(n))

 **Space complexity: O(n^2)**

We store all subarray sums in a list. The number of subarrays is n*(n+1)/2, which is O(n^2).

### Code

```Java []
class Solution {
    private static final int MOD = 1000000007;

    public int rangeSum(int[] nums, int n, int left, int right) {
        List<Integer> subarraySums = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += nums[j];
                subarraySums.add(sum);
            }
        }
        
        Collections.sort(subarraySums);
        
        long rangeSum = 0;
        for (int i = left - 1; i < right; i++) {
            rangeSum = (rangeSum + subarraySums.get(i)) % MOD;
        }
        
        return (int) rangeSum;
    }
}

```
```C++ []
class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        const int MOD = 1000000007;
        vector<int> subarraySums;
        
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += nums[j];
                subarraySums.push_back(sum);
            }
        }
        
        sort(subarraySums.begin(), subarraySums.end());
        
        long long rangeSum = 0;
        for (int i = left - 1; i < right; i++) {
            rangeSum = (rangeSum + subarraySums[i]) % MOD;
        }
        
        return static_cast<int>(rangeSum);
    }
};

```
```Python []

class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        MOD = 1000000007
        subarray_sums = []
        
        for i in range(n):
            current_sum = 0  # Changed variable name from 'sum' to 'current_sum'
            for j in range(i, n):
                current_sum += nums[j]
                subarray_sums.append(current_sum)
        
        subarray_sums.sort()
        
        range_sum = sum(subarray_sums[left-1:right]) % MOD
        
        return range_sum
```
```Go []
func rangeSum(nums []int, n int, left int, right int) int {
    const MOD = 1000000007
    subarraySums := []int{}
    
    for i := 0; i < n; i++ {
        sum := 0
        for j := i; j < n; j++ {
            sum += nums[j]
            subarraySums = append(subarraySums, sum)
        }
    }
    
    sort.Ints(subarraySums)
    
    rangeSum := 0
    for i := left - 1; i < right; i++ {
        rangeSum = (rangeSum + subarraySums[i]) % MOD
    }
    
    return rangeSum
}

```
```Rust []
impl Solution {
    pub fn range_sum(nums: Vec<i32>, n: i32, left: i32, right: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let mut subarray_sums = Vec::new();
        
        for i in 0..n as usize {
            let mut sum = 0;
            for j in i..n as usize {
                sum += nums[j] as i64;
                subarray_sums.push(sum);
            }
        }
        
        subarray_sums.sort_unstable();
        
        let range_sum: i64 = subarray_sums[(left - 1) as usize..right as usize]
            .iter()
            .sum::<i64>() % MOD;
        
        range_sum as i32
    }
}

```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MOD = 1000000007;
    const subarraySums = [];
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            subarraySums.push(sum);
        }
    }
    
    subarraySums.sort((a, b) => a - b);
    
    let rangeSum = 0;
    for (let i = left - 1; i < right; i++) {
        rangeSum = (rangeSum + subarraySums[i]) % MOD;
    }
    
    return rangeSum;
};

```
---
**PS:**
Hey everyone! 
*It looks like the post is too long, and **LeetCode isn't letting me comment or reply to anyone.** If you have any questions, please keep an eye on this section at the end of the post. I'll do my best to share my thoughts here.*
*Also, a big thank you to all the kind people who've been appreciating the post.*
