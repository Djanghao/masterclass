# Grouping (Explained)

**Author:** Star-Lord-PHB
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/5521165/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/5521165/)

---

# Intuition

In the input `text`, there are already some subsequences of the same characters (groups). We want to make them even longer by one swapping operation, which leads to 4 cases (focus on character `a` in the following examples): 

1. `aaaa b`: Only one group. Nothing we can do 
2. `aaa bb aa`: More than one group, but more than one other characters between them. In this case, we can only extent the longest group by 1 by moving one character from one of the other shorter groups. In this example, swap the first `b` with the `a` at index 5
3. `aaa b aa`: 2 groups, and only one other characters between them. In this case, we can swap the character between the two groups with the last character in the second group. In this example, swap the `b` with the last `a` 
4. `aaa b aa bb a`: More than 2 groups, and one pair of groups have only one other characters between them. In this case, we can move swap one target character in a third group with the character between the pair of groups. In this example, swap the last `a` with the first `b`

# Approach

We can find out all these groups and store them in a 2D array with 26 rows where each row is for one type of character. Take `aabbbacccbb` as an example, the resulting 2D array will be: 

| character | group1 | group2 |
|---|---|---|
| a | 0 - 1 | 5 - 5 |
| b | 2 - 4 | 9 - 10 |
| c | 6 - 8 | |
| d | | |
| ... | ... | ... |

The cells show the lower index and the upper index of each group (suitable for using `ClosedRange` in Swift). 

(Note that using an 1D array is also fine, I just think using a 2D one is clearer)

Now for each row with at least one group: 
* only 1 group: case 1
* 2 groups where the lower index of the second group minus the upper index of the first group is 2: case 3
* 2 groups where the lower index of the second group minus the upper index of the first group is greater than 2: case 2
* otherwise, traverse each adjacent pairs of groups to identify which cases they are 

# Complexity
- Time complexity: `O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift
class Solution {

    func maxRepOpt1(_ text: String) -> Int {

        var rangesOfChars = [[ClosedRange<Int>]](repeating: [], count: 26)

        guard var currentChar = text.first else { return 0 }
        var currentCharStart = 0
        
        for (i, ch) in text.enumerated() where ch != currentChar {
            guard let charAscii = currentChar.asciiValue else { return 0 }
            rangesOfChars[Int(charAscii - Character("a").asciiValue!)].append(currentCharStart ... (i - 1))
            currentChar = ch 
            currentCharStart = i
        }
        guard let charAscii = currentChar.asciiValue else { return 0 }
        rangesOfChars[Int(charAscii - Character("a").asciiValue!)].append(currentCharStart ... (text.count - 1))

        var maxLength = 0

        for ranges in rangesOfChars {
            
            guard ranges.count > 0 else { continue }
            guard ranges.count > 1 else {
                maxLength = max(maxLength, ranges.first!.count)
                continue
            }

            maxLength = max(maxLength, ranges.map { $0.count }.max()! + 1)

            for (range1, range2) in zip(ranges, ranges.dropFirst()) {
                if range2.lowerBound - range1.upperBound == 2 {
                    let length = range1.count + range2.count + (ranges.count > 2 ? 1 : 0)
                    maxLength = max(maxLength, length)
                }
            }

        }

        return maxLength

    }
    
}
```