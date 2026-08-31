# [Python3] Positive prefix sum (1 traversal) + comments + intuition - O(N) time, O(N) space

**Author:** alexbardas
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/1104605/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/1104605/)

---

**Intuition**


1. Length of flowers array is 10^5   => the algorithm needs to be O(n) or O(nlogn)
2. There is always a valid solution so don't worry about edge cases (e.g no solution)
3. In order to compute the max sum, we only need to include the positive numbers between the first and the last
4. First and last might be negative, so we have to take this into account when we compute the maxsum
5. Everything can be done in one traversal:
	- use a list for the positive prefix sums
	- use a hashtable to store the first position of every flower


**Solution**


```
        positive_prefix_sum = [0]
        positions = {}
        maxsum = -inf

        for idx, flower in enumerate(flowers):
            positive_val = flower if flower >= 0 else 0
            negative_val = flower if flower < 0 else 0
            positive_prefix_sum += [positive_prefix_sum[-1] + positive_val]
            # in order to maximize the sum, we are only interested in
            # the first position of every element
            if not flower in positions:
                positions[flower] = idx
            else:
                # given that negative numbers are not part of the prefix sum,
                # we need to include them if they are the first / last items
                first_pos = positions[flower]
                newsum = 2 * negative_val + positive_prefix_sum[idx + 1] - positive_prefix_sum[first_pos]
        
                maxsum = max(maxsum, newsum)
        return maxsum
```