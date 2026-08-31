# SINGLE_LINE ✅ | O(n) ✅ | EXPLINED  ✅

**Author:** Praveen1932
**Votes:** 1
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5801326/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5801326/)

---

# Intuition
1. Hash_map 
2. Default_dict
3. one_line
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
#1.hash_map
       strings=(s1.split() + s2.split())
        hash_map = Counter(strings)
        result=[]
        for key,val in hash_map.items():
            if val == 1:
                result.append(key)
            else:
                continue
        return result
#2 .default dict
        count = defaultdict(int)

        for s in s1.split(" ") +s2.split(" "):
            count[s] +=1
        
        result =[]

        for w,cnt in count.items():
            if cnt ==1:
                result.append(w)
#        return result

# 3. counter + list_comphrehension

        return [w for w,cnt in Counter(s1.split() + s2.split()).items() if cnt ==1 ]

```