# Linear solution — one cycle with two pointers

**Author:** josshad
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/6113553/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/6113553/)

---

# Intuition
We need to mesure distance to the element for both sides

# Approach
Let iterate array for both sides simultaneously and save the minimum distance to the known element. For each iterator we have to save latest known index.
On each step (of each iterator) we should check if there current character is the same with initial. 
- same \u2014 we should save latest index and write 0 to result array
- different \u2014 we need to check if another iterator already write something in result array. If so, we should choose what distance is smallest \u2014 from the left or from the right

---
#### **Step 1:**
* Left index: unknown
* Right index: unknown
``` 
 v
|l|e|a|s|e|
         ^

|x|x|x|x|0|     <- Result

Setting right to 4
```

#### **Step 2:**
* Left: unknown
* Right: 4
```
   v
|l|e|a|s|e|
       ^ 

|x|0|x|1|0|     <- Result

Setting left to 1
```

#### **Step 3:**
* Left: 1
* Right: 4
```
     v   
|l|e|a|s|e|
     ^ 

distance from left \u2014 1, from right \u2014 2. Choose 1, as smallest

|x|0|1|1|0|     <- Result
```
#### **Step 4:**
* Left: 1
* Right: 4
```
       v 
|l|e|a|s|e|
   ^   

|x|0|1|1|0|     <- Result

Setting right to 1
```
#### **Step 5:**
* Left: 1
* Right: 1
```
         v      
|l|e|a|s|e|
 ^   

|1|0|1|1|0|     <- Result

Setting left to 4
```



# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```swift []
class Solution {
    func shortestToChar(_ s: String, _ c: Character) -> [Int] {
        var count = s.count
        guard count > 1 else { return [0] }

        var s = Array(s)
        var result = Array(repeating: count, count: count)

        var leftIndex = -count
        var rightIndex = count * 2
        
        for i in 0..<count {
            if s[i] == c {
                leftIndex = i
                result[i] = 0
            } else {
                result[i] = min(result[i], i - leftIndex)
            }

            let j = count - i - 1
            if s[j] == c {
                rightIndex = j
            } else {
                result[j] = min(result[j], rightIndex - j)
            }
        }
        return result
    }
}
```

![Screenshot 2024-12-04 at 17.33.37.png](./images/0.png)
