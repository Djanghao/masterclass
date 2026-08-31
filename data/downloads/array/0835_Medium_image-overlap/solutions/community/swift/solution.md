# Best 100.00% that intuitively makes sense!!!

**Author:** nomanashraf874
**Votes:** 0
**Link:** [https://leetcode.com/problems/image-overlap/solutions/4011700/](https://leetcode.com/problems/image-overlap/solutions/4011700/)

---


# Code
```
class Solution {
    func largestOverlap(_ img1: [[Int]], _ img2: [[Int]]) -> Int {
        var len = img1.count
        var list1 = [[Int]]()
        for i in 0..<len{
            for j in 0..<len{
                if img1[i][j]==1{
                    list1.append([i,j])
                }
            }
        }
        var list2 = [[Int]]()
        for i in 0..<len{
            for j in 0..<len{
                if img2[i][j]==1{
                    list2.append([i,j])
                }
            }
        }
        var map = [[Int]:Int]()
        for a in list1{
            for b in list2{
                map[[b[0]-a[0],b[1]-a[1]],default:0]+=1
            }
        }
        var maxCount = 0
        for (key,val) in map{
            maxCount = max(maxCount,val)
        }
        return maxCount

    }
}
```