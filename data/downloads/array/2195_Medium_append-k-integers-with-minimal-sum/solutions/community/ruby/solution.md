# Concise ruby solution

**Author:** galm4w
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/3990131/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/3990131/)

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
def minimal_k_sum(nums, k)
  nums = nums.uniq.sort
  nums.unshift 0
  nums << nums.last + k + 1 

  ans = 0
  nums.each_cons(2) do |fr, to|
    c = [k, to - fr - 1].min
    ans += c * (2 * fr + c + 1) / 2

    k -= c
    return ans if k.zero?
  end
end
```