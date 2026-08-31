# Back-track C#

**Author:** user0742w
**Votes:** 0
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/5685821/](https://leetcode.com/problems/generalized-abbreviation/solutions/5685821/)

---

# Intuition
Go through the letters in the word left to right and try to include it without abbreviating it and then by abbreviating it
# Approach
<!-- Describe your approach to solving the problem. -->
Back-track by each letter once abbreviating it and once not abbreviating it

# Code
```csharp []
public class Solution {
    public IList<string> GenerateAbbreviations(string word)
    {
        var abbreviations = new List<string>();
        StoreAbbreviations(abbreviations, word, new StringBuilder(), 0, 0);
        return abbreviations;
    }

    private void StoreAbbreviations(List<string> abbreviations, string word, StringBuilder currentWord, int index, int abbreviatedCount)
    {
        if (index == word.Length)
        {
            abbreviations.Add(currentWord.ToString());
            return;
        }
        var letter = word[index];
        //1. include the letter without abbreviating
        currentWord.Append(letter);
        StoreAbbreviations(abbreviations, word, currentWord, index + 1, 0);
        //back-track
        currentWord.Remove(currentWord.Length - 1, 1);
        //2. Abbreviate the letter 
        ReplaceTrailingNumber(currentWord, abbreviatedCount, abbreviatedCount + 1);
        StoreAbbreviations(abbreviations, word, currentWord, index + 1, abbreviatedCount + 1);
        // back-track
        ReplaceTrailingNumber(currentWord, abbreviatedCount + 1, abbreviatedCount);
    }

    private void ReplaceTrailingNumber(StringBuilder currentWord, int odlNumber, int newNumber)
    {
        RemoveTrailingNumber(currentWord, odlNumber);
        if (newNumber > 0)
        {
            currentWord.Append(newNumber);
        }
    }

    private void RemoveTrailingNumber(StringBuilder currentWord, int odlNumber)
    {
        if (odlNumber == 0)
        {
            return;
        }
        var toRemove = odlNumber.ToString().Length;
        currentWord.Remove(currentWord.Length - toRemove, toRemove);
    }
}



```