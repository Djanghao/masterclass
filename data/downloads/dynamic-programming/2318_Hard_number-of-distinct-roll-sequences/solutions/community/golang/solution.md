# Golang DP states

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/5748477/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/5748477/)

---

# Intuition
States
- Roll number
- Previous roll
- Second previous roll


# Code
```golang []
func distinctSequences(n int) int {
    mod := 1_000_000_007
    memo := map[[3]int]int{}
    var dp func(a,b,c int) int
    dp = func(a, b, c int) int { 
        if a == n  {
            return 1  
        }   
        con := [3]int{a,b,c}
        if val , ok := memo[con] ; ok  {
            return val 
        }
        

        res := 0 
        
        for i := 1 ; i <= 6 ;i ++ {
            // determine if i is a valid roll w
            if (b == -1 || gcd(b, i) == 1) && (b != i && c != i){
                res += dp(a + 1 , i , b) % mod 
            }
        }
        
        memo[con] = res % mod 
        return memo[con]
        
        

        
    }

    return dp(0, -1,-1)

    
}



func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a % b)
}
```