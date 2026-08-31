# C# Prefix Counting and Combinatorics Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/5857185/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/5857185/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->The intuition when first approaching this problem is to realize that directly generating all substrings would be too slow, especially with constraints where the length of the string can be as large as 10^5. Instead of focusing on each substring, the better approach is to count how many times each vowel appears in the substrings.
- First, observe that a character at position i can participate in multiple substrings. Specifically:
- The number of substrings where the character is the first character is (i + 1) (since there are i + 1 ways to choose starting positions).
- The number of substrings where the character is the last character is (n - i) (where n is the length of the string, and there are n - i possible ending positions).
- By multiplying these two numbers (i + 1) * (n - i), you get the total number of substrings in which the character appears. If it's a vowel, it contributes that many times to the final sum.
____

# Approach
<!-- Describe your approach to solving the problem. -->//  IsVowel Function: This helper function simply checks if a given character is one of the vowels 
//  ('a', 'e', 'i', 'o', 'u').
//  CountVowels Method:
//  *We loop through each character in the string. If the character is a vowel, we calculate how many 
//  substrings it contributes to.
//  *For each vowel at position i, it contributes to (i + 1) X (n - i) substrings, where 'n' is thet length
//  of the string.
//  *We accumulate the contributions of all vowels and return the total sum.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the string.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1), additional space. We only use a few extra variables, so the extra space is constant.
___

# Code
```csharp []
public class Solution {
    public long CountVowels(string word) {
        long totalVowelCount = 0;
        int n = word.Length;
        
        // Iterate over the string
        for (int i = 0; i < n; i++) {
            // Check if the character is a vowel
            if (IsVowel(word[i])) {
                // Calculate how many substrings this vowel contributes to
                long contribution = (long)(i + 1) * (n - i);
                totalVowelCount += contribution;
            }
        }
        
        return totalVowelCount;
    }
    
    // Helper function to check if a character is a vowel
    private bool IsVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
}
```