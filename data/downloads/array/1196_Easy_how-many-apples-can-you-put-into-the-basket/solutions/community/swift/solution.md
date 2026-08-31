# Greedy, also calculated final apple value (for fun!)

**Author:** gleete
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5960588/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5960588/)

---

Greedy

# Code
```swift []
class Solution {
    func maxNumberOfApples(_ weight: [Int]) -> Int {
        var winner = Int()
        var x = weight
        var count = Int()
        /*
        winner = x.reduce(0) { (accumulator, number) in
            if (accumulator + number) < 5000 {
                count += 1
                return accumulator + number
            } else { return 0 }
        }
        */
        x = x.sorted()
        for apple in x {
            if (winner + apple) <= 5000 {
                winner += apple
                count += 1
            } 
        }

        return count
    }
}
```