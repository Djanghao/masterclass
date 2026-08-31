# group The People

**Author:** gostreid1
**Votes:** 1
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4032952/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4032952/)

---



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N) 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(N) 

# Code
```
class Solution {
func groupThePeople(_ groupSizes: [Int]) -> [[Int]] {
    var ans = [[Int]]()
    var groupDict = [Int: [Int]]()
    
    // Group people based on their group sizes.
    for (i, groupSize) in groupSizes.enumerated() {
        groupDict[groupSize, default: []].append(i)
    }
    
    // Create groups of the specified sizes.
    for (groupSize, groupMembers) in groupDict {
        var group = [Int]()
        
        // Split the group members into subgroups of the specified size.
        for (index, member) in groupMembers.enumerated() {
            group.append(member)
            
            if (index + 1) % groupSize == 0 {
                ans.append(group)
                group = []
            }
        }
    }
    
    return ans
}
}
```