# 💯Faster✅💯Less Mem✅3 Methods🧠Detailed Approach🎯Sorting🔥Heap🔥Map🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 89
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5127969/](https://leetcode.com/problems/relative-ranks/solutions/5127969/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 3 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
In the `Relative Ranks` problem on LeetCode, you're given an integer array representing scores of athletes. You need to return their relative ranks, represented as a string, according to the scores. The relative ranks are as follows:

1. The athlete with the highest score gets the "Gold Medal".
2. The athlete with the second-highest score gets the "Silver Medal".
3. The athlete with the third-highest score gets the "Bronze Medal".
4. The remaining athletes get their rank represented by their position in the ordered list (starting from 4th place).

### \uD83D\uDCE5Input:
- An integer array `nums` containing scores of athletes.
### \uD83D\uDCE4Output:
- A string array representing the relative ranks of the athletes according to their scores.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering three different methods to solve this problem:
1. Sorting and Mapping
2. Priority Queue
3. Array as Map

# 1\uFE0F\u20E3Sorting and Mapping\uD83E\uDD13: 
### \uD83E\uDDE0Intuition:
The problem requires assigning ranks to athletes based on their scores, where the highest score gets the "Gold Medal," the second-highest gets the "Silver Medal," the third-highest gets the "Bronze Medal," and the rest get their placement numbers as their ranks. To achieve this, we can sort the scores in descending order and assign ranks accordingly.

### \uD83D\uDCDADetailed Approach:
1. **Sorting the scores:** First, we sort the scores in descending order. This allows us to easily determine the rank of each athlete based on their position in the sorted list.

2. **Assigning medals:** We create a list `medals` containing the strings "Gold Medal," "Silver Medal," and "Bronze Medal" to assign these ranks to the top three athletes.

3. **Rank Mapping:** We create a dictionary `rank_mapping` where the keys are the scores and the values are the corresponding ranks based on their positions in the sorted list. For the top three scores, we use the `medals` list, and for the rest, we use their placement number (index + 1).

4. **Constructing the answer array:** Finally, we iterate through the original `score` list and use the `rank_mapping` dictionary to get the rank for each athlete. We construct the `answer` list containing the ranks for all athletes.

5. **Return:** We return the `answer` list containing the ranks of all athletes.



<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(nlogn)` for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)`  -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        sorted_score = sorted(score, reverse=True)
        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
        rank_mapping = {score: medals[i] if i < 3 else str(i + 1) for i, score in enumerate(sorted_score)}
        return [rank_mapping[score] for score in score]
```
```Java []
class Solution {
    public String[] findRelativeRanks(int[] score) {
        Integer[] sortedScore = Arrays.stream(score).boxed().sorted(Collections.reverseOrder()).toArray(Integer[]::new);
        String[] medals = {"Gold Medal", "Silver Medal", "Bronze Medal"};
        Map<Integer, String> rankMapping = new HashMap<>();
        for (int i = 0; i < sortedScore.length; i++) {
            if (i < 3) {
                rankMapping.put(sortedScore[i], medals[i]);
            } else {
                rankMapping.put(sortedScore[i], String.valueOf(i + 1));
            }
        }
        String[] result = new String[score.length];
        for (int i = 0; i < score.length; i++) {
            result[i] = rankMapping.get(score[i]);
        }
        return result;
    }
}

```
```C++ []
class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        vector<int> sortedScore = score;
        sort(sortedScore.begin(), sortedScore.end(), greater<int>());
        vector<string> medals = {"Gold Medal", "Silver Medal", "Bronze Medal"};
        unordered_map<int, string> rankMapping;
        for (int i = 0; i < sortedScore.size(); i++) {
            if (i < 3) {
                rankMapping[sortedScore[i]] = medals[i];
            } else {
                rankMapping[sortedScore[i]] = to_string(i + 1);
            }
        }
        vector<string> result;
        for (int s : score) {
            result.push_back(rankMapping[s]);
        }
        return result;
    }
};
```
#  2\uFE0F\u20E3Priority Queue\uD83D\uDE0E:
### \uD83E\uDDE0Intuition:
This code aims to assign ranks to athletes based on their scores in a competition. The idea is to use a heap data structure to efficiently keep track of the athletes' scores along with their original indices. Then, we traverse through the heap to assign ranks to each athlete according to their placement. Finally, we return an array containing the ranks of all athletes.

### \uD83D\uDCDADetailed Approach:

1. **Heap Creation:**
   - We start by creating a heap of pairs `(score, index)` where `score` is the athlete's score and `index` is their original index in the input array.
   - We use a max heap where the scores are negated so that we can pop the highest score first.

2. **Assigning Ranks:**
   - We initialize a variable `place` to keep track of the current placement, starting from 1.
   - While the heap is not empty, we pop elements one by one.
   - For each popped element, we retrieve its original index and assign a rank based on its placement:
     - If the place is 1, we assign "Gold Medal".
     - If the place is 2, we assign "Silver Medal".
     - If the place is 3, we assign "Bronze Medal".
     - For all other places, we simply assign the place number as a string.
   - After assigning the rank, we increment the `place` variable.

3. **Output:**
   - Finally, we return the array containing the ranks of all athletes.


<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        N = len(score)

        # Create a heap of pairs (score, index)
        heap = []
        for index, score in enumerate(score):
            heapq.heappush(heap, (-score, index))
        
        # Assign ranks to athletes
        rank = [0] * N
        place = 1
        while heap:
            original_index = heapq.heappop(heap)[1]
            if place == 1:
                rank[original_index] = "Gold Medal"
            elif place == 2:
                rank[original_index] = "Silver Medal"
            elif place == 3:
                rank[original_index] = "Bronze Medal"
            else:
                rank[original_index] = str(place)
            place +=1
            
        return rank
```
```Java []
class Solution {
    public String[] findRelativeRanks(int[] score) {
        int N = score.length;

        // Create a max heap of pairs (score, index)
        PriorityQueue<Pair<Integer, Integer>> heap = new PriorityQueue<>(
                (a, b) -> b.getKey() - a.getKey());
        for (int i = 0; i < N; i++) {
            heap.add(new Pair<>(score[i], i));
        }

        // Assign ranks to athletes
        String[] rank = new String[N];
        int place = 1;
        while (!heap.isEmpty()) {
            Pair<Integer, Integer> pair = heap.poll();
            int originalIndex = pair.getValue();
            if (place == 1) {
                rank[originalIndex] = "Gold Medal";
            } else if (place == 2) {
                rank[originalIndex] = "Silver Medal";
            } else if (place == 3) {
                rank[originalIndex] = "Bronze Medal";
            } else {
                rank[originalIndex] = String.valueOf(place);
            }
            place++;
        }
        return rank;
    }
}
```
```C++ []
class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        int N = score.size();

        // Create a max heap of pairs (score, index)
        priority_queue<pair<int, int>> heap;
        for (int i = 0; i < N; i++) {
            heap.push({score[i], i});
        }

        // Assign ranks to athletes
        vector<string> rank(N);
        int place = 1;
        while (!heap.empty()) {
            int originalIndex = heap.top().second;
            heap.pop();
            if (place == 1) {
                rank[originalIndex] = "Gold Medal";
            } else if (place == 2) {
                rank[originalIndex] = "Silver Medal";
            } else if (place == 3) {
                rank[originalIndex] = "Bronze Medal";
            } else {
                rank[originalIndex] = to_string(place);
            }
            place++;
        }
        return rank;
    }
};
```
# 3\uFE0F\u20E3Array as Map\uD83D\uDE0E:
### \uD83E\uDDE0Intuition:
The problem requires assigning ranks to athletes based on their scores, following specific rules. To accomplish this efficiently, the code first maps each score to its original index in the input array. Then, it iterates through the scores from the highest to the lowest, assigning ranks based on the placement of each athlete. The code handles special cases for the top three athletes, assigning them "Gold Medal," "Silver Medal," and "Bronze Medal," respectively. For the rest, it assigns their placement number as their rank.

