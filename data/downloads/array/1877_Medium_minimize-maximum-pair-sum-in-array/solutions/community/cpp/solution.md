# 🔥More Than One Way🔥|🔥Detail Explanation🔥| Java | C++ | Python | JavaScript | C#

**Author:** Akhilesh21
**Votes:** 80
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4296726/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4296726/)

---


# 1st Method :- Greedy Approach / Two Pointers\uD83D\uDD25

## Intuition \uD83D\uDE80
The goal is to minimize the sum of the maximum pairs in the array. Sorting the array helps in pairing the smallest elements with the largest ones. By doing so, we ensure that the maximum pairs are minimized. The approach involves keeping two pointers, one at the beginning and the other at the end of the sorted array. Pairing elements at these pointers provides a way to find the minimized sum of the maximum pairs.

## Approach \uD83D\uDE80

1. **Sort the Array:**
   - Sort the input array in ascending order. This step is crucial for pairing the smallest elements with the largest ones.

2. **Initialize Pointers:**
   - Initialize two pointers, `left` at the start of the array and `right` at the end of the array.

3. **Initialize a Variable:**
   - Create a variable (`minMaxPairSum`) to keep track of the minimum of the maximum pair sums. Initialize it to the smallest possible integer value.

4. **Pairing Elements:**
   - Iterate through the array using a while loop until the `left` pointer is less than the `right` pointer.

5. **Calculate Current Pair Sum:**
   - Calculate the sum of the pair of elements pointed to by the `left` and `right` pointers.

6. **Update Minimum of Maximum Pair Sum:**
   - Update `minMaxPairSum` by taking the maximum value between the current pair sum and the existing `minMaxPairSum`. This ensures that `minMaxPairSum` stores the minimum value encountered during the iteration.

7. **Move Pointers Towards the Center:**
   - Increment the `left` pointer and decrement the `right` pointer to move towards the center of the array.

8. **Return the Result:**
   - After the loop, return the calculated `minMaxPairSum` as the final result.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public int minPairSum(int[] nums) {
       // Step 1: Sort the array in ascending order
        Arrays.sort(nums);

        // Step 2: Initialize pointers at the start and end of the sorted array
        int left = 0, right = nums.length - 1;

        // Step 3: Initialize a variable to store the minimum of the maximum pair sum
        int minMaxPairSum = Integer.MIN_VALUE;

        // Step 4: Iterate until the pointers meet
        while (left < right) {
            // Step 5: Calculate the current pair sum
            int currentPairSum = nums[left] + nums[right];

            // Step 6: Update the minimum of the maximum pair sum
            minMaxPairSum = Math.max(minMaxPairSum, currentPairSum);

            // Step 7: Move the pointers towards the center
            left++;
            right--;
        }

        // Step 8: Return the minimum of the maximum pair sum
        return minMaxPairSum;
    }
}
```
``` C++ []
class Solution {
public:
    int minPairSum(std::vector<int>& nums) {
        // Step 1: Sort the array in ascending order
        std::sort(nums.begin(), nums.end());

        // Step 2: Initialize pointers at the start and end of the sorted array
        int left = 0, right = nums.size() - 1;

        // Step 3: Initialize a variable to store the minimum of the maximum pair sum
        int minMaxPairSum = INT_MIN;

        // Step 4: Iterate until the pointers meet
        while (left < right) {
            // Step 5: Calculate the current pair sum
            int currentPairSum = nums[left] + nums[right];

            // Step 6: Update the minimum of the maximum pair sum
            minMaxPairSum = std::max(minMaxPairSum, currentPairSum);

            // Step 7: Move the pointers towards the center
            left++;
            right--;
        }

        // Step 8: Return the minimum of the maximum pair sum
        return minMaxPairSum;
    }
};

```
``` Python []
class Solution(object):
    def minPairSum(self, nums):
        # Step 1: Sort the array in ascending order
        nums.sort()

        # Step 2: Initialize pointers at the start and end of the sorted array
        left, right = 0, len(nums) - 1

        # Step 3: Initialize a variable to store the minimum of the maximum pair sum
        min_max_pair_sum = float('-inf')

        # Step 4: Iterate until the pointers meet
        while left < right:
            # Step 5: Calculate the current pair sum
            current_pair_sum = nums[left] + nums[right]

            # Step 6: Update the minimum of the maximum pair sum
            min_max_pair_sum = max(min_max_pair_sum, current_pair_sum)

            # Step 7: Move the pointers towards the center
            left += 1
            right -= 1

        # Step 8: Return the minimum of the maximum pair sum
        return min_max_pair_sum


