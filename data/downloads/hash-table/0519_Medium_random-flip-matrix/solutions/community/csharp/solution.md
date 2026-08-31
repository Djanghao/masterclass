# C# easy solution

**Author:** kpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/4774418/](https://leetcode.com/problems/random-flip-matrix/solutions/4774418/)

---

# Code
```
public class Solution
{
    private readonly int _m;
    private readonly int _n;
    private Dictionary<int, int> _d;

    private int _count;

    public Solution(int m, int n)
    {
        _m = m;
        _n = n;
        Reset();
    }

    public int[] Flip()
    {
        var rand = Random.Shared.Next(_count);

        int[] res;

        if (_d.TryGetValue(rand, out var value))
        {
            res = [ value % _m, value / _m ];
        }
        else
        {
            res = [ rand % _m, rand / _m ];
        }

        _count--;

        if (_d.TryGetValue(_count, out int valueM))
        {
            _d[rand] = valueM;
        }
        else
        {
            _d[rand] = _count;
        }

        return res;
    }

    public void Reset()
    {
        _count = _m * _n;
        _d = new();
    }
}
```