# Swift beats 100%

**Author:** jingliu99
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/5972588/](https://leetcode.com/problems/random-pick-with-weight/solutions/5972588/)

---


# Code
```swift []
class Solution {
    private var array = [Int]()
    private var secondArray = [Int]()
    init(_ w: [Int]) {
        array = w
        createSecondArray()
    }
    func createSecondArray() {
        var sumSoFar = 0
        for (index, element) in array.enumerated() {
            sumSoFar += element //2, 6, 11
            secondArray.append(sumSoFar)
        }
    }

    func pickIndex() -> Int {
        let random = Int.random(in: 1...secondArray.last!)
        var lower = 0
        var upper = secondArray.count - 1
        while lower < upper {
            let mid = lower + (upper - lower) / 2
            let midNumber = secondArray[mid]
            if midNumber == random {
                return mid
            }
            if midNumber < random {
                lower = mid + 1
            } else {
                //crucial here: you cannot eliminate mid index yet, because when midNumber > random, mid itself could still be the correct answer, so you want to include mid in your next search space.
                upper = mid
            }
        }
        return lower
    }
}

```