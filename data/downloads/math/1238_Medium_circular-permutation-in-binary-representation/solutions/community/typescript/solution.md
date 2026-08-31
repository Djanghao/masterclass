# Using gray code approach

**Author:** SJTGSHIVAM
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/3859823/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/3859823/)

---



# Approach
```    
for (let i = 0; i < nr2; i++){
        ans.push(i^(i/2))
    }
```
this will print natural series of grey code that is by defalut ione bit distant
we can Xor every digit with "start" to shift 0-> start and we will get the required series.
This approach is not as intutive as the backtracking one.  


# Code
```
function circularPermutation(n: number, start: number): number[] {
    let ans = [];
    let nr2 = 2 ** n;
    for (let i = 0; i < nr2; i++){
        ans.push(i^(i/2)^start)
    }
        return ans;
};
```