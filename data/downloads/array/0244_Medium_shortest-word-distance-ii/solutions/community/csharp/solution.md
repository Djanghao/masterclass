# Runtime 98% Memory 100%. C# Dictionary. SC: O(M + N).

**Author:** AndrewGumenyuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/4094401/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/4094401/)

---

Runtime
Details
111ms
Beats 90.91%of users with C#
Memory
Details
75.47MB
Beats 100.00%of users with C#

# Code
```
public class WordDistance 
{
    private Dictionary<string, List<int>> _dict = new Dictionary<string, List<int>>();

    public WordDistance(string[] wordsDict) 
    {
        for (var i = 0; i < wordsDict.Length; i++)
        {
            if (!_dict.ContainsKey(wordsDict[i]))
                _dict.Add(wordsDict[i], new List<int>());
            
            _dict[wordsDict[i]].Add(i);
        }
    }
    
    public int Shortest(string word1, string word2) 
    {
        if (!_dict.ContainsKey(word1) || !_dict.ContainsKey(word2)) return -1;

        var word1Indexes = _dict[word1];
        var word2Indexes = _dict[word2];

        var diff = int.MaxValue;

        int left = 0, right = 0;
        while (left < word1Indexes.Count && right < word2Indexes.Count)
        {
            diff = Math.Min(diff, Math.Abs(word1Indexes[left] - word2Indexes[right]));
            if (diff == 1) break;

            if (word1Indexes[left] > word2Indexes[right])
                right++;
            else
                left++;
        }

        return diff;
    }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * WordDistance obj = new WordDistance(wordsDict);
 * int param_1 = obj.Shortest(word1,word2);
 */
```