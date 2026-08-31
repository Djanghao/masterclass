# Swift Merge Intervals

**Author:** wenjiema
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/6095896/](https://leetcode.com/problems/count-integers-in-intervals/solutions/6095896/)

---

# Intuition
We would keep a sorted non-overlapping intervals array during add. At counting stage we just count all the elements in interval

# Approach
1. List out all possibilities of interval merging pattern, and come up with interval merging logic
2. Update count during adding/merging intervals to make count() O(1)
3. Use binary search to find insertion index

# Complexity
- Time complexity:
Add O(n)
Count O(1)

- Space complexity:
O(n)

# Code
```swift []

class CountIntervals {
    var intervals : [[Int]]
    var c : Int

    init() {
        intervals = [[Int]]()
        c = 0
    }

    func find(_ target: Int) -> Int {
        var l = 0, r = intervals.count
        while l < r {
            let m = (l + r) / 2
            if intervals[m][1] < target {
                l = m + 1
            } else {
                r = m
            }
        }
        return l
    }
    
    func add(_ left: Int, _ right: Int) {
        // find index where intervals[i][1] >= left
        var i = find(left)

        if i == intervals.count {
            // case 1: insert at the end
            intervals.append([left, right])
            c += right - left + 1
        } else if intervals[i][0] > right {
            // case 2: insert without merging
            intervals.insert([left, right], at: i)
            c += right - left + 1
        } else {
            // case 3: merge right
            
            // left is determined
            var newLeft = min(left, intervals[i][0])
            var newRight = right

            // find right
            while i < intervals.count, intervals[i][0] <= right {
                newRight = max(right, intervals[i][1])
                c -= intervals[i][1] - intervals[i][0] + 1
                intervals.remove(at: i)
            }
            // at this point, intervals[i][0] > right, so we should insert at position i
            intervals.insert([newLeft, newRight], at: i)
            c += newRight - newLeft + 1
        }
    }
    
    func count() -> Int {
        return c
    }
}

/**
 * Your CountIntervals object will be instantiated and called as such:
 * let obj = CountIntervals()
 * obj.add(left, right)
 * let ret_2: Int = obj.count()
 */
```