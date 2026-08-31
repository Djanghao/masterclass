# C# Backtracking with Validation Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/5378310/](https://leetcode.com/problems/ambiguous-coordinates/solutions/5378310/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of generating all possible original coordinates from a given string s, we need to explore all ways to split the string into two parts and then generate valid coordinate representations for each part.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Extract the Core String: Remove the outer parentheses from the input string s using Substring(1, s.Length - 2).

//  Split the String into Two Parts: Iterate through the string to create all possible splits. For each split position i,
//  generate two substrings: the left part and the right part.

//  Generate Valid Decima Placements:
//  *For each part, use the GenerateValidNumbers method to generate all valid representations (both integer and decimal) 
//  of the substring.
//  *'IsValidNumber' checks if the substring is a valid integer (it should not start with '0' unless it is exactly "0").
//  *'IsValidFraction' checks if the substring can be a valid fraction (it should not end with '0').

//  Combine the Results: For each valid representation of the left part of each valid represeentation of the right part,
//  combine them to form coordinate pairs and add them to the result list.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^3) where n is the length of the string (excluding parentheses). This is because we generate all possible splits, and for each split, we generate valid decimal representations, which involves checking each substring.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^3), due to the storage required for all possible combinations of valid coordinates.
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public IList<string> AmbiguousCoordinates(string s) {
        var result = new List<string>();
        
        // Remove the parentheses
        s = s.Substring(1, s.Length - 2);
        
        for (int i = 1; i < s.Length; i++) {
            var leftParts = GenerateValidNumbers(s.Substring(0, i));
            var rightParts = GenerateValidNumbers(s.Substring(i));
            
            foreach (var left in leftParts) {
                foreach (var right in rightParts) {
                    result.Add($"({left}, {right})");
                }
            }
        }
        
        return result;
    }
    
    private IList<string> GenerateValidNumbers(string s) {
        var validNumbers = new List<string>();
        
        if (IsValidNumber(s)) {
            validNumbers.Add(s);
        }
        
        for (int i = 1; i < s.Length; i++) {
            var left = s.Substring(0, i);
            var right = s.Substring(i);
            
            if (IsValidNumber(left) && IsValidFraction(right)) {
                validNumbers.Add($"{left}.{right}");
            }
        }
        
        return validNumbers;
    }
    
    private bool IsValidNumber(string s) {
        // A valid number should not start with '0' unless it is exactly "0"
        return !(s.Length > 1 && s[0] == '0');
    }
    
    private bool IsValidFraction(string s) {
        // A valid fraction should not end with '0'
        return s[s.Length - 1] != '0';
    }
}
```