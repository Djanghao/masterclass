# A hashmap method

**Author:** naveen_r_sam
**Votes:** 1
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5268630/](https://leetcode.com/problems/hand-of-straights/solutions/5268630/)

---

## Intuition
The problem requires checking whether the given list of cards (represented by integers) can be divided into groups of a given size such that each group forms a straight hand. A straight hand is formed when each group contains consecutive integers.

## Approach
1. **Check for Divisibility:** If the total number of cards is not divisible by the group size, it's impossible to form straight hands. Return false in such cases.
2. **Count Card Occurrences:** Use a map to count the occurrences of each card in the hand.
3. **Sort Cards:** Sort the unique cards in ascending order.
4. **Iterate Through Cards:** Iterate through the sorted keys. For each card:
   - If there are cards available for this value, check if there are enough cards for the consecutive group.
   - If there aren't enough cards for any card in the group, return false.
5. If all groups can be formed, return true.

## Complexity
- **Time complexity:** O(n log n), where n is the number of unique cards. This complexity arises from sorting the unique cards.
- **Space complexity:** O(n), where n is the number of unique cards. This space is used for storing the count of each unique card in the map.

## Code
```javascript []
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    const count = new Map();
    for (let card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }
    const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);
    for (let key of sortedKeys) {
        if (count.get(key) > 0) {
            let num = count.get(key);
            for (let i = 0; i < groupSize; i++) {
                if ((count.get(key + i) || 0) < num) return false;
                count.set(key + i, count.get(key + i) - num);
            }
        }
    }
    return true;
};
```
```TypeScript []
function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;

    const count = new Map<number, number>();
    for (let card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }

    const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);

    for (let key of sortedKeys) {
        if (count.get(key)! > 0) {
            let num = count.get(key)!;
            for (let i = 0; i < groupSize; i++) {
                if ((count.get(key + i) || 0) < num) return false;
                count.set(key + i, count.get(key + i)! - num);
            }
        }
    }
    return true;
};
```
```Python []
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        
        count = Counter(hand)
        keys = sorted(count)
        
        for key in keys:
            if count[key] > 0:
                num = count[key]
                for i in range(groupSize):
                    if count[key + i] < num:
                        return False
                    count[key + i] -= num
        
        return True        
```
```Dart []
class Solution {
  bool isNStraightHand(List<int> hand, int groupSize) {
    if (hand.length % groupSize != 0) return false;
  
    var count = <int, int>{};
    for (var card in hand) {
        count[card] = (count[card] ?? 0) + 1;
    }
    
    var sortedKeys = count.keys.toList()..sort();
    
    for (var key in sortedKeys) {
        if (count[key]! > 0) {
        var num = count[key]!;
        for (var i = 0; i < groupSize; i++) {
            if ((count[key + i] ?? 0) < num) return false;
            count[key + i] = count[key + i]! - num;
        }
        }
    }
    return true;
  }
}
```