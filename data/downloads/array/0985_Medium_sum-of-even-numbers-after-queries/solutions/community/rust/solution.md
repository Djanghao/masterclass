# Rust | Update Sum | With Comments

**Author:** wallicent
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2604371/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2604371/)

---

Calculate the initial sum of even elements. For each query, remove element to be updated from the sum if it's even, update the value, and add the updated element to the sum if it's even.

For both the solutions, I am using the trick to `if let` the query `Vec` as a slice, to avoid manual indexing. In Rust, it would actually have been more appropriate for `queries` to be `&[(i32, usize)]`.

We own `nums`, so the caller is in no way affected if we mutate it, which we do to avoid allocating anything on the heap ourselves.

**Imperativish Style**

I am using some functional style elements here, like `filter` and `map`, just to make the solution a little less verbose.

```
impl Solution {
    pub fn sum_even_after_queries(mut nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut sum: i32 = nums.iter().filter(|num| **num % 2 == 0).sum();
        let mut rez = vec![];
        let mut it = queries.iter().map(|query| query.as_slice());
        while let Some(&[val, index]) = it.next() {
            let index = index as usize;
            if nums[index] % 2 == 0 { sum -= nums[index]}
            nums[index] += val;
            if nums[index] % 2 == 0 { sum += nums[index]}
            rez.push(sum);
        }
        rez
    }
}
```

**Functional Style**

Likewise, this is not strictly functional, since we are mutating `nums` instead of copying it, for efficiency.

```
impl Solution {
    pub fn sum_even_after_queries(mut nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        queries.iter().filter_map(|query| if let &[val, index] = query.as_slice() { Some((val, index as usize)) } else { None })
            .scan(nums.iter().filter(|num| **num % 2 == 0).sum::<i32>(), |sum, (val, index)| {
                if nums[index] % 2 == 0 { *sum -= nums[index]}
                nums[index] += val;
                if nums[index] % 2 == 0 { *sum += nums[index]}
                Some(*sum)
            }).collect()
    }
}
```