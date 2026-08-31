# 💥💥C# | 100% beats runtime AND memory [EXPLAINED]

**Author:** r9n
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/5806181/](https://leetcode.com/problems/maximum-equal-frequency/solutions/5806181/)

---

# Intuition
I thought of tracking how often each number appears and checking if I can make all numbers' frequencies the same by removing just one element. If I remove one number, I want to ensure that the remaining numbers either all have the same frequency or differ by only one. This way, the sequence will still look balanced.

# Approach
I maintain two arrays: one to track how often each number appears (frequency) and another to track how many numbers have a specific frequency (count). At each step, I check if the current frequencies could be valid if I remove one number. I do this by checking a few conditions where frequencies could be balanced. If they are, I update the result with the current length.

# Complexity
- Time complexity:
O(n) since I process each element in the array once.

- Space complexity:
O(m) where m is the largest possible value in the array (100,000), as I store frequency and count data.

# Code
```csharp []
public class Solution {
    public int MaxEqualFreq(int[] nums) {
        int[] freq = new int[100001];      // Frequency of each element
        int[] count = new int[100001];     // Number of elements with a given frequency
        int maxFreq = 0;                   // Max frequency seen so far
        int result = 0;
        
        for (int i = 0; i < nums.Length; i++) {
            int num = nums[i];
            
            // Reduce the count of the old frequency
            if (freq[num] > 0) {
                count[freq[num]]--;
            }
            
            // Increase the frequency of the current number
            freq[num]++;
            int f = freq[num];
            count[f]++;
            
            // Update maxFreq if needed
            maxFreq = Math.Max(maxFreq, f);
            
            // Total elements processed so far (i + 1)
            int totalElements = i + 1;
            
            // Check if the current prefix can be a valid candidate
            bool valid = 
                // Case 1: All numbers appear exactly once
                maxFreq == 1 || 
                
                // Case 2: All numbers but one have the same frequency, and the last has frequency one more
                (maxFreq * count[maxFreq] + (maxFreq - 1) * count[maxFreq - 1] == totalElements &&
                 count[maxFreq] == 1) ||
                
                // Case 3: All numbers have the same frequency except one that appears exactly once
                (maxFreq * count[maxFreq] + 1 == totalElements && count[1] == 1);

            // Update the result if the current prefix is valid
            if (valid) {
                result = totalElements;
            }
        }
        
        return result;
    }
}

```