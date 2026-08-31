# Python3, C++11, C++20, Java, Haskell, Clojure, Rust, Scala, Elixir & APL Solutions

**Author:** code_report
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/457571/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/457571/)

---

**Github Links:**
Python: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.py
C++: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.cpp
Java: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.java
Rust: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.rs
Clojure: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.clj
Scala: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.scala
Elixir: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.exs
Haskell: https://github.com/codereport/LeetCode/blob/master/168_Problem_1.hs

Python:
```python
def findNumbers(self, nums: List[int]) -> int:
        return len([i for i in nums if len(str(i)) % 2 == 0])
```
C++11:
```cpp
int findNumbers(vector<int>& nums) {
    return accumulate(nums.cbegin(), nums.cend(), 0,
        [](auto a, auto b) {
            return a + (to_string(b).size() % 2 == 0);
        });
}
```
C++20:
```c++
// godbolt: https://godbolt.org/z/R_PMTn
auto findNumber(std::vector<int>& nums) {
    return nums
        | rv::transform([](auto e) { return std::to_string(e).size(); })
        | rv::filter([](auto e) { return e % 2 == 0; })
        | hs::length();
}
```
Java:
```java
public int findNumbers(int[] nums) {
     return (int) Arrays.stream(nums)
                        .map(e -> String.valueOf(e).length())
                        .filter(e -> e % 2 == 0)
                        .count();
}
```
Haskell:
```haskell
findNumbers :: [Int] -> Int
findNumbers = length 
            . filter even 
            . map (length . show)
```
Clojure:
```clojure
(defn find-numbers [nums] (->> nums
                               (map str)
                               (map count)
                               (filter even?)
                               count))
```
Rust:
```rust
pub fn find_numbers(nums: Vec<i32>) -> i32 {
    return nums.iter()
               .map(|i| i.to_string().len())
               .filter(|i| i % 2 == 0)
               .count() as i32;
}
```
Scala:
```scala
def findNumbers(nums: Array[Int]): Int = {
    nums.map(_.toString.length)
        .count(_ % 2 == 0)
}
```
Elixir:
```elixir
defmodule LeetCode do
  def findNumbers(collection) do
    collection
    |> Enum.map(&Integer.to_string/1)
    |> Enum.map(&String.length/1)
    |> Enum.filter(&is_even/1)
    |> Enum.count()
  end
end
```
APL:
![image](./images/0.png)






