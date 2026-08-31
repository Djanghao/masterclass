# C# BFS solution (shortest path)

**Author:** BrutalReviewer
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5875878/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5875878/)

---

# Code

```csharp []
public class Solution
{
  public int[][] ConstructGridLayout(int n, int[][] edges)
  {
    var g = new List<int>[n];
    for (var i = 0; i < n; i++)
      g[i] = [];
    foreach (var e in edges)
    {
      g[e[0]].Add(e[1]);
      g[e[1]].Add(e[0]);
    }

    var oneConnected = Enumerable.Range(0, n).Where(x => g[x].Count == 1).ToArray();
    if (oneConnected.Length == 2) // Simple 1-row matrix
      return [ShortestPath(g, oneConnected[0], oneConnected[1])];

    // Find the corners and size of the matrix
    // A...B
    // .....
    // D...C
    var twoConnected = Enumerable.Range(0, n).Where(x => g[x].Count == 2).ToArray();
    var ab = ShortestPath(g, twoConnected[0], twoConnected[1]);
    var ac = ShortestPath(g, twoConnected[0], twoConnected[2]);
    var ad = ShortestPath(g, twoConnected[0], twoConnected[3]);
    if (ab.Length > ac.Length && ab.Length > ad.Length)
      ab = ac;
    else if (ad.Length > ab.Length && ad.Length > ac.Length)
      ad = ac;

    var w = ab.Length;
    var h = ad.Length;
    var result = new int[h][];
    for (var i = 0; i < h; i++)
      result[i] = new int[w];

    // Build the first row and the first column
    for (var i = 0; i < w; i++)
      result[0][i] = ab[i];
    for (var i = 0; i < h; i++)
      result[i][0] = ad[i];

    // Complete the matrix
    for (var i = 1; i < h; i++)
    {
      for (var j = 1; j < w; j++)
      {
        result[i][j] = g[result[i - 1][j]]
          .Intersect(g[result[i][j - 1]])
          .Except([result[i - 1][j - 1]])
          .First();
      }
    }

    return result;
  }

  private int[] ShortestPath(List<int>[] g, int from, int to)
  {
    var visited = new HashSet<int>();
    var prev = new Dictionary<int, int> { [from] = -1 };
    var q = new Queue<int>();
    q.Enqueue(from);
    visited.Add(from);
    while (q.Count > 0)
    {
      var v = q.Dequeue();
      foreach (var next in g[v])
      {
        if (!visited.Add(next))
          continue;
        prev[next] = v;
        if (next == to)
        {
          var path = new Stack<int>();
          while (prev[to] != -1)
          {
            path.Push(to);
            to = prev[to];
          }
          path.Push(from);
          return path.ToArray();
        }
        q.Enqueue(next);
      }
    }
    return [];
  }
}

```