# Beats 100%, Hash Table, O(n + m)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/4797027/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/4797027/)

---

# Intuition
Create a list of users' pairs which need to learn a new language.

# Approach
At first create new dictionary `dicLang` with a user as a key and a set of user's languages as a value:
```
var dicLang = CreateDicOfLanguages(languages);
```
The create a list of users who need to learn a new language:
```
var set = new HashSet<int>();
for (int i = 0; i < friendships.Length; i++)
{
    if (dicLang[friendships[i][0]].Intersect(dicLang[friendships[i][1]]).Count() == 0)
    {
        set.Add(friendships[i][0]);
        set.Add(friendships[i][1]);
    }
}
```
After that find the language with the naximum number of speakers:
```
var maxLang = 0;
foreach (var item in set)
{
    foreach (var lang in dicLang[item])
    {
        if (!dic.ContainsKey(lang)) dic.Add(lang, 0);
        dic[lang]++;
        maxLang = Math.Max(maxLang, dic[lang]);
    }
}
```
Finally caclulate the result:
```
var rs = set.Count - maxLang;
return rs;
```

# Complexity
- Time complexity:
$$O(k + m)$$, where m is the len(languages) and k is the len(friendships)

- Space complexity:
$$O(k + m)$$, where m is the len(languages) and k is the len(friendships)

# Code
```
public class Solution {
    public int MinimumTeachings(int n, int[][] languages, int[][] friendships) {
        var dicLang = CreateDicOfLanguages(languages);
        var set = new HashSet<int>();
        for (int i = 0; i < friendships.Length; i++)
        {
            if ((dicLang[friendships[i][0]].Intersect(dicLang[friendships[i][1]])).Count() == 0)
            {
                set.Add(friendships[i][0]);
                set.Add(friendships[i][1]);
            }
        }
        var dic = new Dictionary<int, int>();
        var maxLang = 0;
        foreach (var item in set)
        {
            foreach (var lang in dicLang[item])
            {
                if (!dic.ContainsKey(lang)) dic.Add(lang, 0);
                dic[lang]++;
                maxLang = Math.Max(maxLang, dic[lang]);
            }
        }
        var rs = set.Count - maxLang;
        return rs;
    }
    private Dictionary<int, HashSet<int>> CreateDicOfLanguages(int[][] languages)
    {
        var rs = new Dictionary<int, HashSet<int>>();
        for (int i = 0; i < languages.Length; i++)
        {
            rs.Add(i + 1, new HashSet<int>(languages[i]));
        }
        return rs;
    }
}
```