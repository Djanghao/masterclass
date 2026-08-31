# Implementation Using C#

**Author:** keperkjr
**Votes:** 11
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2828763/](https://leetcode.com/problems/erect-the-fence/solutions/2828763/)

---

```
public class Solution {
    public int[][] OuterTrees(int[][] trees) {
        if (trees.Length <= 1) {
            return trees;
        }
        int[] bm = BottomLeft(trees);
        Array.Sort(trees, (int[] p, int[] q) => {
            double diff = Orientation(bm, p, q) - Orientation(bm, q, p);
            if (diff == 0) {
                return Distance(bm, p) - Distance(bm, q);
            } else {
                return diff > 0 ? 1 : -1;
            }
        });
        int i = trees.Length - 1;
        while (i >= 0 && Orientation(bm, trees[trees.Length - 1], trees[i]) == 0) {
            i--;
        }
        for (int l = i + 1, h = trees.Length - 1; l < h; l++, h--) {
            int[] temp = trees[l];
            trees[l] = trees[h];
            trees[h] = temp;
        }
        var stack = new Stack<int[]>();
        stack.Push(trees[0]);
        stack.Push(trees[1]);
        for (int j = 2; j < trees.Length; j++) {
            int[] top = stack.Pop();
            while (Orientation(stack.Peek(), top, trees[j]) > 0) {
                top = stack.Pop();
            }
            stack.Push(top);
            stack.Push(trees[j]);
        }
        var result = new List<int[]>();
        while (stack.Count > 0) {
            result.Add(stack.Pop());
        }
        return result.ToArray();        
    }

    public int Orientation(int[] p, int[] q, int[] r) {
        return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
    }
    public int Distance(int[] p, int[] q) {
        return (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
    }

    private static int[] BottomLeft(int[][] trees) {
        int[] bottomLeft = trees[0];
        foreach (int[] p in trees) {
            if (p[1] < bottomLeft[1]) {
                bottomLeft = p;
            }
        }
        return bottomLeft;
    }
      
}
```