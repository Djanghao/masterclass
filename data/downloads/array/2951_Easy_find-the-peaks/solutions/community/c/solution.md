# ☠💀💯Faster✅💯Lesser🧠🎯C++✅Python3✅Java✅C✅Python✅💥🔥💫Explained☠💥🔥Beats💯(1 Linear).

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/4649558/](https://leetcode.com/problems/find-the-peaks/solutions/4649558/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-01-30 200118.png](./images/1.png)
![Screenshot 2024-01-30 195923.png](./images/2.png)
<!-- Describe your first thoughts on how to solve this problem. -->
```Python3 []
class Solution:
    def findPeaks(self, mountain: List[int]) -> List[int]:
        list = []
        n = len(mountain)
        for i in range(1, n - 1):
            if mountain[i] > mountain[i - 1] and mountain[i] > mountain[i + 1]:
                list.append(i)

        return list
```
```Java []
class Solution {
    public List<Integer> findPeaks(int[] mountain) {
        ArrayList<Integer> result = new ArrayList<>();
        for (int i = 1; i <= mountain.length - 2; i++) {
            if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
                result.add(i);
        }
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> findPeaks(vector<int>& mountain) {
        vector<int> result;
        int size = mountain.size();
        for (int i = 1; i <= size - 2; i++) {
            if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
                result.emplace_back(i);
        }
        return result;
    }
};
```
```Python []
class Solution(object):
    def findPeaks(self, mountain):
        """
        :type mountain: List[int]
        :rtype: List[int]
        """
        return [x for x in range(1, len(mountain) - 1) if mountain[x - 1] < mountain[x] > mountain[x + 1]]
```
```C []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findPeaks(int* mountain, int mountainSize, int* returnSize) {
    int* arr = malloc(sizeof(int) * mountainSize);
    int x = 0;
    for (int i = 1; i <= mountainSize - 2; i++) {
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
            arr[x++] = i;
    }
    *returnSize = x;
    return arr;
}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(n)
# Code
```
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findPeaks(int* mountain, int mountainSize, int* returnSize) {
    int* arr = malloc(sizeof(int) * mountainSize);
    int x = 0;
    for (int i = 1; i <= mountainSize - 2; i++) {
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
            arr[x++] = i;
    }
    *returnSize = x;
    return arr;
}
```
# Plase upvote if it's helpful - Your 1 like motivates me to do better
![th.jpeg](./images/3.jpeg)
