# [Python3] Sorting + Prefix Sum + Binary Search - Very Detail Solution

**Author:** dolong2110
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3992088/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3992088/)

---

# Description
You are given three lists: heroes, monsters, and money; the code is a Python solution to the problem. The objective is to determine the most coins that may be obtained by slaying the hero's capable monsters for each hero.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialization
- `mon_cost` is a list of tuple containing  the `monsters` and `coins` together in sorted <b>increasing</b> order of the `monsters`' <b>power</b>. This way, you know how many coins each monster yields.
- `ps` is a [prefix sum](https://en.wikipedia.org/wiki/Prefix_sum) array, where `ps[i]` will contain the sum of coins reiceived for defeating the first `i` monsters.
- `res` is the list that will hold the maximum coins that each hero can collect.
2. Calculate Prefix Sum for Monsters
- Loop through `mon_cost` and fill the `ps` array. It will help in quickly finding the total coins for a range of monsters with Time Complexity (TC) $$O(1)$$.
3. Find Maximum Coins for Each Hero
- For each hero `h`, use [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) to find the strongest monster that the hero can beat.
- Append the maximum coins corresponding to that monster to `res`.

# Steps
1. Concantenate monter with coin and  Sort Monsters by monster's power value
```
mon_cost = sorted(list(zip(monsters, coins)))
```
2. Calculate Prefix Sum for Monsters' Coins
```
# This is a common way to implement a prefix sum array
ps = [0]
for _, c in mon_cost: 
    ps.append(ps[-1] + c)
```
- Adds up coins as you loop through sorted `mon_cost`, storing them in `ps`.
3. Binary Search for Each Hero
```
for h in heroes:
    # Common way to implement binary search
    l, r = 0, len(monsters) - 1
    while l <= r:
        m = (l + r) // 2
        if mon_cost[m][0] > h: 
            r = m - 1
        else: 
            l = m + 1
```
- For each hero, this binary search finds the index `l` of the strongest monster they can defeat.
4. Append Coins to Result
```
res.append(ps[l])
```
- Using index `l`, `ps[l]` gives us the maximum coins a hero can collect. We append it to `res`.
5. Return Result
```
return res
```
- Return the `res` list, which contains the answer for each hero.

# Complexity
- Time complexity: $$O(NlogN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maximumCoins(self, heroes: List[int], monsters: List[int], coins: List[int]) -> List[int]:
        mon_cost = sorted(list(zip(monsters, coins)))
        ps = [0]
        for _, c in mon_cost: ps.append(ps[-1] + c)

        res = []
        for h in heroes:
            l, r = 0, len(monsters) - 1
            while l <= r:
                m = (l + r) // 2
                if mon_cost[m][0] > h: r = m - 1
                else: l = m + 1
            res.append(ps[l])
        return res
```

# Keys Take Away
- The use of sorting and prefix sum optimizes the problem.
- Binary search helps to find the range of monsters a hero can defeat quickly.
- Prefix sum allows for constant-time lookup to find the sum of coins a hero can collect.

This is very nice problem that requires many skills combining. This code is a good example of combining multiple techniques like sorting, prefix sum, and binary search to solve a problem efficiently.

Very Appreciated @bparanj for helping me writing this detailed explanation

# PLease Upvote It If You Find It Useful