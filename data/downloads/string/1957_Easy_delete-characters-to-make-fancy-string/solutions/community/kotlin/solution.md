# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5992217/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5992217/)

---

![1.webp](./images/0.webp)

https://youtu.be/HiPJSO-zXi4

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/787

#### Problem TLDR

Filter 3+ repeating chars from string #easy

#### Intuition

Several way to do this: counter, comparing two previous with current, regex, two pointers (and maybe simd and pattern matching idk)

#### Approach

* let's do some golf
* regex is slow

#### Complexity

- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$, or O(1) for in-place where language permits

#### Code

```kotlin []

    fun makeFancyString(s: String) =
        s.filterIndexed { i, c ->
            i < 2 || c != s[i - 1] || c != s[i - 2]
        }

```
```rust []

    pub fn make_fancy_string(mut s: String) -> String {
        let (mut cnt, mut prev) = (0, '.');
        s.retain(|c| {
            if c == prev { cnt += 1 } else { cnt = 1 }
            prev = c; cnt < 3
        }); s
    }

```
```c++ []

    string makeFancyString(string s) {
        return regex_replace(s, regex("(.)\\\\1\\\\1+"), "$1$1");
    }

```