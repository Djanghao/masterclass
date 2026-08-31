# Elixir solution with math

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/3939815/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/3939815/)

---

# Approach
If we direcly use uniform distribution of both degree and distance from center, the probability of a point to be chosen will be ***inversely proportional to the square of distance from center***. 

This can be observed by considering the *area* of a circle:
Eg. When the radius is doubled, the area will be quadrupled, and the probability of a point to be chosen will decrease to 25%.

To make every point in the circle get the same probability, we can obtain the random distance by taking a floating number from 0.0 to 1.0 with uniform distribution, take square root of it, and then multiply by radius.

A simple proof why this works: Consider the case when x with $$0.0 <= x < 0.4$$ is picked in range of 0.0 to 1.0. Then taking square root and multiplying radius gives $$0 <= r*\\sqrt{x} < r*\\sqrt{0.4}$$. When we calculate the area of circle with radius = $$r*\\sqrt{0.4}$$, the result is $$(r*\\sqrt{0.4})^2 * \\pi = 0.4 * r^2 * \\pi$$. This means the range of x will exactly occupy **40%** of the area of original circle.

# Code
```
defmodule Solution do
  use GenServer
  
  @spec init_(radius :: float, x_center :: float, y_center :: float) :: any
  def init_(radius, x_center, y_center) do
    GenServer.start_link(__MODULE__, nil, [name: __MODULE__])
    GenServer.call(__MODULE__, {:init, radius, x_center, y_center})
  end

  @spec rand_point() :: [float]
  def rand_point() do
    GenServer.call(__MODULE__, :rand)
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end

  @impl true
  def handle_call({:init, radius, x_center, y_center}, _, _) do
    {:reply, :ok, {radius, x_center, y_center}}
  end

  def handle_call(:rand, _, {radius, x_center, y_center}) do
    dist = :rand.uniform() |> :math.sqrt() |> Kernel.*(radius)
    radian = :rand.uniform() |> Kernel.*(2 * :math.pi())
    x = x_center + dist * :math.cos(radian)
    y = y_center + dist * :math.sin(radian)
    {:reply, [x, y], {radius, x_center, y_center}}
  end
end

# Your functions will be called as such:
# Solution.init_(radius, x_center, y_center)
# param_1 = Solution.rand_point()

# Solution.init_ will be called before every test case, in which you can do some necessary initializations.
```