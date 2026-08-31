# Swift - Using Quicksort

**Author:** georrgee
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/306250/](https://leetcode.com/problems/sort-an-array/solutions/306250/)

---

Hey everyone! Did this in swift and used a high order function: filter
```
class Solution {
    
    func sortArray(_ nums: [Int]) -> [Int] {
        
        let sortedArray = quickSort(array: nums)
        return sortedArray
    }
    
    func quickSort(array: [Int]) -> [Int] {
        
        if array.count < 1 {
            return array
        }
        
        let pivot = array[array.count / 2]
        let less  = array.filter { $0 < pivot }
        let equal = array.filter { $0 == pivot }
        let more  = array.filter { $0 > pivot }
        
        return quickSort(array: less) + equal + quickSort(array: more)
        
    }
}
```

Happy Coding