### \uD83D\uDCDADetailed Approach:
1. **Finding the maximum score:** The `find_max` function iterates through the scores to find the maximum score. This is used to determine the size of the array `score_to_index`.

2. **Mapping scores to their original indices:** The code initializes an array `score_to_index` of size `max_score + 1`, where `max_score` is the maximum score in the input array. Each element of this array will store the original index of the score in the input array. This mapping allows us to preserve the original order of scores.

3. **Assigning ranks:** The code iterates through scores in descending order (from `max_score` to 0). For each score, it checks if it exists in the `score_to_index` array. If it does, it means an athlete with that score exists. Based on the athlete's position (place), it assigns the appropriate rank:
   - For the top three athletes (place < 4), it assigns "Gold Medal," "Silver Medal," and "Bronze Medal" respectively from the `MEDALS` list.
   - For the rest, it assigns their placement number as their rank by converting it to a string.

4. **Constructing the rank array:** During this process, the code fills the `rank` array with the assigned ranks for each athlete.

5. **Returning the rank array:** Finally, the code returns the `rank` array containing the ranks of all athletes, preserving the original order.



<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for XORing all the numbers

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def find_max(self, score):
        max_score = 0
        for s in score:
            if s > max_score :
                max_score = s
        return max_score

    def findRelativeRanks(self, score):
        N = len(score)

        # Add the original index of each score to the array
        # Where the score is the key
        M = self.find_max(score)
        score_to_index = [0] * (M + 1)
        for i in range(N):
            score_to_index[score[i]] = i + 1

        MEDALS = ["Gold Medal", "Silver Medal", "Bronze Medal"]

        # Assign ranks to athletes
        rank = [None] * N
        place = 1
        for i in range(M, -1, -1):
            if score_to_index[i] != 0:
                original_index = score_to_index[i] - 1
                if place < 4:
                    rank[original_index] = MEDALS[place - 1]
                else:
                    rank[original_index] = str(place)
                place += 1
        return rank
        carry = self.twice_of_val(head)
        
        # If there's a carry, insert a new node at the beginning with the carry value
        if carry:
            head = ListNode(carry, head)
        
        # Return the head of the updated linked list
        return head
