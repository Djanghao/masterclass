# Typescript | Javascript | Set | 5 lines

**Author:** OsidAbu-Alrub
**Votes:** 6
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/2469061/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/2469061/)

---

```
function divideArray(nums: number[]): boolean {
  const set = new Set<number>();
  for(const num of nums){
    if(set.has(num))
      set.delete(num)
    else
      set.add(num)
  }
  return set.size === 0;
};
```