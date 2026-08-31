# This problem needs to labelled as "banished at interviews", "Ok for education/competions"

**Author:** graham2181
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/4126423/](https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/4126423/)

---

# Intuition(what I think about this problem)

I think there should be a label on such problems like "Educational" or something like "Not a great interview problem unless you have 2 hours". I think the idea of asking coding problems at interviews should be to test weather a candidate can come up with multiple solutions each with differenet complexities and trade-offs to solve a problem. Yes one approach can borrow bits from the previous approach, but not use entirely new and overtly difficult ideas to get to a better solution.

There is really ONLY ONE way to do it in O(n) and on top of that you need to have 2-3 big intuitive leaps to get there. There seems to be no middle ground to solve this problem easily and no easy way to get from O(n^2) -> O(n log n) let alone O(n). There is no way to tradeoff more space to gain time unless you use a DP or combine other difficult concepts like Sparse Arrays and Binary trees which have overhead of their own. This problem allows for very little of that kind of thinking. 

Unless you know of some of these ideas upfront there is no way you can solve this in < 40  mins in an interview. 

# Approach(why do I feel this way)

LeetCode's own submission data for approaches other than using prefix sums and monostacks demonstrates this problem. The only alternate solutions I could find that are not quite using the prefix sum approach were pretty hard  DP ones (DP, mind you, is banned from some interview process like meta):

https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/2067907/bad-but-cool-and-educational-dp-solution/

https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/2062288/c-similar-as-lc907-one-pass-o-n-two-dp-simple-solution-with-explanation/

This one uses Binary trees and Sparse arrays(what!):
https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/3360654/c-sparse-table-prefix-sum-binary-search-o-n-log-n/

Constructive Feedback: Submission data can also be a good way to summarize how many ways there are to solve a problem and how complex it is. And then to tag them as such to warn others befoe they try to solve such problems.

# Complexity
- Time complexity:
O(n) if you can manage to convince yourself and the interviewer of the prefix sum and monotonic stack approach

- Space complexity:
O(n)

# Code
```
class Solution:
        """
        This is the editorial solution. NOT MINE.
        """
        def totalStrength(self, strength: List[int]) -> int:
            mod, n = 10 ** 9 + 7, len(strength)
            
            # Get the first index of the non-larger value to strength[i]'s right.
            right_index = [n] * n
            stack = []
            for i in range(n):
                while stack and strength[stack[-1]] >= strength[i]:
                    right_index[stack.pop()] = i
                stack.append(i)

            # Get the first index of the smaller value to strength[i]'s left.
            left_index = [-1] * n
            stack = []
            for i in range(n - 1, -1, -1):
                while stack and strength[stack[-1]] > strength[i]:
                    left_index[stack.pop()] = i
                stack.append(i)
                
            # prefix sum of the prefix sum array of strength.
            presum_of_presum =  list(accumulate(accumulate(strength, initial = 0), initial = 0))
            answer = 0
            # For each element in strength, we get the value of R_term - L_term.
            for i in range(n):
                # Get the left index and the right index.
                left_bound = left_index[i]
                right_bound = right_index[i]
                
                # Get the left_count and right_count (marked as L and R in the previous slides)
                left_count = i - left_bound
                right_count = right_bound - i
                
                # Get positive presum and the negative presum.
                neg_presum = (presum_of_presum[i + 1] - presum_of_presum[i - left_count + 1]) % mod
                pos_presum = (presum_of_presum[i + right_count + 1] - presum_of_presum[i + 1]) % mod
                
                # The total strength of all subarrays that have strength[i] as the minimum.
                answer += strength[i] * (pos_presum * left_count - neg_presum * right_count)
                answer %= mod
                
            return answer
```