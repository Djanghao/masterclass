# Python 3   ||   1 line, with explanation  ||   T/S: 96% / 42%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/2851134/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/2851134/)

---

Here's the intuition:

- A valid line is either a *radius* or a *diameter*. 
- For *n* > 1, *n* radii equally spaced around the arc of the circle will divide the circle in *n* equal portions.

- If *n* is even and greater than one, then each radius is diametrically opposite another radius. Those two radii comprise a diameter, so the solution is *n*//2.
- If *n* = 1, the solution is 0 , which is also 1//2.

```
class Solution:
    def numberOfCuts(self, n: int) -> int:

        return n if n %2 and n!= 1 else n//2

```
[https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/submissions/1290415320/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/submissions/1290415320/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).




