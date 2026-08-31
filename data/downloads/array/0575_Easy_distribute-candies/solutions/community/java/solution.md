# [Java] 3 codes. Beats 100%

**Author:** shk10
**Votes:** 23
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/1087856/](https://leetcode.com/problems/distribute-candies/solutions/1087856/)

---

Solution is to choose as many unique candy types as we can without exceeding the hard limit of n / 2 so the problem reduces to counting how many distinct candy types are there.

**Approach 1: HashSet**
Most obvious and versatile choice for our use case is to use a HashSet.

```
// 33 ms. 62%
public int distributeCandies(int[] candyType) {
    Set<Integer> set = new HashSet<>();
    for(int candy: candyType) {
        set.add(candy);
    }
    return Math.min(candyType.length / 2, set.size());
}
```

**Approach 2: Boolean array**
Leveraging on input limits, we can use a boolean array to achieve better runtime.

```
// 3 ms. 100%
public int distributeCandies(int[] candyType) {
    boolean[] type = new boolean[200001];
    int count = 0, max = candyType.length / 2;
    for(int candy: candyType) {
        int t = candy + 100000;
        if(!type[t]) {
            if(++count == max) return max;
            type[t] = true;
        }
    }
    return count;
}
```

**Approach 3: BitSet**
We can alternatively use a bitset if we'd like to optimize space.

```
// 6 ms. 98.66%
public int distributeCandies(int[] candyType) {
    BitSet bits = new BitSet(200001);
    int count = 0, max = candyType.length / 2;
    for(int candy: candyType) {
        int t = candy + 100000;
        if(!bits.get(t)) {
            if(++count == max) return max;
            bits.set(t);
        }
    }
    return count;
}
```