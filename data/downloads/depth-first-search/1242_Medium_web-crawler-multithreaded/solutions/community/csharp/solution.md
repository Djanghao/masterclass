# Fastest Solution

**Author:** robin1302
**Votes:** 2
**Link:** [https://leetcode.com/problems/web-crawler-multithreaded/solutions/4671275/](https://leetcode.com/problems/web-crawler-multithreaded/solutions/4671275/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * class HtmlParser {
 *     public List<String> GetUrls(String url) {}
 * }
 */
class Solution {
    public IList<string> Crawl(string startUrl, HtmlParser htmlParser) {
        ConcurrentDictionary<string, bool> dict = new ConcurrentDictionary<string, bool>();
        if (IsValidHost(GetHostName(startUrl)))
        {
            dict[startUrl] = true;
        }
        CrawlPage(startUrl, htmlParser, dict).Wait();
        return dict.Keys.ToList();
    }

    private async Task CrawlPage(string url, HtmlParser htmlParser, ConcurrentDictionary<string, bool> dict)
    {
        IList<String> crawledUrls = htmlParser.GetUrls(url);
        List<Task> tasks = new ();
        foreach(string c in crawledUrls)
        {
            if (!dict.ContainsKey(c) && GetHostName(url).Equals(GetHostName(c)) && IsValidHost(GetHostName(c)))
            {
                dict[c] = true;
                tasks.Add(Task.Run(async () => await CrawlPage(c, htmlParser, dict)));
            }
        }
        await Task.WhenAll(tasks);
    }

    private string GetHostName(string url)
    {
        string[] splits = url.Split("//");
        string second = splits[1];
        string[] ends = second.Split("/");
        return ends[0];
    }

    private bool IsValidHost(string hostName)
    {
        if (hostName.Length < 1 || hostName.Length > 63)
        {
            return false;
        }
        return Regex.IsMatch(hostName, @"[a-z0-9.][a-z0-9.-]*[a-z0-9.]$");
    }
}
```