# C#, O(n^2) solution using sorting and insertion

**Author:** edevyatkin
**Votes:** 5
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/673714/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/673714/)

---

```
public class Solution {
    public int[][] ReconstructQueue(int[][] people) {
        int len = people.Length;
        List<int[]> sorted = people.OrderByDescending(x => x[0]).ThenBy(x => x[1]).ToList();
        List<int[]> result = new List<int[]>(len);
        foreach (int[] arr in sorted)
            result.Insert(arr[1], arr);
        return result.ToArray();        
    }
}
```