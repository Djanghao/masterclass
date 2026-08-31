# [Java/Python 3] Greedy w/ brief explanation and analysis.

**Author:** rock
**Votes:** 125
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783317/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783317/)

---

**Note:** For the rigorous proof of greedy algorithm correctness you can refer to 

similar problem: [881. Boats to Save People](https://leetcode.com/problems/boats-to-save-people/discuss/156855/javapython-3-onlogn-code-sorting-greedy-with-greedy-algorithm-proof) 

to prove it similarly.

----

1. Starting from smallest positive even, `2`, each iteration deduct it from the `finalSum` and increase by 2, till reach or go beyond `final sum`; 
2. Add the remaining part of the `finalSum` to the largest positive to make sure all are distinct.
**Note:** if the remaining part is `0`, then adding it to the largest positive will NOT influence anything; if NOT, then the remaining part must be less than or equal to the largest one, if NOT adding it to the largest one, there will be a **duplicate** number since we have traversed all positive even numbers that are less than or equal to the largest one. e.g., 

	`finalSum = 32`, and we have increased `i` from `2` to `10` and get `2 + 4 + 6 + 8 + 10 = 30`. Now `finalSum` has deducted `30` and now is `2`, which is less than the next value of `i = 12`. Since we must used up `finalSum`, but putting `finalSum = 2` back into the even number sequence will result duplicates of `2`; In addition, if we add `2` to any number other than the biggest `10`, there will be duplicates also. The only option is adding `2` to the largest one, `10`, to avoid duplicates.

```java
    public List<Long> maximumEvenSplit(long f) {
        LinkedList<Long> ans = new LinkedList<>();
        if (f % 2 == 0) {
            long i = 2;
            while (i <= f) {
                ans.offer(i);
                f -= i;
                i += 2;
            } 
            ans.offer(f + ans.pollLast());
        }
        return ans;
    }
```
```python
    def maximumEvenSplit(self, f: int) -> List[int]:
        ans, i = [], 2
        if f % 2 == 0:
            while i <= f:
                ans.append(i)
                f -= i
                i += 2
            ans[-1] += f
        return ans
```

**Analysis:**

Assume there are totally `i` iterations, so `2 + 4 + ... + 2 * i = (2 + 2 * i) * i / 2 =  i * (i + 1) = i + i`<sup>2</sup> `~ finalSum`, get rid of the minor term `i`, we have `i`<sup>2</sup> `~ finalSum`, which means `i ~ finalSum`<sup>0.5</sup>; therefore

Time: `O(n`<sup>0.5</sup>`)`, where `n = finalSum`, space: `O(1)`- excluding return space.