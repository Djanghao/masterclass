# [Java] 5 approaches with explanation and clean codes

**Author:** shk10
**Votes:** 34
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/988061/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/988061/)

---

**Approach 1: Count pairs using array - Naive**
Since we're only dealing with 16 bit numbers, ```A[i]```, ```A[i] & A[j]``` or ```A[i] & A[j] & A[k]``` everything lies within 16 bits only. 2<sup>16</sup> = 65,536 which is not a very big number so we can consider generating all ```A[i] & A[j]``` pairs and counting their frequencies using a HashMap or an array. After that, we can check for each ```A[i]```, which of these pairs yield 0 when taken AND with ```A[i]```.

```
// 147 ms. 70%
public int countTriplets(int[] A) {
    int[] count = new int[1 << 16];
    for(int a: A) for(int b: A) count[a & b]++;
    int res = 0;
    for(int a: A) for(int i = 0; i < count.length; i++) if((a & i) == 0) res += count[i];
    return res;
}
```

**Approach 2: Count pairs using Trie**
We can build a trie of depth 16 and insert all ```A[i] & A[j]``` values into it. Leaf of the trie node stores the count of the number represented by that path. Then, for each ```A[i]```, we can find how many pairs when taken AND with ```A[i]``` give 0 by traversing the trie bit by bit. If at any time, bit of ```A[i]``` is 1, then we traverse bit 0 child only whereas if bit of ```A[i]``` is 0, we traverse both bit 0 and 1 children.

```
// 196 ms. 65.56%
class Trie {
    private int count = 0;
    private Trie[] child = new Trie[2];
    public void add(int num) {
        Trie node = this;
        for(int i = 15; i >= 0; i--) {
            int b = (num >> i) & 1;
            if(node.child[b] == null) node.child[b] = new Trie();
            node = node.child[b];
        }
        node.count++;
    }
    private int find(Trie node, int num, int i) {
        return node == null ? 0 : (i == -1 ? node.count : (find(node.child[0], num, i - 1) + (((num >> i) & 1) == 0 ? find(node.child[1], num, i - 1) : 0)));
    }
    public int countZeroAND(int num) {
        return find(this, num, 15);
    }
}
public int countTriplets(int[] A) {
    Trie trie = new Trie();
    for(int a: A) for(int b: A) trie.add(a & b);
    int res = 0;
    for(int a: A) res += trie.countZeroAND(a);
    return res;
}
```

**Approach 3: Count pairs using array - Trie based search**
We can optimize previous approach by noting that we're only dealing with 2<sup>16</sup> = 65,536 possible values so we should consider using an array instead of a Trie to speed things up. But this does not mean that we're back to naive search of approach 1, we leverage the trie based bit by bit search technique and apply it using a recursive search method. Idea is that search starts with the whole range ```[L, R]``` and based on bit of ```A[i]``` gets split into calls of ```[L, M]``` and ```[M + 1, R]``` where ```M = (L + R) / 2```.
```
// 29 ms. 97.78%
private int find(int[] count, int a, int i, int p) {
    return i == -1 ? count[p] : find(count, a, i - 1, p) + (((a >> i) & 1) == 0 ? find(count, a, i - 1, p + (1 << i)) : 0);
}
public int countTriplets(int[] A) {
    int[] count = new int[1 << 16];
    for(int a: A) for(int b: A) count[a & b]++;
    int res = 0;
    for(int a: A) res += find(count, a, 15, 0);
    return res;
}
```

**Approach 4: Count pairs using array - Skip useless numbers**
In naive approach 1, we're iterating over all the values from 0 to 2<sup>16</sup>-1 for each ```A[i]```. But we can make this loop faster by skipping over numbers that we can be sure wouldn't give 0 when taken AND with ```A[i]```. Let's say, ```a``` (from ```A```) = xxxx1000 and ```i``` (from loop) = 1000 so that ```a & i``` = 00001000 which is != 0. At this point, we can be sure that subsequent values after ```i``` i.e. 1001, 1010, 1011, 1100, ..., 1111  when taken AND with ```a``` won't give 0 either because all of these have a 1 at bit position 3 so we can directly skip ahead to ```i``` = 10000. Note that this is essentially the same as previous approach in spirit.

```
// 13 ms. 100%
public int countTriplets(int[] A) {
    int[] count = new int[1 << 16];
    for(int a: A) for(int b: A) count[a & b]++;
    int res = 0;
    for(int a: A) for(int i = 0; i < count.length; i++) {
    	if((a & i) == 0) res += count[i];
    	else i += (a & i) - 1;
    }
    return res;
}
```

**Approach 5: Dynamic Programming**
We can count combinations of indices using DP. Specifically, let ```dp[i][j]``` = number of tuples of length ```i``` of indices of ```A``` that give AND as ```j```.
Answer that we're looking for would be in ```dp[3][0]```. We can initialize length 1 tuples by directly using each ```A[i]```. After that, to calculate next level, we can use the logic: ```dp[i + 1][j & A[k]] += dp[i][j]```.

**Optimization:** Since next level depends only on the values of previous level, we can just maintain previous level everytime and use it to calculate next level thereby reducing space.

```
// 357 ms. 52.22%
public int countTriplets(int[] A) {
    int[] dp = new int[1 << 16];
    for(int a: A) dp[a]++;
    for(int i = 0; i < 2; i++) {
        int[] next = new int[dp.length];
        for(int a: A) for(int j = 0; j < dp.length; j++) next[a & j] += dp[j];
        dp = next;
    }
    return dp[0];
}
```