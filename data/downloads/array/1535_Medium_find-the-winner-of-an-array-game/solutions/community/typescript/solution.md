# Beats 100.00%  with explain for my 1st Time Exceeded approach

**Author:** Sherif-Mostafa
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4251876/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4251876/)

---

# 1st approach brute-force Intuition
The problem involves simulating a game where two elements compete until one wins k consecutive rounds. To find the winner, we need to repeatedly compare the first two elements of the array, with the larger one staying at the front while the smaller one moves to the end. This process continues until one number wins k consecutive times.

# 1st approach brute-force (Time Exceeded)
1. Initialize winner as false to start the game, and result as 0 to keep track of the rounds.
2. Create a map called objWinners to keep track of how many times each number has won.
3. Start a while loop until we have a winner:
- In each iteration, we compare the first two elements of the array. We assign the larger number to win and store the index of the smaller number in loseIndex.
- We then use array manipulation to move the smaller number to the end and the winner stays at the front.
- We call the isWinner function to increment the win count for the current winner. If a number has won k times, we have a winner, and winner becomes true.
4. Once we have a winner, we return the number that's at the front of the array.

```
var getWinner = function (arr, k) {
    let winner = false;
    let result = 0;
    let objWinners = new Map();

    while (!winner) {
        let win = arr[0]
        let loseIndex = 1
        if (arr[0] < arr[1]) {
            win = arr[1];
            loseIndex = 0;
        }
        arr.push(...arr.splice(loseIndex, 1))
        result = isWinner(win)
        winner = result == k
    }

    function isWinner(item) {
        let result = 1;
        if (objWinners.has(item)) {
            result = objWinners.get(item) + 1;
            objWinners.set(item, objWinners.get(item) + 1);
        } else {
            objWinners.set(item, result);
        }
        return result;
    }

    return arr[0];
};

```
# 1st approach brute-force Complexity
- Time complexity: In the worst case, when k is very large and the same numbers keep competing, the time complexity can be high. It may go up to O(k) in the worst case, but on average, it's closer to O(n), where n is the length of the input array.
- Space complexity: The space complexity is O(n) due to the objWinners map, which can store information about each distinct element in the input array. Additionally, the space for variables winner and result is constant.


---

# The correct approach


# Intuition
To find the winner of the game, we need to simulate the game rounds where the larger number always wins and keep track of the consecutive wins of the current maximum number.

# Approach
1. Initialize maxNum to the first number in the array, and consecutiveWins to 0.
2. Iterate through the array from the second element onwards:
- If the current element is larger than maxNum, update maxNum to the current element, and reset consecutiveWins to 1.
- Otherwise, increment consecutiveWins by 1.
- Check if consecutiveWins is equal to k. If so, return maxNum as the winner.
3. If the loop completes without finding a winner (meaning k is larger than the array length), return maxNum as the winner, as the largest number wins all rounds.

# Complexity
- Time complexity: O(n), where n is the length of the input array. We traverse the array once.
- Space complexity: O(1), as we use a constant amount of extra space to store the maximum number and consecutive wins.




# Code
```typescript []
function getWinner(arr: number[], k: number): number {
    if (k === 1) {
        return Math.max(arr[0], arr[1]);
    }
    if (k >= arr.length) {
        return Math.max(...arr);
    }

    let maxNumber = arr[0]
    let consecutiveWins = 0;

    for (let i = 1; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i]
            consecutiveWins = 1;
        } else {
            consecutiveWins++;
        }

        if (consecutiveWins === k) {
            return maxNumber;
        }
    }
    return maxNumber; // The largest number wins k consecutive rounds.
};
```
```javascript []
function getWinner(arr, k): number {
    if (k === 1) {
        return Math.max(arr[0], arr[1]);
    }
    if (k >= arr.length) {
        return Math.max(...arr);
    }

    let maxNumber = arr[0]
    let consecutiveWins = 0;

    for (let i = 1; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i]
            consecutiveWins = 1;
        } else {
            consecutiveWins++;
        }

        if (consecutiveWins === k) {
            return maxNumber;
        }
    }
    return maxNumber; 
};
```
