# [Swift] Easy to understand solution

**Author:** varunadit2
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4584059/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4584059/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
I used the basic Euclidean Algorithm for GCD computation, then used this function inside a nested for loop.

Within the scope of the first for loop, I have decalred a variable to hold the current number. 

Within the second for loop, we overwrite the current variable to hold the new GCD of the subarray, essentially using the current variable to hold the GCD of the subarray until current element. And if GCD == k, we can increment res

If it some point we have GCD of subarray is less than k, we can get an early exit from the inner-loop and move on to the next element of nums

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func subarrayGCD(_ nums: [Int], _ k: Int) -> Int {
       
        //We define a GCD function that uses Basic Euclidean Algorithm for GCD        
        func gcd(_ a: Int, _ b: Int) -> Int {
            return b == 0 ? a : gcd(b, a % b)
        }

        let n = nums.count
        var res = 0

        //The rest is simple brute force
        for i in 0..<n {
            var currentGCD = nums[i]

            for j in i..<n {
                currentGCD = gcd(currentGCD, nums[j])

                if currentGCD == k {
                    res += 1
                } else if currentGCD < k {
                    break
                }
            }
        }

        return res
    }
}
```