# Very fast runtime, using Count Hash Map in an efficient way

**Author:** esso
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/5158170/](https://leetcode.com/problems/counting-elements/solutions/5158170/)

---

# Intuition
Keeping track of number of time each element of the array appears in a Hash Map , and then check if the eleent has its elt+1 in that map, and if it is there, then the count (which represents the number of time the element appears) is added to the output we want.

# Approach
- Build a Hash Map that keep track of Count for each element in arr
- Loop through each element of the Hash Map, checking if its x+1 is present, and if its, increase the output by the count for that element.

# Complexity
- Time complexity:
O(n)

We loop twice over a maximum of len(arr) elements, first to build the Hash Map that keeps tracks of the counting of element, second time to check if elt+1 is in the Hash Map. each loop is O(n), which makes the overall complexity back to O(n)

- Space complexity:
O(n), simply because of the hashMap, which will have a maximum of len(arr) elements.

# Code
```
func countElements(arr []int) int {
    var output int
    
    // Build a Hash Map to Count frequency of each element in arr
    arrMapCount := make(map[int]int)
    for _,i := range arr {
        arrMapCount[i] += 1
    }
    
    // for each element of the Map, check if its x+1 is in
    for k, v := range arrMapCount {
        if _,ok := arrMapCount[k+1]; ok {
            output += v
        }
    }
    return output
}
```