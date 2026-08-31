# C# Simple BFS

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/web-crawler/solutions/3347458/](https://leetcode.com/problems/web-crawler/solutions/3347458/)

---

```
class Solution
{
    public IList<string> Crawl(string startUrl, HtmlParser htmlParser)
    {
        var result = new HashSet<string>();
        var nextUrls = new Queue<string>();
        var hostname = GetHostName(startUrl);

        result.Add(startUrl);
        nextUrls.Enqueue(startUrl);

        while (nextUrls.TryDequeue(out var nextUrl))
        {
            foreach (var url in htmlParser.GetUrls(nextUrl))
            {
                if (GetHostName(url) == hostname && result.Add(url))
                {
                    nextUrls.Enqueue(url);
                }
            }
        }

        return result.ToList();
    }

    private string GetHostName(string url) => new Uri(url).Host;
}
```