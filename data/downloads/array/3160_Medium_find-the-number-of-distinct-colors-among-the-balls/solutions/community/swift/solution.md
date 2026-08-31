# Solution with two dictionaries

**Author:** linnyk_oleh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5389802/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5389802/)

---

# Intuition
### Two dictionaries

# Approach
Iterate over *queries*, if *ballToColor* contains *oldColor* by the ball, then decrement it's value and remove if zero. Update *ballToColor* and *colorCount*.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$ 


```swift []
class Solution {
    func queryResults(_ limit: Int, _ queries: [[Int]]) -> [Int] {
        var ballToColor: [Int: Int] = [:]
        var colorCount: [Int: Int] = [:]

        var res: [Int] = []

        for q in queries {
            var ball = q[0], color = q[1]

            if let oldColor = ballToColor[ball]{
                colorCount[oldColor]! -= 1

                if colorCount[oldColor]! == 0 {
                    colorCount.removeValue(forKey: oldColor)
                }
            }

            ballToColor[ball] = color
            colorCount[color, default: 0] += 1

            res.append(colorCount.count)
        }
        return res
    }
}
```
```java []
class Solution {
    public int[] queryResults(int limit, int[][] queries) {
        var ballToColor = new HashMap<Integer, Integer>();
        var colorCount = new HashMap<Integer, Integer>();

        var res = new int[queries.length];
        for(var i = 0; i < queries.length; i++){
            int ball = queries[i][0], color = queries[i][1];

            if(ballToColor.containsKey(ball)){
                var existingColor = ballToColor.get(ball);
                
                colorCount.merge(existingColor, -1, Integer::sum);
                if(colorCount.get(existingColor) == 0) colorCount.remove(existingColor);
            }

            ballToColor.put(ball, color);
            colorCount.merge(color, 1, Integer::sum);

            res[i] = colorCount.size();
        }

        return res;
    }
}
```