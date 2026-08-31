# Swift - easy

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/5964505/](https://leetcode.com/problems/smallest-common-region/solutions/5964505/)

---


# Code
```swift []
class Solution {
    func findSmallestRegion(_ regions: [[String]], _ region1: String, _ region2: String) -> String {
        var dict = [String : String]()

        for i in 0..<regions.count {
            let parent = regions[i][0]
            for j in 1..<regions[i].count {
                dict[regions[i][j]] = parent
            }
        }

        guard dict[region1] != nil && dict[region2] != nil else { return "" } //if both regions dont exist in dict, then return. Not a valid case as it is mentioned both will exist
        //if one region is parent of another
        guard region2 != dict[region1] else {
            return region2
        }
        guard region1 != dict[region2] else {
            return region1
        }

        var ancestors = Set<String>()
        var region = region1
        ancestors.insert(region1)
        //ancestor chain buildup
        while let parent = dict[region] {
            ancestors.insert(parent)
            region = parent
        }

        //traverse parents of region2 until we find the parent in set - that is the lca for us
        region = region2
        while ancestors.contains(region) == false {
            region = dict[region]!
        }
        return region
    }
}
```