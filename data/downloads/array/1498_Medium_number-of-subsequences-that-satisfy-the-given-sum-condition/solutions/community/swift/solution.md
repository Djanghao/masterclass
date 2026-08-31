# Easy to understand two pointer solution

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3494072/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3494072/)

---



# Complexity
- Time complexity:
O(nlogn)
- Space complexity:
O(n)

# Code
```
class Solution {
    func numSubseq(_ nums: [Int], _ target: Int) -> Int {
        var nums = nums
        nums.sort()
        var count = 0

        var i = 0
        var j = nums.count-1
        var powers = [Int]()
        powers.append(1)
        for i in 1...nums.count {
            powers.append(powers[i-1]*2%1000000007)
        }

        while (i <= j && j >= 0 ) {
            if nums[i] + nums[j] <= target {
                print(nums[i], nums[j])
                count += powers[j-i]
                count = count%1000000007
                i += 1
            } else {
                j -= 1
            }
        }
        return count%1000000007
    }
}






// i = 0
// j = n-1 = 3


// i.  j
// 3,5,6,7




```