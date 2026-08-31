# Rust with bit masking

**Author:** Minamikaze392
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090185/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090185/)

---

# Intuition\r
We want to know for a substring, whether each letter appears odd or even number of times.\r
With the letters being within the range from`'a'`to`'j'`, the total number of variations is just `2^10 = 1024`.\r
Furthermore, since the information can be considered as "10 boolean variables", we can represent it as a 10-bit mask.\r
\r
# Code\r
```\r
impl Solution {\r
    pub fn wonderful_substrings(word: String) -> i64 {\r
        let mut ans = 0i64;\r
        let mut count = [0i64; 1024];\r
        count[0] = 1;\r
        let mut acc = 0usize;\r
        for b in word.bytes() {\r
            let bit = 1usize << (b - b'a');\r
            acc ^= bit;\r
            ans += count[acc];\r
            for i in 0..10 {\r
                ans += count[acc ^ (1usize << i)];\r
            }\r
            count[acc] += 1;\r
        }\r
        ans\r
    }\r
}\r
```