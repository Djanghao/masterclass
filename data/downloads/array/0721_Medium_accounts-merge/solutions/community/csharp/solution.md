# C# solution with sorting

**Author:** mission_2023
**Votes:** 2
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/3077365/](https://leetcode.com/problems/accounts-merge/solutions/3077365/)

---

# Approach
Create a map of <Email, Set of Indexes it belongs in accounts>
Now do a DFS based on the indexes 

Note that C# sort does not sort per ascii ordering. Hence had to use a small custom sort logic.

# Complexity
- Time complexity:
O(nlogn) -> due to sorting

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public IList<IList<string>> AccountsMerge(IList<IList<string>> accounts) {
        Dictionary<string, HashSet<int>> emailToIndex = new Dictionary<string, HashSet<int>>();
        for(int i = 0;i<accounts.Count;i++)
        {
            for(int j = 1;j<accounts[i].Count;j++)
            {
                if(emailToIndex.ContainsKey(accounts[i][j]))
                {
                    emailToIndex[accounts[i][j]].Add(i);
                }
                else
                {
                    emailToIndex[accounts[i][j]] = new HashSet<int>(){i};
                }
            }
        }

        IList<IList<string>> res = new List<IList<string>>();
        HashSet<string> visited = new HashSet<string>();
        List<string> temp = new List<string>();
        foreach(KeyValuePair<string, HashSet<int>> kvp in emailToIndex)
        {
            string email = kvp.Key;
            HashSet<int> indexes = kvp.Value;
            if(!visited.Contains(email))
            {
                temp = new List<string>();
                visited.Add(email);
                temp.Add(email);
                dfs(email, emailToIndex, visited, temp, accounts);
                List<string> sortedRes = new List<string>(){accounts[indexes.First()][0]};
                temp.Sort(new SortComparer());
                sortedRes.AddRange(temp);
                res.Add(sortedRes);
            }
        }
        return res;
    }

    private void dfs(string email, Dictionary<string, HashSet<int>> emailToIndex, HashSet<string> visited, List<string> temp, IList<IList<string>> accounts)
    {
        foreach(int i in emailToIndex[email])
        {
            for(int j = 1; j< accounts[i].Count;j++)
            {
                if(!visited.Contains(accounts[i][j]))
                {
                    visited.Add(accounts[i][j]);
                    temp.Add(accounts[i][j]);
                    dfs(accounts[i][j], emailToIndex, visited, temp, accounts);
                }
            }
        }
    }
}

class SortComparer : IComparer<string>
{
    public int Compare(string a, string b)
    {
        return String.CompareOrdinal(a, b);
    }
}
```