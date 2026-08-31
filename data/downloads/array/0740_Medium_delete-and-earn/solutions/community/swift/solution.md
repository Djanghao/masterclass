# Swift O(N) 88.68% Solution + Explanation / Analogy

**Author:** xmliszt
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/2336748/](https://leetcode.com/problems/delete-and-earn/solutions/2336748/)

---

The selected number if got multiple, basically will all go into the sum. Therefore, we can imagine each unqiue number is like a basket, and then the number of occurrence is like the number of apples in that basket. Then the problem becomes choose non-adjacent baskets such that we maximise the sum of the total number of apples.

The DP logic is as follow, Let's say we are going to choose basket `i`. `i` being the basket index.
1. We can choose this basket, and skip its previous basket. (we don't need to check its next basket as we are doing index from lower to higher in order)
2. We can skip this basket, and take the sum of whatever from the previous basket.

Therefore the solution below goes like this:
1. We create the basket for us to look up later in `record` dictionary.
2. Initialize basket 0, take this basket or skip this basket both give us 0 as the total sum.
3. Then since the `nums` array is unsorted, let's base on the index to loop through all possible numbers captured in the range.
4. Then in the for loop, for each basket (whether empty or not), if it is the first basket that has values (exists in `nums` and lowest), of course we can take it and that will make `take_i` be the sum of that number, we can skip it but skipping it meaning that we need take the previous basket which is none! So `skip_i` remains as 0.
5. Then for each subsequent basket (whether empty or not), we follow the logics discussed above:
```
take_i = maximum(skip_i + sum of i, previous take_i)
skip_i = previous take_i
```

The `sum of i` we can just get it from our `record`, if don't exist, then means basket empty, so it is 0

In the end, we just compare see `take_i` strategy larger or `skip_i` strategy larger. :)

```swift
class Solution {
    func deleteAndEarn(_ nums: [Int]) -> Int {
        var record: [Int: Int] = [:]
        for num in nums {
            if record[num] == nil {
                record[num] = num
            } else {
                record[num]! += num
            }
        }
        
        var take_i = 0
        var skip_i = 0
        
        let n_min = nums.min()!
        let n_max = nums.max()!
        
        for i in n_min...n_max {
            if i == n_min {
                take_i = record[i] ?? 0
            } else {
                var temp = take_i
                take_i = max(skip_i + (record[i] ?? 0), take_i)
                skip_i = temp
            }
        }
        return max(take_i, skip_i)
    }
}
```

Time Complexity: O(N)
Space Complexity: O(N)