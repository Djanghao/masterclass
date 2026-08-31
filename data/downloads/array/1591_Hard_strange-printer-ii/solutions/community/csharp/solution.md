# strange-printer-ii- C# Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/5946348/](https://leetcode.com/problems/strange-printer-ii/solutions/5946348/)

---


# Code
```csharp []
public class Solution {
    public bool IsPrintable(int[][] targetGrid) {
        var colorDict = new Dictionary<int, Rectangle>();
        for(int i=0; i<targetGrid.Length; i++)
            for(int j=0; j<targetGrid[0].Length; j++)
            {
                var color = targetGrid[i][j];
                if(!colorDict.ContainsKey(color))
                    colorDict[color] = new Rectangle();
                colorDict[color].XS = Math.Min(colorDict[color].XS, i);
                colorDict[color].XE = Math.Max(colorDict[color].XE, i);
                colorDict[color].YS = Math.Min(colorDict[color].YS, j);
                colorDict[color].YE = Math.Max(colorDict[color].YE, j);
            }
        
        var al = new List<int>[colorDict.Keys.Max() + 1];
        var stat = new int[al.Length];
        foreach(var color in colorDict.Keys)
            al[color] = new List<int>();

        foreach(var color in colorDict.Keys)
        {
            var rect = colorDict[color];
            for(int i = rect.XS; i <= rect.XE; i++)
                for(int j = rect.YS; j <= rect.YE; j++)
                    if(targetGrid[i][j] != color)
                        al[color].Add(targetGrid[i][j]);
        }

        foreach(var color in colorDict.Keys)
            if(!TopologicalSort(color, al, stat)) return false;

        return true;
    }

    public bool TopologicalSort(int color, List<int>[] al, int[] stat)
    {
        if(stat[color] != 0) return stat[color] == 2;
        stat[color] = 1;

        foreach(var childColor in al[color])
            if(!TopologicalSort(childColor, al, stat)) return false;

        stat[color] = 2;
        return true;
    }
}

public class Rectangle{
    public int XS = int.MaxValue;
    public int XE = int.MinValue;
    public int YS = int.MaxValue;
    public int YE = int.MinValue;
}
```