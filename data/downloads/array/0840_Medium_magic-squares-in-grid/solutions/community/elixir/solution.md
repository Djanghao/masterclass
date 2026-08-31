# Elixir - Simple Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5611490/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5611490/)

---

# Intuition
There are only 8 3x3 magic matrices, and all of them can be derived from

$$
\\begin{bmatrix}
8 & 1 & 6 \\\\
3 & 5 & 7 \\\\
4 & 9 & 2
\\end{bmatrix}
$$

by flipping and/or rotating it several times.

# Approach
Just work out all magic matrices, and for each 3x3 slice of the given grid, see if it is a magic matrix.

# Code
```Elixir
defmodule Aux do
  # Vertically flip the matrix
  def flip_v(matrix) do
    Enum.reverse(matrix)
  end

  # Horizontally flip the matrix
  def flip_h(matrix) do
    Enum.map(matrix, &Enum.reverse/1)
  end

  # Flip the matrix along the main diagonal
  def flip_d(matrix) do
    Enum.zip_with(matrix, &Function.identity/1)
  end

  # Rotate the matrix 90 degree counter-clockwise.
  def rotate_90(matrix) do
    matrix |> flip_h() |> flip_d()
  end

  # Rotate the matrix 180 degree counter-clockwise.
  def rotate_180(matrix) do
    matrix |> flip_h() |> flip_v()
  end

  # Rotate the matrix 270 degree counter-clockwise.
  def rotate_270(matrix) do
    matrix |> flip_v() |> flip_d()
  end
end

defmodule Solution do
  import Aux

  @magic_seed [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ]

  @magics [
    @magic_seed,
    @magic_seed |> rotate_90(),
    @magic_seed |> rotate_180(),
    @magic_seed |> rotate_270(),
    @magic_seed |> flip_v(),
    @magic_seed |> flip_v() |> rotate_90(),
    @magic_seed |> flip_v() |> rotate_180(),
    @magic_seed |> flip_v() |> rotate_270()
  ]

  @spec num_magic_squares_inside(grid :: [[integer]]) :: integer
  def num_magic_squares_inside(grid) do
    grid
    |> Enum.chunk_every(3, 1, :discard)
    |> Enum.flat_map(fn rows ->
      rows
      |> Enum.map(&Enum.chunk_every(&1, 3, 1, :discard))
      |> Enum.zip_with(&Function.identity/1)
    end)
    |> Enum.count(& &1 in @magics)
  end
end
```