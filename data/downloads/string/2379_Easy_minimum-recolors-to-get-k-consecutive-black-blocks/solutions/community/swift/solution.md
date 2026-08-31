# ✅ Easy and understandable solution for beginners

**Author:** Alexandr_Novikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/5610735/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/5610735/)

---


# Code
```
class Solution {
    func minimumRecolors(_ blocks: String, _ k: Int) -> Int {
        var answer = 100
        let array = Array(blocks)

        let counter = blocks.count - k

        for i in 0...counter{
            let newArray = array[i..<k+i].filter {$0 == "W"}
            if answer > newArray.count{
                answer = newArray.count
            }
        }
        return(answer)
    }
}
```