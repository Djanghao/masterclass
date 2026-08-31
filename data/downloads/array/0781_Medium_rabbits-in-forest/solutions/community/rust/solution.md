# SImple Solution

**Author:** n0b0dy01
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/4900111/](https://leetcode.com/problems/rabbits-in-forest/solutions/4900111/)

---

# Code
```

use std::collections::HashMap;
impl Solution {
    pub fn num_rabbits(answers: Vec<i32>) -> i32 {
        let map = answers.iter().fold(HashMap::new(), |mut map, number| {
            *map.entry(*number).or_insert(0) += 1;
            map
        });
        map.into_iter()
            .map(|(num, freq)| if freq >= 1 && num > 0{ 
                if freq > num + 1{
                   (freq + num) / (num + 1) * (num + 1)
                }else{
                num  + 1 
                }
                } else if num == 0 {freq} else {0})
            .sum::<i32>()
    }
}

```