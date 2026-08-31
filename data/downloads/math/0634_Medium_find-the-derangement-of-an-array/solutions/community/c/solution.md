# C code || 11ms || O(1) space

**Author:** Ilkhomjon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/3494433/](https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/3494433/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// 11 minutda patterni aniqlay oldim
// 16 minutda 1D solution tayyor
#define MOD 1000000007

int findDerangement(int n){
    long long first = 1, second = 2, curr;

    for(long long i = 3; i <= n; i++){
        curr = second;
        second = (i * ((first + second) % MOD)) % MOD;
        first = curr; 
    }

    return (n == 1)? 0 :first;
}
```