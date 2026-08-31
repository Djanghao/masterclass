# Apparantly fast solution

**Author:** ScarredSceptile
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/5957691/](https://leetcode.com/problems/expressive-words/solutions/5957691/)

---

This solution got me one of the fastests times, but memory usage is comparedly horrible.

# Intuition & Approach
Regex to split the words into sections of letters, and then compare the letters

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
using System.Text.RegularExpressions;

public class Solution {
    public int ExpressiveWords(string s, string[] words) {
        var extension = GetMatch(s);
        int count = 0;

        for (int i = 0; i < words.Length; i++){
            bool canExtend = true;
            var word = GetMatch(words[i]);
            if (extension.Length != word.Length)
                continue;
            for (int j = 0; j < word.Length; j++){
                if ((extension[j].Length >= 3 && extension[j].Length > word[j].Length || extension[j] == word[j]) == false){
                    canExtend = false;
                    break;
                }
            }
            if (canExtend)
                count++;
        }
        return count;
    }

    private string[] GetMatch(string s){
        return Regex.Matches(s, @"(.)\\1*").Cast<Match>().Select(m => m.Value).ToArray();
    }
}
```