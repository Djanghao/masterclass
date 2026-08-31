# [Rust / Elixir] bottom up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800941/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800941/)

---

# Complexity
- Time complexity: $$O(n*n*k)$$

- Space complexity: $$O(n*n)$$

# Code
```Rust []
impl Solution {
    pub fn knight_probability(n: i32, k: i32, row: i32, column: i32) -> f64 {
        let n = n as usize;
        let mut prob = vec![vec![0.0; n]; n];
        let mut prob2 = prob.clone();
        prob[row as usize][column as usize] = 1.0;
        let dir = [2, 1, usize::MAX - 1, 1, 2,
                usize::MAX, usize::MAX - 1, usize::MAX, 2];
        for _ in 0..k {
            for i in 0..n {
                for j in 0..n {
                    if prob[i][j] != 0.0 {
                        for d in 0..8 {
                            let i2 = i.wrapping_add(dir[d]);
                            let j2 = j.wrapping_add(dir[d + 1]);
                            if i2 < n && j2 < n {
                                prob2[i2][j2] += prob[i][j] * 0.125;
                            }
                        }
                        prob[i][j] = 0.0;
                    }
                }
            }
            std::mem::swap(&mut prob, &mut prob2);
        }
        prob.iter().map(|v|
            v.iter().sum::<f64>()
        ).sum::<f64>()
    }
}
```
```Elixir []
defmodule Solution do
  @spec knight_probability(n :: integer, k :: integer, row :: integer, column :: integer) :: float
  def knight_probability(n, k, row, column) do
    dir = [2, 1, -2, 1, 2, -1, -2, -1, 2]
    Enum.reduce(1..k//1, %{{row, column} => 1.0}, fn _, map ->
      Enum.reduce(map, %{}, fn {{i, j}, x}, map2 ->
        Enum.chunk_every(dir, 2, 1, :discard)
        |> Enum.map(fn [a, b] -> {i + a, j + b} end)
        |> Enum.filter(fn {i2, j2} -> i2 in 0..n - 1 and j2 in 0..n - 1 end)
        |> Enum.reduce(map2, fn pos, map2 ->
          Map.update(map2, pos, x / 8, fn y -> y + x / 8 end)
        end)
      end)
    end)
    |> Map.values()
    |> Enum.sum()
  end
end
```