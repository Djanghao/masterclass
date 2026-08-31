# Rust with pattern

**Author:** Boiethios
**Votes:** 17
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/292797/](https://leetcode.com/problems/regular-expression-matching/solutions/292797/)

---

This is ridiculously easy with a small parser:

```rust
impl Solution {
    pub fn is_match(s: String, p: String) -> bool {
        is_match(s.as_bytes(), p.as_bytes())
    }
}

fn is_match(s: &[u8], p: &[u8]) -> bool {
    match parse(p) {
        (Pattern::Empty, _) => s.is_empty(),
        (Pattern::Single(c), subp) => is_match_single(s, c, subp),
        (Pattern::Repeatable(c), subp) => is_match_single(s, c, p) || is_match(s, subp),
    }
}

fn is_match_single(s: &[u8], to_match: u8, p: &[u8]) -> bool {
    match s.split_first() {
        Some((c, s)) if to_match == b'.' || to_match == *c => is_match(s, p),
        _ => false,
    }
}

// Parser part:

enum Pattern {
    Empty,
    Single(u8),
    Repeatable(u8),
}

/// Returns the parsed pattern and the next pattern to parse.
fn parse(p: &[u8]) -> (Pattern, &[u8]) {
    match p.split_first() {
        None => (Pattern::Empty, p),
        Some((c, p)) => match p.split_first() {
            Some((b'*', p)) => (Pattern::Repeatable(*c), p),
            _ => (Pattern::Single(*c), p),
        },
    }
}
```

The most concise way top write that would be with the nightly `slice_patterns` feature:

```rust
#![feature(slice_patterns)]

fn is_match(s: &[u8], p: &[u8]) -> bool {
    match (p, s) {
        ([x, b'*', subp..], [y, subs..]) if *x == b'.' || x == y => is_match(subs, p),
        ([_, b'*', subp..], _) => is_match(s, subp),
        ([x, subp..], [y, subs..]) if *x == b'.' || x == y => is_match(subs, subp),
        ([], s) => s.is_empty(),
        _ => false,
    }
}
```