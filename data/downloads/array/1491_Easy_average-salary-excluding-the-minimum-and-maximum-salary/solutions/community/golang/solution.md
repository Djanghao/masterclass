# Super Solution Python3 and Golang

**Author:** GANJINAVEEN
**Votes:** 6
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3472901/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3472901/)

---

# Python3 Solution
```
class Solution:
    def average(self, salary: List[int]) -> float:
        salary.remove(max(salary))
        salary.remove(min(salary))
        return sum(salary)/len(salary)
```
# Golang Solution
```
func average(salary []int) float64 {
    sort.Ints(salary)
    sum:=0
    length:=len(salary)
    for _,v :=range salary[1:length-1]{
        sum+=v
    }
    return float64(sum)/float64(length-2) 
}
```
# please upvote me it would encourage me alot

