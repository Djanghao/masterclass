# C++ log2 1 line

**Author:** anwendeng
**Votes:** 65
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/4220289/](https://leetcode.com/problems/poor-pigs/solutions/4220289/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I don't like the description.
Change the variable names to timeTest, timeDetect.

# Approach
<!-- Describe your approach to solving the problem. -->
The total test time is `timeTest`. It needs time `timeDetect` to detect whether the choosen bucket is poisonous. 

One pig can eat at most `int(timeTest/timeDetect)` buckets until the detecting result outcomes, and can detect `int(timeTest/timeDetect)+1` buckets. Let $B$=`int(timeTest/timeDetect)+1`

There are $B$ choices for each pig. How many choices for $x$ pigs?
$$
B^x!
$$

Find the minimal integer $x$ such that $$
B^x\\geq buckets.
$$
$$
\\iff x\\geq \\log_B(buckets)=\\frac{\\log_2(buckets)}{\\log_2(B)}
$$
# Why log2 not log or log10?

Computer uses binary expression. There is some hint. https://graphics.stanford.edu/~seander/bithacks.html#IntegerLogLookup
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ assumming that those used built-in functions are $O(1)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
class Solution {
public:
    int poorPigs(int buckets, int timeDetect, int timeTest) {
        return ceil(log2(buckets)/log2(int(timeTest/timeDetect)+1));
    }
};
```
# Code without using log 0ms beats 100%
```
#pragma GCC optimize("O3")
class Solution {
public:
    int poorPigs(int buckets, int timeDetect, int timeTest) {
        signed x=0, B=timeTest/timeDetect+1, P=1;
        #pragma unroll
        for( ; P<buckets; x++) P*=B;
        return x;
    }
};
```
# Python Code also 1 line
```
class Solution:
    def poorPigs(self, buckets: int, timeDetect: int, timeTest: int) -> int:
        return ceil(log2(buckets)/log2(timeTest//timeDetect+1))
        
```