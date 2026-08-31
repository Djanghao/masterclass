# [Go] Backtracking - easy to understand - beats 100%

**Author:** virtyaluk
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/1009923/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/1009923/)

---

```go
const MaxInt = int(^uint(0) >> 1)

func minimumTimeRequired(jobs []int, k int) int {
    var backtrack func(int)
    ans, workers := MaxInt, make([]int, k)
    
    sort.Sort(sort.Reverse(sort.IntSlice(jobs)))
    
    backtrack = func (i int) {
        if i == len(jobs) {
            ans = MaxEl(workers)
        } else {
            for j := 0; j < k; j++ {
                if j == 0 || workers[j - 1] > workers[j] {
                    workers[j] += jobs[i]

                    if MaxEl(workers) < ans {
                        backtrack(i + 1)
                    }

                    workers[j] -= jobs[i]
                }
            }
        }
    }
    
    backtrack(0)
    
    return ans
}

func MaxEl(ar []int) int {
    ans := 0
    
    for _, el := range ar {
        if el > ans {
            ans = el
        }
    }
    
    return ans
}
```