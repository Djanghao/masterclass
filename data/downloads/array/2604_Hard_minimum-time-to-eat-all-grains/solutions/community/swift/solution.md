# Swift | Binary Search | Math Explained | 19 SLOC

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3406572/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3406572/)

---

**Binary Search (accepted answer)**
```
class Solution {
    func minimumTime(_ hens: [Int], _ grains: [Int]) -> Int {
        let hens = hens.sorted(), grains = grains.sorted()

        func canEatAllGrains(_ t:Int) -> Bool { // binary search predicate function
            var g = 0
            for i in hens.indices { 
                let l = hens[i] - grains[g] // if > 0, how far left we can travel
                let r = l > 0 ? t > l*3 ? t - l*2 : (t - l)/2 : t // how far right
                while abs(l) <= t && (grains[g] <= hens[i] || r >= grains[g] - hens[i]) {
                    g += 1
                    guard g < grains.count else { return true }
                }
            }
            return false
        }

        var (left, right) = (0, Int(2*10e8))
        while left < right {
            let mid = (left+right)/2
            (left, right) = canEatAllGrains(mid) ? (left, mid) : (mid+1, right)
        }
        return left
    }
}
```

---
**Math Explanation** \uD83D\uDC48

For each hen, consider the three cases it is in:

**Case 1: Next grain is too many steps away from hen's starting position for time budget.**
Response: 
	Skip to next hen, which may be closer.

**Case 2: Next grain is strictly to the left of hen starting position.**
Response:
The next grain is to the left of hen and we have enough time to reach it, now determine in the remaining time how maximally far to the right we can go between two paths: 
1) move and eat leftmost grain, return to start, then spend remaining time to the right
2) move to the right first, eat grain(s), return to start then move left and eat leftmost.

Time `t` is split into left-of-start and right-of-start. We need to eat next grain `leftDelta`,
 
```
leftDelta = (hen - nextGrain) // delta T to reach next grain (on the left)
```

but what is max time we can spend right-of-start?

```
maxRight = choose(l,r)
```

where l,r is defined as:

```
l: (t - leftDelta)/2 // t = (start, go `l` steps to right, return to start, go left and eat next grain)
r: (t - leftDelta*2) // t = (start, go `leftDelta' steps to left, return to start, go `r` steps to right)
```

```
  suppose r = l:
      t - leftDelta*2 = (t - leftDelta)/2
      t*2 - leftDelta*4 = t - leftDelta   // mult by 2, both sides
      t - leftDelta*4 = - leftDelta       // sub t, both sides
      t = leftDelta*3                     // add leftDelta*4, both sides
```
  Therefore, if t > leftDelta*3, choose `r`, otherwise `l`. This will maximize hen's travel to the right-of-start.

**Case 3: Next grain is at or to the right of hen starting position.**
Response:
	Simply eat as many grains in the time available.