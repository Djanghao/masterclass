# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-five/solutions/5589540/](https://leetcode.com/problems/high-five/solutions/5589540/)

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
```Java []
public int[][] highFive(int[][] items) {
    // Step 1: Create a HashMap to store student ID and their scores
    Map<Integer, List<Integer>> scoresMap = new HashMap<>();

    // Step 2: Populate the HashMap with student IDs and their scores
    for (int[] item : items) {
        int id = item[0];
        int score = item[1];
        scoresMap.computeIfAbsent(id, k -> new ArrayList<>()).add(score);
    }

    // Step 3: Calculate the top five average for each student
    List<int[]> result = new ArrayList<>();
    for (Map.Entry<Integer, List<Integer>> entry : scoresMap.entrySet()) {
        int id = entry.getKey();
        List<Integer> scores = entry.getValue();
        Collections.sort(scores, Collections.reverseOrder());

        int sum = 0;
        for (int i = 0; i < 5 && i < scores.size(); i++) {
            sum += scores.get(i);
        }

        int topFiveAverage = sum / 5;
        result.add(new int[]{id, topFiveAverage});
    }

    // Step 4: Sort the result by student ID
    Collections.sort(result, (a, b) -> Integer.compare(a[0], b[0]));

    // Step 5: Convert the result list to an array
    return result.toArray(new int[result.size()][]);
}
```
```Javascript []
var highFive = function(items) {
    // Step 1: Create a Map to store student ID and their scores
    const scoresMap = new Map();

    // Step 2: Populate the Map with student IDs and their scores
    for (const [id, score] of items) {
        if (!scoresMap.has(id)) {
            scoresMap.set(id, []);
        }
        scoresMap.get(id).push(score);
    }

    // Step 3: Calculate the top five average for each student
    const result = [];
    for (const [id, scores] of scoresMap) {
        // Sort scores in descending order
        scores.sort((a, b) => b - a);

        // Calculate the sum of the top five scores
        let sum = 0;
        for (let i = 0; i < 5 && i < scores.length; i++) {
            sum += scores[i];
        }

        // Calculate the average using integer division
        const topFiveAverage = Math.floor(sum / 5);
        result.push([id, topFiveAverage]);
    }

    // Step 4: Sort the result by student ID
    result.sort((a, b) => a[0] - b[0]);

    // Step 5: Return the result
    return result;
};
```
```Typescript []
function highFive(items: number[][]): number[][] {
    // Step 1: Create a Map to store student ID and their scores
    const scoresMap: Map<number, number[]> = new Map();

    // Step 2: Populate the Map with student IDs and their scores
    for (const [id, score] of items) {
        if (!scoresMap.has(id)) {
            scoresMap.set(id, []);
        }
        scoresMap.get(id)!.push(score);
    }

    // Step 3: Calculate the top five average for each student
    const result: number[][] = [];
    for (const [id, scores] of scoresMap) {
        // Sort scores in descending order
        scores.sort((a, b) => b - a);

        // Calculate the sum of the top five scores
        let sum = 0;
        for (let i = 0; i < 5 && i < scores.length; i++) {
            sum += scores[i];
        }

        // Calculate the average using integer division
        const topFiveAverage = Math.floor(sum / 5);
        result.push([id, topFiveAverage]);
    }

    // Step 4: Sort the result by student ID
    result.sort((a, b) => a[0] - b[0]);

    // Step 5: Return the result
    return result;
};
```