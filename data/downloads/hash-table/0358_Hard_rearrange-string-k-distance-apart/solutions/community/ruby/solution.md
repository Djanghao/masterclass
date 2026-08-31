# Ruby Heap + Queue

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4033317/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4033317/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create hash of frequencies. 
2. Create Max Heap and fill it with hash of frequencies using frequencies as weights.
3. Create Queue of size k. Fill it with top elements from the heap.
4. Until there is no character to be read in the queue:
  1. Pop char from queue.
  2. Append char to result string $$t$$
  3. If the chars frequency is at least 1, push it back to the heap with its frequency minus 1.
  4. Pop the top element from the heap and prepend it to the queue.
5. Validate that the size of $$s$$ and $$t$$ are equal and return $$t$$.

# Complexity
$$n$$ is the length of the string.
$$k$$ is the amount of unique chars in the string $$s$$
- Time complexity: $$O(n + k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @param {Integer} k
# @return {String}
def rearrange_string(s, k)
  return s if k <= 1

  heap = Containers::MaxHeap.new
  s.chars.tally.each { |k, v| heap.push(v, [k, v]) }
  return "" if heap.size < k

  queue = []
  k.times{ queue.prepend(heap.pop) }

  t = ""

  loop do
    c, f = queue.pop
    break if c.nil?
    t += c

    heap.push(f - 1, [c, f - 1]) if f > 1
    n = heap.pop
    queue.prepend(n)
  end
  t.size == s.size ? t : ""
end
```