# Swift Solution - 100% Faster

**Author:** jcobea_iOSDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2603306/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2603306/)

---

```
class Solution {
    func sumEvenAfterQueries(_ nums: [Int], _ queries: [[Int]]) -> [Int] {        
        var sum = 0
        var result = [Int]()
        var nums = nums 
        for num in nums {
            if num % 2 == 0 {
                sum += num
            }
        }
        
        for query in queries {
            if nums[query[1]] % 2 == 0 {
                if query[0] % 2 == 0 {
                    sum += query[0]
                } else {
                    sum -= nums[query[1]]
                }
                nums[query[1]] += query[0]
                result.append(sum)
            } else {
                nums[query[1]] += query[0]
                if query[0] % 2 != 0 {
                    sum += nums[query[1]]
                }
                result.append(sum)
            }
        }
		
        return result
    }
}
```