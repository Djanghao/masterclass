# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5337238/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5337238/)

---

```csharp
public class Solution
{
    public IList<int> BeautifulIndices(string s, string a, string b, int k)
    {
        var indices_i = FindIndices(s, a);
        var indices_j = FindIndices(s, b);

        indices_i.RemoveAll(i =>
        {
            var start = indices_j.BinarySearch(i - k);
            var end = indices_j.BinarySearch(i + k);
            start = start < 0 ? ~start : start;
            end = Math.Abs(end + 1);
            return start == end;
        });

        return indices_i;
    }

    public List<int> FindIndices(string s, string v)
    {
        var index = -1;
        var indices = new List<int>();

        while ((index = s.IndexOf(v, index + 1)) >= 0)
            indices.Add(index);

        return indices;
    }
}
```