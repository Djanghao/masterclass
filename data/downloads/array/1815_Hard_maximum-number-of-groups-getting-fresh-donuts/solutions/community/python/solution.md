# [Python] Top Down DP - with a little greed

**Author:** rowe1227
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/1144399/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/1144399/)

---

**Approach:**

Firstly, notice that the maximum group size is only 30.
That's just a little bit too large to try all possible combinations of groups (max &approx; 20 elements).

So let's see how we can optimize our approach.

Our goal is to have as many possible groups get served where the first person
receives the first donut in a batch.  Logically, we can bump any group that is divisible by `batchSize`
to the front of the line.  Every one of these groups will receive <b>one</b> fresh batch.

Following the same logic, all pairs of groups that are divisible by `batchSize` should go next.
This way every other group receives one fresh batch of donuts.

These first two steps can be performed greedily since they are fully constrained.
```html5
i.e. batchSize = 7
For single group there is only one choice, all groups where size % batchSize is zero. 
    <b>i.e. 7, 14, 21, ...</b>
For pairs of groups the first group <b>must be paired with a group of size batchSize - size</b> 
    <b>i.e. 1 must be paired with 6.</b>
         <b>2 must be paired with 5.</b>
		 <b>3 must be paired with 4.</b>
```

However... for groups of size 3 or larger it gets more complicated.
```html5
i.e. batchSize = 7
[2, 2, 3, 6, 6, 6, 6]
Do we pair 2 with (2, 3) or with (6, 6)? Yes, one of these answers is the wrong choice.

<b>Our decision now will affect the possible group combinations that can be made later on.</b>
If we pick [2, 2, 3] then we're left with: [6, 6, 6, 6] for 2 points
But if we pick [2, 6, 6] then we're left with: [2, 6, 6], [3] for 3 points.
```

And here's where dynamic programming steps in.
After greedily serving all possible customers in clusters of groups of size 1 or size 2 we will 
hopefully have narrowed down our group list to less than 20 elements.

The DP solution is to iterate over all customer groups and if the customer group has not been used, 
then decide whether or not to add them to the current group.
If we add them to the group, mark the customer group as used via bitmasking and then update the total group size.
When the total group size is divisible by the batchSize (when `r == 0`) then add one point to the result.
Return the option that results in the most points.

<hr>

**Optimizations:**

1. Greedy: All groups that are divisible by batchSize can go first.
2. Greedy: All pairs of groups that are divisible by batchsize can go next.
3. All groups &geq; batchSize can be treated as `group % batchSize` without any loss of information.
4. Pruning: When performing top-down dp, if you've already tried adding a group of size `g` to the current group,
then do not consider adding any other groups of size `g` to the current group, the result will be the same.

```python
class Solution:
    def maxHappyGroups(self, batchSize: int, groups: List[int]) -> int:
        
        @functools.lru_cache(None)
        def helper(rem, used):
            if used == target:
                return 0
            seen = set()
            best = 0
            for i in range(len(groups)):
                if not (bitmask[i] & used):
                    if groups[i] not in seen:
                        seen.add(groups[i])
                        r = (rem + groups[i]) % batchSize
                        best = max(best, helper(r, used | bitmask[i]))
                        if r == 0:
                            return int(rem == 0) + best
            return int(rem == 0) + best
        
        # 1. Greedily serve all groups that are a multiple of batchSize first.
        new_groups = [g%batchSize for g in groups]
        res = len(groups) - len(new_groups)
        groups = new_groups
        
        # 2. Greedily serve all pairs of groups where group1 + group2 is a multiple of batchsize.
        count = collections.defaultdict(int)
        for g in groups:
            target = batchSize - g
            if count[target]:
                count[target] -= 1
                res += 1
            else:
                count[g] += 1
        
        # 3. Use top-down DP to find the optimal configuration of the remaining groups.        
        groups = sum([[i]*count[i] for i in count], [])
        target = (1 << len(groups)) - 1
        bitmask = [1 << i for i in range(len(groups))]
        return res + helper(0, 0)
```