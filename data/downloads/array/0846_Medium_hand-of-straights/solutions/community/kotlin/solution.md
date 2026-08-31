# Java | C++ | Python | Js | Kotlin | Php | ✅ Very Easy 🚀 | ✅ Fully Explained 🚀 | ✅ Dry Run 🚀

**Author:** onefineday01
**Votes:** 4
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/4907069/](https://leetcode.com/problems/hand-of-straights/solutions/4907069/)

---

# Intuition
The problem asks to check if the given hand can be arranged into groupSize number of groups such that each group has consecutive numbers. We can solve this by using a map to count the frequency of each card in the hand and then iterating through the hand, checking if we can form consecutive groups of size groupSize.


# Approach
```
Function isNStraightHand(hand: Array of integers, groupSize: Integer) -> Boolean:
    1. Create a countMap to store the count of each card.
    2. Iterate through each card in the hand and update its count in the countMap.
    3. Sort the hand to ensure the cards are in ascending order.
    4. Iterate through each card in the sorted hand:
        a. If the count of the current card is zero, continue to the next card.
        b. For each card, iterate through the next 'groupSize' cards:
            i. Calculate the value of the current card in the group.
            ii. If the count of the current card in the group is zero, return false.
            iii. Decrement the count of the current card in the countMap.
    5. If all groups of size 'groupSize' can be formed, return true; otherwise, return false.

Explanation:
- The function maintains a countMap to keep track of the number of occurrences of each card in the hand.
- It sorts the hand to ensure that cards are processed in ascending order.
- Then, for each card, it checks if there are enough consecutive cards available to form a group of size 'groupSize'.
- If any group cannot be formed, it returns false, indicating that it's impossible to rearrange the hand in groups of size 'groupSize'.
- If all groups can be formed, it returns true, indicating that the hand can be rearranged into groups of size 'groupSize'.

```

# Complexity
- Time complexity: $$O(n log n)$$

- Space complexity: $$O(n)$$

# Dry Run
###### let's perform a dry run using a sample input.
###### Suppose we have the following input:
```
hand = [1, 2, 3, 6, 2, 3, 4, 7, 8]
groupSize = 3
```

###### Step-by-Step Execution:

- Counting Cards:
    - We initialize a countMap to keep track of the count of each card in the hand.
    - We iterate through the hand array, populate countMap with the counts of each card.
```
countMap = {1: 1, 2: 2, 3: 2, 4: 1, 6: 1, 7: 1, 8: 1}
```
- Sorting Hand:
    - We sort the hand array to ensure the cards are in ascending order.
```
hand = [1, 2, 2, 3, 3, 4, 6, 7, 8]
```
- Group Formation:
    - We iterate through the sorted hand.
    - For each card, we check if it's already used up. If yes, we continue to the next card.
    - Otherwise, we attempt to form a group of size groupSize.
    - We iterate groupSize times, checking if each consecutive card can be used.
    - If any of the cards in the group are unavailable, we return false.
    - Otherwise, we decrement their counts in countMap.
```
Checking for group starting at 1:
Group formed: [1, 2, 3]
countMap = {1: 0, 2: 1, 3: 1, 4: 1, 6: 1, 7: 1, 8: 1}

Checking for group starting at 2:
Group formed: [2, 3, 4]
countMap = {1: 0, 2: 0, 3: 0, 4: 0, 6: 1, 7: 1, 8: 1}

Checking for group starting at 6:
Group formed: [6, 7, 8]
countMap = {1: 0, 2: 0, 3: 0, 4: 0, 6: 0, 7: 0, 8: 0}
```
- Completion:
    - Since we successfully formed groups for all cards, we return true.
- Final Output:
    - The algorithm returns true, indicating that the hand can be rearranged into groups of size groupSize (3 in this case).

# Do Upvote if this helps \u2B06\uFE0F \uD83D\uDC4D\uD83C\uDFFB

# Code
**Java | C++ | Python | Javascript | Kotlin | PHP**
```Java []
class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int card : hand) {
            countMap.put(card, countMap.getOrDefault(card, 0) + 1);
        }
        
        Arrays.sort(hand);
        
        for (int i = 0; i < hand.length; i++) {
            if (countMap.get(hand[i]) == 0) {
                continue;
            }
            
            for (int j = 0; j < groupSize; j++) {
                int currCard = hand[i] + j;
                
                if (countMap.getOrDefault(currCard, 0) == 0) {
                    return false;
                }
                
                countMap.put(currCard, countMap.get(currCard) - 1);
            }
        }
        
        return true;
    }
}
```
```C++ []
class Solution {
public:
    bool isNStraightHand(vector<int>& hand, int groupSize) {
        unordered_map<int, int> countMap;
        for (int card : hand) {
            countMap[card]++;
        }
        
        sort(hand.begin(), hand.end());
        
        for (int i = 0; i < hand.size(); i++) {
            if (countMap[hand[i]] == 0) {
                continue;
            }
            
            for (int j = 0; j < groupSize; j++) {
                int currCard = hand[i] + j;
                
                if (countMap[currCard] == 0) {
                    return false;
                }
                
                countMap[currCard]--;
            }
        }
        
        return true;
    }
};
```
```Python []
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        count_map = Counter(hand)
        hand.sort()
        
        for card in hand:
            if count_map[card] == 0:
                continue
            
            for j in range(groupSize):
                curr_card = card + j
                
                if count_map[curr_card] == 0:
                    return False
                
                count_map[curr_card] -= 1
        
        return True
```
```Javascript []
class Solution {
    isNStraightHand(hand, groupSize) {
        const countMap = new Map();
        hand.forEach(card => {
            countMap.set(card, (countMap.get(card) || 0) + 1);
        });
        
        hand.sort((a, b) => a - b);
        
        for (let i = 0; i < hand.length; i++) {
            if (countMap.get(hand[i]) === 0) {
                continue;
            }
            
            for (let j = 0; j < groupSize; j++) {
                const currCard = hand[i] + j;
                
                if (countMap.get(currCard) === 0) {
                    return false;
                }
                
                countMap.set(currCard, countMap.get(currCard) - 1);
            }
        }
        
        return true;
    }
}
```
```Kotlin []
class Solution {
    fun isNStraightHand(hand: IntArray, groupSize: Int): Boolean {
        val countMap = HashMap<Int, Int>()
        hand.forEach { card ->
            countMap[card] = countMap.getOrDefault(card, 0) + 1
        }
        
        hand.sort()
        
        for (i in hand.indices) {
            if (countMap[hand[i]] == 0) {
                continue
            }
            
            for (j in 0 until groupSize) {
                val currCard = hand[i] + j
                
                if (countMap.getOrDefault(currCard, 0) == 0) {
                    return false
                }
                
                countMap[currCard] = countMap[currCard]!! - 1
            }
        }
        
        return true
    }
}
```
```Php []
class Solution {
    function isNStraightHand($hand, $groupSize) {
        $countMap = array();
        foreach ($hand as $card) {
            $countMap[$card] = isset($countMap[$card]) ? $countMap[$card] + 1 : 1;
        }
        
        sort($hand);
        
        foreach ($hand as $card) {
            if ($countMap[$card] == 0) {
                continue;
            }
            
            for ($j = 0; $j < $groupSize; $j++) {
                $currCard = $card + $j;
                
                if ($countMap[$currCard] == 0) {
                    return false;
                }
                
                $countMap[$currCard]--;
            }
        }
        
        return true;
    }
}
```

# Using Priority Queue 
**Java | C++ | Python | Javascript | Kotlin | PHP**
```Java []
class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        if(hand.length % groupSize != 0) return false;
        HashMap<Integer, Integer> map = new HashMap<>();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i = 0; i < hand.length ; i++) {
            if(!map.containsKey(hand[i])) {
                pq.add(hand[i]);
            }
            map.put(hand[i], map.getOrDefault(hand[i], 0) + 1);
        }
        while(pq.size() > 0) {
            int firstCard = pq.peek();
            int min = Integer.MAX_VALUE;
            for(int card = firstCard; card <= firstCard+groupSize-1; card++) {
                if(pq.size() == 0 || pq.peek() != card) {
                    return false;
                }
                pq.poll();
                min = Math.min(min, map.get(card));
            }
            for(int card = firstCard; card <= firstCard+groupSize-1; card++) {
                int value = map.get(card);
                map.put(card, value-min);
                if(value - min > 0) {
                    pq.add(card);
                } 
            }
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    bool isNStraightHand(vector<int>& hand, int groupSize) {
        if (hand.size() % groupSize != 0) return false;
        unordered_map<int, int> map;
        priority_queue<int, vector<int>, greater<int>> pq;
        
        for (int i = 0; i < hand.size(); i++) {
            if (map.find(hand[i]) == map.end()) {
                pq.push(hand[i]);
            }
            map[hand[i]]++;
        }
        
        while (!pq.empty()) {
            int firstCard = pq.top();
            int minValue = INT_MAX;
            
            for (int card = firstCard; card <= firstCard + groupSize - 1; card++) {
                if (pq.empty() || pq.top() != card) {
                    return false;
                }
                pq.pop();
                minValue = min(minValue, map[card]);
            }
            
            for (int card = firstCard; card <= firstCard + groupSize - 1; card++) {
                int value = map[card];
                map[card] = value - minValue;
                if (value - minValue > 0) {
                    pq.push(card);
                }
            }
        }
        
        return true;
    }
};

```
```Python []
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        
        count_map = defaultdict(int)
        pq = []
        
        for card in hand:
            if card not in count_map:
                heapq.heappush(pq, card)
            count_map[card] += 1
        
        while pq:
            first_card = heapq.heappop(pq)
            min_value = float('inf')
            
            for card in range(first_card, first_card + groupSize):
                if not pq or pq[0] != card:
                    return False
                heapq.heappop(pq)
                min_value = min(min_value, count_map[card])
            
            for card in range(first_card, first_card + groupSize):
                count_map[card] -= min_value
                if count_map[card] > 0:
                    heapq.heappush(pq, card)
        
        return True

```
```Javascript []
class Solution {
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;
        const map = new Map();
        const pq = [];
        
        for (let i = 0; i < hand.length; i++) {
            if (!map.has(hand[i])) {
                pq.push(hand[i]);
            }
            map.set(hand[i], (map.get(hand[i]) || 0) + 1);
        }
        
        while (pq.length > 0) {
            const firstCard = pq[0];
            let minValue = Infinity;
            
            for (let card = firstCard; card <= firstCard + groupSize - 1; card++) {
                if (pq.length === 0 || pq[0] !== card) {
                    return false;
                }
                pq.shift();
                minValue = Math.min(minValue, map.get(card));
            }
            
            for (let card = firstCard; card <= firstCard + groupSize - 1; card++) {
                const value = map.get(card);
                map.set(card, value - minValue);
                if (value - minValue > 0) {
                    pq.push(card);
                }
            }
        }
        
        return true;
    }
}
```
```Kotlin []
class Solution {
    fun isNStraightHand(hand: IntArray, groupSize: Int): Boolean {
        if (hand.size % groupSize != 0) return false
        val map = HashMap<Int, Int>()
        val pq = PriorityQueue<Int>()
        
        for (card in hand) {
            if (!map.containsKey(card)) {
                pq.add(card)
            }
            map[card] = (map[card] ?: 0) + 1
        }
        
        while (pq.isNotEmpty()) {
            val firstCard = pq.poll()
            var minValue = Int.MAX_VALUE
            
            for (card in firstCard..firstCard + groupSize - 1) {
                if (pq.isEmpty() || pq.peek() != card) {
                    return false
                }
                pq.poll()
                minValue = minOf(minValue, map[card]!!)
            }
            
            for (card in firstCard..firstCard + groupSize - 1) {
                val value = map[card]!!
                map[card] = value - minValue
                if (value - minValue > 0) {
                    pq.add(card)
                }
            }
        }
        
        return true
    }
}
```
```Php []
class Solution {
    function isNStraightHand($hand, $groupSize) {
        if (count($hand) % $groupSize != 0) return false;
        $map = [];
        $pq = [];
        
        foreach ($hand as $card) {
            if (!isset($map[$card])) {
                array_push($pq, $card);
            }
            $map[$card] = ($map[$card] ?? 0) + 1;
        }
        
        while (!empty($pq)) {
            $firstCard = $pq[0];
            $minValue = PHP_INT_MAX;
            
            for ($card = $firstCard; $card <= $firstCard + $groupSize - 1; $card++) {
                if (empty($pq) || $pq[0] != $card) {
                    return false;
                }
                array_shift($pq);
                $minValue = min($minValue, $map[$card]);
            }
            
            for ($card = $firstCard; $card <= $firstCard + $groupSize - 1; $card++) {
                $value = $map[$card];
                $map[$card] = $value - $minValue;
                if ($value - $minValue > 0) {
                    array_push($pq, $card);
                }
            }
        }
        
        return true;
    }
}
```