# Rust Solution Brute Force

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3838170/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3838170/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn minimum_string(a: String, b: String, c: String) -> String {
        let mut data = vec![];

        let t = Self::combine(&a, &b, &c);
        data.push((t.len(), t));
        let t = Self::combine(&a, &c, &b);
        data.push((t.len(), t));
        let t = Self::combine(&b, &a, &c);
        data.push((t.len(), t));
        let t = Self::combine(&b, &c, &a);
        data.push((t.len(), t));
        let t = Self::combine(&c, &a, &b);
        data.push((t.len(), t));
        let t = Self::combine(&c, &b, &a);
        data.push((t.len(), t));
        data.sort();

        data[0].1.clone()
    }

    fn combine(a: &String, b: &String, c: &String) -> String {
        let t = Self::add(a, b);
        Self::add(&t, c) 
    }

    fn add(s: &String, t: &String) -> String {
        if let Some(a) = s.find(t) { return s.clone() }
        if let Some(a) = t.find(s) { return t.clone() }
        
        let mut s = s.clone().chars().into_iter().collect::<Vec<_>>();
        let t = t.clone().chars().into_iter().collect::<Vec<_>>();
        let (n1, n2) = (s.len(), t.len());
        let (n, mut len) = (n1.min(n2), 0);

        for k in (1 ..= n).rev() {
            let mut good = true;
            for i in 0 .. k {
                if s[n1 - k + i] == t[i] { continue }
                good = false;
                break
            }
            if good == false { continue }
            len = k;
            break
        }
        for i in len .. n2 { s.push(t[i]); }
        
        s.into_iter().collect::<String>()
    }
}
```