```
``` JavaScript []
var minPairSum = function(nums) {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Step 2: Initialize pointers at the start and end of the sorted array
    let left = 0, right = nums.length - 1;

    // Step 3: Initialize a variable to store the minimum of the maximum pair sum
    let minMaxPairSum = Number.MIN_SAFE_INTEGER;

    // Step 4: Iterate until the pointers meet
    while (left < right) {
        // Step 5: Calculate the current pair sum
        const currentPairSum = nums[left] + nums[right];

        // Step 6: Update the minimum of the maximum pair sum
        minMaxPairSum = Math.max(minMaxPairSum, currentPairSum);

        // Step 7: Move the pointers towards the center
        left++;
        right--;
    }

    // Step 8: Return the minimum of the maximum pair sum
    return minMaxPairSum;
};
```
``` C# []
public class Solution {
    public int MinPairSum(int[] nums) {
        // Step 1: Sort the array in ascending order
        Array.Sort(nums);

        // Step 2: Initialize pointers at the start and end of the sorted array
        int left = 0, right = nums.Length - 1;

        // Step 3: Initialize a variable to store the minimum of the maximum pair sum
        int minMaxPairSum = int.MinValue;

        // Step 4: Iterate until the pointers meet
        while (left < right) {
            // Step 5: Calculate the current pair sum
            int currentPairSum = nums[left] + nums[right];

            // Step 6: Update the minimum of the maximum pair sum
            minMaxPairSum = Math.Max(minMaxPairSum, currentPairSum);

            // Step 7: Move the pointers towards the center
            left++;
            right--;
        }

        // Step 8: Return the minimum of the maximum pair sum
        return minMaxPairSum;
    }
}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n log n)
The dominant factor in the time complexity is the sorting step, and the array sorting is done using `Arrays.sort(nums)`. The time complexity of the sorting operation is O(n log n), where 'n' is the length of the array.

Therefore, the overall time complexity of the code is O(n log n).

### \uD83C\uDFF9Space complexity: O(1)
The space complexity is determined by the additional variables used in the code. In this case, the only additional space used is for the `minMaxPairSum`, `left`, and `right` variables, which require constant space.

Therefore, the overall space complexity of the code is O(1) (constant space).

![vote.jpg](./images/0.jpeg)


---
# 2nd Method :- Two-pointer approach with frequency counting.\uD83D\uDD25

## Intuition \uD83D\uDE80
The goal is to minimize the maximum pair sum in the given array. To achieve this, we want to pair the largest numbers with the smallest numbers. The code uses two pointers (`low` and `high`) to traverse the array, pointing to the smallest and largest numbers respectively. The idea is to pair the numbers at these pointers to minimize the maximum pair sum.


## Approach \uD83D\uDE80

1. **Frequency Counting and Finding Min/Max:**
   - Iterate through the given array to calculate the frequency of each number and find the minimum (`minNum`) and maximum (`maxNum`) numbers.

2. **Initialize Pointers and Iterate:**
   - Initialize two pointers, `low` pointing to `minNum` and `high` pointing to `maxNum`.
   - Iterate using a while loop until `low` is less than or equal to `high`.

3. **Adjust Pointers:**
   - If the frequency of the number at `low` is zero, move `low` to the right to find the next valid number.
   - If the frequency of the number at `high` is zero, move `high` to the left to find the next valid number.

4. **Pairing and Updating MaxSum:**
   - If both `low` and `high` pointers point to valid numbers, calculate the sum of the pair (`currentPairSum`).
   - Update the `maxSum` if the `currentPairSum` is greater.
   - Decrease the frequency of the numbers at `low` and `high` pointers.

5. **Return Result:**
   - After the while loop, return the final minimized maximum pair sum stored in `maxSum`.

### Summary:

