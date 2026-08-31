# Bit Operation with little trick - Beat 100%

**Author:** muzakkiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/4653247/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/4653247/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
the list of binary will be different with usual binary, the negabinary representation will be like this:
[...,64,-32,16,-8,4,-2,1]

if there is 1 + 1 (base 10), the result will be 2. on negabinary will be [1,1,0] = 4 + (-2) + 0 = 2
so the answer of 1 + 1 = 110

OR

the next bit is (- prevbit*2), we we have carry over and there is >= 1 bit on the next bit, we just substract it

# Approach
<!-- Describe your approach to solving the problem. -->
calculate arr1 & arr2, iterating it from most left to the most right, if there is carry bit, we check on the next, if next bit is > 0, decrease it by -1, if not, adding next bit and next 2 bit by 1

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
func addNegabinary(arr1 []int, arr2 []int) []int {
    if len(arr1) < len(arr2) {
        arr1, arr2 = arr2, arr1
    }
    
    for i := 0; i < len(arr2); i++ {
        arr1[len(arr1)-i-1] += arr2[len(arr2)-i-1]
    }

    res := []int{}

    for i := 0; i < len(arr1); i++ {
        index := len(arr1)-i-1
        curr := arr1[index]
        arr1[index] %= 2
        if curr <= 1 {continue}
        if index-1 >= 0 && arr1[index-1] > 0 {
            arr1[index-1]--
        } else if index-2 >= 0 {
            arr1[index-1]++
            arr1[index-2]++
        } else {
            res = []int{1,1}
        }
    }

    res = append(res, arr1...)
    var i int
    for i = 0; i < len(res); i++ {
        if res[i] == 1 {break} 
    }
    if len(res) == i {return []int{0}}
    return res[i:]
}
```