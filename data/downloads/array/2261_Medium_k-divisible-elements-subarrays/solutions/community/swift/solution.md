# My Swift Solution

**Author:** espadandy
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/2003251/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/2003251/)

---

Definitely need the Rabin-Karp or Trie method to optimize in the future.

```
class Solution {
    func countDistinct(_ nums: [Int], _ k: Int, _ p: Int) -> Int {
        var cnt = 0
        var set = Set<Array<Int>>()
        
        for i in 0..<nums.count {
            cnt = 0
            var subArray: [Int] = []
            for j in i..<nums.count {
                if nums[j] % p == 0 {
                    cnt += 1
                }
                
                if cnt > k {
                    break
                }
                
                subArray.append(nums[j])
                set.insert(subArray)
            }
        }
        
        return set.count
    }
}
```