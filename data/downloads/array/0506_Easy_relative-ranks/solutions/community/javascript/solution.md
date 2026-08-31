# 🔥 🔥 🔥 Easy to follow solution; 4 solutions; Python; Java; C++; Javascript 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 21
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5127602/](https://leetcode.com/problems/relative-ranks/solutions/5127602/)

---

# Intuition
- The problem is essentially about ranking athletes based on their scores, where the highest scores earn top accolades like "Gold Medal", "Silver Medal", and "Bronze Medal", and others receive rankings according to their positions. We use a max heap to efficiently sort and access scores in descending order, which aligns naturally with the ranking requirement.

# Approach
- **Initialize Structures:** Create a list answer of the same length as the input score list to store rankings and a max heap to handle the sorting of scores.
- **Build the Heap:** Iterate over the score list and push each score and its index as a tuple into the max heap, inverting the score to use Python's min heap as a max heap.
- **Assign Rankings:**
Pop elements from the heap (which gives the highest score due to the inversion).
For the top three scores, assign "Gold Medal", "Silver Medal", and "Bronze Medal" respectively.
For all subsequent scores, assign rankings based on their position.
- **Return Results:** After processing all scores, return the answer list with the rankings.

# Complexity
- Time complexity:
O(NlogN)

- Space complexity:
O(N)

# Code
```python []
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        lenScore = len(score)
        answer = [0] * lenScore
        maxHeap = []
        rank = ["Gold Medal", "Silver Medal", "Bronze Medal"]

        for index, s in enumerate(score):
            heappush(maxHeap, (-s, index))

        number = 1
        while maxHeap:
            s, index = heappop(maxHeap)
            if number < 4:
                answer[index] = rank[number - 1]
            else:
                answer[index] = str(number)
            number += 1
        return answer
```
```Java []
class Solution {
    public String[] findRelativeRanks(int[] score) {
        int lenScore = score.length;
        List<String> answerList = new ArrayList<>(Collections.nCopies(lenScore, ""));
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                return Integer.compare(b[0], a[0]); // Max heap based on score
            }
        });

        String[] rank = { "Gold Medal", "Silver Medal", "Bronze Medal" };

        for (int index = 0; index < score.length; index++) {
            maxHeap.add(new int[] { score[index], index });
        }

        int number = 1;
        while (!maxHeap.isEmpty()) {
            int[] top = maxHeap.poll();
            int index = top[1];
            if (number < 4) {
                answerList.set(index, rank[number - 1]);
            } else {
                answerList.set(index, String.valueOf(number));
            }
            number++;
        }

        // Convert List<String> to String[] for return
        String[] answer = new String[answerList.size()];
        answer = answerList.toArray(answer);
        return answer;
    }
}
```
```C++ []
class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        int lenScore = score.size();
        vector<string> answer(lenScore);
        priority_queue<pair<int, int>>
            maxHeap; // max heap to store scores with indices

        // Fill the heap with scores and their corresponding indices
        for (int i = 0; i < lenScore; ++i) {
            maxHeap.push({score[i], i});
        }

        vector<string> rank = {"Gold Medal", "Silver Medal", "Bronze Medal"};

        // Assign ranks based on the max heap
        int number = 1;
        while (!maxHeap.empty()) {
            auto top = maxHeap.top();
            maxHeap.pop();
            int index = top.second;
            if (number < 4) {
                answer[index] = rank[number - 1];
            } else {
                answer[index] = to_string(number);
            }
            number++;
        }

        return answer;
    }
};
```
```Javascript []
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const lenScore = score.length;
    const answer = new Array(lenScore);
    const scoreWithIndex = score.map((score, index) => [score, index]);

    // Sort the score in descending order
    scoreWithIndex.sort((a, b) => b[0] - a[0]);

    const rank = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    // Assign ranks based on sorted score
    for (let i = 0; i < lenScore; i++) {
        const index = scoreWithIndex[i][1];
        if (i < 3) {
            answer[index] = rank[i];
        } else {
            answer[index] = String(i + 1);
        }
    }

    return answer;
};
```
**Please Upvote**
![DALL\xB7E 2024-05-08 00.50.08 - A visually appealing graphic design featuring the text 'Please Upvote. It makes me happy' in vibrant, eye-catching colors. The background should inclu.webp](./images/0.webp)
