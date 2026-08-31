# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/3772110/](https://leetcode.com/problems/alphabet-board-path/solutions/3772110/)

---

# Code
```
public class Solution {
    public string AlphabetBoardPath(string target) {
        var currPos = (0, 0);
        var res = new StringBuilder();
        var map = new Dictionary<char, (int, int)> {
            { 'a', (0, 0) }, { 'b', (0, 1) }, { 'c', (0, 2) }, { 'd', (0, 3) }, { 'e', (0, 4) },
            { 'f', (1, 0) }, { 'g', (1, 1) }, { 'h', (1, 2) }, { 'i', (1, 3) }, { 'j', (1, 4) },
            { 'k', (2, 0) }, { 'l', (2, 1) }, { 'm', (2, 2) }, { 'n', (2, 3) }, { 'o', (2, 4) },
            { 'p', (3, 0) }, { 'q', (3, 1) }, { 'r', (3, 2) }, { 's', (3, 3) }, { 't', (3, 4) },
            { 'u', (4, 0) }, { 'v', (4, 1) }, { 'w', (4, 2) }, { 'x', (4, 3) }, { 'y', (4, 4) },
            { 'z', (5, 0) }
        };

        foreach (var chr in target) {
            var x = map[chr].Item1 - currPos.Item1;
            var y = map[chr].Item2 - currPos.Item2;

            var first = x < 0 ? 'U' : 'D';
            var second = y < 0 ? 'L' : 'R';

            if (chr == 'z') {
                Print(res, Math.Abs(y), second);
                Print(res, Math.Abs(x), first);
            }
            else {
                Print(res, Math.Abs(x), first);
                Print(res, Math.Abs(y), second);
            }
            

            res.Append('!');
            currPos = (map[chr].Item1, map[chr].Item2);
        }

        return res.ToString();
    }

    private static void Print(StringBuilder res, int num, char chr) {
        for (int idx = 0; idx < num; idx++)
            res.Append(chr);
    }
}
```