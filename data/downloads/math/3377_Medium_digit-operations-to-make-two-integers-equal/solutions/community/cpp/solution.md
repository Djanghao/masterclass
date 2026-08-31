# Hidden Dijkstra's Algorithm

**Author:** Rookie0934
**Votes:** 28
**Link:** [https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6123198/](https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6123198/)

---

# Intuition
The problem can be seen as:

- **Nodes:** Numbers represented by their digits.
- **Edges:** Transitions between numbers formed by incrementing or decrementing individual digits.
- **Edge Weights:** The value of the next number, provided it is not prime.
The goal is to find the minimum "cost" path from n to m using this graph, while avoiding prime numbers.

The Sieve of Eratosthenes is used to efficiently precompute which numbers up to 1e5 are prime.

# Complexity
- Time complexity: O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
vector<int> isPrime;

void generatePrimes() {
    if (!isPrime.empty()) return;
    isPrime.resize(1e5 + 1, 1);
    isPrime[0] = isPrime[1] = 0;
    for (int i = 2; i <= 1e5; i++) {
        if (isPrime[i]) {
            for (int j = 2 * i; j <= 1e5; j += i) {
                isPrime[j] = 0;
            }
        }
    }
}

class Solution {
public:
    int minOperations(int n, int m) {
        generatePrimes();
        if (isPrime[n] || isPrime[m]) return -1;

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> q;
        unordered_set<int> visited;

        q.push({n, n});
        while (!q.empty()) {
            auto [steps, curr] = q.top();
            q.pop();

            if (visited.count(curr)) continue;
            visited.insert(curr);

            if (curr == m) return steps;

            string s = to_string(curr);
            for (int i = 0; i < s.length(); i++) {
                char original = s[i];

                if (s[i] < '9') {
                    s[i]++;
                    int next = stoi(s);
                    if (!isPrime[next] && !visited.count(next)) {
                        q.push({steps + next, next});
                    }
                    s[i] = original;
                }

                if (s[i] > '0' && !(i == 0 && s[i] == '1')) {
                    s[i]--;
                    int next = stoi(s);
                    if (!isPrime[next] && !visited.count(next)) {
                        q.push({steps + next, next});
                    }
                    s[i] = original;
                }
            }
        }
        return -1;
    }
};

```