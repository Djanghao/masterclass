# [Rust / Elixir] Divide and Conquer

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806690/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806690/)

---

`expression.len()` is quite small and it works fine without DP.

# Code
```Rust []
use std::ops::{Add, Mul, Sub};

enum Token<'a> {
    Val(i32),
    Op(&'a dyn Fn(i32, i32) -> i32)
}

impl Solution {
    pub fn diff_ways_to_compute(expression: String) -> Vec<i32> {
        let mut v = Vec::<Token>::new();
        let mut val = 0;
        for b in expression.bytes() {
            if b >= b'0' && b <= b'9' {
                val = val * 10 + (b - b'0') as i32;
            }
            else {
                let fun: &dyn Fn(i32, i32) -> i32 = match b {
                    b'+' => &i32::add,
                    b'-' => &i32::sub,
                    b'*' => &i32::mul,
                    _ => panic!("unexpected char!"),
                };
                v.push(Token::Val(val));
                v.push(Token::Op(fun));
                val = 0;
            }
        }
        v.push(Token::Val(val));
        Self::dac(&v[..])
    }

    fn dac(slice: &[Token]) -> Vec<i32> {
        if slice.len() == 1 {
            if let Token::Val(val) = slice[0] {
                return vec![val];
            }
            else {
                unreachable!();
            }
        }
        let mut v = Vec::<i32>::new();
        for i in (1..slice.len()).step_by(2) {
            if let Token::Op(op) = slice[i] {
                let left = Self::dac(&slice[..i]);
                let right = Self::dac(&slice[i + 1..]);
                for &a in left.iter() {
                    for &b in right.iter() {
                        v.push(op(a, b));
                    }
                }
            }
            else {
                unreachable!();
            }
        }
        v
    }
}
```
```Elixir []
defmodule Solution do
  @spec diff_ways_to_compute(expression :: String.t) :: [integer]
  def diff_ways_to_compute(expression) do
    Stream.unfold(expression, fn
      "" -> nil
      <<?+, rest::binary>> -> {&+/2, rest}
      <<?-, rest::binary>> -> {&-/2, rest}
      <<?*, rest::binary>> -> {&*/2, rest}
      s -> Integer.parse(s)
    end)
    |> Enum.to_list()
    |> dac()
  end

  defp dac([val]), do: [val]
  defp dac(list) do
    (1..length(list) - 1//2)
    |> Enum.flat_map(fn i ->
      {left, [op | right]} = Enum.split(list, i)
      left_ans = dac(left)
      right_ans = dac(right)
      Enum.flat_map(left_ans, fn l ->
        Enum.map(right_ans, fn r ->
          op.(l, r)
        end)
      end)
    end)
  end
end
```