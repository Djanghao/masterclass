# Beats 100% - Heap and Set

**Author:** user2268LC
**Votes:** 0
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/6057122/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/6057122/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use the heap data structure from collections to store the different elements (sorted by val first then index).

For each query, we first check if index has already been marked (tracked with the removed set). Then we get the k smallest element (or stop if queue is empty, meaning everything was marked). We also checked that those kth smallest elements were not marked already.

We update our sum at each point and append it to our array



# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: nlog(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []

import Collections

struct HE : Comparable {
    var val : Int
    var index : Int

    static func < (l: HE, r: HE) -> Bool {
        if l.val == r.val {
            return l.index < r.index
        }

        return l.val < r.val


    }
}

class Solution {
    func unmarkedSumArray(_ nums: [Int], _ queries: [[Int]]) -> [Int] {
        var sum = 0 // keeps track of total sum
        var q : Heap<HE> = []
        
        for (i, num) in nums.enumerated() { // build heap and total sum
            sum += num
            q.insert(HE(val: num, index: i))
        }


        var result : [Int] = [] // result array

        var marked : Set<Int> = [] // keeps track of marked values (could also just modify array in place with -1)

        for que in queries {
            let index = que[0]; var k = que[1] 
            let num = nums[index]

            if !marked.contains(index) { // if not marked, substract and mark
                sum -= num
                marked.insert(index)
            }

            
            
            while !q.isEmpty && k > 0 { // get k small elements
                let e = q.popMin()!

                if marked.contains(e.index) { // if marked ignore
                    continue
                }

                marked.insert(e.index) // mark

                sum -= e.val // substract from total
                k -= 1 // decrease k
            }

            result.append(sum) // append result
        }

        return result
    }
}
```