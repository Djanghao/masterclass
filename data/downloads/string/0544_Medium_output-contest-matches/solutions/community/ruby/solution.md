# Ruby Solution O(n) space

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/1307883/](https://leetcode.com/problems/output-contest-matches/solutions/1307883/)

---

```
def find_contest_match(n)
  arr = [0] * n
  for i in 0..(n-1)
    arr[i] = i + 1
  end
  
  while(n > 0)
    i = 0
    while(i < (n/2))
      arr[i] = "(#{arr[i]},#{arr[n - i - 1]})"
      i += 1
    end
    n = n/2
  end
  
  arr[0]
end
```