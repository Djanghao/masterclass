# Rust 1ms 🔥 2.12Mb ☄️ Solution 🦀

**Author:** rony0000013
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5139407/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5139407/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn kth_smallest_prime_fraction(arr: Vec<i32>, k: i32) -> Vec<i32> {
        let (mut l, mut r) = (0f64, 1f64);
        let (mut p, mut q) = (0, 1);
        while l < r {
            let m = (l + r) / 2f64;
            let (mut cnt, mut j) = (0usize, 0usize);
            p = 0; q = 1;
            for i in 0..arr.len() {
                let tmp = arr[i] as f64 / m;
                while j < arr.len() && tmp > arr[j] as f64  {j+=1;}
                if j == arr.len() {break;}
                cnt += arr.len() - j;
                if p * arr[j] < q * arr[i] {
                    p=arr[i]; q=arr[j];
                }
            }
            
            if cnt == k as usize {break;}
            else if cnt < k as usize {l = m;}
            else {r = m;}
        }
        vec![p, q]
    }
}
```