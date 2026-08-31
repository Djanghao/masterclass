# Simple solution

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/5401724/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/5401724/)

---

# Approach
This approach uses a dictionary to store the frequency of each number and iterates over the input array to calculate the longest harmonious subsequence.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input list. This is because the solution iterates through each number in the input list once, and each operation within the loop is constant time.

- Space complexity:
$$O(n)$$, where n is the length of the input list. This is because the solution uses a dictionary to store the frequencies of each number, which can have at most n distinct keys.

# Code
``` pyton3 []
class Solution:
    def findLHS(self, nums: List[int]) -> int:
        # Create a dictionary to store the frequency of each number
        freq = defaultdict(int)
        longest = 0
        
        for num in nums:
            # Increment the frequency of the current number
            freq[num] += 1
            
            if num + 1 in freq:
                longest = max(longest, freq[num] + freq[num + 1])
            
            if num - 1 in freq:
                longest = max(longest, freq[num] + freq[num - 1])

        return longest
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // Create a dictionary to store the frequency of each number
    const freq = new Map();
    let longest = 0;
    
    for (const num of nums) {
        // Increment the frequency of the current number
        freq.set(num, (freq.get(num) || 0) + 1);
        
        if (freq.has(num + 1)) {
            longest = Math.max(longest, freq.get(num) + freq.get(num + 1));
        }
        
        if (freq.has(num - 1)) {
            longest = Math.max(longest, freq.get(num) + freq.get(num - 1));
        }
    }
    
    return longest;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findLHS($nums) {
        // Create a dictionary to store the frequency of each number
        $freq = [];
        $longest = 0;
        
        foreach ($nums as $num) {
            // Increment the frequency of the current number
            $freq[$num] = isset($freq[$num]) ? $freq[$num] + 1 : 1;
            
            if (isset($freq[$num + 1])) {
                $longest = max($longest, $freq[$num] + $freq[$num + 1]);
            }
            
            if (isset($freq[$num - 1])) {
                $longest = max($longest, $freq[$num] + $freq[$num - 1]);
            }
        }
        
        return $longest;
    }
}
```