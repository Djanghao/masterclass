# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050665/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050665/)

---

![1.webp](./images/0.webp)

https://youtu.be/uY_uQ3pcylM

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/802

#### Problem TLDR

Tops of consecutive increasing windows #medium #sliding_window

#### Intuition

Keep track of the start of the increasing part.

#### Approach

* brain-fog friendly approach is to maintain some queue to avoid one-offs with pointers

#### Complexity

- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

#### Code

```kotlin []

    fun resultsArray(nums: IntArray, k: Int): IntArray {
        val res = IntArray(nums.size - k + 1) { -1 }; var j = 0
        for ((i, n) in nums.withIndex()) {
            if (i > 0 && n != nums[i - 1] + 1) j = i
            if (i - k + 1 >= j) res[i - k + 1] = n
        }
        return res
    }

```

```rust []

    pub fn results_array(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let (mut j, k) = (0, k as usize);
        let mut res = vec![-1; nums.len() - k + 1];
        for i in 0..nums.len() {
            if i > 0 && nums[i] != nums[i - 1] + 1 { j = i }
            if i + 1 >= j + k { res[i - k + 1] = nums[i] }
        }; res
    }

```
```c++ []

    vector<int> resultsArray(vector<int>& n, int k) {
        vector<int> r(n.size() - k + 1, -1);
        for (int i = 0, j = 0; i < n.size(); ++i) {
            if (i && n[i] != n[i - 1] + 1) j = i;
            if (i - k + 1 >= j) r[i - k + 1] = n[i];
        }
        return r;
    }

```
```kotlin []

    fun resultsArray(nums: IntArray, k: Int): IntArray {
        var queue = 1; var prev = 0
        return nums.map { n ->
            queue = if (n == prev + 1) min(queue + 1, k) else 1
            prev = n
            if (queue == k) n else -1
        }.takeLast(nums.size - k + 1).toIntArray()
    }

```