# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-happy-string/solutions/5919764/](https://leetcode.com/problems/longest-happy-string/solutions/5919764/)

---

![1.webp](./images/0.webp)

https://youtu.be/5eLQ2sZAqmU

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/770

#### Problem TLDR

Longest string of `a`, `b`, `c` not repeating 3 times #medium #greedy

#### Intuition

The brute force full DFS with backtracking gives TLE.

The hints suggest to invent a greedy algorithm, but for me it was impossible to invent it in a short time.

So the algorithm from a discussion: `always take the most abundant letter, one by one, and avoid to add 3 times the same letter`. Why it works? Like many things in life, it just is. Maybe someone with a big IQ can tell.

#### Approach

* look at the hints
* look at the discussion
* to keep track of the added times, we can maintain a `possible` array, where each value is at most 2

#### Complexity

- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

#### Code

```kotlin []

    fun longestDiverseString(a: Int, b: Int, c: Int) = buildString {
        val abc = arrayOf(a, b, c); 
        val possible = arrayOf(min(2, a), min(2, b), min(2, c))
        while (true) {
            val i = (0..2).filter { possible[it] > 0 }.maxByOrNull { abc[it] } ?: break
            append('a' + i); abc[i]--; possible[i]--
            for (j in 0..2) if (j != i) possible[j] = min(2, abc[j])
        }
    }

```
```rust []

    pub fn longest_diverse_string(a: i32, b: i32, c: i32) -> String {
        let (mut abc, mut possible) = ([a, b, c], [2.min(a), 2.min(b), 2.min(c)]);
        std::iter::from_fn(|| {
            let i = (0..3).filter(|&i| possible[i] > 0).max_by_key(|&i| abc[i])?;
            abc[i] -= 1; possible[i] -= 1; 
            for j in 0..3 { if i != j { possible[j] = 2.min(abc[j]) }}
            Some((b'a' + i as u8) as char)
        }).collect()
    }

```
```c++ []

    string longestDiverseString(int a, int b, int c) {
        string r; array<int, 3> abc{a, b, c}, possible{min(2,a), min(2,b), min(2,c)};
        while (true) {
            int i = -1, max = 0; 
            for (int j = 0; j < 3; ++j) if (possible[j] > 0 && abc[j] > max) i = j, max = abc[j];
            if (i < 0) break; r += 'a' + i; --abc[i]; --possible[i];
            for (int j = 0; j < 3; ++j) if (i != j) possible[j] = min(2, abc[j]);
        }
        return r;
    }

```