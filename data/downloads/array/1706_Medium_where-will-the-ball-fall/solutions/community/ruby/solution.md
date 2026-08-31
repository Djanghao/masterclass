# java 2-liner, ruby 1-liner

**Author:** _-k-
**Votes:** 2
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2765995/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2765995/)

---

ruby
```
def find_ball(g)
  g.last.size.times.map{ g.reduce(_1){|i,r| i if i and r[i] == r[127&i+=r[i]] } or -1 }
end
```

java
```
class Solution {
  public int[] findBall(int[][] g) {

    return IntStream.range(0, g[0].length).map(i -> Arrays.stream(g).reduce(i,
      (j,r) -> j>=0 && j+r[j]>=0 && j+r[j]<r.length && r[j]==r[j+=r[j]] ? j : -1, (a,b)->0) ).toArray();

  }
}
```