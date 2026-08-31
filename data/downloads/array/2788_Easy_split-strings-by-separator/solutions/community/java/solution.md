# Simple java solution

**Author:** Siddhant_1602
**Votes:** 19
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3803580/](https://leetcode.com/problems/split-strings-by-separator/solutions/3803580/)

---

# Complexity
- Time complexity: $$O(n * k)$$ where k is length of each array index

- Space complexity: $$O(k)$$

# Code
```
class Solution {
    public List<String> splitWordsBySeparator(List<String> words, char separator) {
        List<String> nm=new ArrayList<>();
        for(int i=0;i<words.size();i++)
        {
            String arr[]=words.get(i).split("["+separator+"]");
            for(int j=0;j<arr.length;j++)
            {
                
                if(arr[j].length()>0)
                {
                    nm.add(arr[j]);
                }
            }
        }
        return nm;
    }
}
```