# Easy solution, readable, using StringBuilder and a foreach.

**Author:** jandujo
**Votes:** 1
**Link:** [https://leetcode.com/problems/goat-latin/solutions/6039322/](https://leetcode.com/problems/goat-latin/solutions/6039322/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public string ToGoatLatin(string sentence) {
        StringBuilder result = new();
        int wordCount = 1;
        var words = sentence.Split(' ');
        var vowels = "aeiouAEIOU";
        foreach(string word in words)
        {
            if(wordCount > 1)
                result.Append(" ");
            if(vowels.IndexOf(word[0]) > -1)
                result.Append(word).Append("ma");
            else
                result.Append(word.Substring(1,word.Length-1)).Append(word[0]).Append("ma");

            for(int i=0; i<wordCount; i++)
                result.Append("a");
                
            wordCount++;
        }

        return result.ToString();
    }
}
```