# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/3160622/](https://leetcode.com/problems/making-file-names-unique/solutions/3160622/)

---

# Code
```
impl Solution {
    pub fn get_folder_names(names: Vec<String>) -> Vec<String> {
        let mut m = std::collections::HashMap::<String, usize>::new();
        let mut ans = Vec::new();
        for name in names.iter() {
            if let Some(k) = m.get(name) {
                let mut k = *k;
                let mut str2 = String::new();
                loop {
                    str2 = format!("{name}({k})");
                    *m.entry(name.clone()).or_insert(0) += 1;
                    k += 1;
                    if !m.contains_key(&str2) {
                        break;
                    }
                }
                *m.entry(str2.clone()).or_insert(0) += 1;
                ans.push(str2);
            } else {
                *m.entry(name.clone()).or_insert(0) += 1;
                ans.push(name.clone());
            }
        }
        ans
    }
}
```