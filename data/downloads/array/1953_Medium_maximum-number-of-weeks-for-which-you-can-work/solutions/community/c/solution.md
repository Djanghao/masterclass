# O(n)

**Author:** votrubac
**Votes:** 55
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1375479/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1375479/)

---

I got a working solution using a max heap, then tried to optimized it to push through TLE. No luck. 

This prolem seems to requrie prior knowledge or a very good intuition:

> We can complete all milestones for all projects, unless one project has more milestones then all other projects combined.
> 
> For the latter case: 
	>> We can complete all milestones for other projects, 
	>> plus same number of milestones for the largest project, 
	>> plus one more milestone for the largest project.
>
> After that point, we will not be able to alternate projects anymore.

**C++**
```cpp
long long numberOfWeeks(vector<int>& m) {
    long long sum = accumulate(begin(m), end(m), 0ll), max = *max_element(begin(m), end(m));
    return min(sum, 2 * (sum - max) + 1);
}
```
**Java**
```java
public long numberOfWeeks(int[] m) {
    long sum = IntStream.of(m).asLongStream().sum(), max = IntStream.of(m).max().getAsInt();
    return Math.min(sum, 2 * (sum - max) + 1);
}
```
**Python 3**
```python
class Solution:
    def numberOfWeeks(self, m: List[int]) -> int:
        return min(sum(m), 2 * (sum(m) - max(m)) + 1)
```