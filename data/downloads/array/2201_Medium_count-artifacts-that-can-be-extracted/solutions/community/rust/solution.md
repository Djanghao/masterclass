# Rust, HashSet, O(n)

**Author:** goodgoodwish
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1850456/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1850456/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn dig_artifacts(n: i32, artifacts: Vec<Vec<i32>>, dig: Vec<Vec<i32>>) -> i32 {
        let mut ans = 0;
        let mut xs:HashSet<(i32, i32)> = HashSet::new();
        for v1 in dig {
            let x = v1[0];
            let y = v1[1];
            xs.insert((x, y));
        }
        
        for v in artifacts {
            let (r1,c1,r2,c2) = (v[0], v[1], v[2], v[3]);
            let mut covered = true;

            'area_loop:
            for r in r1..=r2 {
                for c in c1..=c2 {
                    if !xs.contains(&(r,c)) {
                        covered = false;
                        break 'area_loop;
                    }
                }
            }
            if covered {
                ans += 1;
            }
        }
        ans
        
    }
}
```