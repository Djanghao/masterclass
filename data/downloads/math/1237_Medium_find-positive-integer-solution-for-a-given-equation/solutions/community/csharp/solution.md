# C#, O(n*log(n)) solution using binary search

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/551237/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/551237/)

---

```
public class Solution {
    public IList<IList<int>> FindSolution(CustomFunction customfunction, int z) {
        var result = new List<IList<int>>();
        for (int x = 1; x <= 1000; x++) {
            int y1 = 1;
            int y2 = 1000;
            while (y1 <= y2) {
                int mid = y1 + (y2-y1) / 2;
                int nz = customfunction.f(x, mid);
                if (nz > z) {
                    y2 = mid - 1;
                }
                else if (nz < z) {
                    y1 = mid + 1;
                }
                else {
                    result.Add(new int[] { x, mid });
                    break;
                }
            }
        }
        return result;
    }
}
```