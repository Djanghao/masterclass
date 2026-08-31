# 🔥 Swift | Beats 100% runtime | Explained

**Author:** Dark_Type
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/6074900/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/6074900/)

---

![\u0421\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430 2024-11-23 \u0432 17.48.30.png](./images/0.png)

# Intuition
At first I thought about randomizing bits, but that took too many calls to the rand7(), first approach looks like this:
```swift []
func randomBit() -> Int {
    while true {
        let num = rand7()
        if num >= 1 && num <= 3 {
            return 0
        } else if num >= 4 && num <= 6 {
            return 1
        }
    }
}
func rand10() -> Int {
    while true {
        var num = 0
        for _ in 0..<4 {
            let bit = randomBit()
            num = (num << 1) | bit
        }
        if num >= 1 && num <= 10 {
            return num
    }
}
```
As you might imagine, this is not the fastest approach, but I think is pretty easy to understand, you just generate a random bit and then shift it into the num with simple binary operatons.

# Approach
The better approach is much less in code, let's walk through an example to illustrate how rand10() works:

First Iteration:

rand7() returns 3 and 5.
Calculated num:
num=(3\u22121)\xD77+5=2\xD77+5=19
Since 19 is less than or equal to 40, map it to rand10():
return =(19\u22121)%10+1=18%10+1=8+1=9
Result: 9

Second Iteration:

rand7() returns 7 and 2.
Calculated num:
num=(7\u22121)\xD77+2=6\xD77+2= 44
Since 44 is greater than 40, reject and retry.

Third Iteration:

rand7() returns 4 and 3.
Calculated num:
num=(4\u22121)\xD77+3=3\xD77+3=24
Since 24 is less than or equal to 40, map it to rand10():
return =(24\u22121)%10+1=23%10+1=3+1=4
Result: 4


# Complexity
- Time complexity:
$$O(const)$$ 

- Space complexity:
 $$O(const)$$ (but worst case scenario inf)

# Code
```swift []
class Solution: SolBase {
    func rand10() -> Int {
        while true {
            let num = (rand7() - 1) * 7 + rand7()

            if num <= 40 {
                return (num - 1) % 10 + 1
            }
        }
    }
}
```