# Forward and backward passes [Ruby cover]

**Author:** shjnvo89
**Votes:** 0
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1654364/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1654364/)

---

```
def get_distances(arr)
    d = {}
    n = arr.size
    ans = []
    (n-1).downto(0) do |i|
        d[arr[i]] = [0, 0] unless d.key?(arr[i])
        c, total = d[arr[i]]
        ans[i] = total - c * i
        d[arr[i]][0] += 1
        d[arr[i]][1] += i
    end
    d = {}
    0.upto(n-1) do |i|
        d[arr[i]] = [0, 0] unless d.key?(arr[i])
        c, total = d[arr[i]]
        ans[i] += c * i - total
        d[arr[i]][0] += 1
        d[arr[i]][1] += i
    end
    ans
end
```