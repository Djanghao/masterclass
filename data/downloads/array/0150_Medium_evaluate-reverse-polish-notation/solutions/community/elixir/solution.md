# [Rust / Elixir] stack solution

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2919813/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2919813/)

---

# Rust
```rust
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack = Vec::new();
        for s in tokens.iter() {
            if let Ok(x) = s.parse::<i32>() {
                stack.push(x);
            }
            else {
                let b = stack.pop().unwrap();
                let a = stack.pop().unwrap();
                stack.push(match s.as_str() {
                    "+" => a + b,
                    "-" => a - b,
                    "*" => a * b,
                    "/" => a / b,
                    what => panic!("What's this '{}'", what),
                });
            }
        }
        stack.pop().unwrap()
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec eval_rpn(tokens :: [String.t]) :: integer
  def eval_rpn(tokens) do
    eval([], tokens)
  end

  def eval([ans], []), do: ans
  def eval([b, a | stack], ["+" | tail]), do: eval([a + b | stack], tail)
  def eval([b, a | stack], ["-" | tail]), do: eval([a - b | stack], tail)
  def eval([b, a | stack], ["*" | tail]), do: eval([a * b | stack], tail)
  def eval([b, a | stack], ["/" | tail]), do: eval([div(a, b) | stack], tail)
  def eval(stack, [head | tail]) do
    {x, _} = Integer.parse(head)
    eval([x | stack], tail)
  end
end
```