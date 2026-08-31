# Chunked transfer encoding

**Author:** ashotmuradian
**Votes:** 1
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/5131842/](https://leetcode.com/problems/encode-and-decode-strings/solutions/5131842/)

---

```csharp
public class Codec {
    public string encode(IList<string> strs) {
        var str = new StringBuilder();
        foreach (var x in strs) {
            str.Append(x.Length);
            str.Append('|');
            str.Append(x);
        }
        return str.ToString();
    }

    public IList<string> decode(string s) {
        var list = new List<string>();
        var j = 0;
        while (j < s.Length) {
            var length = 0;
            while (j < s.Length && s[j] != '|') {
                length = length * 10 + s[j] - '0';
                j++;
            }
            j++;
            list.Add(s[j..(j + length)]);
            j += length;
        }
        return list;
    }
}
```

and a shorter version of `encode` method

```csharp
public class Codec {
    public string encode(IList<string> strs)
        => string.Join(string.Empty, strs.Select(x => $"{x.Length}|{x}"));

    public IList<string> decode(string s) {
        var list = new List<string>();
        var j = 0;
        while (j < s.Length) {
            var length = 0;
            while (j < s.Length && s[j] != '|') {
                length = length * 10 + s[j] - '0';
                j++;
            }
            j++;
            list.Add(s[j..(j + length)]);
            j += length;
        }
        return list;
    }
}
```