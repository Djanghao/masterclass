# Ruby backtracking

**Author:** lreynl
**Votes:** 6
**Link:** [https://leetcode.com/problems/permutations/solutions/842210/](https://leetcode.com/problems/permutations/solutions/842210/)

---

```
def permute(nums)
  results = []
  backtrack(nums, [], results)
  results
end

def backtrack(list, temp, results)
  if temp.length == list.length
    results << temp.dup
  end
  
  list.each do |n|
    next if temp.include? n
    temp << n
    backtrack(list, temp, results)
    temp.pop
  end
end
```