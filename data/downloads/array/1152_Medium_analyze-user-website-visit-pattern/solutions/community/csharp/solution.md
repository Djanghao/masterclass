# C#, brute force

**Author:** sagar9950
**Votes:** 1
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5123482/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5123482/)

---

# Code
```
public class Solution {
    public IList<string> MostVisitedPattern(string[] username, int[] timestamp, string[] website) {
        List<(string, string, int)> visitLists = new();
        for (int i = 0; i < username.Length; i++)
        {
            visitLists.Add((username[i], website[i], timestamp[i]));
        }

        visitLists = visitLists.OrderBy(x => x.Item3).ToList();

        Dictionary<string, List<string>> userWebsite = new();
        foreach (var item in visitLists)
        {
            if (!userWebsite.ContainsKey(item.Item1))
            {
                userWebsite[item.Item1] = new List<string>();
            }
            userWebsite[item.Item1].Add(item.Item2);
        }

        Dictionary<(string, string, string), int> patternCount = new();
        foreach (var item in userWebsite)
        {
            HashSet<(string, string, string)> set = new();
            if (item.Value.Count >= 3)
            {
                for (int i = 0; i < item.Value.Count; i++)
                {
                    for (int j = i + 1; j < item.Value.Count; j++)
                    {
                        for (int k = j + 1; k < item.Value.Count; k++)
                        {
                            if (!patternCount.ContainsKey((item.Value[i], item.Value[j], item.Value[k])))
                            {
                                patternCount[(item.Value[i], item.Value[j], item.Value[k])] = 0;
                            }
                            if (!set.Contains((item.Value[i], item.Value[j], item.Value[k])))
                            {
                                patternCount[(item.Value[i], item.Value[j], item.Value[k])]++;
                                set.Add(((item.Value[i], item.Value[j], item.Value[k])));
                            }                              
                        }
                    }
                }
            }
        }

        SortedDictionary <int, PriorityQueue<(string, string, string), (string, string, string)>> countPatterns = new();
        foreach (var kvp in patternCount)
        {
            if (!countPatterns.ContainsKey(kvp.Value))
            {
                countPatterns[kvp.Value] = new PriorityQueue<(string, string, string), (string, string, string)>();
            }
            countPatterns[kvp.Value].Enqueue(kvp.Key, kvp.Key);
        }

        var keyValuePair = countPatterns.ElementAt(countPatterns.Count - 1);
        return new List<string>() { keyValuePair.Value.Peek().Item1, keyValuePair.Value.Peek().Item2, keyValuePair.Value.Peek().Item3 };
    }
}
```