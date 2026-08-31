# 💯Faster✅💯 Lesser✅3 Methods🔥Simulation Approach🔥Dequeue🔥Two Pointer and Hashtable🔥LinkedList🔥

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 44
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4251600/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4251600/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# Problem Description: 
We are given an integer array arr containing distinct integers and an integer k. We need to determine the winner in a game played between the first two elements of the array, arr[0] and arr[1]. In each round of the game, We compare arr[0] with arr[1], and the larger integer wins. The winning integer stays in position 0, while the other integer is moved to the end of the array. The game continues until one integer wins k consecutive rounds, and We need to find the winning integer.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Simulation Approach
2. Dequeue
3. Two Pointer and Hashtable

# 1. Simulation Approach: 
- Initialize $$currentWinner$$ to the first element of the array and $$count$$ to 0.
- Iterate through the array from the second element to the end.
- Compare the current element with $$currentWinner$$. If the current element is greater, update $$currentWinner$$ to the current element and reset $$count$$ to 1.
- If the current element is not greater, increment $$count$$.
- Check if $$count$$ equals $$k$$. If yes, return $$currentWinner$$.
- Continue the loop until a winner is found.
# Complexity
- \u23F1\uFE0F Time Complexity: $$O(n)$$, where n is the size of the input array. This is because we iterate through the entire array once.

- \uD83D\uDE80 Space Complexity: $$O(1)$$, as we use only a constant amount of extra space for variables.

# Code
```Python []
class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        currentWinner = arr[0]
        count = 0
        for i in range(1, len(arr)):
            if arr[i] > currentWinner:
                currentWinner = arr[i]
                count = 1
            else:
                count += 1
            if count == k:
                return currentWinner
        return currentWinner
```
```Java []
class Solution {
    public int getWinner(int[] arr, int k) {
        int currentWinner = arr[0];
        int count = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > currentWinner) {
                currentWinner = arr[i];
                count = 1;
            } else {
                count++;
            }
            if (count == k) {
                return currentWinner;
            }
        }
        return currentWinner;
    }
}
```
```C++ []
class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        int currentWinner = arr[0];
        int count = 0;
        for (int i = 1; i < arr.size(); i++) {
            if (arr[i] > currentWinner) {
                currentWinner = arr[i];
                count = 1;
            } else {
                count++;
            }
            if (count == k) {
                return currentWinner;
            }
        }
        return currentWinner;
    }
};
```
```C []
int getWinner(int* arr, int arrSize, int k) {
    int currentWinner = arr[0];
    int count = 0;
    for (int i = 1; i < arrSize; i++) {
        if (arr[i] > currentWinner) {
            currentWinner = arr[i];
            count = 1;
        } else {
            count++;
        }
        if (count == k) {
            return currentWinner;
        }
    }
    return currentWinner;
}
```
# 2. Dequeue (Queue):
- Initialize a queue $$q$$ with all elements of the array and $$one$$ to the first element.
- Initialize $$x$$ to $$k$$, calculate the maximum value $$maxi$$ in the array.
- If $$k$$ is greater than or equal to the array size, return $$maxi$$.
- Enter a loop that continues while $$k$$ is greater than 0.
- In each iteration, dequeue the next element $$two$$ from the queue.
- Compare $$one$$ and $$two$$. If $$one$$ is greater, decrement $$k$$ and enqueue $$two$$. If $$two$$ is greater, reset $$k$$ to its original value $$x$$, decrement $$k$$, and enqueue $$one$$. Update $$one$$ to be $$two$$.
- Continue the loop until $$k$$ consecutive wins are reached.
- Return $$one$$ as the winner.
# Complexity
- \u23F1\uFE0F Time Complexity: $$O(n)$$, because we enqueue and dequeue each element once, and in the worst case, we iterate through the array twice.

- \uD83D\uDE80 Space Complexity: $$O(n)$$, as we use a queue to store all the elements of the array.

