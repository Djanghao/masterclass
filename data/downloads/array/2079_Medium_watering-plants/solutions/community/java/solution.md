# Simulation

**Author:** votrubac
**Votes:** 57
**Link:** [https://leetcode.com/problems/watering-plants/solutions/1589049/](https://leetcode.com/problems/watering-plants/solutions/1589049/)

---

**Java**
```java
public int wateringPlants(int[] p, int capacity) {
    int res = 0, can = capacity;
    for (int i = 0; i < p.length; ++i) {
        if (can < p[i]) {
            res += i * 2;
            can = capacity;
        }
        can -= p[i];
    }
    return res + p.length;        
}
```
**C++**
```cpp
int wateringPlants(vector<int>& p, int capacity) {
    int res = 0, can = capacity;
    for (int i = 0; i < p.size(); ++i) {
        if (can < p[i]) {
            res += i * 2;
            can = capacity;
        }
        can -= p[i];
    }
    return res + p.size();
}
```