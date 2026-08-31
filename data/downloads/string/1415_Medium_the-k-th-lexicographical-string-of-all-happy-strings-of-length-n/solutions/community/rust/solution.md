# Backtracking

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/3929039/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/3929039/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Backtrack and set the answer if k-th combination is reached. To achieve the ordering constraint, just iterate over [a, b, c] candidates in order and skip a letter if it was used last in the current combination.

# Complexity
- Time complexity: $O(3*2^{N-1})$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
fn backtrack(n: usize, k: &mut i32, cur: &mut Vec<u8>, ans: &mut String) {
    if n == 0 {
        *k -= 1;
        if *k == 0 { *ans = String::from_utf8(cur.clone()).unwrap() }
        return;
    }
    for letter in [b'a', b'b', b'c'] {
        if !cur.is_empty() && *cur.last().unwrap() == letter { continue }
        if *k == 0 { break; }

        cur.push(letter);
        backtrack(n - 1, k, cur, ans);
        cur.pop();
    }
}

impl Solution {
    pub fn get_happy_string(n: i32, mut k: i32) -> String {
        let mut ans = String::new();
        backtrack(n as usize, &mut k, &mut Vec::new(), &mut ans);
        ans
    }
}
```