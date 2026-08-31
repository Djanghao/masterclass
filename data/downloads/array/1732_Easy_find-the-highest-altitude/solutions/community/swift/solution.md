# Swift | 1732. Find the Highest Altitude | One-liner

**Author:** iosdevzone
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/1533393/](https://leetcode.com/problems/find-the-highest-altitude/solutions/1533393/)

---

Using a tuple to keep track of the (height, maxSoFar) and reducing over the gains:
```swift 
func largestAltitude(_ gain: [Int]) -> Int {
    gain.reduce((0,0)) { ($0.0+$1, max($0.1, $0.0+$1)) }.1
}
```