# rust mathematically unsound math

**Author:** stevensonmt
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/585869/](https://leetcode.com/problems/largest-palindrome-product/solutions/585869/)

---

This is a math based solution that is only valid for this particular problem of 0 < n < 9. If you make the assumption that the smallest factor of the largest palindrome will be close to the square root of the palindrome then you can pick some arbitrary floor near the square root.

This solution makes another assumption as well. At least one factor of the palindrome must be divisible by 11. This solution assumes (with no rational basis) that the larger factor of n digits will be divisible by 11. This turns out to be true for n = 2, 4, 5, 6, 8 but not n = 3, 7. Thus the floor for the search must be lowered beyond the square root to account for n = 3 or n = 7. 

It's pretty fast, ~35msec for n = 8, which I think is as fast as any solution not using a cheating dictionary/hashmap.

```
impl Solution {
    pub fn largest_palindrome(n: i32) -> i32 {
        
        let min_factor = (10_i32.pow(n as u32 - 1)) as i64;
        let max = (10_i32.pow(n as u32)-1) as i64;
        let max_factor = (max / 11) * 11; 
		// because integer division, this gives the largest n digit number divisible by 11
            
        for i in (min_factor..=max).rev() { 
		// reverse the range to start with the biggest n digit number first and decrement from there as needed
            let palindrome = build_palindrome(i, n); // mirror the digits to create your palindrome
            let lower = (palindrome as f64).sqrt().floor() as i64 - (44 * (n as i64 - 2)); 
			// the square root is a reasonable guess for a starting point, but we have this arbitrary 
			// fudge factor that works for our given cases without any guarantee it will work for other cases
			
            for j in (lower..=max_factor).rev().step_by(11) { 
			// we step by 11 b/c we assume the larger factor is divisible by 11
			// because our lower limit goes beyond the square root we still catch 
			// some smaller factors divisible by 11 if necessary
			
                if palindrome % j == 0 && (palindrome / j) / (max+1) == 0 {
                    return (palindrome % 1337) as i32
                }
            }
        }
        9
    }
}

fn build_palindrome(i: i64, n: i32) -> i64 {
    let mut x = i * 10_i64.pow(n as u32);
    
    let mut y = i;
    let mut pal = 0;
    while y > 0 {
        pal = 10 * pal + y % 10;
        y /= 10;
        
    }
    pal += x;
    pal
}
```