# List of Hits and Binary Search

**Author:** ashotmuradian
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/5549776/](https://leetcode.com/problems/design-hit-counter/solutions/5549776/)

---

```csharp
public class HitCounter {
    readonly List<int> hits = new();

    public void Hit(int timestamp)
        => hits.Add(timestamp);
    
    public int GetHits(int timestamp) {
        var x = timestamp - 300;
        var lo = 0;
        var hi = hits.Count - 1;
        while (lo <= hi) {
            var mid = lo + (hi - lo) / 2;
            if (hits[mid] <= x) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return hits.Count - lo;
    }
}

```