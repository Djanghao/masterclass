# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/3109516/](https://leetcode.com/problems/html-entity-parser/solutions/3109516/)

---

# Code
```
impl Solution {
    pub fn entity_parser(text: String) -> String {
        let mut s = String::new();
        let mut i = 0;
        while i < text.len() {
            if text[i..].starts_with("&quot;") {
                s.push('"');
                i += 6;
            } else if text[i..].starts_with("&apos;") {
                s.push('\\'');
                i += 6;
            } else if text[i..].starts_with("&amp;") {
                s.push('&');
                i += 5;
            } else if text[i..].starts_with("&gt;") {
                s.push('>');
                i += 4;
            } else if text[i..].starts_with("&lt;") {
                s.push('<');
                i += 4;
            } else if text[i..].starts_with("&frasl;") {
                s.push('/');
                i += 7;
            } else {
                s.push(text[i..].chars().next().unwrap());
                i += 1;
            }
        }
        s
    }
}
```