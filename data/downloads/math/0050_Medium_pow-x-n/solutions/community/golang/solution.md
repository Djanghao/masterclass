# Go - Detailed Solution

**Author:** semihb
**Votes:** 5
**Link:** [https://leetcode.com/problems/powx-n/solutions/3218197/](https://leetcode.com/problems/powx-n/solutions/3218197/)

---

# Code
```
func myPow(x float64, n int) float64 {
    if n == 0{
        return 1
    }
    if n < 0 {
        return 1/myPow(x,-n)
    }
    temp:=1.0
    for n != 0 {
        if n&1 == 1{
            temp*=x
        }
        x*=x
        n>>=1
    }
    return temp
}
```
The first two if statements check for the base cases of the recursive function. If n is 0, then the function returns 1 since any number raised to the power of 0 is 1. If n is negative, then we recursively call myPow with 1/x and -n instead of x and n. This is because x^-n is equal to 1/(x^n).

The variable temp is initialized to 1, which will hold the result of x raised to the power of n.

The loop runs while n is not 0. Inside the loop, we check if the least significant bit of n is 1 using the bitwise AND operator with 1. If the result is 1, then we multiply temp by x. Otherwise, we just square x. We then shift n one bit to the right using the right shift operator to get the next bit.

After the loop completes, we return the final value of temp, which represents x raised to the power of n.

I hope this helps folks!