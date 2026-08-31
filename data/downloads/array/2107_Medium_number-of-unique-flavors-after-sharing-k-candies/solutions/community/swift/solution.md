# [Swift] Sliding Window

**Author:** NoahFeld
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/6059056/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/6059056/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func shareCandies(_ candies: [Int], _ k: Int) -> Int {
        var flavors = 0
        var flavFreq = [Int: Int]()
        for c in candies {
            flavFreq[c, default: 0] += 1
            if flavFreq[c]! == 1 { flavors += 1 }
        }

        var flavorsMySisterStoleFromMe = 0
        for i in 0..<k {
            flavFreq[candies[i]]! -= 1
            if flavFreq[candies[i]]! == 0 {
                flavorsMySisterStoleFromMe += 1
            }
        }

        var maxFlavors = flavors - flavorsMySisterStoleFromMe

        for i in k..<candies.count {
            flavFreq[candies[i-k]]! += 1
            if flavFreq[candies[i-k]]! == 1 { 
                flavorsMySisterStoleFromMe -= 1
            }
            flavFreq[candies[i]]! -= 1
            if flavFreq[candies[i]]! == 0 {
                flavorsMySisterStoleFromMe += 1
            }
            maxFlavors = max(maxFlavors, flavors - flavorsMySisterStoleFromMe)
        }

        return maxFlavors
    }
}
```