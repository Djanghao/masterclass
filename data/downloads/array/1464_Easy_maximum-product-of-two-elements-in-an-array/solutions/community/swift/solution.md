# [swift] || Using Heap Sort  || Easy explanation

**Author:** sadyojat
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/1382074/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/1382074/)

---

The solution follows the idea of using a maxHeap, wherein the root object is the object with the highest value. 

A maxHeap also has a property that every child of a node will have a lower weight than its parent, so while it does not deliver ordered sorting, the elements are in a semi sorted order. 

The simplest fix here is to pass the incoming array thru a heapify construct, which transforms the input array into a maxHeap, and then extract the top 2 heaviest elements from the heap. 

`Time Complexity :: worst case :: O(n lg(n))`

```
class Solution {    
    func maxProduct(_ nums: [Int]) -> Int {
        let heap = heapify(nums)               
        if heap.count > 2 {
            let first = heap[0]
            let second = heap[1] > heap[2] ? heap[1] : heap[2]
            return (first - 1) * (second - 1)
        } else {
            return (heap[0] - 1) * (heap[1] - 1)
        }
        
    }
    
    func heapify(_ nums: [Int]) -> [Int] {
        var nums = nums
        var newNums = [Int]()
        let maxCount = nums.count
        for i in 0..<maxCount {            
            newNums.append(nums[i])
            var j = i
            var parentIdx = (j-1)/2
            while parentIdx >= 0, newNums[parentIdx] < newNums[j] {                
                let temp = newNums[j]
                newNums[j] = newNums[parentIdx]
                newNums[parentIdx] = temp
                j = parentIdx
                parentIdx = (j-1)/2                
            }
        }
        return newNums
    }
}
```