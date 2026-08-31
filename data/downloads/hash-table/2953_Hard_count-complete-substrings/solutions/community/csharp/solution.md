# Faster than 65%, Sliding Window, O(n)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4371913/](https://leetcode.com/problems/count-complete-substrings/solutions/4371913/)

---

# Intuition
Sum up the resilt for all substrings with length equals to k, k * 2, k * 3, ...

# Approach
At first split the input string into separate strings (with `Math.Abs(word[i] - word[i - 1]) <= 2`):
```
var words = GetWordsInLongestSubsequence(word);
```
Then calculate the result:
```
var rs = 0;
for (int i = 0; i < words.Count; i++)
{
    rs += CountCompleteSubstringsAux(words[i], k);
}
return rs;
```
In the method `CountCompleteSubstringsAux` at first find the maximum total number of different letters:
```
var lettersCount = GetLettersCount(word, k);
```
Then for each `i <= lettersCount` calculate the result:
```
for (int i = 1; i <= lettersCount; i++)
{
    var len = Math.Min(i, word.Length / k) * k;
    ...
    for (int j = 1; j < word.Length + 1 - len; j++)
    {
        ...
        if (IsComplete(dic, k)) rs++;
    }
}
```
# Complexity
- Time complexity:
$$O(n)$$, where n is the length of `word`

- Space complexity:
$$O(n)$$, where n is the length of `word`

# Code
```
public class Solution {
    public int CountCompleteSubstrings(string word, int k) {
        var words = GetWordsInLongestSubsequence(word);
        var rs = 0;
        for (int i = 0; i < words.Count; i++)
        {
            rs += CountCompleteSubstringsAux(words[i], k);
        }
        return rs;
    }
    private int CountCompleteSubstringsAux(string word, int k)
    {
        var lettersCount = GetLettersCount(word, k);
        var rs = 0;
        for (int i = 1; i <= lettersCount; i++)
        {
            var len = Math.Min(i, word.Length / k) * k;
            var dic = InitDictionary(len, word);
            if (IsComplete(dic, k)) rs++;
            for (int j = 1; j < word.Length + 1 - len; j++)
            {
                if (!dic.ContainsKey(word[j + len - 1]))
                {
                    dic.Add(word[j + len - 1], 1);
                }
                else
                {
                    dic[word[j + len - 1]]++;
                }
                if (dic[word[j - 1]] == 1)
                {
                    dic.Remove(word[j - 1]);
                }
                else
                {
                    dic[word[j - 1]]--;
                }
                if (IsComplete(dic, k)) rs++;
            }
        }
        return rs;
    }
    private bool IsComplete(Dictionary<char, int> dic, int k)
    {
        foreach (var item in dic)
        {
            if (item.Value != k) return false;
        }
        return true;
    }
    private Dictionary<char, int> InitDictionary(int len, string word)
    {
        var rs = new Dictionary<char, int>();
        for (int i = 0; i < len; i++)
        {
            if (!rs.ContainsKey(word[i]))
            {
                rs.Add(word[i], 1);
            }
            else
            {
                rs[word[i]]++;
            }
        }
        return rs;
    }
    private int GetLettersCount(string word, int k)
    {
        var set = new HashSet<char>();
        for (int i = 0; i < word.Length; i++)
        {
            if (!set.Contains(word[i])) set.Add(word[i]);
        }
        return Math.Min(set.Count, word.Length / k);
    }
    private List<string> GetWordsInLongestSubsequence(string word)
    {
        var index = 0;
        var len = 1;
        var rs = new List<string>();
        for (int i = 1; i < word.Length; i++)
        {
            if (Math.Abs(word[i] - word[i - 1]) <= 2)
            {
                len++;
            }
            else
            {
                rs.Add(word.Substring(index, len));
                index = i;
                len = 1;
            }
        }
        rs.Add(word.Substring(index, len));
        return rs;
    }
}
```