# calling rand7 -2 times to generate 49 values , time complexity O(1)

**Author:** sugandha_saxena
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/4403038/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/4403038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
calling rand7 2 times(a,b) generated 49 combinations val=(a-1)*7 +b. 
for values val=1-40 , v%10 +1 gives each number 1-10-  4 times .
thefore for val>49 call random10 again  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func rand10() int {
answer:=0
    a:= rand7()
    b:=rand7()
    val := (a-1)*7 +b 
    if val>40 {
       answer=rand10()
    }else{
        answer = val%10
        answer = answer+1
    }
    return answer
}
```