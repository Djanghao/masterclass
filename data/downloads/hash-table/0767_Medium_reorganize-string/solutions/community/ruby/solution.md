# ruby Maxheap solutoin

**Author:** JathiRatnam
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/4816020/](https://leetcode.com/problems/reorganize-string/solutions/4816020/)

---

# Code
```
# @param {String} s
# @return {String}
def reorganize_string(s)
  hash = s.chars.tally
  heap = Containers::MaxHeap.new
  hash.each do |k, v|
    heap.push(v, k)
  end

  que = []

  res = ""

  while heap.length > 0 || que.length > 0
    return "" if heap.empty?

    popped = heap.pop

    res = res + popped
    hash[popped] = hash[popped] - 1

    if que.length > 0
      shifted = que.shift
      heap.push(shifted[1], shifted[0])
    end

    que.push([popped, hash[popped]]) if hash[popped] > 0
  end

  res
end

```