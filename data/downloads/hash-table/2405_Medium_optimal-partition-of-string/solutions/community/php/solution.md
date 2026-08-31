# [PHP] Greedy - Unique Character Substrings – O(n) Time, O(1) Space – Detailed Explanation

**Author:** user2400po
**Votes:** 1
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3301166/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3301166/)

---

# Intuition
Our task is to partition the input string into one or more substrings such that the characters in each substring are unique. Our goal is to find the minimum number of such substrings. We can consider adding characters to a substring as long as we don't see a character that has already been added to the current substring. When we see a character that is already present in the substring, we start a new substring and repeat this process until we iterate over the entire input string.

# Approach
To solve this problem, we can use a greedy approach. We iterate through the input string, and for each character, we check if it's already present in the current substring. If it is, we start a new substring, clear the current unique character set, and increment the substring count. If it's not present, we add it to the unique character set. In the end, we return the total substring count + 1, as we haven't counted the last substring yet.

# Complexity
- Time complexity: $$O(n)$$
We iterate over the input string once, which takes $$O(n)$$ time, where $$n$$ is the length of the input string.

- Space complexity: $$O(1)$$
We use a unique character set (an associative array) to store the unique characters in the current substring. Since the input string can only contain lowercase Latin letters, there are a maximum of 26 unique characters that can be stored in the unique character set. Therefore, the space complexity is $$O(1)$$.

# Code
```
class Solution {
    function partitionString($inputString) {
        $substringCount = 0;
        $uniqueCharSet = [];

        for ($index = 0; $index < strlen($inputString); $index++) {
            $currentChar = $inputString[$index];
            if (isset($uniqueCharSet[$currentChar])) {
                $uniqueCharSet = [];
                $substringCount += 1;
            }
            $uniqueCharSet[$currentChar] = true;
        }

        return $substringCount + 1;
    }
}
```