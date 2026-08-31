# C#

**Author:** SK44
**Votes:** 1
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/2808373/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/2808373/)

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
```
public class Solution {
    // T: O(nLogn), S: O(n)
    public IList<string> AlertNames(string[] keyName, string[] keyTime) {
        var nameToTime = new Dictionary<string, SortedSet<int>>();
        for(var i = 0; i < keyName.Length; i++){
            var time = int.Parse(keyTime[i].Substring(0,2)) * 60 + int.Parse(keyTime[i].Substring(3));
            nameToTime.TryAdd(keyName[i], new SortedSet<int>());
            nameToTime[keyName[i]].Add(time); 
        }

        var names = new SortedSet<string>();

        foreach(var nameTimePair in nameToTime){
            var newList = new List<int>(nameTimePair.Value);
            for(var i = 2; i < newList.Count; i++){
                
                if(newList[i] - newList[i-2] <= 60){
                    names.Add(nameTimePair.Key);
                    break;
                }
            }
        }

        return names.ToList();
    }
}
```