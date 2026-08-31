# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/3933399/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/3933399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 1108ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 69.8MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec max_satisfied(customers :: [integer], grumpy :: [integer], minutes :: integer) :: integer
  def max_satisfied(customers, grumpy, minutes) do
    {total, grumpy} = get_new_grumpy(customers, grumpy, 0, [])
    {_, _, m_customers} =
      Enum.reduce(grumpy, {0, 0, 0}, fn grumpy_i, {i, save, m_customers} ->
        if i < minutes do
          m_customers = m_customers + grumpy_i
          {i + 1, m_customers, m_customers}
        else
          save = save + grumpy_i - Enum.at(grumpy, i - minutes)
          if save > m_customers do
            {i + 1, save, save}
          else
            {i + 1, save, m_customers}
          end
        end
      end)
    total + m_customers
  end

  @spec get_new_grumpy(customers :: [integer], grumpy :: [integer], total :: integer, n_grumpy :: [integer]) :: {integer, [integer]}
  def get_new_grumpy([], [], total, n_grumpy) do
    {total, n_grumpy}
  end

  def get_new_grumpy([cust_hd | cust_tl], [grum_hd | grum_tl], total, n_grumpy) do
    get_new_grumpy(cust_tl, grum_tl, total + cust_hd*(1 - grum_hd), [cust_hd*grum_hd | n_grumpy])
  end
end
```