# C# 'Just throw a Hash Map at it' Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/5460906/](https://leetcode.com/problems/vowel-spellchecker/solutions/5460906/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. --> Utilize multiple dictionaries (hash maps) to efficiently handle different types of queries (exact match, case-insensitive match, and vowel error match).
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Data Structures:
//  *exactWords: A hash set to store the exact words from the wordlist for O(1) lookup.
//  *capitalizationMap: A dictionary to store the lowercase version of the word and its first occurrence 
//  in the wordlist to handle case-insensitive matches.
//  *vowelMap: A dictionary to store the "vowel-masked" version of the word and its first occurrence in 
//  the wordlist to handle vowel error matches.
//  Masking Vowels:
//  *The MaskVowels method replaces vowels in a word with the character *.
//  Building The Dictionaries:
//  *We populate the capitalizationMap and vowelMap by iterating over the wordlist and processing each 
//  word into its lowercase and vowel-masked forms.
//  Processing Queries:
//  *For each query, we check if it exists in exactWords.
//  *If not, we convert the query to lowercase and check in capitalizationMap.
//  *If still not found, we convert the query to its vowel-masked form and check in vowelMap.
//  *If no match is found, we return an empty string.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N * L + Q * L).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(N * L).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public string[] Spellchecker(string[] wordlist, string[] queries) {
        HashSet<string> exactWords = new HashSet<string>(wordlist);
        Dictionary<string, string> capitalizationMap = new Dictionary<string, string>();
        Dictionary<string, string> vowelMap = new Dictionary<string, string>();

        foreach (string word in wordlist) {
            string lowerWord = word.ToLower();
            if (!capitalizationMap.ContainsKey(lowerWord)) {
                capitalizationMap[lowerWord] = word;
            }

            string vowelMaskedWord = MaskVowels(lowerWord);
            if (!vowelMap.ContainsKey(vowelMaskedWord)) {
                vowelMap[vowelMaskedWord] = word;
            }
        }

        string[] result = new string[queries.Length];

        for (int i = 0; i < queries.Length; i++) {
            string query = queries[i];
            if (exactWords.Contains(query)) {
                result[i] = query;
            } else {
                string lowerQuery = query.ToLower();
                if (capitalizationMap.ContainsKey(lowerQuery)) {
                    result[i] = capitalizationMap[lowerQuery];
                } else {
                    string vowelMaskedQuery = MaskVowels(lowerQuery);
                    if (vowelMap.ContainsKey(vowelMaskedQuery)) {
                        result[i] = vowelMap[vowelMaskedQuery];
                    } else {
                        result[i] = "";
                    }
                }
            }
        }

        return result;
    }

    private string MaskVowels(string word) {
        char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
        char[] chars = word.ToCharArray();

        for (int i = 0; i < chars.Length; i++) {
            if (Array.IndexOf(vowels, chars[i]) >= 0) {
                chars[i] = '*';
            }
        }

        return new string(chars);
    }
}
```