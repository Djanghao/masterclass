# 🔥 Short Method ✔️ ||  2 Lines of Code ✔️  ||  0ms C++ ✔️🔥🔥🔥

**Author:** BerkYeni
**Votes:** 50
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4149854/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4149854/)

---

# Intuition
The intuition is to find the greatest amount of candy any kid has, store it in a variable and compare it with every kids candy amount with extra candies added.

This comparison used with map should give us an array of booleans representing each kids result.

---


# Explanation
1. Use a max function to find the greatest amount of any kid has and store it.
2. Use a map function to create a new array to store each kids comparison result.
3. Give the map function a function that will compare the **stored max candy amount** against **a kids candy amount plus extra candy amount** and return the result of the comparison.

---


# Code
```typescript []
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};
```
```javascript []
var kidsWithCandies = function(candies, extraCandies) {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};
```
```python []
def kidsWithCandies(self, candies, extraCandies):
    mostCandies = max(candies)
    return map(
        lambda candyAmount: candyAmount + extraCandies >= mostCandies, 
        candies
    )
```
```C++ []
vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
    int mostCandies = *std::max_element(candies.begin(), candies.end());
    std::vector<bool> result(candies.size());
    std::transform(candies.begin(), candies.end(), result.begin(), 
        [&] (const int & candyAmount) {
            return candyAmount + extraCandies >= mostCandies;
        }
    );
    return result;
}

```
```C# []
public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
    int mostCandies = candies.Max();
    return candies.Select(
        candyAmount => candyAmount + extraCandies >= mostCandies
    ).ToList();
}
```

---



![blehh.jpg](./images/0.jpeg)
