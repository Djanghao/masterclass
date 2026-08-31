# C# DFS

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/5413023/](https://leetcode.com/problems/synonymous-sentences/solutions/5413023/)

---

# Code
```
public class Solution {
    public IList<string> GenerateSentences(IList<IList<string>> synonyms, string text)
    {
        var set = new HashSet<string>();
        var queue = new Queue<string>();
        queue.Enqueue(text);
        while (queue.Count > 0)
        {
            var size = queue.Count;
            for (var i = 0; i < size; ++i)
            {
                text = queue.Dequeue();
                set.Add(text);
                foreach (var pair in synonyms)
                {
                    foreach (var next in Produce(pair[0], pair[1], text)) if (!set.Contains(next)) queue.Enqueue(next);
                }
            }
        }
        //var orders = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var res = set.ToList();
        res.Sort(delegate(string x, string y)
        {
            if (x == y) return 0;
            if (x.StartsWith(y)) return 1;
            if (y.StartsWith(x)) return -1;
            var len = Math.Min(x.Length, y.Length);
            for (var i = 0; i < len; ++i)
            {
                if (x[i] == y[i]) continue;
                return x[i] - y[i];
            }
            return 0;
        });
        //var res = set.OrderByDescending(w => w.Length).ThenBy(w => w).ToList();
        //res.ForEach(Console.WriteLine);
        return res;
    }

    private IEnumerable<string> Produce(string w1, string w2, string text)
    {
        var words = text.Split(" ");
        var len = words.Length;
        for (var i = 0; i < len; ++i)
        {
            var w = words[i];
            if (w == w1)
            {
                words[i] = w2;
                yield return string.Join(' ', words);
            }
            else if (w == w2)
            {
                words[i] = w1;
                yield return string.Join(' ', words);
            }
            words[i] = w;
        }
    }
}
```