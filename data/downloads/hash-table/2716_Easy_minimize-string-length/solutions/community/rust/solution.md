# Rust | Typescript ✅

**Author:** Kay-79
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/6068229/](https://leetcode.com/problems/minimize-string-length/solutions/6068229/)

---

# Code
```rust []
impl Solution {
    pub fn minimized_string_length(s: String) -> i32 {
        let mut result = 0;
        let mut caches: Vec<char> = Vec::new();
        for c in s.chars() {
            if !caches.contains(&c) {
                result += 1;
                caches.push(c);
            }
        }
        result
    }
}
```
```typescript []
function minimizedStringLength(s: string): number {
    let result = 0;
    let caches: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (!caches.includes(s[i])) {
            result++;
            caches.push(s[i]);
        }
    }
    return result;
}
```