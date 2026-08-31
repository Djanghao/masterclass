# Swift. Beats 100%.

**Author:** Alexanderwsz
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/5459262/](https://leetcode.com/problems/most-popular-video-creator/solutions/5459262/)

---


# Code
```
class Solution {
    func mostPopularCreator(_ creators: [String], _ ids: [String], _ views: [Int]) -> [[String]] {
        var maxPopularity = 0
        var maxIndexes = [Int]()
        var creatorViews = [String: (Int, String)]() // creator: (mostViews, id)
        var result = [[String]]()
        guard !creators.isEmpty else { return result }
        guard creators.count != 1 else { return [creators + ids] }

        var countsMap = [String: Int]()  // general counter creator: total views

        creators.indices.forEach { index in
            let creator = creators[index]
            let videoViews = views[index]

            countsMap[creator, default: 0] += videoViews
            let creatorsPopularity = countsMap[creator, default: 0]
            
            if maxPopularity < creatorsPopularity {
                maxPopularity = creatorsPopularity
                maxIndexes = [index]
            } else if maxPopularity == creatorsPopularity {
                maxIndexes.append(index)
            }

            if let views = creatorViews[creator] {
                if videoViews > views.0 {
                    creatorViews[creator] = (videoViews, ids[index])
                } else if videoViews == views.0 { 
                    creatorViews[creator] = (videoViews, min(ids[index], views.1))
                }
            } else {
                creatorViews[creator] = (videoViews, ids[index])
            }

        }
        var creatorsSet = Set<String>()
        var finalMaxIndexes = [Int]()
        maxIndexes.forEach {
            let creator = creators[$0]
            if !creatorsSet.contains(creator) {
                creatorsSet.insert(creator)
                finalMaxIndexes.append($0)
            }
        }

        finalMaxIndexes.forEach {
            let creator = creators[$0]
            if let creatorMostViewed = creatorViews[creator] {
                result.append([creator, creatorMostViewed.1])
            }
        }

         return result
    }
}
```