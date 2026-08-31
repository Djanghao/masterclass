# Scala fp ?

**Author:** Artemius77
**Votes:** 0
**Link:** [https://leetcode.com/problems/web-crawler/solutions/3339608/](https://leetcode.com/problems/web-crawler/solutions/3339608/)

---


# Code
```

import scala.collection.mutable

object Solution {
  def crawl(startUrl: String, htmlParser: HtmlParser): Array[String] = {

    val visited = new mutable.HashSet[String]()

    val startingHost = getHost(startUrl)

    def dfs(start: String) : List[String] = {
      val host = getHost(start)

      if (visited.contains(start) || host != startingHost) List.empty
      else {
        
        visited.add(start)

        val result = htmlParser.getUrls(start).foldLeft(List[String]()) { case (list, urlToParse) =>
          list ++ dfs(urlToParse)
        }

        if (host == startingHost) start :: result else result
      }
    }

    dfs(startUrl).toArray
  }

  def getHost(url: String) : String = {
    val host = url.drop(7)

    if (host.indexOf("/") == -1) host
    else host.substring(0, host.indexOf("/"))
  }
}
```