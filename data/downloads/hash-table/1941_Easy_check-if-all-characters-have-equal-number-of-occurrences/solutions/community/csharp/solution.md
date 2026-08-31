# C# using dictionary

**Author:** Dmitriy-Maksimov
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/3665584/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/3665584/)

---

# Approach
- Use dictionary to count occurences of each character
- Check if all characters have the same count

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
public class Solution
{
    public bool AreOccurrencesEqual(string s)
    {
        var dictionary = new Dictionary<char, int>();

        foreach (var ch in s)
        {
            dictionary[ch] = dictionary.GetValueOrDefault(ch) + 1;
        }

        var firstCount = dictionary.First().Value;
        
        return dictionary.Values.All(x => x == firstCount);
    }
}
```