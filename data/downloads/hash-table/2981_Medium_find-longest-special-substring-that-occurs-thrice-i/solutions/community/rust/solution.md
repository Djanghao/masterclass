# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6131875/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6131875/)

---

![1.jpg](./images/0.jpeg)

https://youtu.be/duSxeDfaF2w

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/828

#### Problem TLDR

Max same-char 3-windows length #medium #sliding_window

#### Intuition

Problem size is small, brute force works: try every length, do a sliding window.

Slightly better is to do a binary search of window length.

The clever solution is to precompute window frequencies and then check every length:

```j

`aaaa` -> 'a' -> 1, 'aa' -> 1, 'aaa' -> 1, 'aaaa' -> 1

len: 4 -> 1, 3 -> f(4) + 1 = 2, 2 -> f(3) + 1 = 3 (take)

```

#### Approach

* try every approach

#### Complexity

- Time complexity:
$$O(n^2)$$ -> O(nlog(n)) -> O(n)

- Space complexity:
$$O(n)$$ -> O(1)

#### Code

```kotlin []

    fun maximumLength(s: String) =
        (s.length - 2 downTo 1).firstOrNull { len ->
            val f = IntArray(128)
            s.windowed(len).any { w -> w.all { it == w[0] } && ++f[w[0].code] > 2 }
        } ?: -1

```

```rust []

    pub fn maximum_length(s: String) -> i32 {
        let (mut lo, mut hi, b, mut r) = (1, s.len() - 2, s.as_bytes(), -1);
        while lo <= hi {
            let m = lo + (hi - lo) / 2; let mut f = vec![0; 26];
            if b[..].windows(m).any(|w|
                w.iter().all(|&x| x == w[0]) && {
                f[(w[0] - b'a') as usize] += 1; f[(w[0] - b'a') as usize] > 2
            }) { r = r.max(m as i32); lo = m + 1 } else { hi = m - 1 }
        }; r
    }

```

```c++ []

    int maximumLength(string s) {
        vector<vector<int>> f(26, vector<int>(s.size() + 1, 0));
        char p = '.'; int cnt = 0, res = -1;
        for (auto c: s) f[c - 'a'][c == p ? ++cnt : (cnt = 1)]++, p = c;
        for (int c = 0; c < 26; ++c)
            for (int l = s.size(), p = 0; l; --l)
                if ((p += f[c][l]) > 2) { res = max(res, l); break; }
        return res;
    }

```