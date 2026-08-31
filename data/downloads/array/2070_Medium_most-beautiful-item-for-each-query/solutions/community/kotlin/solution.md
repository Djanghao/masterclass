# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 5
**Link:** [https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6036393/](https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6036393/)

---

![1.webp](./images/0.webp)


https://youtu.be/BnRaBTepoqI

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/798

#### Problem TLDR

Queries of `max` beauty for `q[i]` price #medium #binary_search

#### Intuition

If we sort everything, we can do a line sweep: for each increasing `query` price move `items` pointer and pick `max` beauty.

More shorter solution is to do a BinarySearch for each query. But we should precompute `max beauty` for each item price range.

#### Approach

* Kotlin has a `binarySearchBy` but only for `List`
* Rust & C++ has a more elegant `partition_point`

#### Complexity

- Time complexity:
$$O(nlog(n))$$ for the Line Sweep and for the Binary Search

- Space complexity:
$$O(n)$$

#### Code

```kotlin []

    fun maximumBeauty(items: Array<IntArray>, queries: IntArray): IntArray {
        items.sortWith(compareBy({ it[0] }, { -it[1] }))
        for (i in 1..<items.size) items[i][1] = max(items[i][1], items[i - 1][1])
        return IntArray(queries.size) { i ->
            var j = items.asList().binarySearchBy(queries[i]) { it[0] }
            if (j == -1) 0 else if (j < 0) items[-j - 2][1] else items[j][1]
        }
    }

```
```rust []

    pub fn maximum_beauty(mut items: Vec<Vec<i32>>, queries: Vec<i32>) -> Vec<i32> {
        items.sort_unstable();
        items.dedup_by(|a, b| a[1] <= b[1]);
        queries.iter().map(|&q| {
            let j = items.partition_point(|t| q >= t[0]);
            if j < 1 { 0 } else { items[j - 1][1] }
        }).collect()
    }

```
```c++ []

    vector<int> maximumBeauty(vector<vector<int>>& items, vector<int>& queries) {
        sort(begin(items), end(items));
        for (int i = 1; i < items.size(); ++i) items[i][1] = max(items[i][1], items[i - 1][1]);
        vector<int> res;
        for (int q: queries) {
            auto it = partition_point(begin(items), end(items), 
                [q](const auto& x) { return q >= x[0];});
            res.push_back(it == begin(items) ? 0 : (*(it - 1))[1]);
        }
        return res;
    }

```