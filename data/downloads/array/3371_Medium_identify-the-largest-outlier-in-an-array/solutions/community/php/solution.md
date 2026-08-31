# Solution with explanation

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6099819/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6099819/)

---

# Approach
1. Inizilize total sum calculation and frequency map.

2. Finding the Largest Outlier:
- For each element in the array, we calculate the remaining sum if that element is the outlier.
- We check if the remaining sum is even. If it is, we calculate the potential special number (remaining_sum // 2).
- We check if the potential special number exists in the frequency map.
- If the potential special number is the same as the current number, we ensure that it appears at least twice in the array.
- We update the largest outlier if the current number is a valid outlier.

3. If a valid outlier is found, we return it. Otherwise, we return -1.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of elements in the array.
-- Calculating the total sum of the array takes O(n) time.
-- Constructing the frequency map using Counter takes (O(n)) time.
-- Finding the Largest Outlier: Iterating through the array and performing constant-time operations for each element (checking the frequency map) takes O(n) time.

- Space complexity:
$$O(n)$$ because of the frequency map.

# Code
```python3 []
class Solution:
    def getLargestOutlier(self, nums: List[int]) -> int:
        total_sum = sum(nums)
        frequency_map = Counter(nums)
        largest_outlier = float('-inf')
        
        for num in nums:
            remaining_sum = total_sum - num
            
            # Check if the remaining sum is even
            if remaining_sum % 2 == 0:
                # Calculate the potential special number
                potential_special = remaining_sum // 2
                
                # Check if the potential special number exists in the frequency map
                if frequency_map[potential_special] > 0:
                    # If the potential special number is the same as 'num', ensure it 
                    # appears at least twice
                    if potential_special == num and frequency_map[potential_special] < 2:
                        continue
                    
                    largest_outlier = max(largest_outlier, num)
        
        return largest_outlier if largest_outlier != float('-inf') else -1
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    const frequencyMap = new Map();

    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    let largestOutlier = -Infinity;
    
    for (let num of nums) {
        let remainingSum = totalSum - num;
        
        // Check if the remaining sum is even
        if (remainingSum % 2 === 0) {
            // Calculate the potential special number
            let potentialSpecial = remainingSum / 2;
            
            // Check if the potential special number exists in the frequency map
            if (frequencyMap.has(potentialSpecial)) {
                // If the potential special number is the same as 'num', ensure it appears at least twice
                if (potentialSpecial === num && frequencyMap.get(potentialSpecial) < 2) {
                    continue;
                }
                
                largestOutlier = Math.max(largestOutlier, num);
            }
        }
    }
    
    return largestOutlier !== -Infinity ? largestOutlier : -1;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function getLargestOutlier($nums) {
        $totalSum = array_sum($nums);
        $frequencyMap = array_count_values($nums);
        $largestOutlier = PHP_INT_MIN;
        
        foreach ($nums as $num) {
            $remainingSum = $totalSum - $num;
            
            // Check if the remaining sum is even
            if ($remainingSum % 2 === 0) {
                // Calculate the potential special number
                $potentialSpecial = $remainingSum / 2;
                
                // Check if the potential special number exists in the frequency map
                if (isset($frequencyMap[$potentialSpecial])) {
                    // If the potential special number is the same as 'num', ensure it appears at least twice
                    if ($potentialSpecial === $num && $frequencyMap[$potentialSpecial] < 2) {
                        continue;
                    }
                    
                    $largestOutlier = max($largestOutlier, $num);
                }
            }
        }
        
        return $largestOutlier !== PHP_INT_MIN ? $largestOutlier : -1;
    }
}
```