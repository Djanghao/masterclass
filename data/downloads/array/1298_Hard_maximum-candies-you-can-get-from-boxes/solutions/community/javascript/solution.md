# Easy Javascript BFS approach

**Author:** acoder2016
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3284762/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3284762/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

My first thoughts on how to solve this problem were to use a breadth-first search (BFS) approach to explore the boxes and their contents. At each step of the BFS, I would check if the current box is open or if I have the key to open it, and if so, add its contents to the queue of boxes to explore. I would also keep track of the keys I have obtained in a set so that I can use them to open future boxes.

# Approach
<!-- Describe your approach to solving the problem. -->

I implemented a BFS approach to explore the boxes and their contents, keeping track of the keys I have obtained in a `Set`. I start with the initial boxes, and then at each step of the BFS, I check if the current box is open or if I have the key to open it. If the box is open or I have the key, I add its contents to the queue of boxes to explore and add any new keys to the set of obtained keys. I continue exploring boxes until I can no longer obtain any new keys.

# Complexity
- Time complexity: The time complexity of my solution is O(N), where N is the total number of boxes. This is because in the worst case, I may need to explore all N boxes to obtain all the keys I need to open all the boxes.

- Space complexity: The space complexity of my solution is also O(N), where N is the total number of boxes. This is because in the worst case, I may need to store all N boxes in the queue of boxes to explore and in the set of obtained keys.


# Code
```
/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {

    let totalCandies = 0;
    let myKeys = new Set();

    function OpenBoxes(initialBoxes) {
        let queue = initialBoxes;
        let closedBoxes = []

        while (queue.length > 0) {
            const boxNum = queue.pop();

            if (status[boxNum] === 1 || myKeys.has(boxNum)) {
                totalCandies += candies[boxNum]
                queue.push(...containedBoxes[boxNum])
                keys[boxNum].forEach(k => myKeys.add(k))
            } else {
                // Box is closed, set aside to try it again later
                closedBoxes.push(boxNum)
            }
        }
        return closedBoxes
    }

    let lastKeyCount = -1;
    let closedBoxes = initialBoxes
    while (lastKeyCount !== myKeys.size) {
        lastKeyCount = myKeys.size
        closedBoxes = OpenBoxes(closedBoxes)
    }

    return totalCandies
};
```