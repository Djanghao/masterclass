# Finding minimum amount of instances by using two hash maps for counting occurrences

**Author:** sunndeath
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5922307/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5922307/)

---

# Intuition
Finding minimum amount of instances by using two hash maps.

# Approach
1. Create two hash maps - the first one for amout of letters in target and the secound one for amount of letter in string existing that target has.
2. Find the minimun amount of instances by iterating over the hash maps.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```typescript []
function rearrangeCharacters(s: string, target: string): number {
  // letter => amount
  const targetMap = new Map();
  const currentMap = new Map();

  for (let i = 0; i < target.length; i++) {
    targetMap.set(target[i], (targetMap.get(target[i]) || 0) + 1);
  }

  let min = Infinity;

  for (let j = 0; j < s.length; j++) {
    if (targetMap.has(s[j])) {
      currentMap.set(s[j], (currentMap.get(s[j]) || 0) + 1);
    }
  }

  currentMap.forEach((value, key) => {
    currentMap.set(key, Math.floor(currentMap.get(key) / targetMap.get(key)));

    min = Math.min(min, currentMap.get(key));
  });

  targetMap.forEach((value, key) => {
    if (!currentMap.has(key)) {
      min = 0;
    }
  });

  console.log("!!targetMap, currentMap", targetMap, currentMap);

  return min;
}
```