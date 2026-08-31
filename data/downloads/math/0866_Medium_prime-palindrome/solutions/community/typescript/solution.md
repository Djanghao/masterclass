# Typecript easy solution

**Author:** MayankBhadeshiya
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/3809835/](https://leetcode.com/problems/prime-palindrome/solutions/3809835/)

---

# Code
```
function isPrime(n: number): boolean {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

function isPal(s: string): boolean {
    let l: number = 0
    let r: number = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) return false
        l++;
        r--;
    }
    return true
}

function primePalindrome(n: number): number {
    if (99899*1e2 <= n && n <= 1e8)
        return 100030001;

    for(let i:number = n;i<1e8;i++) {
        if (isPrime(i) && isPal(i.toString())) {
            return i
        }
    }
};
```