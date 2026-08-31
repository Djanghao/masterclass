# swift: range based solution

**Author:** vlvlv
**Votes:** 6
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/535468/](https://leetcode.com/problems/my-calendar-i/solutions/535468/)

---

this is a simple solution based on foundation framework
```swift
class MyCalendar {

    var ranges = [Range<Int>]()
    init() {
        
    }
    
    func book(_ start: Int, _ end: Int) -> Bool {
        let newRange = start..<end
        for range in ranges where range.overlaps(newRange) {
            return false
        }
        ranges.append(newRange)
        return true
    }
}
```