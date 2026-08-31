# BEATS 100% simple DART solution with explanation

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5130118/](https://leetcode.com/problems/relative-ranks/solutions/5130118/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to assign ranks to athletes based on their scores. The highest score gets the "Gold Medal", the second highest gets the "Silver Medal", the third highest gets the "Bronze Medal", and the rest get their rank as their placement number. This problem can be solved using a map to keep track of the original indices of the scores and then sorting the scores.
# Approach
<!-- Describe your approach to solving the problem. -->
The approach is to first convert the list of scores to a map where the key is the index and the value is the score. Then, sort the entries of the map in descending order of the scores. After sorting, assign the medals to the top three scores and assign the placement number as the rank for the rest of the scores.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 The time complexity is O(n log n), where n is the number of scores. This is because we are sorting the scores, which takes O(n log n) time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n), where n is the number of scores. This is because we are creating a map and a list to store the scores and their ranks.
# Code
```
class Solution {
  List<String> findRelativeRanks(List<int> score) {
    // Convert the list of scores to a map where the key is the index and the value is the score
    Map<int,int> map = score.asMap();

    // Initialize an empty list to store the ranks
    List<String> ans = List.generate(score.length,(_)=>'');

    // Define the medals
    final medals = ["Gold Medal","Silver Medal","Bronze Medal"];

    // Sort the entries of the map in descending order of the scores
    final entries = map.entries.toList()..sort((a,b)=>b.value.compareTo(a.value));

    // Assign the medals to the top three scores
    for(int i=0;i<min(3,score.length);i++){
        final key = entries[i].key;
        ans[key]=medals[i];
    }

    // Assign the placement number as the rank for the rest of the scores
    for(int i=3;i<score.length;i++){
        final key = entries[i].key;
        ans[key]="${i+1}";
    }

    // Return the list of ranks
    return ans;
  }
}
```