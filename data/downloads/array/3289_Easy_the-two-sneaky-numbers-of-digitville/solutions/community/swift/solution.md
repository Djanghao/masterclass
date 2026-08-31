# Beat 100% - Swift Easy Code

**Author:** poonammittal246
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5789216/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5789216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Make use of Set Data Structure as Set contains unique elements
# Approach
<!-- Describe your approach to solving the problem. -->
Make use of Set Data Structure as Set contains unique elements
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ --> O(N)

# Code
```swift []
class Solution {
    func getSneakyNumbers(_ nums: [Int]) -> [Int] {
        
        var arrUnique = Set<Int>()
        var ans: [Int] = []
        for num in nums {
            if arrUnique.contains(num){
                ans.append(num)
            }else{
                arrUnique.insert(num)
            }
        }
        return ans
    }
}
```