The approach involves efficiently pairing the smallest and largest numbers in the array to minimize the maximum pair sum. It uses frequency counting to keep track of the occurrences of each number and adjusts pointers to find valid numbers for pairing. The process continues until the pointers meet, ensuring all numbers are considered. The final result is the minimized maximum pair sum.



## \u2712\uFE0FCode
``` Java []
class Solution {
    public int minPairSum(int[] nums) {
        int maxSum = Integer.MIN_VALUE; // Variable to store the minimized maximum pair sum
        int minNum = Integer.MAX_VALUE; // Variable to store the minimum number in the array
        int maxNum = Integer.MIN_VALUE; // Variable to store the maximum number in the array

        int frequency[] = new int[100001]; // Array to store the frequency of each number in the array

        // Iterate through the array to populate frequency array and find min and max numbers
        for (int num : nums) {
            frequency[num]++;
            minNum = Math.min(minNum, num);
            maxNum = Math.max(maxNum, num);
        }

        // Initialize pointers for two numbers to form pairs
        int low = minNum;
        int high = maxNum;

        // Iterate while low pointer is less than or equal to high pointer
        while (low <= high) {
            // If frequency of the number at low pointer is zero, move low pointer to the right
            if (frequency[low] == 0) {
                low++;
            }
            // If frequency of the number at high pointer is zero, move high pointer to the left
            else if (frequency[high] == 0) {
                high--;
            }
            // Both low and high pointers point to valid numbers
            else {
                // Calculate the sum of the pair at the current pointers
                int currentPairSum = low + high;
                // Update maxSum if the current pair sum is greater
                maxSum = Math.max(maxSum, currentPairSum);
                // Decrease the frequency of the numbers at low and high pointers
                frequency[low]--;
                frequency[high]--;
            }
        }

        return maxSum; // Return the minimized maximum pair sum
    }
}

```
``` C++ []

class Solution {
public:
    int minPairSum(std::vector<int>& nums) {
        int maxSum = INT_MIN; // Variable to store the minimized maximum pair sum
        int minNum = INT_MAX; // Variable to store the minimum number in the array
        int maxNum = INT_MIN; // Variable to store the maximum number in the array

        std::vector<int> frequency(100001, 0); // Vector to store the frequency of each number in the array

        // Iterate through the array to populate frequency vector and find min and max numbers
        for (int num : nums) {
            frequency[num]++;
            minNum = std::min(minNum, num);
            maxNum = std::max(maxNum, num);
        }

        // Initialize pointers for two numbers to form pairs
        int low = minNum;
        int high = maxNum;

        // Iterate while low pointer is less than or equal to high pointer
        while (low <= high) {
            // If frequency of the number at low pointer is zero, move low pointer to the right
            if (frequency[low] == 0) {
                low++;
            }
            // If frequency of the number at high pointer is zero, move high pointer to the left
            else if (frequency[high] == 0) {
                high--;
            }
            // Both low and high pointers point to valid numbers
            else {
                // Calculate the sum of the pair at the current pointers
                int currentPairSum = low + high;
                // Update maxSum if the current pair sum is greater
                maxSum = std::max(maxSum, currentPairSum);
                // Decrease the frequency of the numbers at low and high pointers
                frequency[low]--;
                frequency[high]--;
            }
        }

        return maxSum; // Return the minimized maximum pair sum
    }
};

```
``` Python []
class Solution:
    def minPairSum(self, nums):
        maxSum = float('-inf') # Variable to store the minimized maximum pair sum
        minNum = float('inf') # Variable to store the minimum number in the array
        maxNum = float('-inf') # Variable to store the maximum number in the array

        frequency = [0] * 100001 # List to store the frequency of each number in the array

        # Iterate through the array to populate frequency list and find min and max numbers
        for num in nums:
            frequency[num] += 1
            minNum = min(minNum, num)
            maxNum = max(maxNum, num)

        # Initialize pointers for two numbers to form pairs
        low = minNum
        high = maxNum

        # Iterate while low pointer is less than or equal to high pointer
        while low <= high:
            # If frequency of the number at low pointer is zero, move low pointer to the right
            if frequency[low] == 0:
                low += 1
            # If frequency of the number at high pointer is zero, move high pointer to the left
            elif frequency[high] == 0:
                high -= 1
            # Both low and high pointers point to valid numbers
            else:
                # Calculate the sum of the pair at the current pointers
                currentPairSum = low + high
                # Update maxSum if the current pair sum is greater
                maxSum = max(maxSum, currentPairSum)
                # Decrease the frequency of the numbers at low and high pointers
                frequency[low] -= 1
                frequency[high] -= 1

        return maxSum # Return the minimized maximum pair sum

```
``` JavaScript []
var minPairSum = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER; // Variable to store the minimized maximum pair sum
    let minNum = Number.MAX_SAFE_INTEGER; // Variable to store the minimum number in the array
    let maxNum = Number.MIN_SAFE_INTEGER; // Variable to store the maximum number in the array

    const frequency = new Array(100001).fill(0); // Array to store the frequency of each number in the array

    // Iterate through the array to populate frequency array and find min and max numbers
    nums.forEach(num => {
        frequency[num]++;
        minNum = Math.min(minNum, num);
        maxNum = Math.max(maxNum, num);
    });

    // Initialize pointers for two numbers to form pairs
    let low = minNum;
    let high = maxNum;

    // Iterate while low pointer is less than or equal to high pointer
    while (low <= high) {
        // If frequency of the number at low pointer is zero, move low pointer to the right
        if (frequency[low] === 0) {
            low++;
        }
        // If frequency of the number at high pointer is zero, move high pointer to the left
        else if (frequency[high] === 0) {
            high--;
        }
        // Both low and high pointers point to valid numbers
        else {
            // Calculate the sum of the pair at the current pointers
            let currentPairSum = low + high;
            // Update maxSum if the current pair sum is greater
            maxSum = Math.max(maxSum, currentPairSum);
            // Decrease the frequency of the numbers at low and high pointers
            frequency[low]--;
            frequency[high]--;
        }
    }

    return maxSum; // Return the minimized maximum pair sum
};

```
``` C# []
public class Solution {
    public int MinPairSum(int[] nums) {
        int maxSum = int.MinValue; // Variable to store the minimized maximum pair sum
        int minNum = int.MaxValue; // Variable to store the minimum number in the array
        int maxNum = int.MinValue; // Variable to store the maximum number in the array

        int[] frequency = new int[100001]; // Array to store the frequency of each number in the array

        // Iterate through the array to populate frequency array and find min and max numbers
        foreach (int num in nums) {
            frequency[num]++;
            minNum = Math.Min(minNum, num);
            maxNum = Math.Max(maxNum, num);
        }

        // Initialize pointers for two numbers to form pairs
        int low = minNum;
        int high = maxNum;

        // Iterate while low pointer is less than or equal to high pointer
        while (low <= high) {
            // If frequency of the number at low pointer is zero, move low pointer to the right
            if (frequency[low] == 0) {
                low++;
            }
            // If frequency of the number at high pointer is zero, move high pointer to the left
            else if (frequency[high] == 0) {
                high--;
            }
            // Both low and high pointers point to valid numbers
            else {
                // Calculate the sum of the pair at the current pointers
                int currentPairSum = low + high;
                // Update maxSum if the current pair sum is greater
                maxSum = Math.Max(maxSum, currentPairSum);
                // Decrease the frequency of the numbers at low and high pointers
                frequency[low]--;
                frequency[high]--;
            }
        }

        return maxSum; // Return the minimized maximum pair sum
    }
}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
- Iterating through the array to populate the frequency array and find min and max numbers: \\(O(n)\\), where \\(n\\) is the length of the array.
- The while loop iterates until the low pointer is less than or equal to the high pointer. In each iteration, we either increment the low pointer or decrement the high pointer. Since both pointers move towards each other, the total number of iterations is \\(O(n)\\).
- Each iteration involves constant-time operations (comparison, addition, subtraction), so the overall time complexity is \\(O(n)\\).

### \uD83C\uDFF9Space complexity: O(1)
- The `frequency` array has a fixed size of 100001. Therefore, the space complexity is \\(O(1)\\) because the size of the array is constant regardless of the input size.
- Other variables (`maxSum`, `minNum`, `maxNum`, `low`, `high`) are all scalar variables, and their space complexity is constant.

![upvote.png](./images/1.png)
# Up Vote Guys
