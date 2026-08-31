# Beginner elixir solution

**Author:** VictorVSa
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/2608681/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/2608681/)

---

```
defmodule Solution do
  @spec filter_restaurants(restaurants :: [[integer]], vegan_friendly :: integer, max_price :: integer, max_distance :: integer) :: [integer]
    def filter_restaurants(restaurants, vegan_friendly, max_price, max_distance) do
    restaurants 
        |> Enum.filter(&(vegan_friendly !== 1 || Enum.at(&1, 2) === vegan_friendly))
        |> Enum.filter(&(Enum.at(&1, 3) <= max_price and Enum.at(&1, 4) <= max_distance))  
        |> Enum.sort(&(Enum.at(&1, 0) < Enum.at(&2,0)))
        |> Enum.sort(&(Enum.at(&1, 1) > Enum.at(&2,1)))
        |> Enum.flat_map(&(Enum.take(&1, 1)))
    end
end
```