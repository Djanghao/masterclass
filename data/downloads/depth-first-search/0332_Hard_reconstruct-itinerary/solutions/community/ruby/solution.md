# Ruby: Iterative technique

**Author:** RajRoR
**Votes:** 1
**Link:** [https://leetcode.com/problems/reconstruct-itinerary/solutions/4143734/](https://leetcode.com/problems/reconstruct-itinerary/solutions/4143734/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String[][]} tickets
# @return {String[]}
def find_itinerary(tickets)
  return tickets.first if tickets.count == 1

  adj = Hash.new { |h, k| h[k] = [] }
  tickets.each { |s, d| adj[s] << d }
  adj.each { |k, v| adj[k] = v.sort }

  route = []
  stack = ['JFK']
  while !stack.empty?
    while !adj[stack[-1]].empty?
      stack << adj[stack[-1]].shift
    end

    route << stack.pop
  end

  route.reverse
end

```