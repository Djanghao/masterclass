# Rust 2 brute force solutions

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/1246822/](https://leetcode.com/problems/count-good-triplets/solutions/1246822/)

---

Simple solution with 3 cycles. Runtime = **4 ms**
```
impl Solution {
    pub fn count_good_triplets(arr: Vec<i32>, a: i32, b: i32, c: i32) -> i32 {
        let mut counter = 0;

        for i in 0..arr.len() - 2 {
            for j in i + 1..arr.len() - 1 {
                if (arr[i] - arr[j]).abs() <= a {
                    for k in j + 1..arr.len() {
                        if (arr[j] - arr[k]).abs() <= b && (arr[i] - arr[k]).abs() <= c {
                            counter += 1;
                        }
                    }
                }
            }
        }
        counter
    }
}
```

It's strange, but long functional solution is faster. Runtime = **0 ms**
```
impl Solution {
    pub fn count_good_triplets(arr: Vec<i32>, a: i32, b: i32, c: i32) -> i32 {
        let mut counter = 0;
        let l = arr.len();

        arr[..l - 2].iter().enumerate().for_each(|(i, &ai)| {
            arr[..l - 1]
                .iter()
                .enumerate()
                .skip(i + 1)
                .filter(|(_, aj)| (ai - **aj).abs() <= a)
                .for_each(|(j, &aj)| {
                    arr[j + 1..l]
                        .iter()
                        .filter(|&&ak| (aj - ak).abs() <= b && (ai - ak).abs() <= c)
                        .for_each(|_| {
                            counter += 1;
                        })
                })
        });
        counter
    }
}
```
