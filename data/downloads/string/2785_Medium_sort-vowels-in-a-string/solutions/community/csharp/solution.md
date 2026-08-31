# C# Solution for Sort Vowels In a String Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281258/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach involves iterating through the characters of the input string, collecting vowels in a list, sorting the list, and then replacing the original string\u2019s vowels with the sorted ones.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Iterate through the string, identify vowels, and store them in a list.
2.	Sort the list of vowels.
3.	Iterate through the original string, replacing vowels with sorted vowels.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Identifying and storing vowels: O(n), where n is the length of the input string.
\u2022	Sorting the vowel list: O(v log v), where v is the number of vowels.
\u2022	Updating the string: O(n)
\u2022	Overall time complexity: O(n + v log v)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Additional space for the vowel list: O(v)
\u2022	Overall space complexity: O(n + v)

# Code
```
public class Solution {
    public string SortVowels(string s) {
        char[] chars = s.ToCharArray();
        List<char> vowels = new List<char>();

        foreach (char c in chars) {
            if (IsVowel(c)) {
                vowels.Add(c);
            }
        }

        vowels.Sort();

        int vowelIndex = 0;
        for (int i = 0; i < chars.Length; i++) {
            if (IsVowel(chars[i])) {
                chars[i] = vowels[vowelIndex++];
            }
        }

        return new string(chars);
    }

     private bool IsVowel(char c) {
        char lowerC = char.ToLower(c);
        return lowerC == 'a' || lowerC == 'e' || lowerC == 'i' || lowerC == 'o' || lowerC == 'u';
    }

}
```