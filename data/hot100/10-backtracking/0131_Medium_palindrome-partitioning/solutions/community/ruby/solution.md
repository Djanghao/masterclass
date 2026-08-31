# ruby 1-liner

**Author:** _-k-
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/3083547/](https://leetcode.com/problems/palindrome-partitioning/solutions/3083547/)

---

```
def partition(s, i=s.size-1)

  i<0 ? [[]] : (0..i).sum([]){|j| (x=s[j..i])!=x.reverse ? [] : partition(s,j-1).map{ _1<<x } }

end
```