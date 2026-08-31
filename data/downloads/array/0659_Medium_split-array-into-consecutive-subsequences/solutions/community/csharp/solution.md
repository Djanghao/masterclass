# Short greedy solution C# | PriorityQueue | Linq

**Author:** BrutalReviewer
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/6019819/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/6019819/)

---

# Complexity

- Time complexity: $$O(n \\cdot log(n))$$

# Code

```csharp []
public class Solution
{
  public bool IsPossible(int[] nums)
  {
    var d = Enumerable.Range(0, 2002).Select(_ => new PriorityQueue<int, int>()).ToArray();
    foreach (var num in nums)
    {
      // Find the minimum length of a sequence that ends with num - 1
      d[1001 + num - 1].TryDequeue(out var size, out _);
      // Add a new sequence that ends with num
      d[1001 + num].Enqueue(size + 1, size + 1);
    }
    // Check that all sequences are longer than 3
    return d.All(q => q.Count == 0 || q.Peek() >= 3);
  }
}


```