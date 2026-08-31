# [Rust / C++]: Undo The Stamps + Explanation

**Author:** seandewar
**Votes:** 6
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/1135900/](https://leetcode.com/problems/stamping-the-sequence/solutions/1135900/)

---

This works by undoing the stamping done to `target` in multiple passes.

For every pass of `target`, we consider all stamped substrings with the same length as `stamp` that we haven't undone yet (non-`?` characters remain in the substring).
We can undo the stamp only if every character in the stamped substring:

1. Equals the character at the same position in `stamp`.
2. Is a `?` character.

To undo this stamp, we fill the substring with `?` characters, `push()` the start index of the substring to our output, and continue for the other substrings in `target`.

Once the pass is done (all substrings considered), we begin a new pass of `target` if stamped characters still remain (non-`?` characters remain in `target`).
However, if we couldn't undo *any* stamps during our previous pass, then it isn't possible to unstamp anymore; we return empty output.

Our output will be in reverse order, hence we need to `reverse()` it before returning.

---

**Example**:
Using input `stamp = "abca"`, `target = "aabcaca"`, this takes 2 passes from the start of `target`:

**Pass 1**:
`a[abca]ca` - Substring `abca` at index 1 can be undone. `target` is now `a????ca`. Output is `[1]`.
`a??[??ca]` - Substring `??ca` at index 3 can be undone. `target` is now `a??????`. Output is `[1, 3]`.

**Pass 2**:
`[a???]???` - Substring `a???` at index 0 can be undone. `target` is now `???????`. Output is `[1, 3, 0]`.

`target` now only contains `?`s; we managed to undo all stamps!
Reverse the output to `[0, 3, 1]`, and return it.

---

**Rust**:
```rust
impl Solution {
    pub fn moves_to_stamp(stamp: String, target: String) -> Vec<i32> {
        let (stamp, mut target) = (stamp.as_bytes(), target.into_bytes());
        let mut res = Vec::new();

        while target.iter().any(|&c| c != b'?') {
            let prev_res_len = res.len();

            for i in 0..target.len() - stamp.len() + 1 {
                let sub = &mut target[i..i + stamp.len()];

                if sub.iter().any(|&c| c != b'?')
                    && sub.iter().zip(stamp.iter()).all(|(&wc, &sc)| wc == sc || wc == b'?')
                {
                    sub.iter_mut().for_each(|c| *c = b'?');
                    res.push(i as _);
                }
            }
            if res.len() == prev_res_len {
                return Vec::new();
            }
        }

        res.reverse();
        res
    }
}
```

**C++**:
```cpp
class Solution {
public:
    vector<int> movesToStamp(string stamp, string target) {
        auto isUndone = [](auto it, auto endIt) {
            return all_of(it, endIt, [](char c) { return c == '?'; });
        };
        vector<int> res;

        while (!isUndone(begin(target), end(target))) {
            auto prevResSize = size(res);

            for (size_t i = 0; i < size(target) - size(stamp) + 1; ++i) {
                auto it = begin(target) + i, endIt = it + size(stamp);
                if (isUndone(it, endIt))
                    continue;

                size_t j = 0;
                for (; j < size(stamp) && (*(it + j) == stamp[j] || *(it + j) == '?'); ++j);

                if (j == size(stamp)) {
                    fill(it, endIt, '?');
                    res.push_back(i);
                }
            }
            if (prevResSize == size(res))
                return {};
        }

        reverse(begin(res), end(res));
        return res;
    }
};
```

---

**Note**: inputs such as `stamp = "ab"`, `target = "aaaaaaaaaab"` can slow down this algorithm a bit, as we'll only be able to unstamp one substring per pass of `target`.

One way to mitigate this is to reverse the iteration order for `i` in the `for` loop between each `while` loop pass in the code above.
For example, in Rust:

```rust
let iter = 0..target.len() - stamp.len() + 1;
for i in iter.clone().chain(iter.rev()) {
    ...
}
```