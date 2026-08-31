# С# Array.Sort

**Author:** far23e
**Votes:** 9
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/3152874/](https://leetcode.com/problems/sort-the-people/solutions/3152874/)

---



# Code
```
public class Solution {
    public string[] SortPeople(string[] names, int[] heights) 
    {
        Array.Sort(heights, names); 
        var name = names.ToList<string>();
        name.Reverse();
        return name.ToArray();
    }
}
```