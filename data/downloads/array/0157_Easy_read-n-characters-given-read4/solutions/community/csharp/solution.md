# C# with Enumerator

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/5760718/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/5760718/)

---

```csharp
public class Solution : Reader4
{
    public int Read(char[] buf, int n)
    {
        var counter = 0;
        var enumerator = ReadInternal().GetEnumerator();

        while (n --> 0 && enumerator.MoveNext())
            buf[counter++] = enumerator.Current;

        return counter;

        IEnumerable<char> ReadInternal()
        {
            var buf4 = new char[4];

            while (Read4(buf4) is int len && len > 0)
                for (var i = 0; i < len; i++)
                    yield return buf4[i];
        }
    }
}
```