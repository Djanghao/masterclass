# Scala bruteforce.

**Author:** lynnlu
**Votes:** 0
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2905743/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2905743/)

---

# Intuition
No point in intuition with such a convoluted problem and small input.

# Approach
1. Group entries by username; sort the resulting grouped values ascendingly.
2. Generate all 3-size subarrays (aka Patterns) from each user's visited websites. (if the 3 wouldn't be hardcoded, you'd normally do this with backtracking, but in this case 3 nested for loops will do the trick). Remove duplicates.
3. Flatten all the resulting patterns, and group them by the identity function.
4. Define on the resulting map a custom ordering.


# Complexity
- Time complexity: around i believe O(n^3)

# Code
```
import WebsiteVisitsPatternAnalyzer._

object Solution {
    def mostVisitedPattern(username: Array[String], timestamp: Array[Int], website: Array[String]): List[String] = {
        val visits = username.indices.map(idx => Visit(username(idx), website(idx), timestamp(idx)))
        new WebsiteVisitsPatternAnalyzer().computeMaxScorePattern(visits).toList
    }
}

object WebsiteVisitsPatternAnalyzer {
    type WebsiteName = String
    type UserName = String
    type Timestamp = Int
    type Count = Int

    private implicit val PatternOrdering: Ordering[(Pattern, Count)] = Ordering.by { case (pattern, count) => (-count, pattern.toString) }

    case class Visit(userName: UserName, websiteName: WebsiteName, timestamp: Timestamp)
    case class Pattern(w1: WebsiteName, w2: WebsiteName, w3: WebsiteName) {
        def toList(): List[String] = List(w1, w2, w3)
    }
}

class WebsiteVisitsPatternAnalyzer() {

    def computeMaxScorePattern(visits: Seq[Visit]): Pattern = {
        val patterns = visits.groupBy(_.userName).values.map(_.sortWith(_.timestamp < _.timestamp)).map(generateUniqueUserPatterns).flatten
        val groupedPatterns: Map[Pattern, Count] = patterns.groupBy(identity).mapValues(_.size).toMap
        groupedPatterns.min._1
    }

    private def generateUniqueUserPatterns(websiteVisits: Seq[Visit]): Set[Pattern] = {
        val n = websiteVisits.size
        (for {
            i <- 0 until n - 2
            j <- i + 1 until n - 1
            k <- j + 1 until n
        } yield {
            Pattern(websiteVisits(i).websiteName, websiteVisits(j).websiteName, websiteVisits(k).websiteName)
        }).toSet
    }
}
```