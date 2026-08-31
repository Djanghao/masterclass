# C# Solution for Find the Closest Palindrome Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5684335/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5684335/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main idea behind this solution is to generate potential palindromes by leveraging the symmetry inherent in palindromes. By manipulating the first half of the input number and mirroring it, we can efficiently generate candidates that are close to the original number. This approach ensures that we cover all possible nearest palindromes without having to generate or check every possible number.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Edge Cases:
	\u2022	Handle simple cases directly: for instance, single-digit numbers return n-1, and numbers like 10, 100, etc., are treated with special conditions.
2.	Generate Prefix Variations:
	\u2022	Extract the first half (or slightly more than half for odd-length numbers) of the input number. This forms the basis of potential palindromes.
	\u2022	Create three versions of this prefix by subtracting one, keeping it the same, and adding one to the prefix. This allows us to consider palindromes that are slightly smaller, identical, and slightly larger than the original number.
3.	Create Palindromes:
	\u2022	For each prefix, construct a full palindrome by mirroring the prefix. If the number length is even, the entire prefix is mirrored. If the number length is odd, the prefix excluding the middle digit is mirrored.
4.	Evaluate Candidates:
	\u2022	Add these generated palindromes to a list of candidates along with boundary cases such as 10...01 and 99...99.
	\u2022	Compare these candidates against the original number to determine the closest palindrome. The closest is defined as the one with the smallest absolute difference. In the event of a tie, the numerically smaller palindrome is chosen.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	O(1):
	\u2022	The operations performed (e.g., generating prefixes, mirroring, and comparing) are based on a fixed maximum length of the number n (up to 18 digits). The solution doesn\u2019t involve any iterative deep loops but instead involves straightforward manipulations based on the length of the input.
	\u2022	The key point here is that although we perform several operations, they are limited to a fixed number of digits (18). Therefore, the time complexity can be considered constant with respect to the input size.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	O(1):
	\u2022	The space complexity is constant because the number of candidate palindromes and the auxiliary space required (e.g., for storing the prefix, intermediate strings, and candidates) does not grow with the size of the input.
	\u2022	We are only storing a small fixed number of palindromes and doing operations that involve a fixed amount of extra space, hence the space complexity is constant.

# Code
```csharp []
public class Solution {
    public string NearestPalindromic(string n) {
        int length = n.Length;

        // Handle simple edge cases directly
        if (length == 1) {
            return (char)(n[0] - 1) + "";
        }

        // Initialize possible candidates
        var candidates = new List<long>();
        
        // Add edge cases
        candidates.Add((long)Math.Pow(10, length) + 1); // 1000...0001
        candidates.Add((long)Math.Pow(10, length - 1) - 1); // 999...999
        
        // Middle position index
        int middle = (length + 1) / 2;
        
        // Extract the prefix and create three variations
        long prefix = long.Parse(n.Substring(0, middle));
        for (long i = -1; i <= 1; i++) {
            long newPrefix = prefix + i;
            string palin = CreatePalindrome(newPrefix.ToString(), length % 2 == 0);
            candidates.Add(long.Parse(palin));
        }

        // Convert the input string n to a long
        long originalNumber = long.Parse(n);

        // Find the nearest palindrome
        long closestPalindrome = -1;
        foreach (long candidate in candidates) {
            if (candidate == originalNumber) continue;

            if (closestPalindrome == -1 || 
                Math.Abs(candidate - originalNumber) < Math.Abs(closestPalindrome - originalNumber) ||
                (Math.Abs(candidate - originalNumber) == Math.Abs(closestPalindrome - originalNumber) && candidate < closestPalindrome)) {
                closestPalindrome = candidate;
            }
        }

        return closestPalindrome.ToString();
    }

    // Helper method to create a palindrome based on a given prefix
    private string CreatePalindrome(string prefix, bool isEvenLength) {
        var sb = new StringBuilder(prefix);
        for (int i = prefix.Length - (isEvenLength ? 1 : 2); i >= 0; i--) {
            sb.Append(prefix[i]);
        }
        return sb.ToString();
    }
}
```