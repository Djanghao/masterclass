# [Java/Python 3] Solve a linear equations group w/ brief explanation and analysis.

**Author:** kamdartatv1
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/2057564/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/2057564/)

---

According the description of the problem, we have the following:

```
Jumbo Burger: 4 tomato slices and 1 cheese slice.
Small Burger: 2 Tomato slices and 1 cheese slice.
```

Therefore:

```
4 * Jumbo Burger + 2 * Small Burger = tomatoSlices
Jumbo Burger + Small Burger = cheeseSlices
Let x and y indicate jumbo and small Burger, respectively, then
```

```
4x + 2y = tomatoSlices
x + y = cheeseSlices
```

**=>**

```2x = tomatoSlices - 2 * cheeseSlices```

**=>**

```
x = (tomatoSlices - 2 * cheeseSlices) / 2
y = cheeseSlices - x
```


**JAVA**
```
public List<Integer> numOfBurgers(int tomatoSlices, int cheeseSlices) {
        int twoX = tomatoSlices - 2 * cheeseSlices, x = twoX / 2, y = cheeseSlices - x;
        return twoX >= 0 && twoX % 2 == 0 && y >= 0 ? Arrays.asList(x, y) : Arrays.asList();        
    }
```

**PYTHON**
```
def numOfBurgers(self, tomatoSlices: int, cheeseSlices: int) -> List[int]:
        two_x = tomatoSlices - 2 * cheeseSlices
        x = two_x // 2
        y = cheeseSlices - x
        return [x, y] if two_x >= 0 and not two_x % 2 and y >= 0 else []
```

**Analysis**

**Time & space: O(1).**