# JavaScript DFS & BFS solutions

**Author:** ChaoWan_2021
**Votes:** 4
**Link:** [https://leetcode.com/problems/web-crawler/solutions/700623/](https://leetcode.com/problems/web-crawler/solutions/700623/)

---

DFS solution:
```
var crawl = function(startUrl, htmlParser) {
    const getHostname = url => url.split("/")[2], hostName = getHostname(startUrl);
    const dfs = (urlList, seen) => {
        for(const url of urlList) {
            if(!seen.has(url) && url.includes(hostName)) {
                seen.add(url);
                dfs(htmlParser.getUrls(url), seen);
            }
        }
        return [...seen.values()];
    }
    return dfs(htmlParser.getUrls(startUrl), new Set([startUrl]));
};
```

BFS solution:
```
var crawl = function(startUrl, htmlParser) {
    const getHostname = url => url.split("/")[2],
          hostName = getHostname(startUrl),
          queue = [startUrl],
          seen = new Set([startUrl]);
    while(queue.length) {
        const curr = queue.shift();
        for(const url of htmlParser.getUrls(curr)) {
            if(!seen.has(url) && getHostname(url).includes(hostName)) {
                seen.add(url);
                queue.push(url);
            }
        }
    }
    return [...seen.values()];
};
```