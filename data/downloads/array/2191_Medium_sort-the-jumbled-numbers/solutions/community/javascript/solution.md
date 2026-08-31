# None can explain like this with a clear code... Runs with happiness

**Author:** Success_Code
**Votes:** 119
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525193/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525193/)

---

# No Bot upvotes, those are being given by my mates.. #No Misunderstanding please 
# Approach
The solution follows a mapping and sorting approach to achieve the final sorted array based on custom mapped values.

Firstly, the solution leverages a list called arr to store tuples. Each tuple contains two values: the mapped value of the number and the original index of the number in the nums array.

Here is a step-by-step breakdown of the algorithm:

Iterate through each number in the nums array with its index. For each number x and its index i:

Initialize a variable y to be the mapped value of 0. This variable will accumulate the final mapped number. Note that if x is zero, we set y to mapping[0] as its mapped value.
Initialize a variable k which represents the current digit's place value (e.g., 1 for units, 10 for tens, etc.).
For each digit v in the number x (obtained by repeatedly using divmod to split off the last digit):

Calculate the mapped digit by using the given mapping (i.e., mapping[v]).
Multiply the mapped digit by its current place value k and add it to y, building up the new mapped number digit by digit.
Multiply k by 10 to update the place value for the next digit to the left.
After finishing the mapping for a number, append a tuple (y, i) to the list arr, where y is the mapped value obtained and i is the index of the number in nums.

Sort the list arr by the first tuple element, which is the mapped value. Python's default sorting algorithm is stable, which guarantees that arr will be sorted by y but maintain the relative order of elements that have the same y value.

Create the final sorted list by extracting and appending the original numbers from nums using the sorted indices found in arr: [nums[i] for _, i in arr].

# Complexity
- Time complexity:
O(N * log(M) + N log N)

- Space complexity:
O(N)

# Code

```python3 []
class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        # List to hold tuples of the mapped value and its original index
        mapped_with_index = []
      
        # Iterate over the input numbers' list
        for index, num in enumerate(nums):
            # If the number is 0, get the mapped value for 0, else start with 0
            mapped_num = mapping[0] if num == 0 else 0
            power_of_ten = 1  # To keep track of the decimal place
          
            # Decompose the number into digits and map using the provided mapping
            while num:
                num, digit = divmod(num, 10)
                # Map the digit, adjust decimal place and add to the mapped number
                mapped_num = mapping[digit] * power_of_ten + mapped_num
                power_of_ten *= 10  # Increase the decimal place
          
            # Append the tuple of mapped number and original index to the list
            mapped_with_index.append((mapped_num, index))
      
        # Sort the list according to the mapped numbers, stable for identical values
        mapped_with_index.sort()
      
        # Reconstruct the sorted list using the original indices
        return [nums[i] for _, i in mapped_with_index]
```
```javascript []
// T: O(n log n) | S: O(m)
var sortJumbled = function(mapping, nums) {
    const translate = (n) => +(n.toString().split('').map((v) => mapping[v]).join(''));
    const map = {};
    for (let num of nums) {
        map[num] = translate(num);
    }
    return nums.sort((a, b) => map[a] - map[b]);
};
```
```java []
import java.util.Arrays;

class Solution {
  
    // Method to sort the array nums based on a custom mapping.
    public int[] sortJumbled(int[] mapping, int[] nums) {
        // Get the length of the nums array.
        int n = nums.length;
      
        // Create a 2D array to store the mapped number and the original index.
        int[][] mappedWithIndex = new int[n][2];
      
        // Iterate over the array of numbers.
        for (int i = 0; i < n; ++i) {
            int originalNum = nums[i];   // Original number from nums.
            int mappedNum = originalNum == 0 ? mapping[0] : 0;  // Map the number based on mapping rules.
            int placeValue = 1;   // To reconstruct the mapped number based on individual digits.
          
            // Map each digit of the original number based on the 'mapping' array.
            while (originalNum > 0) {
                int digit = originalNum % 10;  // Retrieve the last digit.
                mappedNum += placeValue * mapping[digit];  // Map the digit and add to mappedNum considering the place value.
                placeValue *= 10;  // Move to the next place value (tens, hundreds, etc.).
                originalNum /= 10;  // Drop the last digit.
            }
          
            // Store the mapped number and the original index in the array.
            mappedWithIndex[i] = new int[] {mappedNum, i};
        }
      
        // Sort the array 'mappedWithIndex' based on the mapped numbers and indices.
        Arrays.sort(mappedWithIndex, (a, b) -> 
            a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]); // If mapped numbers are equal, compare index.
      
        // Prepare the final sorted array based on the mapped values.
        int[] sortedArray = new int[n];
        for (int i = 0; i < n; ++i) {
            sortedArray[i] = nums[mappedWithIndex[i][1]];
        }
      
        // Return the sorted array.
        return sortedArray;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        int numsSize = nums.size(); // Number of elements in nums
        vector<pair<int, int>> mappedAndIndexPairs(numsSize); // Pair to store the mapped value and original index

        // Transform each number as per the mapping and associate it with its original index
        for (int i = 0; i < numsSize; ++i) {
            int originalNum = nums[i];
            int mappedNum = originalNum == 0 ? mapping[0] : 0; // If the number is 0, directly map it
            int placeValue = 1; // Represents the place value in the mapped number

            // Decompose the number into its digits and transform it according to the mapping
            while (originalNum > 0) {
                int digit = originalNum % 10; // Get the last digit
                mappedNum += placeValue * mapping[digit]; // Map the digit and add to the mapped number
                originalNum /= 10; // Remove the last digit from the original number
                placeValue *= 10; // Move to the next place value
            }

            // Save the pair of mapped number and original index
            mappedAndIndexPairs[i] = {mappedNum, i};
        }

        // Sort the pairs. The order is firstly by the mapped number, and then by the original index
        sort(mappedAndIndexPairs.begin(), mappedAndIndexPairs.end());

        // Extract the numbers from the sorted pairs, preserving the new order
        vector<int> sortedNums;
        for (auto& pair : mappedAndIndexPairs) {
            sortedNums.push_back(nums[pair.second]);
        }

        // Return the sorted numbers as per the jumbled mapping order
        return sortedNums;
    }
};
```
