# C# two iterators solution

**Author:** dwluciano
**Votes:** 1
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/2351211/](https://leetcode.com/problems/flatten-2d-vector/solutions/2351211/)

---


```
public class Vector2D
{
    private readonly IEnumerator<int[]> outer;
    private IEnumerator<int>? inner = null;
    private bool hasNext = false;

    public Vector2D(int[][] vec)
    {
        if (vec is null) return;
        outer = vec.AsEnumerable().GetEnumerator();
        Advance();
    }

    public int Next()
    {
        if (!HasNext())
            throw new InvalidOperationException("Iterator has not more elements");
        var element = inner.Current;
        Advance();
        return element;
    }

    public bool HasNext() => inner != null && hasNext;
	
	private void Advance()
    {
        hasNext = false;
        if (inner != null && inner.MoveNext())
        {
            hasNext = true;
            return;
        }

        while (outer.MoveNext())
        {
            inner = outer.Current.AsEnumerable().GetEnumerator();
            if (inner.MoveNext())
            {
                hasNext = true;
                return;
            }
        }
    }
}
```