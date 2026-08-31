# Beats 100% | Easy To Understand Solution

**Author:** algorithms286
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/6017076/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/6017076/)

---



# Code
```csharp []
public class Solution {
    public int MaxHeight(int[][] cuboids) {
        int n = cuboids.Length;
        
        foreach (var cuboid in cuboids) {
            Array.Sort(cuboid);
        }
        
        var rotations = new int[,] {
            { 0, 1, 2 },  
            { 0, 2, 1 }, 
            { 1, 0, 2 },  
            { 1, 2, 0 },  
            { 2, 0, 1 },  
            { 2, 1, 0 }   
        };

        var cache = new int[101, 101, 101];
        for(int i = 0; i <= 100; i++)
            for(int j = 0; j <= 100; j++)
                for(int k = 0; k <= 100; k++)
                    cache[i,j,k] = -1;

        int maxHeight = 0;
        for (int i = 0; i < n; i++) {
            for (int r = 0; r < rotations.GetLength(0); r++) {
                int w = cuboids[i][rotations[r, 0]];
                int l = cuboids[i][rotations[r, 1]];
                int h = cuboids[i][rotations[r, 2]];
                var visited = new bool[n];
                visited[i] = true;
                maxHeight = Math.Max(maxHeight, h + Solver(0, w, l, h, visited));
            }
        }
        return maxHeight;

        int Solver(int index, int prevW, int prevL, int prevH, bool[] visited) {
            // Check cache
            if (cache[prevW, prevL, prevH] != -1) {
                return cache[prevW, prevL, prevH];
            }
            
            int currentMax = 0;
            
            for (int i = 0; i < n; i++) {
                if (!visited[i]) {
                    for (int r = 0; r < rotations.GetLength(0); r++) {
                        int w = cuboids[i][rotations[r, 0]];
                        int l = cuboids[i][rotations[r, 1]];
                        int h = cuboids[i][rotations[r, 2]];
                        
                        if (w <= prevW && l <= prevL && h <= prevH) {
                            visited[i] = true;
                            int nextHeight = h + Solver(index + 1, w, l, h, visited);
                            currentMax = Math.Max(currentMax, nextHeight);
                            visited[i] = false;
                        }
                    }
                }
            }
            
            cache[prevW, prevL, prevH] = currentMax;
            return currentMax;
        }
    }
}
```