# Using Recursion and backtracking. Simple.

**Author:** dbysani
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/3655271/](https://leetcode.com/problems/factor-combinations/solutions/3655271/)

---

# Intuition
Recurse to traverse all paths. Find factors as you recurse. Add to list
# Approach
Iterate from start to n-1
pick num if it divides n. Add to factor list
recurse for (n-1)/i
unpick or backtrack to try other combinations

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func getFactors(n int) [][]int {
    res := [][]int{}
    factors := []int{}
    getFactorsHelper(n, &res, &factors)
    return res
}


func getFactorsHelper(n int, res *[][]int, factors *[]int){

    start := 2
    if len(*factors)>0{
        start = (*factors)[len(*factors)-1]
    }
    for i:=start; i<=n; i++{
        if i==n{ //leaf node in recursion. Final factor
            
            newArr := make([]int, len(*factors))
            copy(newArr, *factors)
            newArr = append(newArr, i)
        
            if len(newArr) !=1{ // exclude if factors is just one (num itself)
                *res = append(*res, newArr)
            }
            return 
        }
        if i>n{ //No need to iterate further
            return 
        }
        if n%i==0{
            *factors = append(*factors, i) // pick number if factor
            getFactorsHelper(n/i, res, factors)
            *factors = (*factors)[:len(*factors)-1] //backtrack
        }
    }
    return 
}


```