# Right pointer / for-where / pseudocode

**Author:** CaptainAmazing
**Votes:** 1
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4671002/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4671002/)

---

# Approach
I talked out my thoughts and wrote them down. This is my pseudocode.

    /*
    who can see the ocean?
    hold currmax, output
    start pointer at the end, for each height > currmax:
        append this index
        update currmax max(thisIndex, currmax)
    return output sorted

    Time: n
    Space: 1
    */


# Code
```
class Solution {
    func findBuildings(_ heights: [Int]) -> [Int] {
        var currmax = 0, output = [Int]()
        for i in (0..<heights.count).reversed() where heights[i] > currmax {
                output.append(i)
                currmax = max(currmax, heights[i])
        }
        return output.sorted()
    }
}
```