# Java | 39ms | beats 99% | randomly pick up numbers from all or only from allowed

**Author:** avasiukevich
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/4296646/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/4296646/)

---

# Intuition
First of all, let's forget about random calls minimization requirement, this problem can be interesting even without this requirement.

Assume that we need to pick up random integer $x$ such that $0 \\leq x < n$ and we have $k$ blocked integers. So, we have $n - k$ allowed integers.
We have 2 cases:
1. if $n - k < k$ then we can find all allowed integers and then just randomly pick up them
2. if $n - k >= k$ then number of allowed integers can be too large (e.g when $n = 1e9$). But when we'll randomly pick up integers from range $[0, n)$ then probability to pick up blocked number will be equal to $k/n \\leq 1/2$. So, we can randomly pick up numbers, and ***on average*** it will require only constant number of random calls ($\\mathrm{avg} \\leq 2$, see proof below)

# Approach
One can easiliy implement solution using algorithm description from the Intuition section.

But we need to prove that case 2 will have average pick time $O(1)$.
Let's assume that $q$ is blocked numbers fraction ($q = k/n 
\\leq 1/2$)
What will be probability of the event: we called random generator $i$ times in single `pick` in order to generate allowed number?
It will be $p(i) = q^{i-1} (1-q)$ (we randomly selected blocked numbers for the first $i-1$ attempts, and on $i$-th attempt we picked up allowed number). Let's calculate expected time for `pick` procedure:
$$
\\mathsf{E} [\\mathrm{pick \\; time }]
    = \\sum\\limits_{i = 1}^{\\infty} i \\; p(i)
    = \\sum\\limits_{i = 1}^{\\infty} i \\; q^{i-1} (1 - q)
    = \\frac{1}{(1-q)^2} (1 - q)
    = \\frac{1}{1-q}
    
$$
$$
\\;\\;\\;\\;\\;\\; \\left| \\; 
\\sum\\limits_{i = 1}^{\\infty} i \\; q^{i-1}
    = \\frac{\\partial}{\\partial q}\\left( 
            \\sum\\limits_{i = 0}^{\\infty} q^{i} \\right)
    = \\frac{\\partial}{\\partial q}\\left( \\frac{1}{1-q} \\right)
    = \\frac{1}{(1-q)^2}
\\right.
$$
So, on average we will use $\\frac{1}{1-q}$ random calls in case 2, and because $q \\leq 1/2$ in this case we'll use on average no more than $2$ random calls.

# Complexity
- Time complexity: init - $O(k)$, pick - $O(1)$

- Space complexity: $O(k)$

# Code
```
class Solution {
    private final Random random = new Random();

    private final boolean useBlocked;

    private final int n;
    private final Set<Integer> blocked;

    private final List<Integer> allowed;

    public Solution(int n, int[] blacklist) {
        this.n = n;
        int blSize = blacklist.length;
        useBlocked = (blSize * 2 <= n);
        blocked = new HashSet<>(blSize);
        allowed = new ArrayList<>();
        for (int val : blacklist) {
            blocked.add(val);
        }
        if (!useBlocked) {
            for (int val = 0; val < n; ++val) {
                if (!blocked.contains(val)) {
                    allowed.add(val);
                }
            }
        }
    }
    
    public int pick() {
        if (useBlocked) {
            int val = random.nextInt(0, n);
            while (blocked.contains(val)) {
                val = random.nextInt(0, n);
            }
            return val;
        } else {
            int idx = random.nextInt(0, allowed.size());
            return allowed.get(idx);
        }
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(n, blacklist);
 * int param_1 = obj.pick();
 */
 
```