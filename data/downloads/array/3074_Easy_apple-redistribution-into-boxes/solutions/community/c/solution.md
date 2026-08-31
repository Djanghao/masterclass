# ☠💀💯 Faster✅💯 Lesser🧠 🎯 C++✅Python3✅Java✅C✅Python✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 1
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4854310/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4854310/)

---

# Intuition
![Screenshot 2024-03-10 183048.png](./images/0.png)
![Screenshot 2024-03-10 183149.png](./images/1.png)
![Screenshot 2024-03-10 183522.png](./images/2.png)
```C++ []
class Solution {
public:
    int minimumBoxes(vector<int>& apple, vector<int>& capacity) {
        int sum = 0;
        for (auto& nxt : apple) {
            sum += nxt;
        }
        sort(capacity.begin(), capacity.end());
        int cnt = 0;
        while (sum > 0) {
            sum -= capacity.back();
            capacity.pop_back();
            cnt++;
        }
        return cnt;
    }
};
```
```python3 []
class Solution:
    def minimumBoxes(self, apple: List[int], c: List[int]) -> int:
        x = sum(apple)
        v = 0
        c.sort(reverse = True)
        n = len(c)
        for i in range(n):
            v += c[i]
            if v >= x:
                return i + 1
        return -1
```
```Java []
class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        Arrays.sort(capacity);
        int tot = 0;
        for (int x : apple)
            tot += x;
        int ans = 0;
        for (int i = capacity.length - 1; i >= 0; --i) {
            tot -= capacity[i];
            ++ans;
            if (tot <= 0)
                return ans;
        }
        return -1;
    }
}
```
```C []
int cmpfunc (const void * a, const void * b) {
   return ( *(int*)a - *(int*)b );
}
int minimumBoxes(int* apple, int appleSize, int* capacity, int capacitySize) {
    qsort(capacity, capacitySize, sizeof(int), cmpfunc);
    int tot = 0, ans = 0;
    for (int x = 0; x < appleSize; x++)
        tot += apple[x];
    for (int i = capacitySize - 1; i >= 0; --i) {
        tot -= capacity[i];
        ++ans;
        if (tot <= 0)
            return ans;
    }
    return -1;
}
```
```python []
class Solution(object):
    def minimumBoxes(self, apple, capacity):
        """
        :type apple: List[int]
        :type capacity: List[int]
        :rtype: int
        """
        tot = sum(apple)
        out = 0
        capacity.sort()
        while tot > 0:
            tot -= capacity.pop()
            out += 1
        return out
```


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
# ***Approach is very simple just add all apples and sort the capacity container and start filling the apples in largest containers(because obviously we want to minimize the number of containers) check on each iteration if total apples can fit in the largest container if not also select the second largest and continue***.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
int cmpfunc (const void * a, const void * b) {
   return ( *(int*)a - *(int*)b );
}
int minimumBoxes(int* apple, int appleSize, int* capacity, int capacitySize) {
    qsort(capacity, capacitySize, sizeof(int), cmpfunc);
    int tot = 0, ans = 0;
    for (int x = 0; x < appleSize; x++)
        tot += apple[x];
    for (int i = capacitySize - 1; i >= 0; --i) {
        tot -= capacity[i];
        ++ans;
        if (tot <= 0)
            return ans;
    }
    return -1;
}
```
![th.jpeg](./images/3.jpeg)
