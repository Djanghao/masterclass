# C# with Enumerator

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/5764877/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/5764877/)

---

```csharp
public class Solution : Reader4
{
    IEnumerator<char> enumerator;

    public int Read(char[] buf, int n)
    {
        var counter = 0;
        enumerator ??= ReadInternal().GetEnumerator();

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