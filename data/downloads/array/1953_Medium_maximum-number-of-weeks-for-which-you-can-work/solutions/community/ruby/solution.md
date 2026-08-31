# Easy Ruby Solution

**Author:** batterybrain
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1795004/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1795004/)

---

```
def number_of_weeks(milestones)
    max = milestones.max
    sum_of_rest = milestones.sum - max
    sum_of_rest >= max ? milestones.sum : sum_of_rest * 2 + 1
end
```