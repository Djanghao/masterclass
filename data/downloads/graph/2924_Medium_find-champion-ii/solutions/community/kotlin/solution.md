# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/6084633/](https://leetcode.com/problems/find-champion-ii/solutions/6084633/)

---

![1.webp](./images/0.webp)

https://youtu.be/f4Lm2z665rw

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/812

#### Problem TLDR

Root of the graph #medium

#### Intuition

Look at the examples, the champion is the node without incoming edges.

#### Approach

* the answer is difference between all nodes `0..n` and excluded nodes from `edges[i][1]`
* we can use a HashSet, an array with flags or a bitset

#### Complexity

- Time complexity:
$$O(n + e)$$

- Space complexity:
$$O(n + e)$$, or O(n) or O(e)

#### Code

```kotlin []

    fun findChampion(n: Int, edges: Array<IntArray>) =
        ((0..<n) - edges.map { it[1] })
            .takeIf { it.size == 1 }?.first() ?: -1

```
```rust []

    pub fn find_champion(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let mut s: HashSet<i32> = (0..n).collect();
        for e in edges { s.remove(&e[1]); }
        if s.len() == 1 { *s.iter().next().unwrap() } else { -1 }
    }

```
```c++ []

    int findChampion(int n, vector<vector<int>>& edges) {
        bitset<100> b; for (int i = n; i--;) b[i] = 1;
        for (auto e: edges) b[e[1]] = 0;
        return b.count() == 1 ? b._Find_first() : -1;
    }

```