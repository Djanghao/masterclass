# Solution for beginners

**Author:** Adityaa_Mehra
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5903381/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5903381/)

---

### Intuition:
This problem requires computing the difference between two sums:
1. **Sum of all numbers** from 1 to `n` that are **not divisible by `m`**.
2. **Sum of all numbers** from 1 to `n` that **are divisible by `m`**.

The task is to find the difference between these two sums: `sum of non-divisible by m` minus `sum of divisible by m`.

### Approach:
1. **Initialize Two Sums**: 
   - `num1` for storing the sum of numbers **not divisible by `m`**.
   - `num2` for storing the sum of numbers **divisible by `m`**.

2. **Iterate from 1 to `n`**: 
   - For each number `i`, check if `i % m == 0`.
   - If true, add `i` to `num2`, else add `i` to `num1`.

3. **Calculate and Return the Difference**:
   - The final result will be `num1 - num2`.

### Time Complexity:
- **O(n)**, where `n` is the given integer. The algorithm iterates through all numbers from 1 to `n` once.

### Space Complexity:
- **O(1)**, as we are only using a fixed amount of extra space for the two sums (`num1` and `num2`).
# Code
```java []
class Solution {
    public int differenceOfSums(int n, int m) {
        int num1=0,num2=0;
        for(int i=1;i<=n;i++)
        {
            if(i%m!=0)
            num1+=i;
            else
            num2+=i;
        }
        return num1-num2;
    }
}
```
```c []
int differenceOfSums(int n, int m) {
    int num1=0,num2=0;
    for(int i=1;i<=n;i++)
    {
        if(i%m!=0)
        num1+=i;
        else
        num2+=i;
    }
    return num1-num2;
}
```
```golang []
func differenceOfSums(n int, m int) int {
    var num1 int
    var num2 int
    num1=0
    num2=0
    for i:=1 ; i<=n ; i++ {
        if i%m!=0 {
            num1+=i
        }else{
            num2+=i
        }
    }
    return num1-num2
}
```
```python []
class Solution(object):
    def differenceOfSums(self, n, m):
        num1=0
        num2=0
        for i in range(1,n+1):
            if i%m!=0:
                num1+=i
            else:
                num2+=i
        return num1-num2
```
