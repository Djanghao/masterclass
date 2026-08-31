# Rust another solution

**Author:** BigMih
**Votes:** 7
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/1247094/](https://leetcode.com/problems/shuffle-string/solutions/1247094/)

---

Runtime = **4 ms** (1 line, but slower with fold)
```
impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        s.chars()
            .zip(indices)
            .fold(vec![' '; s.len()], |mut v, (c, ind)| {
                v[ind as usize] = c;
                v
            })
            .into_iter()
            .collect()
    }
}
```

Runtime = **0 ms**
```
impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let mut v = vec![' '; s.len()];
        s.chars().zip(indices).for_each(|(c, ind)| {
            v[ind as usize] = c;
        });
        v.into_iter().collect()
    }
}
```
Cyclic Sort. Runtime = **0 ms**
```
impl Solution {
    pub fn restore_string(s: String, mut indices: Vec<i32>) -> String {
        let mut v = s.into_bytes();
        for i in 0..v.len() {
            while indices[i] != i as i32 {
                let new_ind = indices[i] as usize;
                v.swap(i, new_ind);
                indices.swap(i, new_ind);
            }
        }
        String::from_utf8(v).unwrap()
    }
}
```