# Reconstruct Original Digits from English

**Author:** Subham-Bose
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/6006680/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/6006680/)

---

# Intuition
The problem provides a jumbled sequence of letters that collectively represent a sequence of digits spelled out in English. The intuition is to leverage unique letters that appear exclusively in certain digits. For instance, the letter 'z' only appears in "zero," and 'w' only appears in "two." By counting these unique letters, we can identify certain digits directly.

Once we identify digits with unique characters, we can systematically determine the counts of other digits by removing the impact of previously counted characters. This approach reduces complexity since each unique letter allows us to "lock in" a specific digit, and any overlapping characters can then be easily managed. After determining all counts, constructing the final sequence is straightforward.

This strategy allows us to convert a seemingly unstructured letter arrangement into an ordered sequence of digits.

# Approach
1. Character Counting: Count the occurrences of each letter in the input string using a count array, where count[i] holds the number of times the character ('a' + i) appears in the string.
2. Unique Character Identification: Some digits have unique characters that only appear in their English representation, allowing us to determine their counts directly:
'z' for "zero" (0)
'w' for "two" (2)
'u' for "four" (4)
'x' for "six" (6)
'g' for "eight" (8)
3. Dependent Character Deduction: Using the unique counts derived above, deduce the counts of other digits:
'o' for "one" (after removing counts from "zero", "two", and "four")
'h' for "three" (after removing "eight")
'f' for "five" (after removing "four")
's' for "seven" (after removing "six")
'i' for "nine" (after removing "five", "six", and "eight")
4. Reconstruct Output: Build the final string by appending each digit according to its count and return the result.

# Complexity
- Time complexity:
O(n), where n is the length of the string. We count each letter and then use fixed operations to determine the counts of each digit.

- Space complexity:
O(1), as the auxiliary space for the count array and num array is constant, with size independent of input length.

# Code
```csharp []
public class Solution
{
    public string OriginalDigits(string s)
    {
        // Step 1: Count occurrences of each letter in the input string
        int[] count = new int[26];
        foreach (var c in s) 
            count[c - 'a']++;

        // Step 2: Initialize array to store count of each digit (0-9)
        int[] num = new int[10];

        // Step 3: Find counts of digits with unique characters
        num[0] = count['z' - 'a'];  // 'z' is unique to "zero"
        num[2] = count['w' - 'a'];  // 'w' is unique to "two"
        num[4] = count['u' - 'a'];  // 'u' is unique to "four"
        num[6] = count['x' - 'a'];  // 'x' is unique to "six"
        num[8] = count['g' - 'a'];  // 'g' is unique to "eight"

        // Step 4: Deduce counts for remaining digits
        num[1] = count['o' - 'a'] - num[0] - num[2] - num[4]; // for "one"
        num[3] = count['h' - 'a'] - num[8];                   // for "three"
        num[5] = count['f' - 'a'] - num[4];                   // for "five"
        num[7] = count['s' - 'a'] - num[6];                   // for "seven"
        num[9] = count['i' - 'a'] - num[5] - num[6] - num[8]; // for "nine"

        // Step 5: Construct the final output string with digits in ascending order
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < num.Length; i++)
            while (num[i]-- > 0)
                sb.Append(i);

        return sb.ToString();
    }
}

```