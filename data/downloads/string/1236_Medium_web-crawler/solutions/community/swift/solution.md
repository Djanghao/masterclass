# Swift

**Author:** barcis
**Votes:** 0
**Link:** [https://leetcode.com/problems/web-crawler/solutions/3175465/](https://leetcode.com/problems/web-crawler/solutions/3175465/)

---

# Code
```
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * public class HtmlParser {
 *     public func getUrls(_ url: String) -> [String] {}
 * }
 */

class Solution {   

    var visited: Set<String> = []

    func crawl(_ startUrl: String, _ htmlParser: HtmlParser) -> [String] {

        let urlWithoutProtocol = startUrl.dropFirst("http://".count)
        let components = urlWithoutProtocol.components(separatedBy: "/")
        let base = components[0]

        //print(base)
        dfs(base, startUrl, htmlParser)

        return Array(visited)
        
    }

    func dfs(_ base: String, _ startUrl: String, _ htmlParser: HtmlParser) {

        visited.insert(startUrl)

         let childs = htmlParser.getUrls(startUrl) 

        for child in childs {
            if !visited.contains(child) && isTheSameHostName(base, child) {
                dfs(base, child, htmlParser)
            }
        }
    }

    func isTheSameHostName(_ base: String, _ string: String) -> Bool {

        // http://news.yahoo.com
        // hostname = news.yahoo.com

        let urlWithoutProtocol = string.dropFirst("http://".count)
        let components = urlWithoutProtocol.components(separatedBy: "/")
        let hostname = components[0]

        return base == hostname


        
    }
}
```