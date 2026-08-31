# ✅5 lines of clean and optimized code | detailed explanation

**Author:** SumitPokhriyal
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3730925/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3730925/)

---

# Intuition
Upon first reading the problem, my initial thoughts are to find the maximum number of consecutive answers of the same type (either "T" or "F") with at most k allowed flips.

# Approach
To solve this problem, I would iterate through the answerKey string using two pointers, i and j, where i represents the current position and j represents the starting position of the current consecutive sequence.

I would also maintain a count of the number of occurrences of each answer type ("T" and "F") using the cnt object.

For each position i, I would increment the count of the respective answer type in cnt. Then, I would check if the minimum count between "T" and "F" (i.e., Math.min(cnt.T, cnt.F)) is less than or equal to k. If it is, I would update the maximum length j by incrementing it.

However, if the minimum count exceeds k, it means we have used up all the allowed flips. In that case, I need to decrement the count of the answer type at position i - j (i.e., the answer type at the starting position of the current sequence) in order to consider the possibility of flipping it later. Then, I would continue the process by moving the starting position j one step forward.

Finally, I would return the maximum length j, which represents the maximum number of consecutive answers with at most k allowed flips.

# Complexity
- Time complexity: The algorithm iterates through the answerKey string once, so the time complexity is O(n), where n is the length of the answerKey string.
- Space complexity: The algorithm uses a constant amount of extra space for the cnt object, so the space complexity is O(1).

# Code
```
function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let j = 0 , cnt = { T : 0 , F : 0}, n = answerKey.length;
    for( let i = 0 ; i < n ; i++ )
        cnt[answerKey[i]]++ ,
        Math.min( cnt.T , cnt.F ) <= k ? j++ : cnt[answerKey[i - j]]--;
    return j
};
```