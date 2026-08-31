# Elixir mathematical explanation and application

**Author:** sawcce
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/5117939/](https://leetcode.com/problems/max-points-on-a-line/solutions/5117939/)

---

# Intuition
My first intuition was to take to points of the plane, calculate the slope of the rope between them, then check for every point on the plane if the vector between the first point and the chosen point has the same slope.

There are some slight issues with this approach and as such we need to distinguish different cases as detailed below.

# Approach
The algorithm can be described as such:

$$
\	ext{Let } E \	ext{ be the set containing all of the input points (which are modeled as vectors from the origin point of coordinates 0, 0), such as } E \\subset \\mathbb{R}^2. \\\\

\\forall \\overrightarrow X(\\alpha_1, \\beta_1), \\overrightarrow Y(\\alpha_2, \\beta_2) \\in E, \\\\
s(\\overrightarrow X, \\overrightarrow Y) = #\\begin{cases}
    \\begin{Bmatrix}
        (\\lambda; \\mu) \\in E / \\lambda = \\alpha_1
    \\end{Bmatrix}
    \	ext{ if } \\overrightarrow X - \\overrightarrow Y = (0, \\gamma); \\gamma \\in \\mathbb{R} \\\\

    \\begin{Bmatrix}
        (\\lambda; \\mu) \\in E / \\mu = \\beta_1
    \\end{Bmatrix}
    \	ext{ if } \\overrightarrow X - \\overrightarrow Y = (\\gamma, 0); \\gamma \\in \\mathbb{R} \\\\

    \\begin{Bmatrix}
        (\\lambda; \\mu) \\in E / \\dfrac{\\mu - \\beta_1}{\\lambda - \\alpha_1} = \\dfrac{\\beta_2 - \\beta_1}{\\alpha_2 - \\alpha_1}
    \\end{Bmatrix}
    \	ext{ else}
\\end{cases}
$$
As such, `max_points` can be defined as:

$$
\\mathop{max} s(F) \	ext{ with } F = E\	ext{x}E 
$$

In english it means that we pick two points ($A$ and $B$) of the plane and distinguish three cases:
- If they are on that same vertical line, we find the amount of points that share the same x coordinates.
- If they are on the same horizontal line, we find the amount of points that share the same y coordinates.
- Else, we calculate the slope between the two points ($\\dfrac{\\Delta y}{\\Delta x}$) and then proceed to find the amount of points (let's call this random point $M$) where the slope of $\\overrightarrow{AM}$ is the same as the one of $\\overrightarrow{BM}$.

We then apply this algorithm for each combination of two points available and return the max of all of these function calls. 
# Complexity
- Space complexity:
$$O(n^2)$$ with n being the number of points.

# Code
```
defmodule Solution do
  @spec max_points(points :: [[integer]]) :: integer
  def max_points(points) do
    points
    |> Enum.map(fn x -> Solution.traverse(points, MapSet.new([x]), x) end)
    |> Enum.max
  end

  def traverse(points, visited, [sx, sy]) do
    points
    |> Enum.map(fn [ex, ey] -> 
        traverse(points, [ex, ey], ex-sx, ey-sy) 
    end)
    |> Enum.max
  end

  def traverse(points, [sx, sy], dx, dy) do
    cond do
        dx == 0 and dy == 0 -> 1
        dx == 0 -> vertical(points, sx)
        dy == 0 -> horizontal(points, sy)
        true ->
            Enum.filter(points, fn [x, y] ->
                if y - sy == 0 or x - sx == 0 do
                    false
                else
                    (y - sy)/(x - sx) == dy/dx
                end
            end) 
            |> length()
            |> Kernel.+(1)
    end
  end

  def vertical(points, x) do
    Enum.filter(points, &(Enum.at(&1, 0) == x))
    |> length
  end

  def horizontal(points, y) do
    Enum.filter(points, &(Enum.at(&1, 1) == y))
    |> length
  end
end

```