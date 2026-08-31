# Simple Go Solution

**Author:** sdarnadeem
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/5348286/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/5348286/)

---



# Code
```
func sumBase(n int, k int) int {
    sum := 0;
    for (n > 0) {
        sum += n % k;
        n = n / k
    }
    return sum;
}
```