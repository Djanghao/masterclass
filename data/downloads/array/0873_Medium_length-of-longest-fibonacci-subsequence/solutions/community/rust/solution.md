# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/2965420/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/2965420/)

---

# Code
```
impl Solution {
    pub fn len_longest_fib_subseq(arr: Vec<i32>) -> i32 {
        let n = arr.len();
        let mut mp = std::collections::HashMap::new();
        for (i, &v) in arr.iter().enumerate() {
            mp.insert(v, i);
        }
        let mut temp = 0;
        for i in 0..n - 2 {
            for j in i + 1..n - 1 {
                let mut sum = 2;
                let mut first = arr[i];
                let mut second = arr[j];
                while mp.contains_key(&(first + second)) {
                    sum += 1;
                    let third = first + second;
                    first = second;
                    second = third;
                }
                temp = std::cmp::max(temp, sum);
            }
        }
        if temp >= 3 {
            temp
        } else {
            0
        }
    }
}
```