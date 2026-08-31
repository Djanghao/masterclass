# ✅ Fast Rust Solution (Beat 100% Rust Submission)

**Author:** erikrios
**Votes:** 0
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/5684535/](https://leetcode.com/problems/subdomain-visit-count/solutions/5684535/)

---

```
use std::collections::HashMap;

impl Solution {
    pub fn subdomain_visits(cpdomains: Vec<String>) -> Vec<String> {
        let mut sub_domain_visit_counter = HashMap::new();

        for cpdomain in cpdomains {
            let cpdomain: Vec<String> = cpdomain.split(' ').map(String::from).collect();
            let rep: i32 = cpdomain[0].parse().unwrap();
            let sub_domain = &cpdomain[1];

            let mut sub_domain: Vec<&str> = sub_domain.split('.').collect();

            while !sub_domain.is_empty() {
                let domain = sub_domain.join(".");
                sub_domain_visit_counter
                    .entry(domain.clone())
                    .and_modify(|e| *e += rep)
                    .or_insert(rep);

                sub_domain.remove(0);
            }
        }

        sub_domain_visit_counter
            .into_iter()
            .map(|(key, value)| format!("{} {}", value, key))
            .collect()
    }
}
```