# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/5960954/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/5960954/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int[] circularGameLosers(int n, int k) {
    // Set to track the friends who have received the ball
    Set<Integer> received = new HashSet<>();
    int[] result;
    
    int currentFriend = 1;  // The game starts with the 1st friend
    int steps = 1;  // Initial steps to pass the ball
    
    // Continue the game until a friend receives the ball twice
    while (!received.contains(currentFriend)) {
        received.add(currentFriend);  // Mark the current friend as having received the ball
        currentFriend = (currentFriend + steps * k - 1) % n + 1;  // Move to the next friend
        steps++;  // Increase the steps (i * k for the next friend)
    }

    // Create a list of friends who did not receive the ball
    List<Integer> losers = new ArrayList<>();
    for (int i = 1; i <= n; i++) {
        if (!received.contains(i)) {
            losers.add(i);
        }
    }

    // Convert the list of losers to an array
    result = new int[losers.size()];
    for (int i = 0; i < losers.size(); i++) {
        result[i] = losers.get(i);
    }

    return result;
}
```
```javascript []
var circularGameLosers = function(n, k) {
    const received = new Set(); // Set to track friends who have received the ball
    let currentFriend = 1; // The game starts with the 1st friend
    let steps = 1; // Initial steps to pass the ball
    
    // Continue the game until a friend receives the ball twice
    while (!received.has(currentFriend)) {
        received.add(currentFriend); // Mark current friend as having received the ball
        currentFriend = (currentFriend + steps * k - 1) % n + 1; // Move to the next friend
        steps++; // Increase the steps (i * k for the next friend)
    }
    
    // Collect friends who did not receive the ball
    const losers = [];
    for (let i = 1; i <= n; i++) {
        if (!received.has(i)) {
            losers.push(i);
        }
    }
    
    return losers;
};
```
```typescript []
function circularGameLosers(n: number, k: number): number[] {
    const received = new Set<number>(); // Set to track friends who have received the ball
    let currentFriend = 1; // The game starts with the 1st friend
    let steps = 1; // Initial steps to pass the ball
    
    // Continue the game until a friend receives the ball twice
    while (!received.has(currentFriend)) {
        received.add(currentFriend); // Mark current friend as having received the ball
        currentFriend = (currentFriend + steps * k - 1) % n + 1; // Move to the next friend
        steps++; // Increase the steps (i * k for the next friend)
    }
    
    // Collect friends who did not receive the ball
    const losers: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (!received.has(i)) {
            losers.push(i);
        }
    }
    
    return losers;
};
```