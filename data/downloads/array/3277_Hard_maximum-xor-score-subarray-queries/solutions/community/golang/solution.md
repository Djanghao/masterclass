# Go solution. DP.

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5813791/](https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5813791/)

---

# Intuition
Two very similar bottom up dp matrices .


Precompute scores for each nums[i ... j]. This is brute force n^3. To optimize to n^2, use the fact that scores[i .. j] = scores[i ... j - 1]^scores[i + 1 ... j]. 



Now to find the maximum score for all subarrays from nums[i ... j]. With our precomputed results, this is also brute force n ^ 3. To optimze to n^2 , use best[i ... j] = max(best[i ... j - 1], best[i + 1 .... j], score[i ... j]).


# Code
```golang []
func maximumSubarrayXor(nums []int, queries [][]int) []int {

    precompute := make([][]int , len(nums))

    for i := range(precompute) {
        precompute[i] = make([]int,  len(nums))
    }

    for i := range(nums) {
        precompute[i][i] = nums[i]
    }
    // fill from bottom row 
    for r := len(precompute) - 1 ; r >= 0 ; r -- {
        for c := r + 1 ; c < len(precompute) ; c ++ {
            precompute[r][c] =  precompute[r][c - 1] ^ precompute[r + 1][c]
        }
    }

    best := make([][]int, len(nums))
    
    for i := range(best) {
        best[i] = make([]int, len(nums))
    }
    for i := range(nums) {
        best[i][i] = nums[i]
    }
    // fill from bottom row 
    for r := len(best) - 1 ; r >= 0 ; r -- {
        for c := r + 1 ; c < len(best) ; c ++ {
            best[r][c] =  max(best[r][c - 1],best[r + 1][c])
            best[r][c] = max(best[r][c] , precompute[r][c])
        }
    }



    res := []int{}
    for _,v := range(queries) {
        res = append(res,  best[v[0]][v[1]])
    }
    return res
    

}




func max(a,b int) int {
    if a > b {
        return a
    }
    return b 
}
// what a way to think how to see this we 
```