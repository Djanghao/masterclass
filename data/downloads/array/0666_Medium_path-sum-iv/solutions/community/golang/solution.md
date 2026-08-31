# Go simple solution (no BFS, no DFS)

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/5707887/](https://leetcode.com/problems/path-sum-iv/solutions/5707887/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```golang []
func pathSum(nums []int) (ans int) {
    ccnt := map[int]int{} // nums of children
    for i := len(nums)-1; i >= 0; i-- {
        d, p, v := nums[i]/100, (nums[i]%100)/10, nums[i]%10
        if _, ok := ccnt[d*10+p]; !ok {
            ccnt[d*10+p] += 1
        }
        if ans += ccnt[d*10+p]*v; d > 1 {
            par := ((d-1)*10)+(((p-1)/2)+1)
            ccnt[par] += ccnt[d*10+p]
        }
    }
    return ans
}
```