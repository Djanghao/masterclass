# Erlang, C, Go, Rust Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3719895/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3719895/)

---

#### Erlang

```erlang
-spec kids_with_candies(Candies :: [integer()], ExtraCandies :: integer()) -> [boolean()].
kids_with_candies(Candies, ExtraCandies) ->
    Max = lists:max(Candies),
    [ X+ExtraCandies >= Max || X <- Candies ].
```

---

#### C

```c
bool* kidsWithCandies(int* candies, int candiesSize, int extraCandies, int* returnSize){
    int maxc = 0; 
    for (int i = 0; i < candiesSize; i++)
        maxc = (maxc > candies[i]) ? maxc : candies[i];
    
    bool *result = malloc(sizeof(bool) * candiesSize);
    for (int i = 0; i < candiesSize; i++)
        result[i] = (candies[i] + extraCandies) >= maxc;
    
    *returnSize = candiesSize;
    return result;
}
```

---

#### Go

```go
func kidsWithCandies(candies []int, extraCandies int) []bool {
    maxCandies := 0
    for _, v := range candies {
        if v > maxCandies {
            maxCandies = v
        }
    }
    
    result := make([]bool, len(candies))
    for i, v := range candies {
        result[i] = v + extraCandies >= maxCandies
    }
    return result
}
```

---

#### Rust

```rust
impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        match candies.iter().max() {
            Some(&max_candies) => candies
                .iter()
                .map(|&count| extra_candies + count >= max_candies)
                .collect(),
            _ => Vec::new(),
        }
    }
}
```