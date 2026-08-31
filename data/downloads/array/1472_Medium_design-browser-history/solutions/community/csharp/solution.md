# Simple c# solution using List

**Author:** omar-kurtovic
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3311056/](https://leetcode.com/problems/design-browser-history/solutions/3311056/)

---



# Code
```
public class BrowserHistory
{
    List<string> urls;
    int currentPage;

    public BrowserHistory(string homepage)
    {
        urls = new List<string>();
        urls.Add(homepage);
        currentPage = 0;

    }

    public void Visit(string url)
    {
        if (currentPage == urls.Count - 1)
        {
            urls.Add(url);
            currentPage++;
            return;
        }
        int diff = urls.Count - 1 - currentPage;
        urls.RemoveRange(currentPage + 1, diff);
        urls.Add(url);
        currentPage++;
    }

    public string Back(int steps)
    {
        currentPage -= steps;

        if (currentPage < 0)
            currentPage = 0;

        return urls[currentPage];
    }

    public string Forward(int steps)
    {
        currentPage += steps;

        if (currentPage > urls.Count - 1)
            currentPage = urls.Count - 1;

        return urls[currentPage];

    }
}
```