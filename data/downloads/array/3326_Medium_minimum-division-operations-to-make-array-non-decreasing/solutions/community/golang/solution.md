# Sieve + Greedy

**Author:** muzakkiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5945342/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5945342/)

---

# Intuition
Not solving this problem at 1 attempt. When solving this, first strategy that i used is creating every factor number (prime) each number $$(2 - 10^6)$$ but got TLE. Then i change the strategy, if the constraint is $$10^6$$, the prime number that i need to generate is $$sqrt(10^6)$$ = $$10^3$$, only check prime number between 2 - 1.000. The total prime number between those numbers only 168 numbers. Looking at the constraint, it still acceptable even if it's worstcase $$168 * 10^5$$

# Approach
Generate prime number with sieve algorithm, iterate the number and if right index is greater then the current number, devide it with the generated prime number (also consider the prime number as an answer)

# Complexity
- Time complexity:
$$O(N\u2217Sqrt(Limit))$$

- Space complexity:
$$O(Limit+N)$$

# Code
```golang []
func minOperations(nums []int) int {
    LIMIT := 1000

    prime := make([]int, 0)
    sieve := make([]bool, LIMIT+1)
    for i := 2; i <= LIMIT; i++ {
        if sieve[i] {continue}
        prime = append(prime, i)
        for j := i; j <= LIMIT; j += i {
            sieve[j] = true
        }
    }

    var res int
    for i := len(nums)-2; i >= 0; i-- {
        if nums[i+1] >= nums[i] {continue}
        for j := 0; j < len(prime); j++ {
            if nums[i] == prime[j] {continue}
            if nums[i] % prime[j] == 0 && nums[i+1] >= nums[i] / prime[j] {
                nums[i] /= prime[j]
                res++
                break
            }
            if nums[i] % prime[len(prime)-1-j] == 0 && nums[i+1] >= prime[len(prime)-1-j] {
                nums[i] = prime[len(prime)-1-j]
                res++
                break
            }
        }
    }   

    for i := 1; i < len(nums); i++ {
        if nums[i] < nums[i-1] {return -1}
    }

    return res
}
```