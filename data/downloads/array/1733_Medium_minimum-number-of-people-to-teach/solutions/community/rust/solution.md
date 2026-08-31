# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/3208580/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/3208580/)

---

# Code
```
impl Solution {
    pub fn minimum_teachings(n: i32, languages: Vec<Vec<i32>>, friendships: Vec<Vec<i32>>) -> i32 {
        fn check(a: &[Vec<i32>], u: usize, v: usize, mem: &mut [Vec<i32>]) -> bool {
            if mem[u][v] != 0 {
                return mem[u][v] == 1;
            }
            for i in 0..a[v].len() {
                if a[u].binary_search(&a[v][i]).is_ok() {
                    mem[v][u] = 1;
                    mem[u][v] = 1;
                    return true;
                }
            }
            mem[u][v] = -1;
            mem[v][u] = -1;
            false
        }

        let mut languages = languages;
        let mut mem = vec![vec![0; languages.len() + 1]; languages.len() + 1];
        let mut ret = languages.len() as i32;
        for language in languages.iter_mut() {
            language.sort();
        }
        for lang in 1..=n {
            let mut count = 0;
            let mut teach = vec![false; languages.len()];
            for friendship in friendships.iter() {
                let u = friendship[0] as usize - 1;
                let v = friendship[1] as usize - 1;
                if check(&languages, u, v, &mut mem) {
                    continue;
                }
                if languages[u].binary_search(&lang).is_err() {
                    if !teach[u] {
                        count += 1;
                    }
                    teach[u] = true;
                }
                if languages[v].binary_search(&lang).is_err() {
                    if !teach[v] {
                        count += 1;
                    }
                    teach[v] = true;
                }
            }
            ret = ret.min(count);
        }
        ret
    }
}
```