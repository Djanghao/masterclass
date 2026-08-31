# Division

**Author:** votrubac
**Votes:** 54
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1953645/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1953645/)

---

If we buy `cnt` pens, we can buy up to `(total - cnt * cost1) / cost2 + 1` pencils. We do plus one as we can also buy zero pencils. 

**C++**
```cpp
long long waysToBuyPensPencils(int total, int cost1, int cost2) {
    long long res = 0;
    for (int cnt = 0; cnt * cost1 <= total; ++cnt)
        res += (total - cnt * cost1) / cost2 + 1;
    return res;
}
```

#### Recursive one-liner
**C++**
```cpp
long long waysToBuyPensPencils(int total, int cost1, int cost2) {
    return total < 0 ? 0 : 1 + total / cost2 + waysToBuyPensPencils(total - cost1, cost1, cost2);
}
```