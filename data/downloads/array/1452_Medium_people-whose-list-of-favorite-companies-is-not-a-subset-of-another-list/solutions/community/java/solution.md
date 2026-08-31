# [Java] simple solution using HashMap

**Author:** FallenSen
**Votes:** 5
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/637963/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/637963/)

---

I think the critical part of solving this question is that how we determine whether one list is a subset of another, a strait-forward idea is to use hashset. However, I want to provide a different idea. For each favorite company list, we can count the frequency of the index that this company occurs in the whole list set and if there is a frequency equals to the current company list's length but the index itself is not current index, then it means it is a subset of some other list.

For example:
[["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]]
0 -------- 1 ---------- 2
by aggregating company name with a list of index they occur:
leetcode -> {0, 1}
google -> {0, 2}
facebook -> {0, 2}
amazon -> {1}

for the thrid list: ["facebook","google"], if we count frequency of their indexes:
facebook -> {0, 2}
google -> {0, 2}
=>
0 -> 2
2 -> 2
since there are two indexes 0 and 2, which has the same frequency 2, which is equal to length of list ["facebook","google"] but 0 is not the current list index in the input, which means this list is a subset of list at index 0 of input.

```
class Solution {
    public List<Integer> peopleIndexes(List<List<String>> favoriteCompanies) {
        Map<String, List<Integer>> map = new HashMap<>();
        int len = favoriteCompanies.size();
        for (int i = 0; i < len; i++) {
            List<String> temp = favoriteCompanies.get(i);
            for (String comp : temp) {
                if (!map.containsKey(comp)) map.put(comp, new ArrayList<Integer>());
                map.get(comp).add(i);
            }
        }
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < len; i++) {
            List<String> comps = favoriteCompanies.get(i);
            if (isValid(comps, map, len, i)) result.add(i);
        }
        return result;
    }
	// check frequency of indexes for every company in a company list
    private boolean isValid(List<String> comps, Map<String, List<Integer>> map, int len, int currIndex) {
        int[] fres = new int[len];
        for (String comp : comps) {
            List<Integer> list = map.get(comp);
            for (Integer index : list) fres[index]++;
        }
        for (int i = 0; i < fres.length; i++) {
            if (fres[i] == comps.size() && i != currIndex) return false;
        }
        return true;
    }
}
```

The time complexity would be O(m * n) as we need to loop through every company in every list, M = input.length, N = max(input[i].length)
