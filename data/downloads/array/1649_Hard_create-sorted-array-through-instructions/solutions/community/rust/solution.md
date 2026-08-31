# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/3183547/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/3183547/)

---

# Code
```
impl Solution {
    pub fn create_sorted_array(instructions: Vec<i32>) -> i32 {
        fn update(c: &mut [i32], x: i32) {
            let mut x = x as usize;
            while x < 100001 {
                c[x] += 1;
                x += x & x.wrapping_neg();
            }
        }

        fn get(c: &[i32], x: i32) -> i32 {
            let mut x = x as usize;
            let mut res = 0;
            while x > 0 {
                res += c[x];
                x -= x & x.wrapping_neg();
            }
            res
        }

        let mut c = vec![0; 100001];
        let mut res = 0;
        let n = instructions.len();
        let mod_num = 1_000_000_007;
        for (i, &item) in instructions.iter().enumerate().take(n) {
            let v1 = get(&c, item - 1);
            let v2 = i as i32 - get(&c, item);
            res = (res + v1.min(v2)) % mod_num;
            update(&mut c, item);
        }
        res
    }
}
```