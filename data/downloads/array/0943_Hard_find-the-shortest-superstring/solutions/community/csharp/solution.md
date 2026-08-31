# C# DP

**Author:** everest911119
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/5990852/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/5990852/)

---

# Intuition
DP

# Approach
dp[mask][i] := min distance to visit nodes (represented as a binary state s) once and only once and the path ends with node i.

# Complexity
- Time complexity:
O(n^2*2^n)

- Space complexity:
O(n*2^n)

# Code
```csharp []
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
public class Solution {
    public string ShortestSuperstring(string[] words) {
        int n = words.Length;
int[,] graph = new int[n, n];
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        graph[i, j] = words[j].Length;
        
        for (int k = 1; k <= Math.Min(words[i].Length, words[j].Length); k++)
        {
            if (words[j].Substring(0, k) == words[i].Substring(words[i].Length - k))
            {
                graph[i, j] = words[j].Length - k;
            }
        }
    }
}

// path and last index get minlength
int[,] dp = new int[1 << n, n];
var data = MemoryMarshal.CreateSpan(ref Unsafe.As<byte, int>(ref MemoryMarshal.GetArrayDataReference(dp)), dp.Length);
data.Fill(21 * 13);
// path and last index with minLength get next last index
int[,] paths = new int[1 << n, n];
var data2 = MemoryMarshal.CreateSpan(ref Unsafe.As<byte, int>(ref MemoryMarshal.GetArrayDataReference(paths)), paths.Length);
data2.Fill(-1);
for (int i = 0; i < n; i++)
{
    dp[1 << i, i] = words[i].Length;
}
for (int mask = 0; mask < (1 << n); mask++)
{
    for (int i = 0; i < n; i++)
    {
        // mask not include i n
        if ((mask & (1 << i)) == 0) continue;
        int prev = mask ^ (1 << i);
        for (int j = 0; j < n; j++)
        {
            // prev mask not include j
            if ((prev & (1 << j)) == 0) continue;
            if (dp[prev, j] + graph[j, i] < dp[mask, i])
            {
                dp[mask, i] = dp[prev, j] + graph[j, i];
                paths[mask, i] = j;
            }
        }
    }
   
    

}
int minLength = int.MaxValue;
int currentIndex = -1;
for (int i = 0; (i < n); i++)
{
    if (dp[(1 << n) - 1, i] < minLength)
    {
        minLength = Math.Min(minLength, dp[(1 << n) - 1, i]);
        currentIndex = i;
    }

}
string ans = "";
int path = (1 << n) - 1;
while (path > 0)
{
    int prev = paths[path,currentIndex];
    if (prev >= 0)
    {
        ans = words[currentIndex].Substring(words[currentIndex].Length - graph[prev, currentIndex]) + ans;
    }else
    {
        ans = words[currentIndex]+ ans;
    }
    path = path^(1<<currentIndex);
    currentIndex= prev;

}
return ans;
    }
}
```