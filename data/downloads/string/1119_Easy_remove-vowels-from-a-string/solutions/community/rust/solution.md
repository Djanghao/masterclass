# Rust 4 different ways (only 3 of which are allowed on leetcode):

**Author:** mike72
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/1167062/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/1167062/)

---

Faster than 100%
```rust
s.retain(|c| !"aeiou".contains(c));
```

Around half as fast as the `retain` method (when benchmarking on my machine):
```rust
s.replace(&['a', 'e', 'i', 'o', 'u'][..], "")
```

Nearly 5 times slower than the `replace` method:
```rust
    s.chars()
        .map(|c| match c {
            'a' | 'e' | 'i' | 'o' | 'u' => "".to_string(),
            _ => c.to_string(),
        })
        .collect()
```

Can't do on leetcode, but around the same speed as the `replace` method
```rust
let re = Regex::new("[aeiou]").unwrap();
re.replace_all(&s, "").to_string()
```