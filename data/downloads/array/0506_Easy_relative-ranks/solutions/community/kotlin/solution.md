# 💯HashMap🎯✅ | 99.13%🔥| 4 Easy Steps : 🎯| Simple (9 line) to understand💯Explained

**Author:** Prathamesh18X
**Votes:** 4
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5128107/](https://leetcode.com/problems/relative-ranks/solutions/5128107/)

---

# Intuition
Most Optimal and efficient Solution using ` Map` ,we are using a `hashmap` to save the original indices of the athletes. An alternative to using a map is an `Array`.\uD83D\uDD25\uD83D\uDD25

## Dont forget to Vote\u2B06\uFE0F  `me` && World Largest `democracy` 
![image.png](./images/0.png)


# Code\uD83C\uDFAF
```cpp []
class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        const vector<string> MEDALS = {"Gold Medal", "Silver Medal",
                                       "Bronze Medal"};

        vector<pair<int, int>> scoreIndexPairs;
        for (int i = 0; i < score.size(); i++) {
            scoreIndexPairs.emplace_back(score[i], i);
        }

        sort(scoreIndexPairs.begin(), scoreIndexPairs.end(),
             [](const pair<int, int>& a, const pair<int, int>& b) {
                 return a.first > b.first;
             });

        vector<string> ranks(score.size());

        for (int place = 0; place < scoreIndexPairs.size(); place++) {
            int originalIndex = scoreIndexPairs[place].second;
            if (place < 3) {
                ranks[originalIndex] = MEDALS[place];
            } else {
                ranks[originalIndex] = to_string(place + 1);
            }
        }

        return ranks;
    }
};
```
```java []
class Solution {
    public String[] findRelativeRanks(int[] score) {
        final String[] MEDALS = {"Gold Medal", "Silver Medal", "Bronze Medal"};
        
        List<Pair<Integer, Integer>> scoreIndexPairs = new ArrayList<>();
        for (int i = 0; i < score.length; i++) {
            scoreIndexPairs.add(new Pair<>(score[i], i));
        }
        
        Collections.sort(scoreIndexPairs, (a, b) -> b.getFirst() - a.getFirst());
        
        String[] ranks = new String[score.length];
        
        for (int place = 0; place < scoreIndexPairs.size(); place++) {
            int originalIndex = scoreIndexPairs.get(place).getSecond();
            if (place < 3) {
                ranks[originalIndex] = MEDALS[place];
            } else {
                ranks[originalIndex] = String.valueOf(place + 1);
            }
        }
        
        return ranks;
    }
    
    private static class Pair<F, S> {
        private F first;
        private S second;

        public Pair(F first, S second) {
            this.first = first;
            this.second = second;
        }

        public F getFirst() {
            return first;
        }

        public S getSecond() {
            return second;
        }
    }
}

```
```python []
class Solution(object):
    def findRelativeRanks(self, score):
        # Step 1: Initializations
        N = len(score)
        max_score = max(score)
        rank = [None] * N
        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
        score_to_index = [0] * (max_score + 1)

        # Step 2: Creating Map Array
        for i, s in enumerate(score):
            score_to_index[s] = i + 1

        # Step 3: Assigning Rank
        place = 1
        for i in range(max_score, -1, -1):
            if score_to_index[i] != 0:
                original_index = score_to_index[i] - 1
                if place <= 3:
                    rank[original_index] = medals[place - 1]
                else:
                    rank[original_index] = str(place)
                place += 1

        return rank
```
```javascript []
var findRelativeRanks = function(score) {
    //Step 1 : Initializations
    const N = score.length
    const max = Math.max(...score)
    const rank = new Array(N)
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    const scoreToIndex = new Array(max + 1).fill(0)

    // step 2 : creating Map Array  
    for(let i=0 ; i < N ; i++){
        scoreToIndex[score[i]] = i+1;
    }

    //step 3 : Assigning Rank
    place = 1
    for(let i = max ; i >= 0 ; i--){
        if(scoreToIndex[i] !== 0){
            let originalIndex = scoreToIndex[i] - 1
            if(place <= 3){
                rank[originalIndex] = medals[place - 1]
            }else{
                rank[originalIndex] = place.toString()
            }
            place++
        }
    }
    return rank
};
```
```ruby []
def find_relative_ranks(score)
    # Step 1: Initializations
    n = score.size
    max_score = score.max
    rank = Array.new(n)
    medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    score_to_index = Array.new(max_score + 1, 0)

    # Step 2: Creating Map Array
    score.each_with_index do |s, i|
        score_to_index[s] = i + 1
    end

    # Step 3: Assigning Rank
    place = 1
    max_score.downto(0) do |i|
        next if score_to_index[i] == 0

        original_index = score_to_index[i] - 1
        if place <= 3
            rank[original_index] = medals[place - 1]
        else
            rank[original_index] = place.to_s
        end
        place += 1
    end

    rank
end
```
```kotlin []
fun findRelativeRanks(score: IntArray): Array<String> {
    // Step 1: Initializations
    val N = score.size
    val maxScore = score.maxOrNull() ?: 0
    val rank = arrayOfNulls<String>(N)
    val medals = arrayOf("Gold Medal", "Silver Medal", "Bronze Medal")
    val scoreToIndex = IntArray(maxScore + 1) { 0 }

    // Step 2: Creating Map Array
    for (i in 0 until N) {
        scoreToIndex[score[i]] = i + 1
    }

    // Step 3: Assigning Rank
    var place = 1
    for (i in maxScore downTo 0) {
        if (scoreToIndex[i] != 0) {
            val originalIndex = scoreToIndex[i] - 1
            if (place <= 3) {
                rank[originalIndex] = medals[place - 1]
            } else {
                rank[originalIndex] = place.toString()
            }
            place++
        }
    }

    return rank.filterNotNull().toTypedArray()
}
```
# Approach\uD83D\uDE43

1. **Initialize**:
    - Calculate the number of athletes, `N`, based on the length of the score array.
    - Determine the maximum score, `M`, using a helper function.
    - Create an array, `scoreToIndex`, of size `M + 1` to map each score to its athlete's index (1-based).
    - Define an array, `rank`, of size `N` to hold the ranking of each athlete.
    - Establish a list of medals: "Gold Medal," "Silver Medal," and "Bronze Medal."
    - Initialize a counter `place` to track the ranking position.

2. **Map scores to indices**:
    - Populate `scoreToIndex` with indices by iterating through each score and setting the value at each index to be `i + 1`.

3. **Assign ranks**:
    - Iterate through `scoreToIndex` from the highest score (`M`) down to the lowest (`0`).
    - For each score that exists, determine the original index of the athlete.
    - Assign the appropriate rank (either a medal or a numerical value) to the `rank` array at the athlete's index.
    - Increase the `place` counter.

4. **Return**:
    - Return the `rank` array, containing the ranking of each athlete based on their score.

# Complexity
- Time complexity: `O(N + M)`

- Space complexity:`O(N)`

