# [Rust] Intuitive explanation with development from O(n^2) to O(n) time and O(1) space

**Author:** ticklin
**Votes:** 4
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/1367477/](https://leetcode.com/problems/best-sightseeing-pair/solutions/1367477/)

---

### Solution 1A

For every spot `i`, compare it to all other spots `j` and calculate the score of the pair. Update the `max_score` found so far accordingly.

```rust
    pub fn max_score_sightseeing_pair(values: Vec<i32>) -> i32 {
        let mut max_score = i32::MIN;
        
        for i in 0..values.len() {
            for j in 0..values.len() {
                if i == j { 
                    continue; 
                }
                let (I, J) = (i as i32, j as i32);
                max_score = cmp::max(max_score, values[i] + values[j] - (I - J).abs());
            }
        }
        max_score
    }
```
Time complexity: O(N^2)

Space complexity: O(1)

### Solution 1B

Let's observe that for every `i`, it is sufficient to only consider pairing with `j > i`.
Why ?
- All pairs with `j < i` have already been considered since every `i` pairs with all `j > i`
- `j == i` is not considered since they both refer to the same spot

```rust
    pub fn max_score_sightseeing_pair(values: Vec<i32>) -> i32 {
        let mut max_score = i32::MIN;
        
        for i in 0..values.len() {
            for j in i + 1..values.len() {
                let (I, J) = (i as i32, j as i32);
                max_score = cmp::max(max_score, values[i] + values[j] - (I - J).abs());
            }
        }
        max_score
    }
```
Time complexity: O(N^2)

Space complexity: O(1)

### Solution 2A
We observe that with the inner for loop, we're asking the question: 
> For every `i`, what is the maximum score possible on pairing with a `j > i` (or `j` to the right of `i`) ? We then add `value[i]` to this `max_score`

How to find this maximum to the right of `i` ?
Let's define an array `max_right` to store the maximum value to the right of every `i` to be `max(values[i], max_right[i + 1] - 1`. This includes its value. This makes sense since we'll query `max_right[i + 1]` from `max_right[i]`. 
`- 1` is to subtract the distance between `i` and `j`. 

Since we need `max_right[i + 1]` to calculate `max_right[i]`, we traverse the array from back to front. We're propagating the `max_right` seen so far from the `right` to the `left`. Therefore, we subtract 1 to account for the left shift in this 'propagation'.

Consider the following example:
``` rust
    let values = [8,1,5,2,6];
```

The simplest `i` for which the above question can be answered is the last element in the array, `values[4] = 6` since there's no element to its right.
What about `values[3] = 2` ? Only one `j` to its right so the `max_right` is `max(values[3], max_right[4] - 1) = 6 - 1 = 5`.

Here's the complete table for all `i`:

| `i`         | 0 | 1 | 2 | 3 | 4 |
| ----------- | - | - | - | - | - |
| `values`    | 8 | 1 | 5 | 2 | 6 |
| `max_right` | 8 | 4 | 5 | 5 | 6 |


``` rust
    pub fn max_score_sightseeing_pair(values: Vec<i32>) -> i32 {
        // max value to the right of i(including itself)
        let mut max_right = values.clone(); 
        for i in (1..values.len() - 1).rev() {
            max_right[i] = cmp::max(values[i], max_right[i + 1] - 1);
        }
        
        let mut max_score = i32::MIN;
        for i in (0..values.len() - 1).rev() - 1 {
            max_score = cmp::max(max_score, values[i] + max_right[i + 1] - 1);
        }
        max_score
    }
```
> `max_right[values.len() - 1] = values[values.len() - 1]`

> `max_right[i]` is calculated up to index `i = 1` only since there's no index `-1` to lookup `max_right[0]`

Time complexity: O(N)

Space complexity: 0(N)

### Solution 2B
Since we only lookup one index ahead, `max_right` does not need to be an array

``` rust
    pub fn max_score_sightseeing_pair(values: Vec<i32>) -> i32 {        
        let mut max_score = i32::MIN;
        let mut max_right = values[values.len() - 1];

        for i in (0..values.len() - 1).rev() {
            max_score = cmp::max(max_score, values[i] + max_right - 1);
            max_right = cmp::max(values[i], max_right - 1);
        }
        max_score
    }
```

Time complexity: O(N)

Space complexity: O(1)