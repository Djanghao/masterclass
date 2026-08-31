# Swift - GCD based map

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/6031645/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/6031645/)

---

# Code
```swift []
class Solution {
    //if nums[i] * nums[j] % k == 0, 
    //then GCD(nums[i], k) * GCD(nums[j], k) is also div by k
    func countPairs(_ nums: [Int], _ k: Int) -> Int {
        var dict = [Int: Int]() //how many times we found GCD(x) in array
        var count = 0

        for num in nums {
            let gcd = findgcd(num, k)

            for key in dict.keys {
                if (key * gcd) % k == 0 {
                    count += dict[key]!
                }
            }
            dict[gcd, default: 0] += 1
        }

        return count
    }

    private func findgcd(_ a: Int, _ b: Int) -> Int {
        if a < b { return findgcd(b, a) }
        if a % b == 0 { return b }
        return findgcd(b, a % b)
    }
}
```