# Tracking Possibilities - O(n^2)

**Author:** muzakkiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389472/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389472/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Similar with this question https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/description/, 
I found out that the question ask us to find the subsequence with following pattern:
a,b,a,b (a & b can different or the same number)
Since the constraint is of k and length is 10^3, thus we can modulo the number first by the k.
To think 10^6 still acceptable for this problem, we can solve this by using 2 nested loops. so let's find the pattern by using hashmap.
the possibilities can be "A,B,A,B" OR "B,A,B,A". I tracking the what should be A or B for next pattern.

# Approach
<!-- Describe your approach to solving the problem. -->
double loop + hashmap

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
func maximumLength(nums []int, k int) int {
    for i := range nums {nums[i] %= k}   
    var res int
    
    result := make(map[[2]int]int)
    
    for i := 0; i < len(nums); i++ {
        visit := make(map[[2]int]bool)
        for j := i-1; j >= 0; j-- {
            a, b := nums[i], nums[j]
            if result[[2]int{a, b}] & 1 == 0 && !visit[[2]int{a, b}] {
                result[[2]int{a, b}]++
                visit[[2]int{a, b}] = true
            }
            if result[[2]int{b, a}] & 1 == 1 && !visit[[2]int{b, a}] {
                result[[2]int{b, a}]++
                visit[[2]int{b, a}] = true
            }
            res = max(res, result[[2]int{b, a}], result[[2]int{a, b}])
        }
    }
    
    return res+1
}
```