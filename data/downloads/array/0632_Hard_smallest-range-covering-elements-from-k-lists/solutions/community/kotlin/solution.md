# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5906470/](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5906470/)

---

![1.webp](./images/0.webp)

https://youtu.be/rk_oN5WT9hc

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/767

#### Problem TLDR

Smallest intersection of `k` sorted lists #medium #heap #tree_set

#### Intuition

Keep track of `k` indices, increment the smallest:

```j

    // 4 10 15 24 26
    // 0 9  12 20
    // 5 18 22 30
    // (4,0,5) 0..5 0->9
    // (4,9,5) 4..9 4->10
    // (10,9,5) 5..10 5->18
    // (10,9,18) 9..18 9->12
    // (10,12,18) 10..18 10->15
    // (15,12,18) 12..18 12->20
    // (15,20,18) 15..20 15->24
    // (24,20,18) 18..24 18->22
    // (24,20,22) 20..24 20->x

```

If you know `TreeSet` data structure, it perfectly aligned with the task. Another way is to use a `heap` for a `min` and keep track of a `max` value.

#### Approach

* `set` should distinguish between the equal values, so include indices to compare

#### Complexity

- Time complexity:
$$O(nlog(n))$$

- Space complexity:
$$O(n)$$

#### Code

```kotlin []

    fun smallestRange(nums: List<List<Int>>): IntArray {
        var inds = IntArray(nums.size); var res = intArrayOf(0, Int.MAX_VALUE)
        val tree = TreeSet<Int>(compareBy({nums[it][inds[it]]}, { it }))
        tree += nums.indices
        while (tree.size == nums.size) {
            val j = tree.last(); val i = tree.pollFirst()
            val a = nums[i][inds[i]]; val b = nums[j][inds[j]]
            if (b - a < res[1] - res[0]) res = intArrayOf(a, b)
            if (++inds[i] < nums[i].size) tree += i
        }
        return res
    }

```
```rust []

    pub fn smallest_range(nums: Vec<Vec<i32>>) -> Vec<i32> {
        let (mut inds, mut res) = (vec![0; nums.len()], vec![0, i32::MAX]);
        let mut tree = BTreeSet::new();
        for i in 0..nums.len() { tree.insert((nums[i][0], i)); }
        while tree.len() == nums.len() {
            let (Some(&(b, _)), Some(&(a, i))) = (tree.last(), tree.first()) else { break };
            if b - a < res[1] - res[0] { res[0] = a; res[1] = b }
            tree.pop_first(); inds[i] += 1; 
            if inds[i] < nums[i].len() { tree.insert((nums[i][inds[i]], i)); }
        }; res
    }

```
```c++ []

    vector<int> smallestRange(vector<vector<int>>& nums) {
        vector<int> inds(nums.size()), res = {0, INT_MAX};
        set<pair<int,int>> tree;
        for (int i = 0; i < nums.size(); ++i) tree.emplace(nums[i][0], i);
        while (tree.size() == nums.size()) {
            auto [a, i] = *tree.begin(); auto [b, _] = *tree.rbegin();
            if (b - a < res[1] - res[0]) res = {a, b};
            tree.erase(tree.begin());
            if (++inds[i] < nums[i].size()) tree.emplace(nums[i][inds[i]], i);
        }
        return res;
    }

```