# Sliding Window PHP solution. Code commented

**Author:** nikolay_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3303022/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3303022/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstringTwoDistinct($s) {
        $left = 0;
        $memory = []; // Hash table to store character counts [char => count_of_char]
        $result = 0; // Variable to store the length of the longest substring

        for($right = 0; $right < strlen($s); $right++) {
            $memory[$s[$right]] += 1; // Increment the count for the current character

            // If there are at most 2 distinct characters in the substring
            if(count($memory) <= 2) { 
                $result = max($result, $right - $left + 1); // Update the length of the longest substring
            } 

            // If there are more than 2 distinct characters in the substring
            while(count($memory) > 2 && $left < $right) { 
                $char = $s[$left]; // Get the leftmost character

                $memory[$char] -= 1; // Decrement its count
                
                // If the count becomes 0, remove the character from the hash table
                if($memory[$char] == 0) { 
                    unset($memory[$char]);
                }

                $left++; // Move the left pointer to the right
            }
        }

        return $result;
    }
}
```