# Code
```Python []
from collections import deque

class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        q = deque(arr)
        one = q.popleft()
        x = k
        maxi = max(arr)
        if k >= len(arr):
            return maxi
        while k:
            two = q.popleft()
            if one > two:
                k -= 1
                q.append(two)
            else:
                k = x
                k -= 1
                q.append(one)
                one = two
        return one
```
```Java []
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int getWinner(int[] arr, int k) {
        Queue<Integer> q = new LinkedList<>();
        for (int i : arr) {
            q.offer(i);
        }
        int one = q.poll();
        int x = k;
        int maxi = Arrays.stream(arr).max().getAsInt();
        if (k >= arr.length) {
            return maxi;
        }
        while (k > 0) {
            int two = q.poll();
            if (one > two) {
                k--;
                q.offer(two);
            } else {
                k = x;
                k--;
                q.offer(one);
                one = two;
            }
        }
        return one;
    }
}
```
```C++ []
class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        queue<int> q;
        for (auto i : arr) {
            q.push(i);
        }
        int one = q.front();
        q.pop();
        int x = k;
        int maxi = *max_element(arr.begin(), arr.end());
        if (k >= arr.size()) {
            return maxi;
        }
        while (k) {
            int two = q.front();
            q.pop();
            if (one > two) {
                k--;
                q.push(two);
            } else {
                k = x;
                k--;
                q.push(one);
                one = two;
            }
        }
        return one;
    }
};
```
```C []
int getWinner(int* arr, int arrSize, int k) {
    int* queue = (int*)malloc(arrSize * sizeof(int));
    int one = arr[0];
    int x = k;
    int maxi = arr[0];
    for (int i = 1; i < arrSize; i++) {
        queue[i - 1] = arr[i];
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    if (k >= arrSize) {
        free(queue);
        return maxi;
    }
    int* newQueue = (int*)malloc(arrSize * sizeof(int));
    while (k) {
        int two = queue[0];
        for (int i = 0; i < arrSize - 1; i++) {
            queue[i] = queue[i + 1];
        }
        if (one > two) {
            k--;
            queue[arrSize - 1] = two;
        } else {
            k = x;
            k--;
            queue[arrSize - 1] = one;
            one = two;
        }
    }
    free(queue);
    return one;
}
```
# 3. Two Pointer and Hashtable:
- Initialize a dictionary $$d$$ to keep track of wins for each integer and two pointers, $$i$$ and $$j$$, to traverse the array.
- Enter a loop that continues as long as both $$i$$ and $$j$$ are within the array's bounds.
- Compare $$arr[i]$$ and $$arr[j]$$.
- Update the wins in the dictionary $$d$$ accordingly, and advance the pointers.
- If $$arr[i]$$ is greater, increment $$i$$. If $$arr[j]$$ is greater, update $$i$$ to be $$j$$ and reset the wins for $$arr[i]$$.
- Continue the loop until $$k$$ consecutive wins are reached.
- Return the winner, which is $$arr[i]$$.
# Complexity
- \u23F1\uFE0F Time Complexity: $$O(n)$$, because we iterate through the entire array once with the two pointers.

- \uD83D\uDE80 Space Complexity: $$O(n)$$, as we use a dictionary d to store the wins for each integer, which could have n distinct elements.

# Code
```Python []
class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        n = len(arr)
        d = {i: 0 for i in arr}
        i, j = 0, 1
        while i < n and j < n:
            if arr[i] > arr[j]:
                d[arr[i]] += 1
            elif arr[i] < arr[j]:
                d[arr[j]] += 1
                i = j
            if d[arr[i]] == k:
                return arr[i]
            j += 1
        return max(arr)
```
```Java []
class Solution {
    public int getWinner(int[] arr, int k) {
        int n = arr.length;
        HashMap<Integer, Integer> wins = new HashMap<>();
        int i = 0, j = 1;
        while (i < n && j < n) {
            if (arr[i] > arr[j]) {
                wins.put(arr[i], wins.getOrDefault(arr[i], 0) + 1);
            } else if (arr[i] < arr[j]) {
                wins.put(arr[j], wins.getOrDefault(arr[j], 0) + 1);
                i = j;
            }
            if (wins.get(arr[i]) == k) {
                return arr[i];
            }
            j++;
        }
        int maxVal = Arrays.stream(arr).max().getAsInt();
        return maxVal;
    }
}
```
```C++ []
class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        int n = arr.size();
        unordered_map<int, int> wins;
        int i = 0, j = 1;
        while (i < n && j < n) {
            if (arr[i] > arr[j]) {
                wins[arr[i]]++;
            } else if (arr[i] < arr[j]) {
                wins[arr[j]]++;
                i = j;
            }
            if (wins[arr[i]] == k) {
                return arr[i];
            }
            j++;
        }
        int maxVal = *max_element(arr.begin(), arr.end());
        return maxVal;
    }
};
```
```C []
int getWinner(int* arr, int arrSize, int k) {
    int* wins = (int*)malloc(arrSize * sizeof(int));
    for (int i = 0; i < arrSize; i++) {
        wins[i] = 0;
    }
    int i = 0;
    int j = 1;
    while (i < arrSize && j < arrSize) {
        if (arr[i] > arr[j]) {
            wins[i]++;
        } else if (arr[i] < arr[j]) {
            wins[j]++;
            i = j;
        }

        if (wins[i] == k) {
            free(wins);
            return arr[i];
        }
        j++;
    }
    int maxVal = arr[0];
    for (int i = 1; i < arrSize; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    free(wins);
    return maxVal;
}
```
# \uD83C\uDFC6Conclusion: 
The optimal approach among the three presented methods would be the "Dequeue (Queue)" approach (Approach 2). This approach efficiently utilizes a queue to simulate the game, making it possible to achieve the result with fewer iterations, which can be particularly useful for large input arrays.

# \uD83D\uDCA1 I invite We to check out my profile for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA