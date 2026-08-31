# Stack and Array

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/4295356/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/4295356/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn exclusive_time(n: i32, logs: Vec<String>) -> Vec<i32> {
        let n = n as usize;
        let mut r = vec![0; n];
        
        let mut s: Vec<(usize, i32, i32)> = Vec::new();
        let mut d = 0;

        for l in &logs {            
            let v: Vec<&str> = l.split(':').collect();

            let i = v[0].parse::<usize>().unwrap();
            let t = v[2].parse::<i32>().unwrap();            

            if v[1] == "start" {
                let n = s.len();

                if n > 0 {
                    s[n - 1].2 += t - s[n - 1].1;
                }

                s.push((i, t, 0));
            } else {
                let p = s.pop().unwrap();

                r[i] += p.2 - p.1 + t + 1;
                
                let n = s.len();

                if n > 0 {                    
                    s[n - 1].1 = t + 1;                
                }
            }
        }

        r
    }
}
```