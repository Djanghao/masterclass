# Optimal rust approach.

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/3127271/](https://leetcode.com/problems/count-unhappy-friends/solutions/3127271/)

---

# Complexity
- Time complexity: $$O(n ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$ ?
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn unhappy_friends(n: i32, prefs: Vec<Vec<i32>>, pairs: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let (prefs, pairs) = (Self::pref_up(&prefs, n), Self::pair_up(pairs, n));
        let mut ans = 0;
        // If x prefers u over y and u prefers x over v
        for a in 0..n {
            // a lovers
            if (0..n).any(|v| prefs[a][v] < prefs[a][pairs[a]] && prefs[v][a] < prefs[v][pairs[v]])
            {
                ans += 1;
            }
        }
        ans
    }

    fn pref_up(prefs: &Vec<Vec<i32>>, n: usize) -> Vec<Vec<usize>> {
        let mut ans = vec![vec![n; n]; n];
        for (num, pref) in prefs.into_iter().enumerate() {
            for (pos, &fav) in pref.into_iter().enumerate() {
                ans[num][fav as usize] = pos;
            }
        }
        ans
    }

    fn pair_up(pairs: Vec<Vec<i32>>, n: usize) -> Vec<usize> {
        let mut ans = vec![n; n];
        for pair in pairs {
            let (a, b) = (pair[0] as usize, pair[1] as usize);
            ans[a] = b;
            ans[b] = a;
        }
        ans
    }
}

```