# Simple Ruby Solution

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/4723587/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/4723587/)

---

# Intuition

The rationale is that we can get to the minimum sum if we ensure we always choose the element of the pair that minimizes the sum. Suppose that the array's length, n, is much larger than k to simplify the thought process:

- k is 2: there's no way to get that sum, so the minimum sum is sum(1..n)
- k is 3: we can get to 3 by doing 1+2=3. We eliminate 2, as having it in the range wouldn't minimize the sum. The minimum sum 1..n excluding 2;
...
- k is 6: 1+5 and 2+4 get to 6. We eliminate 5 and 4 to minimize the sum;

# Complexity
- Time complexity:
O(2 * n) = O(n), as we're seeing at most 2N numbers;

- Space complexity:
O(n), as we're storing at most N numbers there;

# Code
```
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def minimum_sum(n, k)
    return (1..n).to_a.sum if k <= 2

    skip = {}
    sum = 0
    curr = 1

    while n > 0
        if skip[curr]
            curr += 1
        else
            skip[k - curr] = true
            sum += curr
            curr += 1
            n -= 1
        end
    end

    sum
end

# k-avoiding: two pairs can't have sum == k
# multiple k-avoiding arrays exist. if all values > k, then it's k-avoiding. 
# - the values in the array should be distinct.
# - we need to find the solution that minimizes the sum fo its elements

# n >> k
# sum is 2 => trivial
# sum is 3 => we eliminate 2, as 1+2=3. the other option was to eliminate 2
# sum is 4 => 2+2=4(w/e),3+1=4. we eliminate 2
# sum is 5 => 2+3=5, 1+4=5. we eliminate 3 and 4
# sum is 6 => 1+5, 2+4, 3+3(w/e). we eliminate 5 and 4
# 
```