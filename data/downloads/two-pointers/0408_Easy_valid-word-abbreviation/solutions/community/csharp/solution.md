# C# || O(n) solution using two pointers

**Author:** timmok2022
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/3248515/](https://leetcode.com/problems/valid-word-abbreviation/solutions/3248515/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are three rules to check for: 1. digits should be non-adjacent 2. non-empty abbreviation and 3. no leading zeros.  
To validate againt the rules, using two pointers make sense.  While iterating through each char of both **word** and **abbr** - check to see if letters at their respective positions are equal or skipped properly if digits are encountered.
After iterating through all chars to the end, check to see if both pointers are at the end of their respective string.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two variables - i for word and j for abbr
2. Run a while loop that should be valid when both i and j are less than their respective string length
3. If letters are equal, increment both i and j
4. If a digit is found, continue to read additional digits while j is still less than abbr length.  Use the total int value to move the i pointer
5. If step 3 and step 4 are not true, return false
6. After completing the loop, do the final check if both pointers arrived at the end of their respective string - return the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {
    public bool ValidWordAbbreviation(string word, string abbr) {
        int i = 0, j = 0;

        while (i < word.Length && j < abbr.Length)
        {
            if (word[i] == abbr[j]) { i++; j++; }
            else if (char.IsDigit(abbr[j]))
            {
                if (abbr[j] == '0') return false;

                int x = 0;

                while (j < abbr.Length && char.IsDigit(abbr[j]))
                {
                    x = x*10 + (abbr[j] - '0');
                    j++;
                }
                i += x;
            }
            else return false;
        }

        return i == word.Length && j == abbr.Length;
        
    }
}

// checking whether the abbr matches the word or not - return true/false
// rules - non-adjacent, non-empty, no leading zeros

// for abbr, check whether all three rules are met or not
// if no, return false - otherwise return true

/*

            int x = 0;
            while (j < abbr.Length && char.IsDigit(abbr[j])) {
                x = x * 10 + (abbr[j] - '0');
                j++;
            }
            i += x;
        }
        else {
            return false; // invalid abbreviation
        }
    }
    return i == word.Length && j == abbr.Length;
}

*/
```