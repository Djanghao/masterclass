# [Kotlin] Simple and concise DFS

**Author:** jeppeman
**Votes:** 0
**Link:** [https://leetcode.com/problems/web-crawler/solutions/3330176/](https://leetcode.com/problems/web-crawler/solutions/3330176/)

---

# Code
```
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * class HtmlParser {
 *     fun getUrls(url:String):List<String> {}
 * }
 */

fun Random() = Random(0L) // <-- Fixes compilation error

class Solution {
    private val visited = mutableSetOf<String>()
    
    fun crawl(startUrl:String, htmlParser:HtmlParser): List<String> {
        if (startUrl in visited) return emptyList()

        visited.add(startUrl)

        return listOf(startUrl) + htmlParser.getUrls(startUrl)
            .filter { it.hostname == startUrl.hostname }
            .flatMap { crawl(it, htmlParser) }
    }

    val String.hostname: String get() = split("http://")[1].split("/")[0]
}
```