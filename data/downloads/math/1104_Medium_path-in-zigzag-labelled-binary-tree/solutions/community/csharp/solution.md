# Simple c# solution faster than 87 %, less memory than 100%

**Author:** jfosso25
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/1499546/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/1499546/)

---

public class Solution {
    public IList<int> PathInZigZagTree(int label) {
        int left =0;
        int right = 1;
        while(right <= label)
            right <<=1;
        (left, right ) = (right >>1, right-1);
        List<int> result = new List<int>();
        while(label != 1)
        {
            result.Add(label);
            label = (left+right-label)>>1;
            (left, right) = (left>>1, left -1);
        };
        result.Add(1);
        result.Reverse();
        return result;
    }
}