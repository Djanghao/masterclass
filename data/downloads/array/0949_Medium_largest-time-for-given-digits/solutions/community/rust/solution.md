# rust nested iterators for the lulz

**Author:** stevensonmt
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/677961/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/677961/)

---

```
    pub fn largest_time_from_digits(a: Vec<i32>) -> String {
        
        let iter = (0_usize..4_usize).into_iter();
        let max = iter.clone()
            .filter(|&i| a[i] < 3)
            .map(|i| iter.clone()
                        .filter(|&j| j != i && (a[i] != 2 || a[j] < 4) )
                        .map(|j| iter.clone()
                                     .filter(|&k| k != j && k != i && a[k] < 6)
                                     .map(|k| iter.clone()
                                                 .filter(|&l| l != k && l != j && l != i)
                                                 .map(|l| a[i] *600 + a[j]*60 + a[k] * 10 + a[l])
                                                 .max()
                                                 
                                                 
                                        ).max()
                                        
                        ).max()
                        
                )
            .max();
        match max {
            Some(Some(Some(Some(x)))) => format!("{:0>2}:{:0>2}", x /60, x%60),
        _ => "".to_string()
        }       
    }
```