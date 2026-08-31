# Go/Python O(n^2+n*m) time | O(n) space

**Author:** vtalantsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622752/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622752/)

---

# Complexity
- Time complexity: $$O(n^2+n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func goodSubsetofBinaryMatrix(grid [][]int) []int {
    n := len(grid)
    nums := make([]int,n)
    for i,block := range(grid){
        num := 0
        power := 1
        for _,item := range(block){
            num+=item*power
            power*=2
        }
        nums[i] = num
    }
    if n == 1 && nums[0] == 0{
        return []int{0}
    }
    for i:=0;i<n;i++{
        for j:=i+1;j<n;j++{
            if nums[i] & nums[j] == 0{
                return []int{i,j}
            }
        }
    }       
    return []int{}
}
```
```python []
class Solution:
    def goodSubsetofBinaryMatrix(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        nums = [0 for _ in range(n)]
        for i,block in enumerate(grid):
            num = 0
            power = 1
            for _,item in enumerate(block):
                num+=item*power
                power*=2
            nums[i] = num
        if n == 1 and nums[0] == 0:
            return [0]
        for i in range(n):
            for j in range(i+1,n):
                if nums[i] & nums[j] == 0:
                    return [i,j]
        return []
```