# Rust || Floyd Warshall || DP || Index compression

**Author:** namitnayan32
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4456333/](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4456333/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- substrings are disjoint, which allows using dp.

# Approach
<!-- Describe your approach to solving the problem. -->
- calculate cost before hand.
- Use it in dp.
- Index compression to optimize hashmap calls.

# Complexity
- Time complexity: O(N^3) for floyd
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N^2) cost map.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections:: { HashMap, HashSet };
use std::cmp:: { min };

impl Solution {
    pub fn minimum_cost(source: String, target: String, original: Vec<String>, changed: Vec<String>, cost: Vec<i32>) -> i64 {
        let n = source.len();
        let (conv_cost, word_id_map, len_set) = Self::get_conv_cost_map(&original, &changed, &cost);
        let dp = Self::get_cost(&source, &target, &conv_cost, &word_id_map, &len_set);
        if dp[n] == i64::MAX {-1} else {dp[n]}
    }

    fn get_conv_cost_map<'a>(original: &'a Vec<String>, changed: &'a Vec<String>, cost: &'a Vec<i32>) -> (Vec<Vec<i64>>, HashMap<&'a str, usize>, HashSet<usize>) {
        let n = changed.len();
        let mut word_id_map = HashMap::<&str, usize>::new();
        let mut len_set = HashSet::new();
        let mut id = 0;
        for s in original {
            let key = &s[..];
            if !word_id_map.contains_key(key) {
                word_id_map.insert(key, id);
                id += 1;
                len_set.insert(s.len());
            }
        }
        for s in changed {
            let key = &s[..];
            if !word_id_map.contains_key(key) {
                word_id_map.insert(key, id);
                id += 1;
            }
        }
        let mut conv_cost = vec![vec![i64::MAX; id << 1]; id << 1];
        for i in 0..id {
            conv_cost[i][i] = 0i64;
        }
        for i in 0..n {
            let key1 = *word_id_map.get(&original[i][..]).unwrap();
            let key2 = *word_id_map.get(&changed[i][..]).unwrap();
            conv_cost[key1][key2] = min(conv_cost[key1][key2], cost[i] as i64);
        }
        for k in 0..id {
            for i in 0..id {
                let cost1 = conv_cost[i][k];
                if cost1 == i64::MAX {
                    continue;
                }
                for j in 0..id {
                    let cost2 = conv_cost[k][j];
                    let cost3 = conv_cost[i][j];
                    if cost2 != i64::MAX && cost3 > cost1 + cost2 {
                        conv_cost[i][j] = cost1 + cost2;
                    }
                }
            }
        }
        (conv_cost, word_id_map, len_set)
    }

    fn get_cost<'a>(source: &'a String, target: &'a String, conv_cost: &'a Vec<Vec<i64>>, word_id_map: &'a HashMap<&'a str, usize>, len_set: &'a HashSet<usize>) -> Vec<i64> {
        let n = source.len();
        let mut dp = vec![i64::MAX; n + 1];
        dp[0] = 0i64;
        for i in 0..n {
            if dp[i] != i64::MAX {
                if source.as_bytes()[i] == target.as_bytes()[i] {
                    dp[i + 1] = min(dp[i + 1], dp[i]);
                }
                for j in len_set {
                    if i + j <= n && word_id_map.contains_key(&source[i..(i+j)]) && word_id_map.contains_key(&target[i..(i+j)]) {
                        let key1 = *word_id_map.get(&source[i..(i+j)]).unwrap();
                        let key2 = *word_id_map.get(&target[i..(i+j)]).unwrap();
                        let curr_cost = conv_cost[key1][key2];
                        if curr_cost != i64::MAX {
                            dp[i + j] = min(dp[i + j], dp[i] + curr_cost);
                        }
                    }
                }
            }
        }
        dp
    }
}

```