# Two concise O(n) solutions - with and without LINQ

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1865252/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1865252/)

---

With almost no LINQ:
```csharp
public int MinDominoRotations(int[] tops, int[] bottoms)
{
    // Pass 1: Count domino values and get the most frequent domino value
    var freq = new int[7];
    for (int i = 0; i < tops.Length; i++)
    {          
        freq[tops[i]]++;
        freq[bottoms[i]]++;
    }        
    var x = Array.IndexOf(freq, freq.Max());
    
	// Pass 2: Check whether the desired arrangement is possible and if so, count how many rotations are needed
    var rotationsTop = 0;
    var rotationsBottom = 0;
    for (int i = 0; i < tops.Length; i++)
    {
        if (tops[i] != x && bottoms[i] != x) return -1;
        if (tops[i] != x) rotationsTop++;
        if (bottoms[i] != x) rotationsBottom++;
    }
    
    return Math.Min(rotationsTop, rotationsBottom);
}
```

With some LINQ:
```csharp
public int MinDominoRotations(int[] tops, int[] bottoms)
{
	// Pass 1: Get the most frequent domino value ("mode")
    var x = tops.Concat(bottoms)
        .GroupBy(v => v)
        .OrderBy(g => -g.Count())
        .Select(g => g.Key)
        .First();
    
	// Pass 2: Check whether the desired arrangement is possible and if so, count how many rotations are needed
    var rotationsTop = 0;
    var rotationsBottom = 0;
    for (int i = 0; i < tops.Length; i++)
    {
        if (tops[i] != x && bottoms[i] != x) return -1;
        if (tops[i] != x) rotationsTop++;
        if (bottoms[i] != x) rotationsBottom++;
    }
    
    return Math.Min(rotationsTop, rotationsBottom);
}
```