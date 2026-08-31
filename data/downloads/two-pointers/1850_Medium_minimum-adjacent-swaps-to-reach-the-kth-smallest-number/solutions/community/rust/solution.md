# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/3221108/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/3221108/)

---

# Code
```
impl Solution {
    pub fn get_min_swaps(num: String, k: i32) -> i32 {
        fn nxt_perm(num: &[char]) -> Vec<char> {
            let mut num = num.to_vec();
            let n = num.len() as i32;
            let mut i = n - 1;
            while i > 0 && num[(i - 1) as usize] >= num[i as usize] {
                i -= 1;
            }
            let mut j = i;
            while j < n && num[(i - 1) as usize] < num[j as usize] {
                j += 1;
            }
            num.swap((i - 1) as usize, (j - 1) as usize);
            num[i as usize..].reverse();
            num
        }

        let mut nxt_k_num = num.chars().collect::<Vec<char>>();
        let n = nxt_k_num.len();
        for _ in 0..k {
            nxt_k_num = nxt_perm(&nxt_k_num);
        }
        let mut ans = 0;
        let mut num = num.chars().collect::<Vec<char>>();
        for i in 0..n {
            let mut j = i;
            while j < n && nxt_k_num[i] != num[j] {
                j += 1;
            }
            ans += (j - i) as i32;
            num[i..=j].rotate_right(1);
        }
        ans
    }
}
```