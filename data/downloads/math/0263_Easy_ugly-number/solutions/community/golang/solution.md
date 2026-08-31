# [golang] Divide and conquer parallel solution

**Author:** memosiki
**Votes:** 4
**Link:** [https://leetcode.com/problems/ugly-number/solutions/2825909/](https://leetcode.com/problems/ugly-number/solutions/2825909/)

---

CW: This is not an obvious approach to the problem nor this is a solution you should spend your time on nor this is easy to read neverthless it's fun and makes use of goroutines.
 
 **Basics of the solution**
For number to be ugly the only factors should be 2, 3 and 5. Negative and the number 1 should be regarded as edgecases. Let's focus on the positive integers.

**Observation that makes distributed computing possible**
Any number can be factorized like that 
N = 2^x * 3^y * 5^z * remainder

N is ugly if the remainder is exactly 1. As you may have seen in other solutions the key idea is to remove the 2, 3 and 5 factors one after another until only remainder is left. Let's take a somewhat different approach. 

**Divide and conquer**
Let's split the task to three independent ones -- removing factors of 2, 3, 5 from the number. We will divide the number in three separate goroutines and check for the solution at the very last step. Each gorutine looks like this:
```
for ; n % factor == 0; n/=factor {}
c <- n
``` 
In math speak, after all of the dividing inside gorutines remaining numbers will look like this:
G2 =  3^y * 5^z * remainder
G3 =  2^x * 5^z * remainder
G5 = 2^x * 3^y *  remainder

Now let's multiply it all together we get
G2 * G3 * G5 = 2^2x * 3^2y * 5^2z * remainder^3  = (2^x * 3^y * 5^z)^2 * remainder^3 = N^2 * remainder

Here we get to the last condition:
* whole product is equal to N squared, it means that remainder is exacly 1 and N is an ugly number
* product is not equal to N^2, remainder is not 1, N is not an ugly number

**Solution**
```
func isUgly(n int) bool {
    if n < 1 {
        return false
    }
    c := make(chan int, 3)
    for _, factor := range [3]int{2, 3, 5} {
        go func(n int, factor int){
            for ; n % factor == 0; n/=factor {}
            c <- n
        }(n, factor)
    }
    return <-c*<-c*<-c == n * n
}
```

Feel free to run this solution on a supercomputer or something.