# Backtracking

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4418867/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4418867/)

---

# Intuition
For the sum $|a_0 - x| + |a_1 - x| + ... + |a_{n-1} - x|$ the median is an optimal choice, let's prove it.
1) Let's consider an array of $5$ elements sorted in non-decreasing order $[a_0, a_1, a_2, a_3, a_4]$, where $a_0 \\le a_1 \\le a_2 \\le a_3 \\le a_4$.

- If $x = a_2$, then $|a_0 - x| + |a_1 - x| + |a_2 - x| + |a_3 - x| + |a_4 - x| = a_2 - a_0 + a_2 - a_1 + a_2 - a_2 + a_3 - a_2 + a_4 - a_2$. Since the number of the elements less or equal $a_2$ and the number of the elements greater or equal $a_2$ are same and equal $[5/2] + 1 = 3$, so all $a_2$ are disappeared, and we have $a_4 + a_3 - a_1 - a_0 = S_{min}$

- If $x = a_1$, then $|a_0 - x| + |a_1 - x| + |a_2 - x| + |a_3 - x| + |a_4 - x| = a_1 - a_0 + a_1 - a_1 + a_2 - a_1 + a_3 - a_1 + a_4 - a_1$. Since the number of the elements less or equal $a_1$ is $[5/2] = 2$ and the number of the elements greater or equal $a_1$ is $[5/2] + 2 = 4$, so we have $a_4 + a_3 + a_2 - a_0 - 2 * a_1 = a_4 + a_3 - a_1 - a_0 + (a_2 - a_1) = S_{min} + (a_2 - a_1)$. Since $a_2 \\ge a_1$, we have $S_{min} + (a_2 - a_1) \\ge S_{min}$

- If $x = a_0$, then $|a_0 - x| + |a_1 - x| + |a_2 - x| + |a_3 - x| + |a_4 - x| = a_0 - a_0 + a_1 - a_0 + a_2 - a_0 + a_3 - a_0 + a_4 - a_0$. Since the number of the elements less or equal $a_0$ is $[5/2] - 1 = 1$ and the number of the elements greater or equal $a_0$ is $[5/2] + 3 = 5$, so we have $a_4 + a_3 + a_2 + a_1 - 4 * a_0 = a_4 + a_3 - a_1 - a_0 + (a_2 - a_0) + 2*(a_1 - a_0) = S_{min} + (a_2 - a_0) + 2*(a_1 - a_0)$. Since $a_2 \\ge a_0$ and $a_1 \\ge a_0$, we have $S_{min} + (a_2 - a_0) + 2*(a_1 - a_0) \\ge S_{min}$

- If $x = a_3$, then $|a_0 - x| + |a_1 - x| + |a_2 - x| + |a_3 - x| + |a_4 - x| = a_3 - a_0 + a_3 - a_1 + a_3 - a_2 + a_3 - a_3 + a_4 - a_3$. Since the number of the elements less or equal $a_3$ is $[5/2] + 2 = 4$ and the number of the elements greater or equal $a_3$ is $[5/2] = 2$, we have $a_4 + 2*a_3 - a_1 - a_0 - a_2 = S_{min} + (a_3 - a_2) \\ge S_{min}$

- If $x = a_4$, then $|a_0 - x| + |a_1 - x| + |a_2 - x| + |a_3 - x| + |a_4 - x| = a_4 - a_0 + a_4 - a_1 + a_4 - a_2 + a_4 - a_3 + a_4 - a_4$. Since the number of the elements less or equal $a_4$ is $[5/2] + 3 = 5$ and the number of the elements greater or equal $a_4$ is $[5/2] = 1$, we have $4*a_4 - a_3 - a_1 - a_0 - a_2 = S_{min} + (a_4 - a_2) + 2*(a_4 - a_3) \\ge S_{min}$

2) Let's consider an array of $6$ elements sorted in non-decreasing order $[a_0, a_1, a_2, a_3, a_4, a_5]$, where $a_0 \\le a_1 \\le a_2 \\le a_3 \\le a_4 \\le a_5$. If we delete the element $a_2$ or delete the element $a_3$ or insert an element $a_m$, where $a_m \\ge a_2$ and $a_m \\le a_3$, we have the array of odd number of the elements, and optimal choice is the element at the middle of the array.

So we can conclude that if $x$ is smaller then the median, the sum becomes greater than $S_{min}$, and if $x$ is larger then the median, the sum becomes greater than $S_{min}$. If the number of the elements of the array is even, both medians and all values between them are optimal choices.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1) Sort array $nums$
2) Find median value $m$ of this array
3) Using backtracking find the smallest palindromic number that is larger than or equal to $m$ and the largest palindromic number that is smaller than or equal to $m$
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n * logn + 10^5)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the number of the elements in the $nums$ array

# Code
```
use std::cmp::min;

impl Solution {
    pub fn minimum_cost(mut nums: Vec<i32>) -> i64 {
        let n = nums.len();
        
        nums.sort();

        let m = nums[n / 2];
        let t = Self::closest_palindrome(m);        

        min(
            nums.iter().fold(0, |s, n| s + (n - t.0).abs() as i64),
            nums.iter().fold(0, |s, n| s + (n - t.1).abs() as i64)
        )
    }
    
    pub fn closest_palindrome(m: i32) -> (i32, i32) {
        let mut n = m;
        let mut v = Vec::new();
        
        while n > 0 {
            v.push(n % 10);
            n /= 10;
        }
        
        let mut t = (1, 1_000_000_001);
        
        Self::search(0, &mut v, m, &mut t);
        
        t
    }
    
    pub fn search(i: usize, v: &mut Vec<i32>, m: i32, t: &mut (i32, i32)) {
        let l = v.len();
        
        if i == l / 2 + l % 2 {            
            let mut k = 0; 
            
            for j in 0..l {
               k = 10 * k + v[j];
            } 
            
            if k < m {
                if m - k < m - t.0 {
                    t.0 = k;
                }
            } else {
                if k - m < t.1 - m {
                    t.1 = k;
                } 
            }    
        } else {
            for n in 0..10 {
                let p = v[i];
                let q = v[l - i - 1];                

                v[i] = n;
                v[l - i - 1] = n;

                Self::search(i + 1, v, m, t);

                v[i] = p;
                v[l - i - 1] = q; 
            }                                  
        }
    }
}
```