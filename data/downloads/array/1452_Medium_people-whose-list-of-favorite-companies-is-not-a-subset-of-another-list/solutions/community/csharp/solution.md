# ✅C# Solution [Clean Code] [Easy to Understand]

**Author:** ranahamid
**Votes:** 3
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/2302876/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/2302876/)

---

```
 public IList<int> PeopleIndexes(IList<IList<string>> favoriteCompanies)
        {
            var result = new List<int>();
            int maxCount;
            for (int i = 0; i < favoriteCompanies.Count; i++)
            {
                maxCount = 0;
                for (int j = 0; j < favoriteCompanies.Count; j++)
                {
                    if (i == j)
                        continue;
                    if (favoriteCompanies[j].Count >= favoriteCompanies[i].Count)
                    {
                        var res = favoriteCompanies[i].Intersect(favoriteCompanies[j]);
                        maxCount = Math.Max(maxCount, res.Count());
                    }
                }
                if (favoriteCompanies[i].Count > maxCount)
                    result.Add(i);
            }
            return result;
        }