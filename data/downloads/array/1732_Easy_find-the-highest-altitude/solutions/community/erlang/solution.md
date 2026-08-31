# Erlang, Go, C, Rust Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/3738840/](https://leetcode.com/problems/find-the-highest-altitude/solutions/3738840/)

---

#### Erlang

```erlang
-spec largest_altitude(Gain :: [integer()]) -> integer().
largest_altitude(Gain) ->
    highest(Gain, 0, 0).

highest([], _, Max) -> Max;
highest([H|T], Alt, Max) ->
    NewAlt = Alt + H,
    highest(T, NewAlt, max(Max, NewAlt)).
```

---

#### Go

```go
func largestAltitude(gain []int) int {
    height, highest := 0, 0
    for _, g := range gain {
        height += g
        highest = max(highest, height)
    }
    return highest
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

---

#### C

```c
int largestAltitude(int* gain, int gain_size){
    int h = 0, hmax = 0;
    for (int i = 0; i < gain_size; i++) {
        h += gain[i];
        hmax = (hmax >= h) ? hmax : h;
    }
    return hmax;
}
```

---

#### Rust

```rust
impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        let (largest, _) = gain.iter().fold((0, 0), |(max_alt, alt), v| {
            let alt = alt + v; 
            let max_alt = max_alt.max(alt);
            (max_alt, alt)
        });
        largest
    }
}
```