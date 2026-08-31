# ruby 3-liner

**Author:** _-k-
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3422219/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3422219/)

---

```
def num_ways(words, target) =

  words.map(&:chars).transpose.map(&:tally).then &ways = -> a,i=0,j=0,m=[]{
    target[a.size-j+i] ? 0 : !target[i] ? 1 : m[i*a.size+j] ||=
    (ways[a,i,j+1,m] + a[j][target[i]].to_i * ways[a,i+1,j+1,m]) % 1000000007 }

```