# C# Easy Solution

**Author:** Rysev_Dmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/4656462/](https://leetcode.com/problems/high-access-employees/solutions/4656462/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public IList<string> FindHighAccessEmployees(IList<IList<string>> access_times) {
        Dictionary<string, List<int>> accessHash = 
            BuildAccessDictionary(access_times.OrderBy(k => k[1]));
        List<string> result = new();

        foreach (string keyName in accessHash.Keys) {
            if (IsHighAccessEmployee(accessHash[keyName])) {
                result.Add(keyName);
            }
        }

        return result;
    }

    private Dictionary<string, List<int>> BuildAccessDictionary(
        IEnumerable<IList<string>> accessTimes
    ) {
        Dictionary<string, List<int>> accessHash = new();
        foreach (IList<string> employee in accessTimes) {
            string keyName = employee[0];
            if (!accessHash.ContainsKey(keyName)) {
                accessHash.Add(keyName, new());
            }
            accessHash[keyName].Add(int.Parse(employee[1]));
        }

        return accessHash;
    }

    private bool IsHighAccessEmployee(IList<int> accesses) {
        int maxTimeDifference = 100;
        for (int i = 2; i < accesses.Count; i++) {
            if (accesses[i] - accesses[i - 2] < maxTimeDifference) {
                return true;
            }
        }
        return false;
    }
}
```