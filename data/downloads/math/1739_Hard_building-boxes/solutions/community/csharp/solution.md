# C#, simple straightforward solution

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/building-boxes/solutions/1032832/](https://leetcode.com/problems/building-boxes/solutions/1032832/)

---

```
public class Solution {
    public int MinimumBoxes(int n) {
        int x = 1;
        int boxes = 0;
        int max = 1;
        int toAdd = 1;
        while (x <= n) {
            if (toAdd < max) {
                x += toAdd;
                toAdd++;
                boxes++;
            }
            else {
                toAdd = 1;
                max++;
            }
        }
        return boxes;
    }
}
```