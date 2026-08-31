# [ruby] Next permutation

**Author:** tuang3142
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1200296/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1200296/)

---

**Idea**

- The problem can be divided into two smaller one: generate the next permutation of the string and calculate the swapping operation to get there.
- Generate next permutation:
  - Take "3421" as an example.
  - Going from right to left, find the first number that is not in the descending order that is "3".
  - Find the next larger number to "3" in the right side that is "4" then swap them. Now we have "4321". This can be done with binary search for 0(log(n)) runtime.
  - Sort "321" in ascending order to get "123". Actually, we can just reverse it to save time since the order is maintained.
  - Now we get "4123" as the next permutation of "3421".
- Calculate swapping operation:
 - Take "a = 4123" and "b = 3421" as an example.
 - For each number in a, find the index of that number in b
 - Calculate the different between the two index and add to the final result.

**Complexity**

- O(n**2) for both generating permutation and calculating the swap operation

**Code**

```ruby
class Solution
  def self.get_min_swap(a, k)
    a = a.split("").reverse
    b = a.map(&:clone)
    k.times { b = gen_next_permuation(b) }
    calc_diff(b, a)
  end

  def self.gen_next_permuation(a)
    n = a.length
    i = (0..n-2).find { |x| a[x] > a[x + 1] } + 1
    j = a[0, i].bsearch_index { |x| x > a[i] }
    a[i], a[j] = a[j], a[i]
    a[0, i].reverse + a[i, n]
  end

  def self.calc_diff(a, b)
    ans = 0
    n = a.length
    n.times do |i|
      if a[i] != b[i]
        j = i
        j += 1 while j < n && b[j] != a[i]
        ans += j - i
        while j > i
          b[j], b[j - 1] = b[j - 1], b[i]
          j -= 1
        end
      end
    end

    ans
  end
end
```