```
```Java []
class Solution {
    private int findMax(int[] score) {
        int maxScore = 0;
        for (int s : score) {
            if (s > maxScore) {
                maxScore = s;
            }
        }
        return maxScore;
    }

    public String[] findRelativeRanks(int[] score) {
        int N = score.length;

        // Add the original index of each score to the array
        // Where the score is the key
        int M = findMax(score);
        int[] scoreToIndex = new int[M + 1];
        for (int i = 0; i < N; i++) {
            scoreToIndex[score[i]] = i + 1;
        }

        final String[] MEDALS = {"Gold Medal", "Silver Medal", "Bronze Medal"};

        // Assign ranks to athletes
        String[] rank = new String[N];
        int place = 1;
        for (int i = M; i >= 0; i--) {
            if (scoreToIndex[i] != 0) {
                int originalIndex = scoreToIndex[i] - 1;
                if (place < 4) {
                    rank[originalIndex] = MEDALS[place - 1];
                } else {
                    rank[originalIndex] = String.valueOf(place);
                }
                place++;
            }
        }
        return rank;
    }
}
```
```C++ []
class Solution {
private:
    int findMax(vector<int>& score) {
        int maxScore = 0;
        for (int s : score) {
            if (s > maxScore) {
                maxScore = s;
            }
        }
        return maxScore;
    }
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        int N = score.size();

        // Add the original index of each score to the array
        // Where the score is the key
        int M = findMax(score);
        vector<int> scoreToIndex(M + 1, 0);
        for (int i = 0; i < N; i++) {
            scoreToIndex[score[i]] = i + 1;
        }

        const vector<string> MEDALS = {"Gold Medal", "Silver Medal", "Bronze Medal"};

        // Assign ranks to athletes
        vector<string> rank(N);
        int place = 1;
        for (int i = M; i >= 0; i--) {
            if (scoreToIndex[i] != 0) {
                int originalIndex = scoreToIndex[i] - 1;
                if (place < 4) {
                    rank[originalIndex] = MEDALS[place - 1];
                } else {
                    rank[originalIndex] = to_string(place);
                }
                place++;
            }
        }
        return rank;
    }
};
```


# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA