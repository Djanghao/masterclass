# [Java/Python 3] 3 conditionals w/ brief explanation and analysis.

**Author:** rock
**Votes:** 13
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/2322459/](https://leetcode.com/problems/best-poker-hand/solutions/2322459/)

---

1. If all characters in `suits` are same, then it is `Flush`;
2. If there are at least `3` values in `ranks` are same, it is `Three of a Kind`;
3. If there are`2` values in `ranks` are same, it is `Pair`;
4. Otherwise, it is `High Card`.

```java
    public String bestHand(int[] r, char[] s) {
        int[] cnt = new int[14];
        IntStream.of(r).forEach(i -> ++cnt[i]);
        int max = IntStream.of(cnt).max().getAsInt();
        if (s[0] == s[1] && s[1] == s[2] && s[2] == s[3] && s[3] == s[4]) {
            return "Flush";
        }else if (max >= 3) {
            return "Three of a Kind";
        }else if (max == 2) {
            return "Pair";
        }else {
            return "High Card";
        }
    }
```
```python
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        if len(set(suits)) == 1:
            return "Flush"
        match max(Counter(ranks).values()):
            case 3 | 4 | 5:
                return "Three of a Kind"
            case 2:
                return "Pair"
            case _:
                return "High Card"
```
or 

```python
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        cnt = Counter(ranks)
        if len(set(suits)) == 1:
            return "Flush"
        elif max(cnt.values()) >= 3:
            return "Three of a Kind"
        elif max(cnt.values()) == 2:
            return "Pair"
        else:
            return "High Card"
```

**Analysis:**

Time: `O(r + s)`, where `r = ranks.length, s = suits.length`;
space: 
java code - `O(range)`, where `range` is the upper bound of the `ranks`
Python 3 - `O(# of distinct values in ranks)`