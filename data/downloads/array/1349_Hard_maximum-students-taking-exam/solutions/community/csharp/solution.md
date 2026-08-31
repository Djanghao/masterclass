# Top-down Dynamic Programming with State Compression to the rescue!

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/4936936/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/4936936/)

---

Initially I used regular Top-down DP, storing current state inside ulong variable, but it used too much memory.

Main insight for optimizing this approach is that row being processed currently is affected only by row above. So when processing goes to row X + 2, row X can be compressed - only it's score is important, row itself can be discarded.

# Code
```
public class Solution 
{    
    public int MaxStudents(char[][] seats) 
    {
        var cache = new Dictionary<(int, int, byte, byte), int>();
        var maxRow = seats.Length - 1;
        var maxColumn = seats[0].Length - 1;
        return Impl(0, 0, 0, 0);
        
        int Impl(int r, int c, byte previous, byte current)
        {
            if (r > maxRow) return BitOperations.PopCount(previous);
            
            var cacheKey = (r, c, previous, current);
            if (cache.TryGetValue(cacheKey, out var cr)) return cr;
            
            var result = (c < maxColumn) 
                ? Impl(r, c + 1, previous, current) 
                : Impl(r + 1, 0, current, 0) + BitOperations.PopCount(previous);
            
            if (seats[r][c] == '.' && CheckIfAvailable(c, previous, current))
            {
                current = SetBit(c, current);
                result = Math.Max(result, (c < maxColumn) 
                  ? Impl(r, c + 1, previous, current) 
                  : Impl(r + 1, 0, current, 0) + BitOperations.PopCount(previous));
            }
            
            cache.Add(cacheKey, result);

            return result;
        }
        
        byte SetBit(int c, byte state) => (byte)(state | (1 << c));
        
        bool CheckIfAvailable(int c, byte previous, byte current)
        {
            return CheckBitZero(c - 1, previous) && 
                   CheckBitZero(c + 1, previous) && 
                   CheckBitZero(c - 1, current) && 
                   CheckBitZero(c + 1, current);
        }
        
        bool CheckBitZero(int c, byte state)
        {
            if (c < 0 || c > maxColumn) return true;
            return (state & (1 << c)) == 0;
        }
    }
}
```