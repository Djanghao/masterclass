# Sorting, Hash Table, O(n^2)

**Author:** Igor0
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449619/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449619/)

---

# Intuition
Create 2 sets of all the differences for horizontal and vertical bars.

# Approach
Create a sorted list for of all the differences for horizontal bars and a set of all the differences for vertical bars:
```
var set0 = CreateSet2(m, hFences);
var list = new List<int>(set0);
list.Sort();
var set1 = CreateSet2(n, vFences);
```
Then go through the list and if there is the same item in the set, take it as a side of square:
```
var side = 0;
for(int i = list.Count - 1; i >= 0; i--)
{
    if (set1.Contains(list[i]))
    {
        side = list[i];
        break;
    }
}
```
Finally return the result:
```
if (side == 0) return -1;
long sq = side * (long)side;
var rs = (int)(sq % 1_000_000_007);
return rs;
```

# Complexity
- Time complexity:
$$O(n^2)$$, where n is the the 2 + Max(len(hFences), len(vFences))

- Space complexity:
$$O(n^2)$$, where n is the the 2 + Max(len(hFences), len(vFences))

# Code
```
public class Solution {
    public int MaximizeSquareArea(int m, int n, int[] hFences, int[] vFences) {
        var set0 = CreateSet2(m, hFences);
        var list = new List<int>(set0);
        list.Sort();
        var set1 = CreateSet2(n, vFences);
        var side = 0;
        for(int i = list.Count - 1; i >= 0; i--)
        {
            if (set1.Contains(list[i]))
            {
                side = list[i];
                break;
            }
        }
        if (side == 0) return -1;
        long sq = side * (long)side;
        var rs = (int)(sq % 1_000_000_007);
        return rs;
    }
    private HashSet<int> CreateSet2(int k, int[] arr)
    {
        var list = new List<int>(arr);
        list.Add(1);
        list.Add(k);
        list.Sort();
        var set = new HashSet<int>();
        for (int i = 0; i < list.Count - 1; i++)
        {
            for (int j = i + 1; j < list.Count; j++)
            {
                set.Add(list[j] - list[i]);
            }
        }
        return set;
    }
}
```