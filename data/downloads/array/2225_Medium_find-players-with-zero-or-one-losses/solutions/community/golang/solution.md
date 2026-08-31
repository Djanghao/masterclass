# ✅ Counting Sort || Easy to Understand || Beats 99% || Javascript || Java || Python || Go

**Author:** jamais
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4568365/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4568365/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use counting sort.
Use two arrays for counting wins and loses, it's simple and easy to understand.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Init two arrays for counting wins and loses. `[0] * 100001`
2. Init two arrays for answer. `[[], []]`
3. Iterate matches array to count the wins and loses. `range(len(matches))`
4. Iterate the two counting arrays for searching the results that matching the conditions. `range(100001)`
5. The number that win > 0 and lose == 0 will be pushed in the answer[0] list, and the number that only lose == 1 will be pushed in the answer[1] list, and return the answer array. `win > 0 and lose == 0` for first array. `lose == 0` for second array.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m), m == 100001
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Runtime
![image.png](./images/0.png)

![image.png](./images/1.png)

![image.png](./images/2.png)


# Javascript
```javascript
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const n = matches.length;
    const m = 100001;
    const array1 = new Array(m).fill(0);
    const array2 = new Array(m).fill(0);
    const answer = [[], []];

    for (let i = 0; i < n; i++) {
        const [w, l] = matches[i];
        array1[w]++;
        array2[l]++;
    }

    for (let i = 0; i < m; i++) {
        const w = array1[i];
        const l = array2[i];
        if (w > 0 && l === 0) {
            answer[0].push(i);
        }
        if (l === 1) {
            answer[1].push(i);
        }
    }
    
    return answer;
};
```

# Java
```java
class Solution {
    public List<List<Integer>> findWinners(int[][] matches) {
        int n = matches.length;
        int m = 100001;
        int[] array1 = new int[m];
        int[] array2 = new int[m];
        List<List<Integer>> answer = new ArrayList<>();
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        answer.add(list1);
        answer.add(list2);

        for (int i = 0; i < n; i++) {
            int[] match = matches[i];
            array1[match[0]]++;
            array2[match[1]]++;
        }

        for (int i = 0; i < m; i++) {
            int w = array1[i];
            int l = array2[i];
            if (w > 0 && l == 0) {
                list1.add(i);
            }
            if (l == 1) {
                list2.add(i);
            }
        }
        
        return answer;
    }
}
```

# Python3
```python
class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        n: int = len(matches)
        m: int = 100001
        array1: List[int] = [0] * m
        array2: List[int] = [0] * m
        list1: List[int] = []
        list2: List[int] = []
        answer: List[List[int]] = [list1, list2]

        for i in range(n):
            w, l = matches[i]
            array1[w] += 1
            array2[l] += 1

        for i in range(m):
            w: int = array1[i]
            l: int = array2[i]
            if w > 0 and l == 0:
                list1.append(i)
            if l == 1:
                list2.append(i)

        return answer
        
```

# Golang
```golang
func findWinners(matches [][]int) [][]int {
    n := len(matches)
    m := 100001
    array1 := make([]int, m)
    array2 := make([]int, m)
    answer := make([][]int, 2)
    list1 := []int{}
    list2 := []int{}

    for i := 0; i < n; i++ {
        match := matches[i]
        array1[match[0]]++
        array2[match[1]]++
    }

    for i := 0; i < m; i++ {
        w := array1[i]
        l := array2[i]
        if w > 0 && l == 0 {
            list1 = append(list1, i)
        }
        if l == 1 {
            list2 = append(list2, i)
        }
    }

    answer[0] = list1
    answer[1] = list2

    return answer
}
```
