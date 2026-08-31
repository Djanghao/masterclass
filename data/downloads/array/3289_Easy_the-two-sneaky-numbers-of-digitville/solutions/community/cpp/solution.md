# Easy Video Solution (Without Extra Space) 🔥 || How to 🤔 in Interview || Bit Manipulation 🙂

**Author:** ayushnemmaniwar12
**Votes:** 25
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5789363/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5789363/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can separate the numbers based on set bits



***Easy Video Explanation with Proofs***

https://youtu.be/GdpXUUVbhq4
    

# Code


```C++ []
class Solution {
public:
    vector<int> getSneakyNumbers(vector<int>& nums) {

        int xorSum = 0;
        int totalSize = nums.size();
        int actualSize = nums.size() - 2;

        // XOR all elements of the array
        for(int i = 0; i < totalSize; i++) {
            xorSum ^= nums[i];
        }

        // XOR all numbers from 0 to n-1 (excluding the two sneaky numbers)
        for(int i = 0; i < actualSize; i++) {
            xorSum ^= i;
        }

        // Find the rightmost set bit in xorSum
        int rightmostSetBit = xorSum & ~(xorSum - 1);

        int firstSneakyNumber = 0;
        int secondSneakyNumber = 0;

        // Separate the numbers into two groups based on the rightmost set bit
        for(int i = 0; i < totalSize; i++) {
            if(nums[i] & rightmostSetBit) {
                firstSneakyNumber ^= nums[i];
            } else {
                secondSneakyNumber ^= nums[i];
            }
        }
        
        // XOR the range of numbers from 0 to n-1
        for(int i = 0; i < actualSize; i++) {
            if(i & rightmostSetBit) {
                firstSneakyNumber ^= i;
            } else {
                secondSneakyNumber ^= i;
            }
        }

        return {firstSneakyNumber, secondSneakyNumber};
    }
};

```
```python []
class Solution:
    def getSneakyNumbers(self, nums):
        xor_sum = 0
        total_size = len(nums)
        actual_size = len(nums) - 2

        # XOR all elements of the array
        for num in nums:
            xor_sum ^= num

        # XOR all numbers from 0 to actual_size - 1
        for i in range(actual_size):
            xor_sum ^= i

        # Find the rightmost set bit in xor_sum
        rightmost_set_bit = xor_sum & ~(xor_sum - 1)

        first_sneaky_number = 0
        second_sneaky_number = 0

        # Separate the numbers into two groups based on the rightmost set bit
        for num in nums:
            if num & rightmost_set_bit:
                first_sneaky_number ^= num
            else:
                second_sneaky_number ^= num

        # XOR the range of numbers from 0 to actual_size - 1
        for i in range(actual_size):
            if i & rightmost_set_bit:
                first_sneaky_number ^= i
            else:
                second_sneaky_number ^= i

        return [first_sneaky_number, second_sneaky_number]

```
```Java []
import java.util.*;

class Solution {
    public List<Integer> getSneakyNumbers(int[] nums) {
        int xorSum = 0;
        int totalSize = nums.length;
        int actualSize = nums.length - 2;

        // XOR all elements of the array
        for (int i = 0; i < totalSize; i++) {
            xorSum ^= nums[i];
        }

        // XOR all numbers from 0 to actualSize - 1 (excluding the two sneaky numbers)
        for (int i = 0; i < actualSize; i++) {
            xorSum ^= i;
        }

        // Find the rightmost set bit in xorSum
        int rightmostSetBit = xorSum & ~(xorSum - 1);

        int firstSneakyNumber = 0;
        int secondSneakyNumber = 0;

        // Separate the numbers into two groups based on the rightmost set bit
        for (int i = 0; i < totalSize; i++) {
            if ((nums[i] & rightmostSetBit) != 0) {
                firstSneakyNumber ^= nums[i];
            } else {
                secondSneakyNumber ^= nums[i];
            }
        }

        // XOR the range of numbers from 0 to actualSize - 1
        for (int i = 0; i < actualSize; i++) {
            if ((i & rightmostSetBit) != 0) {
                firstSneakyNumber ^= i;
            } else {
                secondSneakyNumber ^= i;
            }
        }

        return Arrays.asList(firstSneakyNumber, secondSneakyNumber);
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00