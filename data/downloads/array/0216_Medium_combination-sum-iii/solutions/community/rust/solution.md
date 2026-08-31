# [Rust] Backtracking

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/2026104/](https://leetcode.com/problems/combination-sum-iii/solutions/2026104/)

---


```rust
pub fn combination_sum3(k: i32, n: i32) -> Vec<Vec<i32>> {
    // If the sum from 1-to-k is greater than N, then there
    // is no solution. The formula to sum the numbers from
    // 1-to-k is: `n * (n + 1) / 2`
    if k * (k + 1) / 2 > n {
        return vec![];
    }

    let mut answer = vec![];
    backtrack(&mut answer, &mut vec![], 1, n, k);
    answer
}

fn backtrack(
    // The answer stores all found solutions
    answer: &mut Vec<Vec<i32>>,
    // The buffer holds the current answer candidate
    buffer: &mut Vec<i32>,
    // From which number to start iterating on the next recursive call
    // We use it to avoid duplicate combinations such as [1,2] and [2,1]
    from: i32,
    // We use the sum to track when we have reached the answer.
    // Every number we add a number to the buffer we subtract it
    // from the sum. Thus when it reaches 0, we have found the answer
    sum: i32,
    // Track how many numbers we need to add to the buffer
    rem: i32,
) {
    // We have reached the limit of numbers (i.e. K)
    if rem == 0 {
        // If we have found a solution, add it to the answers
        if sum == 0 {
            answer.push(buffer.clone());
        }

        return;
    }

    for idx in from..10 {
        // Because we are iterating the numbers in increasing order,
        // if the sum becomes negative, the next numbers cannot possibly
        // be in the answer, thus break out of the loop.
        if sum - idx < 0 {
            break;
        }

        buffer.push(idx);
        backtrack(answer, buffer, idx + 1, sum - idx, rem - 1);
        buffer.pop();
    }
}
```