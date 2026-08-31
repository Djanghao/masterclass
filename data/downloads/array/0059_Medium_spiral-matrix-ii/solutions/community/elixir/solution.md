# Elixir solution inspired by Rust functional solution inspired by ldm0

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/1943680/](https://leetcode.com/problems/spiral-matrix-ii/solutions/1943680/)

---

I initially had a solution based on calculating change of direction of placement for each value of 1 to n * n and storing them in a map that I then translated to a list of lists. This more "mathy" way was too good to not steal. I essentially translated the rust solution [here](https://leetcode.com/problems/spiral-matrix-ii/discuss/1941205/Rust-functional-solution-inspired-by-ldm0) to this. Took me a minute to remember I didn't need the map with this approach.
```
    def generate_matrix(n) do
    for i <- 0..n-1 
    do
      for j <- 0..n-1
      do 
        calc(i, j, n)         
      end
    end
    
  end
      
  
  def calc(x, y, limit) do 
    level = Enum.min([x, limit - x - 1, y, limit - y - 1])
    loop_area = limit * limit - (limit - 2 * level) * (limit - 2*level)
    seq = if y >= x do
            x + y - 2 * level
        else #4*(n - 2*level - 1) - (x + y - 2*level)
            4 * limit - 6 * level - 4 - x - y
        end
    # uncomment below to see calculations for each coordinate
    # binding() |> IO.inspect()
    loop_area + seq + 1
  end
  ```