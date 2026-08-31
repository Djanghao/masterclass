# [Rust / Elixir] simulation

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/3217743/](https://leetcode.com/problems/validate-stack-sequences/solutions/3217743/)

---

# Approach
Simulate with a stack. Pop the wanted value whenever possible, otherwise do pushing.
# Rust
```rust
impl Solution {
    pub fn validate_stack_sequences(pushed: Vec<i32>, popped: Vec<i32>) -> bool {
        let mut it = pushed.iter();
        let mut stack = Vec::new();
        for &pop_ele in popped.iter() {
            while stack.last() != Some(&pop_ele) {
                match it.next() {
                    Some(&x) => stack.push(x),
                    None => return false,
                };
            }
            stack.pop();
        }
        stack.is_empty()
    }
}
```
# Elixir
It is super straightforward to implement for Elixir.
```elixir
defmodule Solution do
  @spec validate_stack_sequences(pushed :: [integer], popped :: [integer]) :: boolean
  def validate_stack_sequences(pushed, popped) do
    sim(pushed, popped, [])
  end

  defp sim([], [], []), do: true
  defp sim(pushed, [x | popped], [x | stack]) do
    sim(pushed, popped, stack)
  end
  defp sim([x | pushed], popped, stack) do
    sim(pushed, popped, [x | stack])
  end
  defp sim(_, _, _), do: false
end
```