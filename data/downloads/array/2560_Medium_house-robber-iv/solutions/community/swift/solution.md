# Swift - Binary search - Similar pattern to Koto eating bananas

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/6003510/](https://leetcode.com/problems/house-robber-iv/solutions/6003510/)

---

# Code
```swift []
class Solution {
    func minCapability(_ nums: [Int], _ k: Int) -> Int {
        guard k > 0 && nums.count > 0 else { return 0 }
        var (left, right) = (nums.min()!, nums.max()!)
        var result = right
        //lets do a binary search to find the right capability that can be used to rob all alternate houses 

        func canUseCapability(_ capability: Int) -> Bool {
            var numHouses = 0 //we need to rob atleast k houses
            var i = 0
            while i < nums.count {
                if nums[i] <= capability {
                    numHouses += 1
                    i += 2 //skip next house
                } else {
                    i += 1 //move to next house
                }
            }

            return numHouses >= k
        }

        while left <= right {
            let mid = left + (right - left) / 2
            if canUseCapability(mid) {
                result = min(result, mid)
                //choose a mid that is less than this to minimize mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return result
    }
}
```