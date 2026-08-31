# C# Linq faster than 100%

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/4344991/](https://leetcode.com/problems/word-abbreviation/solutions/4344991/)

---

# Intuition
Group the words by their abbreviations.

If the word count of a group corresponding to the abbreviation is `1`, the abbreviation can be used as the abbreviation of the only element in this group.

Otherwise if there are more than `1` words in the group, these words need to be re-grouped again by their increased abbreviation from the current abbreviation.

# Approach
BFS

# Code
```
public class Solution {
    public IList<string> WordsAbbreviation(IList<string> words) {
        var map = words.GroupBy(word => word.Length <= 3 ? word : Key(word, 1)).ToDictionary(pair => pair.Key, pair => pair);
        var resMap = new Dictionary<string, string>();
        while (map.Keys.Count > 0)
        {
            foreach (var key in new HashSet<string>(map.Keys))
            {
                var list = map[key];
                map.Remove(key);
                if (list.Count() == 1)
                {
                    resMap[list.First()] = key;
                }
                else
                {
                    var len = key.TakeWhile(ch => ch >= 'a').Count();
                    foreach (var pair in list.GroupBy(word => Key(word, len + 1)))
                    {
                        map[pair.Key] = pair;
                    }
                }
            }
        }
        return words.Select(word => resMap[word]).ToList();
    }

    private string Key(string word, int len) => len >= word.Length - 2 ? word : $"{word.Substring(0, len)}{word.Length - len - 1}{word[word.Length - 1]}";
}
```