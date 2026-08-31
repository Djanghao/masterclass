# Swift Solution || Basic Approach

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/3116811/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/3116811/)

---

# Approach
1. We can use a greedy approach to solve this problem.
2. We can first count the frequency of each number in the array.
3. If the frequency of a number is greater than n/2, then we can remove all the other numbers and replace them with that number.
4. We can then greedily replace the remaining numbers with the number that we want to replace them with.
5. If we can't find a number that has a frequency greater than n/2, then we can't replace all the numbers with a single number.
6. If we can find such a number, then we can greedily replace the remaining numbers with the number that we want to replace them with.
7. We can then return the cost of the replacement.


# Complexity
> Time complexity: O(n)
> Space complexity: O(n)

# Code
```
class Solution {
    func minimumTotalCost(_ nums1: [Int], _ nums2: [Int]) -> Int {
        let n = nums1.count
        var cost = 0
        var count = [Int](repeating: 0, count: n+1)
        var sum = 0
        for i in 0..<n {
            if nums1[i] == nums2[i] {
                count[nums1[i]] += 1
                sum += 1
                cost += i
            }
        }
        var rem = -1
        var freq = 0
        for i in 0...n {
            if count[i] > (sum/2) {
                rem = i
                freq = count[i] - (sum-count[i])
                break
            }
        }
        if rem == -1 { return cost }
        for i in 0..<n {
            if nums1[i] != nums2[i] && rem != nums2[i] && rem != nums1[i] {
                cost += i
                freq -= 1
            }
            if freq == 0 { break }
        }
        if freq != 0 { return -1 }
        return cost
    }
}
```