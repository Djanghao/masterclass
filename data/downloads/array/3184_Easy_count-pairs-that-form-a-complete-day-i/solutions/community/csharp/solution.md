# ✅ Simple Solution || Multiple Approach || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5320056/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5320056/)

---

# Intuition
The intuition behind this solution is to find pairs of hours that add up to 24, representing a complete day. By keeping track of the frequency of each remaining hour (after subtracting it from 24), we can count the number of pairs that form a complete day.

# Approach
- Initialize a variable **count** to keep track of the number of complete day pairs.
- Create an unordered map map to store the frequency of each remaining hour.
- Iterate through the hours vector:
    - Calculate the remaining hour r by taking the modulus of the current hour with 24.
    - Check if the complement of r (i.e., (24 - r) % 24) exists in the map.
    - If it does, increment **count** by the frequency of the complement (map[(24 - r) % 24]).
    - Increment the frequency of r in the map.
Return **count**.

# Complexity
- Time complexity:  O(n)
- Space complexity: O(n)


```Java []
class Solution {
    public int countCompleteDayPairs(int[] hours) {
        int count = 0;
        int n = hours.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            var r = hours[i] % 24;
            if(map.containsKey((24 - r) % 24)) count += map.get((24 - r) % 24);
            map.put(r, map.getOrDefault(r, 0) + 1);
        }
        return count;      
    }
}
```
```C++ []
class Solution {
public:
    int countCompleteDayPairs(vector<int>& hours) {
        int count = 0;
        unordered_map<int,  int> map;
        int n = hours.size();
        for (int i = 0; i < n; i++) {
            int r = hours[i] % 24;
            if(map.find((24 - r) % 24) != map.end()) count += map[(24 - r) % 24];
            map[r]++;
        }
        return count;   
    }
};
```
```C# []
public class Solution {
    public int CountCompleteDayPairs(int[] hours) {
        int count = 0;
        var map = new Dictionary<int, int>();
        int n = hours.Length;
        for (int i = 0; i < n; i++) {
            var r = hours[i] % 24;
            if(map.ContainsKey((24 - r) % 24)) count += map[(24 - r) % 24];
            if(!map.TryAdd(r, 1)) map[r]++;
        }
        return count;
    }
}
```
# Brute Force

```Java []
class Solution {
    public int countCompleteDayPairs(int[] hours) {
        int count = 0;
        int n = hours.length;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++)
                if((hours[i] + hours[j]) % 24 == 0) count++;
        return count;   
    }
}
```
```C++ []
class Solution {
public:
    int countCompleteDayPairs(vector<int>& hours) {
        int count = 0;
        int n = hours.size();
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++)
                if((hours[i] + hours[j]) % 24 == 0) count++;
        return count;  
    }
};
```
```C# []
public class Solution {
    public int CountCompleteDayPairs(int[] hours) {
        int count = 0;
        int n = hours.Length;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++)
                if((hours[i] + hours[j]) % 24 == 0) count++;
        return count;
    }
}
```
![image.png](./images/0.png)
