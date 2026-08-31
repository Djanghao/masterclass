# C# using array

**Author:** Dmitriy-Maksimov
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/3636939/](https://leetcode.com/problems/design-an-ordered-stream/solutions/3636939/)

---

# Code
```
public class OrderedStream
{
    private readonly string?[] _data;
    private int _ptr;

    public OrderedStream(int n)
    {
        _data = new string[n + 1];
        _ptr = 1;
    }

    public IList<string> Insert(int idKey, string value)
    {
        _data[idKey] = value;
        var res = new List<string>();
        for (var i = _ptr; i < _data.Length; i++)
        {
            if (_data[i] != null)
            {
                res.Add(_data[i]!);
            }
            else
            {
                _ptr = i;
                break;
            }
        }

        return res;
    }
}

```