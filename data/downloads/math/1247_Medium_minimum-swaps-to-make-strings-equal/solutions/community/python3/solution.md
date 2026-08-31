# Simply Simple Python Solution - with detailed explanation

**Author:** limitless_
**Votes:** 215
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/419874/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/419874/)

---

In this problem, we just need to find the count of different characters in both strings. When I use "x_y" i.e. I have x in s1 at index i and y in s2 at same index i. Similary "y_x" means I have y in s1 at index j and x in s2 at same index j. 

#### Example 1:
s1 = "xx"
s2 = "yy"

if we iterate through both string and keep checking every index, we get two indexes with different values in both s1 and s2:
"x_y" at index 0 and "x_y"  at index 1.
if we have 2 "x_y" then we only need 1 swap to make them equal. Swap x at index 0 in s1 with y at index 1 in s2.

#### Example 2:
s1 = "yy"
s2 = "xx"

Here also we have 2 different values: "y_x"  at index 0 and "y_x" at index 1. so it will also take 1 swap to make them equal.

#### Example 3:
s1 = "xy"
s2 = "yx"

Here we have one count of "x_y" at index 0 and one count of "y_x" at index 1. We need 2 swaps to make these indexes equal.
Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".

#### Example 4:
s1 = "xxyyxyxyxx", 
s2 = "xyyxyxxxyx"

First remove the indexes with same characters:
s1 = "xyxyyx"
s2 = "yxyxxy"

"x_y" count = 3 (index 0, 2, 5)
"y_x" count = 3 (index 1, 3, 4)

index 0 and 2 can be made equal in just 1 swap.  see Example 1.
index 1 and 3 can also be made equal in just 1 swap. see Example 2.

index 5 and 4 can be made Equal in 2 swaps. see Example 3

so we only need 4 swaps.

### Steps:
1. Get the count of "x_y" and "y_x"
2. If sum of both counts is odd then return -1. We need a pair to make the strings equal
3. Each 2 count of "x_y" needs just 1 swap. So add half of "x_y" count to the result
4. Each 2 count of "y_x" needs just 1 swap. So add half of "y_x" count to the result
5. if we still have 1 count of "x_y" and 1 count of "y_x" then they need 2 swaps so add 2 in result.

```
def minimumSwap(self, s1: str, s2: str) -> int:
        x_y, y_x = 0, 0
        for c1, c2 in zip(s1, s2):
            if c1 != c2:
                if c1 == 'x':
                    x_y += 1
                else:
                    y_x += 1
                    
        if (x_y + y_x) % 2 == 1:
            return -1
        # Both x_y and y_x count shall either be even or odd to get the result.
		# x_y + y_x should be even
        
        res = x_y // 2
        res += y_x // 2
        
        if x_y % 2 == 1:
            res += 2
        # If there count is odd i.e. we have "xy" and "yx" situation
        # so we need 2 more swaps to make them equal
            
        return res
```
