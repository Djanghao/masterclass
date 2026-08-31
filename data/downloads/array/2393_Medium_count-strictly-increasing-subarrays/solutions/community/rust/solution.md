# Rust: math formula method

**Author:** user0053RC
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4613999/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4613999/)

---

# Intuition
The problem requires us to count subarrays where each subarray consists of strictly increasing sequences in the given `nums` vector. The key intuition here is that for each continuous increasing sequence of length `n`, there are `n * (n + 1) / 2` possible subarrays. This is because each element can be the start of a new subarray, and the number of subarrays ending at each element increases cumulatively. Visually, you can kind of see this in the example whereby the each final max length subsequence causes a 'triangle' of subsequences until sub-sequence length 1 is reached.

# Approach
1. **Iterate Through the `nums` Vector**: We start from the first element and iterate through the `nums` vector to identify the lengths of all increasing sequences.

2. **Count Increasing Sequences**: For each element, we compare it with the previous one. If it's greater, it means the sequence is continuing, and we increase our counter. If not, we conclude the sequence.

3. **Store Length of Each Sequence**: Each time a sequence ends (or the array ends), we store the length of this sequence in the `incr_seqs_len` vector.

4. **Calculate Subarrays for Each Sequence**: After processing the entire vector, we use the formula `n * (n + 1) / 2` for each sequence length `n` stored in `incr_seqs_len` to calculate the total number of subarrays.

5. **Sum Up All Counts**: Finally, we sum up these counts to get the total number of subarrays for the entire `nums` vector.

# Complexity
- Time complexity: The time complexity is $$O(n)$$, where `n` is the length of the input vector `nums`. This is because we iterate through all elements of `nums` exactly once.

- Space complexity: The space complexity is $$O(n)$$ in the worst case. This worst case occurs when the entire `nums` array is an increasing sequence, resulting in only one element in `incr_seqs_len` that is equal to the length of `nums`.


# Code
```
impl Solution {
    pub fn count_subarrays(nums: Vec<i32>) -> i64 {
        
        // solutiuon: Create vector that counts the running length of increasing sequences
        // - then for each value v in sequence add: v*(v+1)/2

        let mut incr_seqs_len: Vec<i64> = vec![];
        
        let nums_len = nums.len();

        let mut counter:i64 = 1;

        for idx in 1..nums_len {
            if nums[idx-1] < nums[idx] {
                counter+= 1;
            } else {
                incr_seqs_len.push(counter);
                counter=1;
            }
        }
        incr_seqs_len.push(counter);

        let final_val:i64 = incr_seqs_len.iter()
                                            .map( |&x| x * (x+1) / 2 )
                                            .sum();
        final_val

    }
}
```