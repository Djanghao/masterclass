# Why is it always SORT!!!?

**Author:** user8272RT
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716486/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716486/)

---

# Intuition
I had the rudimentary intuition, but fumbled at the implementation during the contest. Why? Because a hard problem cannot just be a simple sort, right? Well, it is!

We know that targets must be sequentially eliminated, thus the choice of target depends on.

1. High damage: Because they are a serious threat.
2. Low hits: Because, these little guys which can be killed easily will keep wittling away at Bob's health if he focuses on tanky targets instead.

Thus, we need to sort the targets in non-increasing order of damage/hits

# Approach
1. Sort by damage/hits
2. Sum the damage on Bob by iterating through the targets in the sorted array.

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```golang []
func minDamage(power int, damage []int, health []int) int64 {
    dmg:=0.0
    arr:=make([][]float64, len(damage))
    for i:=range damage{
        dmg+=float64(damage[i])
        hits:=math.Ceil(float64(health[i])/float64(power))
        arr[i]=[]float64{float64(damage[i])/hits, float64(damage[i]), hits}
    }
    sort.Slice(arr, func(i, j int) bool{
        return arr[i][0]>arr[j][0]
    })
    var ans float64
    for i:=range arr{
        ans+=dmg*arr[i][2]
        dmg-=arr[i][1]
    }
    return int64(ans)
}
```