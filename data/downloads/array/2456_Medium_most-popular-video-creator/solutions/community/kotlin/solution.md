# Kotlin O(nlogn) time complexity, O(n) space complexity, 100%

**Author:** vongochieu115
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/5906358/](https://leetcode.com/problems/most-popular-video-creator/solutions/5906358/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
data class CreatorInfo(
  val name: String,
  var mostViewedVideoId: String,
  var totalViews: Long,
  var maxViews: Long
)

fun mostPopularCreator(creators: Array<String>, ids: Array<String>, views: IntArray): List<List<String>> {
  // Using a TreeMap to maintain lexicographical order of creators
  val creatorMap = sortedMapOf<String, CreatorInfo>()
  var globalMaxViews = 0L

  for (i in creators.indices) {
    val creatorName = creators[i]
    val videoId = ids[i]
    val viewCount = views[i].toLong()

    if (creatorMap[creatorName] == null) {
      // If the creator is not present, add a new CreatorInfo
      creatorMap[creatorName] = CreatorInfo(creatorName, videoId, viewCount, viewCount)
    } else {
      val creatorInfo = creatorMap[creatorName]!!
      // Update the most viewed video if necessary
      if (viewCount > creatorInfo.maxViews || (viewCount == creatorInfo.maxViews && videoId < creatorInfo.mostViewedVideoId)) {
        creatorInfo.mostViewedVideoId = videoId
        creatorInfo.maxViews = viewCount
      }
      
      // Update the total views
      creatorInfo.totalViews += viewCount
    }

    // Update the global maximum total views
    globalMaxViews = maxOf(globalMaxViews, creatorMap[creatorName]!!.totalViews)
  }

  // Prepare the result list
  val result = mutableListOf<List<String>>()
  for ((_, creatorInfo) in creatorMap) {
    if (creatorInfo.totalViews == globalMaxViews) {
      result.add(listOf(creatorInfo.name, creatorInfo.mostViewedVideoId))
    }
  }

  return result
}

}
```