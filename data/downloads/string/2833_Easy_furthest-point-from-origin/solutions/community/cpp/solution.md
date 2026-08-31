# C++ & Java Solution

**Author:** kreakEmp
**Votes:** 13
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3965170/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3965170/)

---

# Approach
1. Count 'L' 'R' & '_'.
2. We need to convert the '_' to the one of 'L' or 'R' whose count is larger.
3. Then we decrement the total count by min of 'L' & 'R' count
3. So the final answer will be = 
   max of( count(R), count(L) ) + count('_') - min of(count(R), count(L))


# C++
```
int furthestDistanceFromOrigin(string moves) {
    unordered_map<char, int> count;
    for(auto c: moves) count[c]++;
    return max(count['L'],count['R']) - min(count['L'], count['R']) + count['_'];
}
```

# Java
```
int furthestDistanceFromOrigin(String moves) {
    HashMap<Character, Integer> count = new HashMap<>();
    for (char c : moves.toCharArray()) {
        count.put(c, count.getOrDefault(c, 0) + 1);
    }
    return Math.abs(count.getOrDefault('L', 0) - count.getOrDefault('R', 0))
            + Math.abs(count.getOrDefault('_', 0));
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---