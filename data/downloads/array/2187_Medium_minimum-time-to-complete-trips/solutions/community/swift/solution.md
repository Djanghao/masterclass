# Swift Binary search

**Author:** duyetnt
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/1811056/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/1811056/)

---

By asking **Minimum Time to do something**, it sounds very likely that we can use Binary Search. The tricky part is to identify the upper bound which costed me 4 failed attempts in a row (I indeed need to improve my carefullness :(( ).

Let's say the longest bus takes `longestTime` to complete a trip, in the worst scenario we'll need `longestTime * totalTrips` time to fulfill the requirement (I guess there could be a better formula, please enlighten me :pray:).

Once we've identified the upper bound, binary search will just kick in. So if a bus takes `busTime` to complete a trip, given a period time of `t`, the bus will be able to finish `t / busTime` trips. If the number of completed trips of all buses is greater or equal to `totalTrips`, `t` is a valid candidate. Otherwise, we'll need more time.

**Swift**
```swift
class Solution {
  func minimumTime(_ time: [Int], _ totalTrips: Int) -> Int {
    func isValid(_ t: Int) -> Bool {
      var numberOfTrips = 0
      for busTime in time {
        numberOfTrips += (t / busTime)
		
		// as soon as we've completed at least `totalTrips`, t is valid candidate
		if numberOfTrips >= totalTrips {
		   return true
		}
      }
      
      return false
    }
    
    let longestTime = time.max() ?? 0    
    var res = 0
    var (low, high) = (1, longestTime * totalTrips)
    while low <= high {
      let mid = low + (high - low) / 2
      if isValid(mid) {
        res = mid
        high = mid - 1 
      } else {
        low = mid + 1
      }
    }
    
    return res
  }
}

// Time complextiy: O(nlogk) where n is time.count and k = 10^7 * 10^7 = 10^14
```